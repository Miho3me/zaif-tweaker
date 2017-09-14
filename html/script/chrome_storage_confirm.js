$(function(){
  chrome.storage.local.get(["chat_hide"],function(value){
    if(value.chat_hide == "on"){
      $("#page__trade__chat_tab_link").remove();
      $("#cc").hide();
    }
  }),
  chrome.storage.local.get(["jika_hide"],function(value){
    if(value.jika_hide == "off"){
      $(".span_normal_total_price").show();
    }
  }),
  chrome.storage.local.get(["user_color_set"],function(value){
    if(value.user_color_set == "on"){
      let user_color = "on";
    }else if (value.user_color_set == "of") {
      let user_color = "off";
    }
  })
})
