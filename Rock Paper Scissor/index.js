const buttons = document.querySelectorAll("button");
let user;
let userPoint = 0;
let compPoint = 0;

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(document.querySelector(".rock").addEventListener("click", ()=>{
            var audio = new Audio('sound1.mp3');
            audio.play();
        }));

        else if(document.querySelector(".paper").addEventListener("click", ()=>{
            var audio = new Audio('sound2.mp3');
            audio.play();
        }));

        else if(document.querySelector(".scissor").addEventListener("click", ()=>{
            var audio = new Audio('sound1.mp3');
            audio.play();
        }));

        user = index + 1;
        // console.log("index:", index);
        // console.log("Clicked button:", user);

        const compMove = Math.floor(Math.random() * 3) + 1;
        console.log("Computer Choosed:", compMove);

        document.querySelector(".ran").style.backgroundImage = `url('img${compMove}.png')`;
        document.querySelector(".ran").style.backgroundPosition = "center";
        document.querySelector(".ran").style.backgroundSize = "contain";

        document.querySelector(".myturn").style.backgroundImage = `url('img${user}.png')`;
        document.querySelector(".myturn").style.backgroundPosition = "center";
        document.querySelector(".myturn").style.backgroundSize = "contain";

        if(user === 2 && compMove === 1){
            userPoint++;
            document.querySelector(".up").innerHTML = userPoint + "/5";
            document.querySelector(".cp").innerHTML = compPoint + "/5";
        }
        
        else if(user === 1 && compMove === 2){
            compPoint++;
            document.querySelector(".cp").innerHTML = compPoint + "/5";
            document.querySelector(".up").innerHTML = userPoint + "/5";
        }

        if(user === 3 && compMove === 2){
            userPoint++;
            document.querySelector(".up").innerHTML = userPoint + "/5";
            document.querySelector(".cp").innerHTML = compPoint + "/5";
        }
        
        else if(user === 2 && compMove === 3){
            compPoint++;
            document.querySelector(".cp").innerHTML = compPoint + "/5";
            document.querySelector(".up").innerHTML = userPoint + "/5";
        }

        if(user === 1 && compMove === 3){
            userPoint++;
            document.querySelector(".up").innerHTML = userPoint + "/5";
            document.querySelector(".cp").innerHTML = compPoint + "/5";
        }
        
        else if(user === 3 && compMove === 1){
            compPoint++;
            document.querySelector(".cp").innerHTML = compPoint + "/5";
            document.querySelector(".up").innerHTML = userPoint + "/5";
        }

        if(userPoint === 5){
            document.querySelector(".up").innerHTML = "Winner! Press reset to restart the game!"
           setTimeout(() => {
            var audio = new Audio('sound3.mp3');
            audio.play();
           }, 1000); 
           document.querySelectorAll("button").forEach(button => {
           button.style.visibility = "hidden";
        });

            userPoint = 0;
            compPoint = 0;
        }
        
        else if(compPoint === 5){
            document.querySelector(".cp").innerHTML = "Computer Won! Press reset to restart the game!"
            setTimeout(() => {
                var audio = new Audio('sound4.mp3');
                audio.play();
            }, 1000); 
            document.querySelectorAll("button").forEach(button => {
                button.style.visibility = "hidden";
            });
            userPoint = 0;
            compPoint = 0;
        }


        const resetButton = document.querySelector("input");
        resetButton.addEventListener("click", () => {
        location.reload();
        });
    });
});
