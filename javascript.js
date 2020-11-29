var ans; //紀錄答案
var counter = 0; //紀錄作答題數
var score = 0; //分數

$('.option').click(answerQuestion);
$('#next').click(showQuestion);

//顯示題目
function showQuestion(){
  var random = Math.floor(Math.random()*questions.length);
  var q = questions.splice(random,1)[0];

  counter++;
  $("#counter").text("Question: " + counter);
  $("#content").text(q.content);
  $("#a").text(q.a);
  $("#b").text(q.b);
  $("#c").text(q.c);
  $("#d").text(q.d);
  ans = q.ans;
  $(".option").removeClass("red");
  $(".option").removeClass("green");
  $("#next").hide();
}
//檢查答案
function answerQuestion(){
  var playerans = $(this).attr("id");
  if(playerans == ans){
    score+=10;
    $(this).addclass("green");
  }else{
    $(this).addclass("red");
  }
  if(counter>=10){
    Gameover();
  }else{
    $('#next').show();
  }
}

//遊戲結束
function Gameover(){

}

  