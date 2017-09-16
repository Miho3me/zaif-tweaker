let processing_zt = "off"
let set_color = "";
$(function(){
  chrome.storage.local.get(["user_color"],function(value){
    if(value.user_color == "on"){

      $("#cc_area").on("DOMNodeInserted",function(){
        if(processing_zt == "off"){
          chrome.runtime.sendMessage({method:"getallItem"},function(response){
            for(key in response.data){
              processing_zt = "on"
              $(`[id^=${key}]`).css("color",response.data[key]);
              $(`[id^=${key}]`).addClass("color_set");
              processing_zt = "off"
            }
          })
          if(!($("#cc_area .media-heading").last().find(".color_set_btn").length)){
            processing_zt = "on";
            $("#cc_area .media-heading").last().append("<button class='color_set_btn'>color</button>");
            processing_zt = "off";
          }
        }
      }),
      $(document).on("click",".color_set_btn",function(){
        let user_name = $(this).parent().find("span").text();
        let user_id = $(this).parent().find("span").attr("title");
        alert(`${user_name}につけたい色を下の一覧から選んで対応する「「半角数字」」を打ち込んでください`);
        let user_color = prompt("黒:1 白:2 青:3\n緑:4 黄:5 赤:6");
        if(/^[0-9]+$/.test(user_color)){
          switch(user_color){
            case "1":
              set_color = "black"
              break;
            case "2":
              set_color = "white"
              break;
            case "3":
              set_color = "blue"
              break;
            case "4":
              set_color = "green"
              break;
            case "5":
              set_color = "yellow"
              break;
            case "6":
              set_color = "red"
              break;
          }
          let alert_confirm = confirm(`ユーザー：${user_name}に、色：${set_color}をつけますか？`)
           if(alert_confirm == true){
             chrome.runtime.sendMessage({method: "setItem",key:user_id ,value:set_color});
             alert("登録完了")
             $(`[id^=${user_id}]`).css("color",set_color);
           }else{
             alert("キャンセルしました")
           }
        }else if(alert_confirm != ""){
          alert("数字が全角、または余計な文字が入力されている可能性があります")
        }
      })

    }
  })
})
