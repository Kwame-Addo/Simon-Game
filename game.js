
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];



$(".btn").click(function(){
  var userChosenColor = $("this").attr("id");
  userClickedPattern.push(userChosenColor);
})






function nextSequence() {
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).on("click", function(){

  $("." + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
  return randomChosenColor;
});


};
$(".btn").click(nextSequence);


function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}



//

//
// $(document).keypress(function(){
//   $("h1").html("Level 1");
//   var randomTile = Math.random() * 4;
//   randomTile = Math.floor(randomTile + 1);
//   if (randomTile===1){
//     greenAudio.play();
//     $("#green").animate({opacity: 0.1}).animate({opacity:1});
//   }else if (randomTile===2){
//     redAudio.play();
//   $("#red").animate({opacity: 0.1}).animate({opacity:1});
//   }else if (randomTile===3){
//     yellowAudio.play();
//     $("#yellow").animate({opacity: 0.1}).animate({opacity:1});
//   }else {
//     blueAudio.play();
//   $("#blue").animate({opacity: 0.1}).animate({opacity:1});
//   }
// })
//
//
// $(".btn").click(function(){
//   blueAudio.play();
// })
