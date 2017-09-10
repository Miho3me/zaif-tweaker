$(function(){
  chrome.storage.local.get(["chat_hide"],function(value){
    if(value.chat_hide == "on"){
      $("#page__trade__chat_tab_link").remove();
      $("#cc").hide();
    }else{

    }
  }),
  chrome.storage.local.get(["jika_hide"],function(value){
    if(value.jika_hide == "on"){
      console.log("TETETETST1")
    }else{
      $(".span_normal_total_price").show();
      console.log("TETETETETETE2")
    }
  })
})
