$(function(){
  //ここからチェックボックスの状態チェック
  chrome.storage.local.get(["chat_hide"],function(value){
    if(value.chat_hide == "on"){
      $("#chat_hide").prop("checked",true);
    }
  }),
  chrome.storage.local.get(["jika_hide"],function(value){
    if(value.jika_hide == "on"){
      $("#jika_hide").prop("checked",true);
    }
  }),
  chrome.storage.local.get(["user_color"],function(value){
    if(value.user_color == "on"){
      $("#user_color").prop("checked",true);
    }
  }),
  //ここまで
  $(".checkbox").click(function(){
    let click_checkbox_id = $(this).attr("id");
    switch(click_checkbox_id){
      //ここからチャット
      case "chat_hide":
        if($("#chat_hide").is(":checked")){
          chrome.storage.local.set({"chat_hide": "on"},function(){
            console.log(click_checkbox_id+"をhide()")
          })
        }else{
          //チェックが入ってない場合
          chrome.storage.local.set({"chat_hide": "off"},function(){
            console.log(click_checkbox_id+"をshow()")
          })
        }
        break;
      //ここまで
      case "jika_hide":
        if($("#jika_hide").is(":checked")){
          chrome.storage.local.set({"jika_hide": "on"},function(){
            console.log("時価総額を非表示")
          })
        }else{
          chrome.storage.local.set({"jika_hide": "off"},function(){
            console.log("時価総額を表示")
          })
        }
        break;
      case "user_color":
        if($("#user_color").is(":checked")){
          chrome.storage.local.set({"user_color":"on"},function(){
            console.log("ユーザーカラーを有効化")
          })
        }else{
          chrome.storage.local.set({"user_color":"off"},function(){
            console.log("ユーザーカラーを無効化")
          })
        }
    }
  }),
  $(".switch-case-btn").click(function(){
    $("#multi-btn").hide();
    let click_btn_id = $(this).attr("id");
    switch(click_btn_id){
      //チャットを押したら
      case "chat":
        $("#chat-edit").show();
        break;
      //その他を押したら
      case "etc":
        $("#etc-edit").show();
        break;
      case "update":
        $("#update-history").show();
        break;
    }
  })
})
