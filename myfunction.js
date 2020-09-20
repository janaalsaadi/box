$(document).ready(function(){
    $("#toleft").click(function(){
        if($.trim($("#right").html()) ==''){
      alert("Box is empty ^.^");
    }
      if($("#right").has(".box").length > 0) {
              $("#left").append($( "#right > .box" ).get(0));
        }
    })



    $("#toright").click(function(){
      if($.trim($("#left").html()) ==''){
      alert("Box is empty ^.^");
    }
     if($("#left").has(".box").length > 0){
              $("#right").append($( "#left > .box" ).get(0));
    }
    })
    
    
    
    
    
    
    
    })