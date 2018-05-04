// my score

var losses = 0; 
var omitted= 0; 
var score =0;
var userChoice =0;

// buttom value by id true or false
$(' button').on('click', function(){
  console.log(this.id);
  $(this).css("background-color","orange");
  if (this.id === "correct"){
    score ++;
  };
  if (this.id === "submit"){
    losses = 5-score; 
    alert ("Correct: " + score + " and Incorrect: " + losses)
  };

});

// stop multiple cickling
function userChoice(){
    $(this).css("background-color","orange");
    $(this).attr('data', choice)
    allTheOtherButtons.css (gray)
    allTheOtherButtons.attr (data)
}

// stopwatch

  var seconds= 60;

    function secondPassed(){
      var minutes = Math.round((seconds - 30) /60);
      var remainingSeconds = seconds % 60;

      if(remainingSeconds <10){
        remainingSeconds = "0" + remainingSeconds;
      }

      document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    

      if(seconds == 0){
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Time is up!!!";
        $(".buttons").css("display","none");
        $("p").css("display","none");
        $("hr").css("display","none");
        losses = 5-score; 
        alert ("Correct: " + score + " and Incorrect: " + losses)
      }else{
        seconds --;
      }
    }
  var countdownTimer = setInterval('secondPassed()', 1000);
  
  

      
   



 

















