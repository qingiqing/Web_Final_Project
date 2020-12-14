var ans; //紀錄答案
var counter = 0; //紀錄作答題數
var score = 0; //分數

$(document).ready(function(){
  $('.option').click(answerQuestion);
});
$(document).ready(function(){
  $('.nextone').click(answerQuestion);
});

//顯示題目
function showQuestion(){
  var random = Math.floor(Math.random()*questions.length);
  var q = questions.splice(random,1)[0];

  counter++;
  $(document).ready(function(){
    $("#counter").text("Question: " + counter);
    $("#content").text(q.content);
    $("#a").text(q.a);
    $("#b").text(q.b);
    $("#c").text(q.c);
    $("#d").text(q.d);
    ans = q.ans;
    $(".option").removeClass("gray");
    $(".option").removeClass("green");
    $(".nextone").hide();
  });
}
//檢查答案
function answerQuestion(){
  var playerans = $(this).attr("id");
  if(playerans == ans){
    score+=10;
    $(document).ready(function(){
      $(this).addclass("green");
    });
    
  }else{
    $(document).ready(function(){
      $(this).addclass("gray");
    });
  }
  if(counter>=10){
    Gameover();
  }else{
    $(document).ready(function(){
      $('.nextone').show();
    });
  }
}

//遊戲結束
function Gameover(){
  
}

$(document).ready(function(){
    $("#button1").click(function(){
      $("#p1").fadeToggle("slow");
    });
    $("#button2").click(function(){
      $("#p2").fadeToggle("slow");
    });
    $("#button3").click(function(){
      $("#p3").fadeToggle("slow");
    });
    $("#example").click(function(){
      $("#gif").fadeToggle("slow");
    });
    $("#button4").click(function(){
      $("#p4").fadeToggle("slow");
    });
    $("#button5").click(function(){
      $("#p5").fadeToggle("slow");
    });
  });
