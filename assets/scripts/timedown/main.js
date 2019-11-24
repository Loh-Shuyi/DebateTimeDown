define(function(require,exports,module){
    var $ = require('jquery');//引入jquery
    require('onepage')($);
    // require('boot')($);//共享给jquery
    require('timer')($);//共享给jquery
    require('jplay')($);//共享给jquery
    require('jstorage')($);//共享给jquery
    // require('transit')($);//共享给jquery
    // require('ferroSilder')($);//共享给jquery
    //
    $("#jquery_jplayer_1").jPlayer({ready: function () {
        $(this).jPlayer("setMedia", {
           volume: 100,
         wav:"assets/res/l30s.mp3"
        });
       },
       swfPath: "assets/res/",
       supplied: "wav,mp3"
    });

    $("#jquery_jplayer_2").jPlayer({ready: function () {
        $(this).jPlayer("setMedia", {
         volume :100,
         wav:"assets/res/l1s.mp3"
        });
       },
       swfPath: "assets/res/",
       supplied: "wav,mp3"
    });

    $("#jquery_jplayer_3").jPlayer({ready: function () {
        $(this).jPlayer("setMedia", {
           volume: 100,
         wav:"assets/res/ht.mp3"
        });
       },
       swfPath: "assets/res/",
       supplied: "wav,mp3"
    });

    // $("#jquery_jplayer_4").jPlayer({ready: function () {
    //     $(this).jPlayer("setMedia", {
    //      volume :100,
    //      wav:"assets/res/ht.wav"
    //     });
    //    },
    //    swfPath: "assets/res/",
    //    supplied: "wav,mp3"
    // });
   $("#play1").click(function(){
       $("#jquery_jplayer_1").jPlayer( "play" );
    });
    $("#play2").click(function(){
       $("#jquery_jplayer_2").jPlayer( "play" );
    });

    $("#play3").click(function(){
       $("#jquery_jplayer_3").jPlayer( "play" );
    });
    $("#play4").click(function(){
       $("#jquery_jplayer_3").jPlayer( "play" );
    });
    $("#btn1").click(function(){
       $("#play1").click();
    });
    $("#btn2").click(function(){
       $("#play2").click();
    });
    $("#btn3").click(function(){
       $("#play3").click();
    });
    $("#btn4").click(function(){
       $("#play4").click();
    });

    $('.main').onepage_scroll({
       sectionContainer: ".container-fluid",
       easing: "ease-in",
       loop: false
       // direction: "horizontal"
    });

   

   $("#timedown2").custimer({
       time_length:120,
       begin_btn_id:"beginBtn2",
       stop_btn_id:"stopBtn2",
       reset_btn_id: 'resetBtn2',
       voice_type: 0,
       time_ding_dang: [30,0]
   });


   $("#timedown3").custimer({
       time_length:240,
       begin_btn_id:"beginBtn3",
       stop_btn_id:"stopBtn3",
       reset_btn_id: 'resetBtn3',
       voice_type: 0,
       time_ding_dang: [30,0]
   });

   $("#timedown4").custimer({
       time_length:240,
       begin_btn_id:"beginBtn4",
       stop_btn_id:"stopBtn4",
       reset_btn_id: 'resetBtn4',
       voice_type: 0,
       time_ding_dang: [30,0]
   });

   $("#timedown6_0").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_0",
       stop_btn_id:"stopBtn6_0",
       reset_btn_id: 'resetBtn6_0',
       voice_type: 0,
       time_ding_dang: [30,0]
   });

   $("#timedown6_8").custimer({
       time_length:60,
       begin_btn_id:"beginBtn6_8",
       stop_btn_id:"stopBtn6_8",
       reset_btn_id: 'resetBtn6_8',
       voice_type: 0,
       time_ding_dang: [30,0],
       onFlagTime: function() {
         var stopId = "#"+$("#timePopUp").attr("stop");
         $(stopId).click();
         $("#stopBtn6_8").click();
         if (stopId.endsWith("_2")
         || stopId.endsWith("_3")
         || stopId.endsWith("_6")
         || stopId.endsWith("_7")) {
           $("#stopBtn6_10").click();
         } else {
           $("#stopBtn6_9").click();
         }
       },
       input_id: 'input6_8'
   });

   $("#timedown8_8SL").custimer({
       time_length:60,
       begin_btn_id:"beginBtn8_8SL",
       stop_btn_id:"stopBtn8_8SL",
       reset_btn_id: 'resetBtn8_8SL',
       voice_type: 0,
       time_ding_dang: [30,0],
       onFlagTime: function() {
         var stopId = "#"+$("#timePopUpSL").attr("stop");
         $(stopId).click();
         $("#stopBtn6_8SL").click();
         if (stopId.endsWith("_2SL")
         || stopId.endsWith("_3SL")
         || stopId.endsWith("_6SL")
         || stopId.endsWith("_7SL")) {
           $("#stopBtn8_10SL").click();
         } else {
           $("#stopBtn8_9SL").click();
         }
       },
       input_id: 'input8_8SL'
   });

   $("#timedown9Free").custimer({
       time_length:60,
       begin_btn_id:"beginBtn9",
       stop_btn_id:"stopBtn9",
       reset_btn_id: 'resetBtnFree',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'inputFree'
   });

   $("#timedown9Free_1").custimer({
       time_length:60,
       begin_btn_id:"beginBtn9_1",
       stop_btn_id:"stopBtn9_1",
       reset_btn_id: 'resetBtnFree',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'inputFree'
   });

   $("#timedown1vn").custimer({
       time_length:60,
       begin_btn_id:"beginBtn1vn",
       stop_btn_id:"stopBtn1vn",
       reset_btn_id: 'resetBtn1vn',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input1vn'
   });

 


   function sencondToTimer(sec){
       var s = parseInt(sec);
       var minuite = parseInt(s/60);
       if(minuite < 10){
           minuite = "0"+minuite;
       }
       second = parseInt(s%60);
       if(second < 10){
           second = "0"+second;
       }
       return minuite+" : "+ second;
   }
//------------------------------------For first round----------------------------------------------------------
   $(".popUpBtn6").on("click", function() {
     var temp = $(this).prev("h1");
     $("#timePopUpText2").html(temp.prev("h3").text() + "本轮时间");
     var tempId = temp.attr("id");
     if (tempId.endsWith("_10")) {
       $("#timePopUpText2").html("反方"+$("#timePopUpText2").html());
     } else if (tempId.endsWith("_9")){
       $("#timePopUpText2").html("正方"+$("#timePopUpText2").html());
     }

     var children = $(this).next("div").children();
     $("#timePopUp").attr("begin", children.eq(0).attr("id"));
     $("#timePopUp").attr("stop", children.eq(1).attr("id"));
     $("#timePopUp").attr("reset", children.eq(2).attr("id"));
     $("#timePopUp").attr("input", children.eq(3).attr("id"));
     $("#timePopUp").attr("timedown", tempId);
     var currentTime = children.eq(3).val();
     console.log(currentTime);
     $("#timedown6_0").html(sencondToTimer(currentTime));
     $("#input6_0").val(currentTime);
     $("#timePopUp").css("display", "block");
   });

   $("#discardBtn6").on('click', function() {
     $("#beginBtn6_8").css("display", "inline-block");
     // $("#stopBtn6_8").css("display", "inline-block");
     $("#endBtn6_8").css("display", "inline-block");
     $("#resetBtn6_8").css("display", "inline-block");
     $("#backBtn6").css("display", "inline-block");
     $("#confirmBtn6").css("display", "none");
     $("#discardBtn6").css("display", "none");
     $("#input6_8").css("display", "none");
   });

   $("#backBtn6").on('click', function() {
     $("#timePopUp").css("display", "none");
   });

   $("#endBtn6_8").on('click', function() {
     $("#stopBtn6_8").click();
     var ori = $("#"+$("#timePopUp").attr("input")).val();;
     console.log("ori: " + ori);
     var left = $("#input6_8").val();
     console.log("ori: " + left);
     var res = ori - left;
     $("#timedown6_8").html(sencondToTimer(0));
     $("#timedown6_0").html(sencondToTimer(res));
     $("#input6_0").val(res);
     $("#"+$("#timePopUp").attr("input")).val(res);
     var resetId = $("#timePopUp").attr("reset");
     $("#"+resetId).click();
     if (resetId.endsWith("_2")
     || resetId.endsWith("_3")
     || resetId.endsWith("_6")
     || resetId.endsWith("_7")) {
       $("#timedown6_10").html(sencondToTimer($("#input6_10").val() - left));
       $("#input6_10").val($("#input6_10").val() - left);
       $("#resetBtn6_10").click();
     } else {
       $("#timedown6_9").html(sencondToTimer($("#input6_9").val() - left));
       $("#input6_9").val($("#input6_9").val() - left);
       $("#resetBtn6_9").click();
     }
   });

//-----------------------------for second round---------------------------------------------------------------------

     $(".popUpBtn8_SL").on("click", function() {
     var temp = $(this).prev("h1");
     $("#timePopUpText2SL").html(temp.prev("h3").text() + "本轮时间");
     var tempId = temp.attr("id");
     if (tempId.endsWith("_10SL")) {
       $("#timePopUpText2SL").html("反方"+$("#timePopUpText2SL").html());
     } else if (tempId.endsWith("_9SL")){
       $("#timePopUpText2SL").html("正方"+$("#timePopUpText2SL").html());
     }

     var children = $(this).next("div").children();
     $("#timePopUpSL").attr("begin", children.eq(0).attr("id"));
     $("#timePopUpSL").attr("stop", children.eq(1).attr("id"));
     $("#timePopUpSL").attr("reset", children.eq(2).attr("id"));
     $("#timePopUpSL").attr("input", children.eq(3).attr("id"));
     $("#timePopUpSL").attr("timedown", tempId);
     var currentTime = children.eq(3).val();
     console.log(currentTime);
     $("#timedown8_0SL").html(sencondToTimer(currentTime));
     $("#input8_0SL").val(currentTime);
     $("#timePopUpSL").css("display", "block");
   });

   

   $("#discardBtn8SL").on('click', function() {
     $("#beginBtn8_8SL").css("display", "inline-block");
     // $("#stopBtn6_8").css("display", "inline-block");
     $("#endBtn8_8SL").css("display", "inline-block");
     $("#resetBtn8_8SL").css("display", "inline-block");
     $("#backBtn8SL").css("display", "inline-block");
     $("#confirmBtn8SL").css("display", "none");
     $("#discardBtn8SL").css("display", "none");
     $("#input8_8SL").css("display", "none");
   });

   $("#backBtn8SL").on('click', function() {
     $("#timePopUpSL").css("display", "none");
   });

   $("#endBtn8_8SL").on('click', function() {
     $("#stopBtn8_8SL").click();
     var ori = $("#"+$("#timePopUpSL").attr("input")).val();;
     console.log("ori: " + ori);
     var left = $("#input8_8SL").val();
     console.log("ori: " + left);
     var res = ori - left;
     $("#timedown8_8SL").html(sencondToTimer(0));
     $("#timedown8_0SL").html(sencondToTimer(res));
     $("#input8_0SL").val(res);
     $("#"+$("#timePopUpSL").attr("input")).val(res);
     var resetId = $("#timePopUpSL").attr("reset");
     $("#"+resetId).click();
     if (resetId.endsWith("_2SL")
     || resetId.endsWith("_3SL")
     || resetId.endsWith("_7SL")) {
       $("#timedown8_10SL").html(sencondToTimer($("#input8_10SL").val() - left));
       $("#input8_10SL").val($("#input8_10SL").val() - left);
       $("#resetBtn8_10SL").click();
     } else {
       $("#timedown8_9SL").html(sencondToTimer($("#input8_9SL").val() - left));
       $("#input8_9SL").val($("#input8_9SL").val() - left);
       $("#resetBtn8_9SL").click();
     }
   });

   //-----------------------------for NvN round---------------------------------------------------------------------

   $("#discardBtnFree").on('click', function() {
     //$("#beginBtn8_8SL").css("display", "inline-block");
     // $("#stopBtn6_8").css("display", "inline-block");
     //$("#endBtn8_8SL").css("display", "inline-block");
     $("#resetBtnFree").css("display", "inline-block");
     //$("#backBtn8SL").css("display", "inline-block");
     $("#confirmBtnFree").css("display", "none");
     $("#discardBtnFree").css("display", "none");
     $("#inputFree").css("display", "none");
   });


   $("#discardBtn1vn").on('click', function() {
     $("#beginBtn1vn").css("display", "inline-block");
     $("#stopBtn1vn").css("display", "inline-block");
     $("#endBtn1vn").css("display", "inline-block");
     $("#resetBtn1vn").css("display", "inline-block");
     $("#backBtn1vn").css("display", "inline-block");
     $("#confirmBtn1vn").css("display", "none");
     $("#discardBtn1vn").css("display", "none");
     $("#input1vn").css("display", "none");
   });


   $("#timedown6").custimer({
       time_length:360,
       begin_btn_id:"beginBtn6",
       stop_btn_id:"stopBtn6",
       reset_btn_id: 'resetBtn6',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6'
   });

   $("#timedown8SL").custimer({
       time_length:120,
       begin_btn_id:"beginBtn8SL",
       stop_btn_id:"stopBtn8SL",
       reset_btn_id: 'resetBtn8SL',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input8SL'
   });

   $("#timedown6_1").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_1",
       stop_btn_id:"stopBtn6_1",
       reset_btn_id: 'resetBtn6_1',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_1'
   });

   $("#timedown6_2").custimer({
       time_length:360,
       begin_btn_id:"beginBtn6_2",
       stop_btn_id:"stopBtn6_2",
       reset_btn_id: 'resetBtn6_2',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_2'
   });

   $("#timedown8_2SL").custimer({
       time_length:120,
       begin_btn_id:"beginBtn8_2SL",
       stop_btn_id:"stopBtn8_2SL",
       reset_btn_id: 'resetBtn8_2SL',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input8_2SL'
   });

   $("#timedown6_3").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_3",
       stop_btn_id:"stopBtn6_3",
       reset_btn_id: 'resetBtn6_3',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_3'
   });

   $("#timedown6_4").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_4",
       stop_btn_id:"stopBtn6_4",
       reset_btn_id: 'resetBtn6_4',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_4'
   });

   $("#timedown6_5").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_5",
       stop_btn_id:"stopBtn6_5",
       reset_btn_id: 'resetBtn6_5',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_5'
   });

   $("#timedown6_6").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_6",
       stop_btn_id:"stopBtn6_6",
       reset_btn_id: 'resetBtn6_6',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_6'
   });

   $("#timedown6_7").custimer({
       time_length:180,
       begin_btn_id:"beginBtn6_7",
       stop_btn_id:"stopBtn6_7",
       reset_btn_id: 'resetBtn6_7',
       voice_type: 0,
       time_ding_dang: [30,0],
       input_id: 'input6_7'
   });

   $("#timedown6_9").custimer({
     time_length:360,
     begin_btn_id:"beginBtn6_9",
     stop_btn_id:"stopBtn6_9",
     reset_btn_id: 'resetBtn6_9',
     voice_type: 0,
     time_ding_dang: [30,0],
     input_id: 'input6_9'
   });

   $("#timedown6_10").custimer({
     time_length:360,
     begin_btn_id:"beginBtn6_10",
     stop_btn_id:"stopBtn6_10",
     reset_btn_id: 'resetBtn6_10',
     voice_type: 0,
     time_ding_dang: [30,0],
     input_id: 'input6_10'
   });

   $("#timedown8_9SL").custimer({
     time_length:120,
     begin_btn_id:"beginBtn8_9SL",
     stop_btn_id:"stopBtn8_9SL",
     reset_btn_id: 'resetBtn8_9SL',
     voice_type: 0,
     time_ding_dang: [30,0],
     input_id: 'input8_9SL'
   });

   $("#timedown8_10SL").custimer({
     time_length:120,
     begin_btn_id:"beginBtn8_10SL",
     stop_btn_id:"stopBtn8_10SL",
     reset_btn_id: 'resetBtn8_10SL',
     voice_type: 0,
     time_ding_dang: [30,0],
     input_id: 'input8_10SL'
   });

   // console.log($("timedown6_8"));
   // console.log($("timedown6_8").custimer);
   // console.log($("timedown6_8").custimer.voice_type);

   $("#timedown7").custimer({
       time_length:300,
       begin_btn_id:"beginBtn7",
       stop_btn_id:"stopBtn7",
       reset_btn_id: 'resetBtn7',
       voice_type: 0,
       time_ding_dang: [30,0]
   });

   $("#timedown7_1").custimer({
       time_length:300,
       begin_btn_id:"beginBtn7_1",
       stop_btn_id:"stopBtn7_1",
       reset_btn_id: 'resetBtn7_1',
       voice_type: 0,
       time_ding_dang: [30,0]
   });

   var flag=2;
   $("#beginBtn9").on('click',function()
   {
           flag =1;
   });
   $("#beginBtn9_1").on('click',function()
   {
           flag =0;
   });
   $("#doubleBtn").on('click',function(){
       if(flag == 1){
           $("#stopBtn9").click();
           $("#beginBtn9_1").click();
       }else if(flag == 0){
           $("#stopBtn9_1").click();
           $("#beginBtn9").click();
       }else{
           $("#beginBtn9").click();
       }
   });

   $("#doubleStopBtn").on('click',function(){
       $("#stopBtn9").click();
       $("#stopBtn9_1").click();
       flag=2;
   });










    var matrix = [
       [
           {full:0},{full:1,moveDirection:'yx'},{full:0}
       ],
       [
           {full:1},{full:1,first:true},{full:1}
       ],
       [
           {full:0},{full:1,moveDirection:'yx'},{full:0}
       ]
   ];
    // $('.slidingSpaces').ferroSlider({
    //    createSensibleAreas     : true,
    //    axis: 'xy'
    // });





   //  $.jStorage.set("theme", "现在的社会是不是已经不如以前了？");
   //  $.jStorage.set("square_name", "电子科技大学代表队");
   //  $.jStorage.set("square_image", "uestc_header.png");
   //  $.jStorage.set("opposition_name", "西南交通大学代表队");
   //  $.jStorage.set("opposition_image", "uestc_header.png");
   //  $.jStorage.set("test", [{name:"heheh"},{name:"husaiu"}]);
   //  var index = $.jStorage.index();
   // console.log(index); // ["key1","key2","key3"]
   // var test = $.jStorage.get("test");
   // console.log(test);
   // console.log(test.length);
   // $.jStorage.flush();
   //
   //
   //


});
