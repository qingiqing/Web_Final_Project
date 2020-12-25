var ans; //紀錄答案
var counter = 0 //紀錄作答題數
var score = 0; //分數
var a; //紀錄作答答案
var ad;
var seconds = 5; // seconds for HTML
var foo; // variable for clearInterval() function

$(document).ready(function(){
  $("#content").hide();
  $("#seconds").hide();
  $(".nextone").hide();
  $(".nextone1").hide();
  $(".end").hide();
  // $(".return").show();
  $("#a").hide();
  $("#b").hide();
  $("#c").hide();
  $("#d").hide();
  $(".question").show(function(){
    $(".question").click(function(){
      showQuestion();
      $(".question").hide();
      $(".FJCUquestion").hide();
      $(".return").hide();
    });
  });
  $(".FJCUquestion").show(function(){
    $(".FJCUquestion").click(function(){
      showFJCUQuestion();
      $(".question").hide();
      $(".FJCUquestion").hide();
       $(".return").hide();
    });
  });
});
$(document).ready(function(){
  $(".end").hide();
  // $(".return").hide();
});
$(document).ready(function(){
  $('.option').click(function(){
    a = $(this).attr("id");
    answerQuestion();
  });
});
$(document).ready(function(){
  $('.nextone').click(function(){
    showQuestion();
    seconds = 5;
  });
});
$(document).ready(function(){
  $('.nextone1').click(function(){
    showFJCUQuestion();
    seconds = 5;
  });
});
$(document).ready(function(){
  $("#a").attr('disabled', true);
  $("#b").attr('disabled', true);
  $("#c").attr('disabled', true);
  $("#d").attr('disabled', true);
});
  //設定倒數秒數

function updateSecs() {
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;
    // seconds--;
    if (seconds == 0) {
      document.getElementById("seconds").innerHTML = "Time's Up";
        clearInterval(foo);
        answerQuestion();
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}



//顯示題目
function showQuestion(){

  ad = 1;
  var random = Math.floor(Math.random()*questions.length);
  var q = questions.splice(random,1)[0];
  counter+=1;
  seconds = 5;
  document.getElementById("seconds").innerHTML = seconds;
    countdownTimer();
  $(document).ready(function(){
    $("#counter").show();
    $("#content").show();
    $("#seconds").show();
    $("#a").show();
    $("#b").show();
    $("#c").show();
    $("#d").show();
    $("#counter").text("Question: " + counter);
    $("#content").text(q.content);
    $("#a").text(q.a);
    $("#b").text(q.b);
    $("#c").text(q.c);
    $("#d").text(q.d);
    ans = q.answer;
    $(".option").removeClass(" btn-danger");
    $(".option").removeClass(" btn-success");
    $("#a").attr('disabled', false);
    $("#b").attr('disabled', false);
    $("#c").attr('disabled', false);
    $("#d").attr('disabled', false);
    $(".nextone").hide();
    $(".nextone1").hide();
    
  });
}
function showFJCUQuestion(){
  ad = 2;
  var random = Math.floor(Math.random()* fjcuquestions.length);
  var q = fjcuquestions.splice(random,1)[0];
  counter+=1;
  seconds = 5;
  document.getElementById("seconds").innerHTML = seconds;
    countdownTimer();
  $(document).ready(function(){
    $("#counter").show();
    $("#content").show();
    $("#seconds").show();
    $("#a").show();
    $("#b").show();
    $("#c").show();
    $("#d").show();
    $("#counter").text("Question: " + counter);
    $("#content").text(q.content);
    $("#a").text(q.a);
    $("#b").text(q.b);
    $("#c").text(q.c);
    $("#d").text(q.d);
    ans = q.answer;
    $(".option").removeClass(" btn-danger");
    $(".option").removeClass(" btn-success");
    $("#a").attr('disabled', false);
    $("#b").attr('disabled', false);
    $("#c").attr('disabled', false);
    $("#d").attr('disabled', false);
    $(".nextone").hide();
    $(".nextone1").hide();
    // seconds = 5;
    // countdownTimer();
  });
}
//檢查答案
function answerQuestion(){
  var playerans = a;
    if(ans == 'a'){
      $(document).ready(function(){
        $("#a").addClass(" btn-success");
     });
    }else if(ans == 'b'){
      $(document).ready(function(){
        $("#b").addClass(" btn-success");
      });
    }else if(ans == 'c'){
      $(document).ready(function(){
        $("#c").addClass(" btn-success");
      });
    }else if(ans == 'd'){
      $(document).ready(function(){
        $("#d").addClass(" btn-success");
      });
    }
  //countdownTimer();
clearInterval(foo);
  if(playerans == ans){
    score+=10;
    if(playerans == 'a'){
      $(document).ready(function(){
        $("#a").addClass(" btn-success");
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
     });
    }else if(playerans == 'b'){
      $(document).ready(function(){
        $("#b").addClass(" btn-success");
        $("#a").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'c'){
      $(document).ready(function(){
        $("#c").addClass(" btn-success");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'd'){
      $(document).ready(function(){
        $("#d").addClass(" btn-success");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
      });
    }
  }else{
    if(playerans == 'a'){
      $(document).ready(function(){
        $("#a").addClass(" btn-danger");
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
     });
    }else if(playerans == 'b'){
      $(document).ready(function(){
        $("#b").addClass(" btn-danger");
        $("#a").attr('disabled', true);
        $("#c").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'c'){
      $(document).ready(function(){
        $("#c").addClass(" btn-danger");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#d").attr('disabled', true);
      });
    }else if(playerans == 'd'){
      $(document).ready(function(){
        $("#d").addClass(" btn-danger");
        $("#a").attr('disabled', true);
        $("#b").attr('disabled', true);
        $("#c").attr('disabled', true);
      });
    }
  }
  if(counter>=10){
      Gameover(score);
  }else{
    $(document).ready(function(){
      if(ad == 1)
      {
         $('.nextone').show();
         $('.nextone').text("NEXT");
         a = 0;
      }
     else
     {
          $('.nextone1').show();
          $('.nextone1').text("NEXT");
          a = 0;
     }
      
    });
  }
}
function Gameover(){
   $(document).ready(function(){
      $('.end').show(function(){
        $('.end').click(function(){
          $("#a").hide();
          $("#b").hide();
          $("#c").hide();
          $("#d").hide();
          $("#counter").text("Your score ");
          $("#counter").addClass("score" );
          $("#content").text(score);
          $("#content").addClass("score");
          $('.end').hide();
          $('.return').show();
          $('#seconds').hide();
         });
      });
  });
}

var questions = [
    { content: " 是誰住在深海的大鳳梨裡？", a: "海綿寶寶", b: "海綿體寶寶", c: "海藻寶寶", d: "海龜寶寶", answer: "a" },
    { content: " 中國的天干以及地支一直都還對我們的生活有著影響，請問天干地支加起來一共有多少個？", a: "22", b: "24", c: "87", d: "6666666", answer: "a" },
    { content: " 請問史記的作者是誰？", a: "司馬中原", b: "司馬光", c: "司馬遷", d: "司馬相如", answer: "c" },
    { content: " 請問英文字母第 18 個是？", a: "A", b: "R", c: "Q", d: "S", answer: "b" },
    { content: " 台灣最高峰是？", a: "陽明山", b: "玉山", c: "阿里山", d: "雪山", answer: "b" },
    { content: " 高氣壓在北半球的流動方向？", a: "向南", b: "不一定", c: "順時針", d: "逆時針", answer: "c" },
    { content: " 所謂的「鹿茸」是指？", a: "鹿尾巴上的毛", b: "鹿耳朵裡的毛", c: "鹿角", d: "鹿的眼睫毛", answer: "c" },
    { content: " 請問元素週期表第14個是甚麼？", a: "氧", b: "矽", c: "鎂", d: "硫", answer: "b" },
    { content: " 在賽跑比賽時，超越第二名會變成？", a: "第一名", b: "第二名", c: "第三名", d: "最後一名", answer: "b" },
    { content: " 在練習CPR時所使用的人型模型叫甚麼名字？", a: "潔西卡", b: "安娜", c: "安妮", d: "茱麗葉", answer: "c" },
    { content: " 下列何者是台灣歌手？", a: "Aimer", b: "Uru", c: "Jolin", d: "Joeman", answer: "c" },
    { content: " 台灣所謂的「三節獎金」的「三節」，包含哪一個節日？", a: "端午節", b: "清明節", c: "元旦", d: "中元節", answer: "a" },
    { content: " 周星馳在「唐伯虎點秋香」中，假扮下人時他的代號為多少？", a: "5487", b: "9453", c: "9527", d: "8787", answer: "c" },
    { content: " 清末時中國受到八國聯軍的攻打，請問這八國其中包含下列一國？", a: "西班牙", b: "俄羅斯", c: "韓國", d: "荷蘭", answer: "b" },
    { content: " 下列何著不是夏季大三角中的一顆？", a: "牛郎星", b: "織女星", c: "天津四", d: "參宿四", answer: "d" },
    { content: " 世界上最狹長的國家是？", a: "阿根廷", b: "義大利", c: "智利", d: "埃及", answer: "c" },
    { content: " 由太陽發出的光要經過多久才來到地球？", a: "0.0001秒", b: "8分20秒", c: "60分鐘", d: "8分07秒", answer: "c" },
    { content: " 形容一個人有「貓舌頭」，是指他？", a: "特別怕酸", b: "特別怕燙", c: "特別怕苦", d: "特別怕鹹", answer: "b" },
    { content: " 下列何者不是G20的會員國？", a: "阿根廷", b: "紐西蘭", c: "日本", d: "沙烏地阿拉伯", answer: "b" },
    { content: " 米老鼠養的狗叫做甚麼名字？", a: "忠犬小巴", b: "膽小狗英雄", c: "米老狗", d: "布魯托", answer: "d" },
    { content: " 下列何者不是中國古代四大發明？", a: "指南針", b: "火藥", c: "占星", d: "印刷", answer: "c" },
    { content: " 下列哪一個國家是亞洲五小虎？", a: "印度", b: "印尼", c: "蔡小虎", d: "新加坡", answer: "b" },
    { content: " 台灣的知名廣告公仔:大同寶寶，請問價值最高的「第一批公仔」胸前的號碼是幾號？", a: "1", b: "51", c: "67", d: "87", answer: "b" },
    { content: " 正式的比賽級羽球，通常每顆有幾支羽毛？", a: "16", b: "87", c: "12", d: "20", answer: "a" },
    { content: " 請問10:27時，時鐘時針和分針夾角為幾度？", a: "150", b: "875", c: "151.5", d: "151.87", answer: "c" },
    { content: " 請問Kahoot的選項沒有出現以下哪種圖形？", a: "三角形", b: "圓形", c: "星型", d: "正方形", answer: "c" },
    { content: " 「鱟」在生物學上的分類？", a: "腔腸動物門", b: "軟體動物門 ", c: "棘皮動物門", d: "節肢動物門", answer: "d" },
    { content: " 請問屏東墾丁位於？", a: "枋山", b: "楓港", c: "滿洲", d: "恆春", answer: "d" },
    { content: " 請問台灣有幾座國家公園？", a: "6", b: "7", c: "8", d: "9", answer: "c" },
    { content: " 清朝時的地名「蛤仔難」位於今日台灣何縣市？", a: "台南", b: "桃園", c: "宜蘭", d: "台東", answer: "c" },
    { content: " 人的五感中那個感覺反應最快？", a: "味覺", b: "嗅覺", c: "聽覺", d: "視覺", answer: "a" },
    { content: " 臭氧層的臭氧減少的主因是下列何種化合物？", a: "二氧化氮", b: "氯氧化合勿", c: "氟氯碳化物", d: "二氧化碳", answer: "c" },
    { content: " 請問颱風登陸或出現最大風速的時候總是在哪個時間？", a: "不一定", b: "晚上", c: "凌晨", d: "下午", answer: "a" },
    { content: " 下列何者不是分布在台灣東部的原住民？", a: "賽夏族", b: "阿美族", c: "太魯閣族", d: "卑南族", answer: "a" },
    { content: " 下列何者不是位於台灣西邊的離島？", a: "小琉球", b: "澎湖", c: "金門", d: "綠島", answer: "d" },
    { content: " 下列哪間主題樂園位於台灣東部？", a: "野柳海洋世界", b: "九族文化村", c: "遠雄海洋公園", d: "義大世界", answer: "c" },
 ]  
var fjcuquestions =[
    { content: " (輔大)如果以爬樓梯的方式從濟時樓二樓到濟時樓三樓，共需爬幾階樓梯？", a: "18", b: "20", c: "23", d: "32", answer: "b" },
    { content: " (輔大)請問聖言樓PC房(645教室)，共有幾台電腦？(包含講師的電腦)", a: "60", b: "62", c: "65", d: "66", answer: "c" },
    { content: " (輔大)請問SF645PC房的電腦的處理器的型號？", a: "i5-8700", b: "i7-8700", c: "i5-8750", d: "i5-8500", answer: "d" },
    { content: " (輔大)請問SF645PC房的電腦螢幕是哪一個牌子？", a: "hp", b: "acer", c: "sony", d: "asus rog", answer: "a" },
    { content: " (輔大)請問下列心園鬆餅組合的價格最高？", a: "德州烤雞腿鬆餅+綠茶", b: "功夫雞腿鬆餅+無糖綠茶", c: "鮮奶油黑可可鬆餅+奶茶", d: "蜂蜜鮮奶油鬆餅+奶綠", answer: "c" },
    { content: " (輔大)請問下列哪個顏色不是組成輔大建築物的顏色?", a: "藍白色", b: "灰色", c: "白色", d: "藍綠色", answer: "d" },
    { content: " (輔大)請問下大雨時輔大會出現甚麼？", a: "中美湖", b: "聖言湖", c: "德芳湖", d: "尼斯湖", answer: "a" },
    { content: " (輔大)輔大大門口的賣場？", a: "好市多", b: "IKEA", c: "家樂福", d: "全聯", answer: "d" },
    { content: " (輔大)輔大校旗中的「字」以及「背景」共由三種顏色組成，其中並不包含？", a: "白色", b: "紅色", c: "黃色", d: "黑色", answer: "d" },
    { content: " (輔大)輔大目前共計有幾個學院？", a: "10", b: "12", c: "15", d: "16", answer: "b" },
    { content: " (輔大)輔大的「校級圖書館」，共有幾個？", a: "2", b: "3", c: "4", d: "5", answer: "b" },
    { content: " (輔大)現任校長的名字？", a: "江漢聲", b: "黎建球", c: "李寧遠", d: "楊敦和", answer: "a" },
    { content: " (輔大)目前共有幾個學生宿舍？", a: "5", b: "6", c: "7", d: "8", answer: "c" },
    { content: " (輔大)目前共有幾個學生餐廳？", a: "3", b: "4", c: "5", d: "6", answer: "c" },
    { content: " (輔大)請問輔大的校慶在？", a: "12/6", b: "12/7", c: "12/8", d: "12月第一個星期六", answer: "c" },
    { content: " (輔大)請問「法園」的教室代號？", a: "SV", b: "SB", c: "SM", d: "SS", answer: "d" },
    { content: " (輔大)請問傳說中在進學校後第幾個聖誕節前沒有脫魯就會魯四年的傳說？", a: "第一個聖誕節", b: "第二個聖誕節", c: "第三個聖誕節", d: "你連聖誕節都沒人陪你過", answer: "b" },
    { content: " (輔大)位於側門明日之星餐廳的椒麻雞店，如果跟老闆說「我要一份隱藏」，老闆會？", a: "多給你一樣當季蔬菜", b: "多給你一樣當季蔬菜", c: "給你一半椒麻雞一半油雞", d: "覺得你是肖ㄟ", answer: "c" },
    { content: " (輔大)以下何者不是食科冰淇淋曾經出過的口味？", a: "綠豆沙鹹蛋黃", b: "起司香蕉", c: "咖啡奶酒", d: "奇異果優格", answer: "d" },
    { content: " (輔大)在濟時樓待到閉館時，除了會聽到來自圖書館員的提醒，還會聽到哪首歌？", a: "輔大校歌", b: "聖歌:我最愛的你", c: "晚安曲(費玉清)", d: "每天播的不一樣，無法得知", answer: "b" },
    { content: " (輔大)請問輔大最後一個鐘聲是幾點？", a: "22:00", b: "22:10", c: "23:00", d: "23:10", answer: "b" },
    { content: " (輔大)請問下列哪一家學餐的一顆高麗菜煎餃最便宜？", a: "仁園", b: "輔園", c: "心園", d: "理園", answer: "b" },
    { content: " (輔大)騎腳踏車進入正門時，腳踏車車道(機車道)位於兩個汽車車道的？", a: "左邊", b: "中間", c: "右邊", d: "正下方", answer: "b" },
    { content: " (輔大)請問聖言樓的外牆顏色？", a: "米白", b: "磚紅", c: "水泥灰", d: "淺藍", answer: "a" },  
    { content: " (輔大)請問學校目前有幾個友會？", a: "7", b: "8", c: "9", d: "10", answer: "b" },
    { content: " (輔大)請問學校裡面沒有哪一間超商？", a: "711", b: "全家", c: "萊爾富", d: "ok", answer: "d" },
    { content: " (輔大)請問今年聖誕點燈在幾號？", a: "11/27", b: "11/28", c: "11/29", d: "11/30", answer: "d" },
    { content: " (輔大)請問學校健身房位於？", a: "聖言樓地下室", b: "進修部地下室", c: "國璽樓地下室", d: "文德樓地下室", answer: "d" },
    { content: " (輔大)請問宜聖一樓的櫃檯前面貼有？", a: "一串葡萄", b: "一根香蕉", c: "一顆蘋果", d: "一顆橘子", answer: "b" },
    { content: " (輔大)出校門右手邊的天橋下有一個攤位，請問他是賣？", a: "黑糖糕", b: "蔥抓餅", c: "糖葫蘆", d: "粽子", answer: "a" },
    { content: " (輔大)面向濟時樓時，可以看到外牆有四個顯眼的英文字母，其中不包含？", a: "A", b: "F", c: "H", d: "S", answer: "d" },
    { content: " (輔大)若要前往植物園籃球場，在從7-11輔進門市旁邊的門出來之後，需要？", a: "往左走", b: "直走", c: "往右走", d: "在原地轉圈圈", answer: "a" },
    { content: " (輔大)如果你想跟校長聊天，而校長請你直接播校長室的電話，這時候你該播？", a: "02-29053117", b: "02-29052202", c: "02-29052204", d: "02-29052239", answer: "b" },
    { content: " (輔大)為了方便大家領錢，位於焯炤館一樓的全聯對面同時存在一家銀行，請問是？", a: "國泰世華銀行", b: "土地銀行", c: "台新銀行", d: "玉山銀行", answer: "c" },
    { content: " (輔大)每一個捷運站都有其專屬的代號，請問輔大站的代號是？", a: "O18", b: "O19", c: "Y18", d: "Y19", answer: "b" },
    { content: " (輔大)請問「NF」是下列何者的教室代號？", a: "秉雅樓", b: "公博樓", c: "伯達樓", d: "文友樓", answer: "a" },
    { content: " (輔大)下列何者為輔仁大學全名？", a: "輔仁大學", b: "私立輔仁大學", c: "財團法人私立輔仁大學", d: "輔仁大學學校財團法人輔仁大學", answer: "d" },
]




//about.html
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
