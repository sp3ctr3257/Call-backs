console.log("Hello, World!")

const leftButtonEL = document.getElementById("left-button");
const midButtonEL = document.getElementById("middle-button");
const rightButtonEL = document.getElementById("right-button");

document.getElementById("left-button")
    .addEventListener("click", function() {    
      console.log("You Clicked the red button!");
      const message = function () {
        console.log("hmm, so you werent feeling the green button?");
    }
        setTimeout(message, 2000);
    });
        document.getElementById("middle-button")
            .addEventListener("click", function() {    
              console.log("You Clicked the yellow button!");
              const message = function () {
                console.log("hmm, so you werent feeling the red button?");
            }
                setTimeout(message, 2000);
            });
                document.getElementById("right-button")
                    .addEventListener("click", function() {    
                      console.log("You Clicked the green button!");
                      const message = function () {
                        console.log("hmm, so you werent feeling the yellow button?");
                    }
                        setTimeout(message, 1000);
                    });