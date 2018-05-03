// my score

var losses = 0; 
var omitted= 0; 
var score =0;

// buttom value by id true or false
$(' button').on('click', function(){
  console.log(this.id);
  $(this).css("background-color","orange");
  if (this.id === "correct"){
    score ++;
  };
  if (this.id === "submit"){
    losses = 5-score; 
    alert ("Correct: " + score + " and Wrong: " + losses)
  };


});

// stopwatch

    var number = 100;
    var intervalID; variable
  
     $("#stop").on("click", stop);


    function run() {
      clearInterval(intervalID);
      intervalID = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#show-number").html("<h2>"+ number + "</h2>");

        if (number ===0) {
          stop();
          alert ("Time Up!");

        }
    }


   





















