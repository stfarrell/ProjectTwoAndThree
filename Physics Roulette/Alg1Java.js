let btn = document.querySelector("#alg1btn");
let problem = document.querySelector("#alg1problem");
let checkboxes = document.querySelector("#alg1checkboxes");
let submitbtn = document.querySelector("#alg1submitbtn");
let results = document.querySelector("#alg1results");
let userChoices = document.querySelectorAll(".ans");
let scorediv = document.querySelector("#alg1scorediv");
let score = 0;
let winner = document.querySelector("winner");
// let sendScore = document.querySelector("#sendScore");
// let ESlink = document.querySelector("ES_Rou.html");
// let mainlink = document.querySelector("#mainlink");

let questionBank = [
     {"Question": "Alg1J17Q1.PNG",
      "Answer": 3,
      "cluster": "F-IF.B"
    //   "Outcome": "Outcome #" 
     },
      {"Question": "Alg1J17Q2.PNG",
      "Answer": 2,
      "cluster": "A-SSE.A"},
      {"Question": "Alg1J17Q3.PNG",
      "Answer": 4,
      "cluster": "A-REI.D"},
      {"Question": "Alg1J17Q4.PNG",
      "Answer": 2,
      "cluster": "S-ID.C"},
      {"Question": "Alg1J17Q5.PNG",
      "Answer": 1,
      "cluster": "F-IF.A"},
      {"Question": "Alg1J17Q6.PNG",
      "Answer": 3,
      "cluster": "A-SSE.A"},
      {"Question": "Alg1J17Q7.PNG",
      "Answer": 1,
      "cluster": "A-CED.A"},
      {"Question": "Alg1J17Q8.PNG",
      "Answer": 1,
      "cluster": "A-REI.C"},
      {"Question": "Alg1J17Q9.PNG",
      "Answer": 3,
      "cluster": "F-IF.A"},
      {"Question": "Alg1J17Q10.PNG",
      "Answer": 3,
      "cluster": "A-APR.B"},
      {"Question": "Alg1J17Q11.PNG",
      "Answer": 1,
      "cluster": "A-CED.A"},
      {"Question": "Alg1J17Q12.PNG",
      "Answer": 2,
      "cluster": "F-LE.A"},
      {"Question": "Alg1J17Q13.PNG",
      "Answer": 4,
      "cluster": "A-REI.B"},
      {"Question": "Alg1J17Q14.PNG",
      "Answer": 1,
      "cluster": "S-ID.C"},
      {"Question": "Alg1J17Q15.PNG",
      "Answer": 4,
      "cluster": "S-ID.A"},
      {"Question": "Alg1J17Q16.PNG",
      "Answer": 4,
      "cluster": "F-IF.C"},
      {"Question": "Alg1J17Q17.PNG",
      "Answer": 3,
      "cluster": "F-IF.C"},
      {"Question": "Alg1J17Q18.PNG",
      "Answer": 2,
      "cluster": "F-IF.A"},
      {"Question": "Alg1J17Q19.PNG",
      "Answer": 1,
      "cluster": "A-REI.B"},
      {"Question": "Alg1J17Q20.PNG",
      "Answer": 4,
      "cluster": "N-Q.A"},
      {"Question": "Alg1J17Q21.PNG",
      "Answer": 3,
      "cluster": "F-LE.A"},
      {"Question": "Alg1J17Q22.PNG",
      "Answer": 2,
      "cluster": "A-REI.B"},
      {"Question": "Alg1J17Q23.PNG",
      "Answer": 3,
      "cluster": "A-CED.A"},
      {"Question": "Alg1J17Q24.PNG",
      "Answer": 1,
      "cluster": "F-IF.B"}
     
      ];

// ESlink.addEventListener("hover", e=> {
//  mainlink.
// })

let randomNumber = Math.floor(Math.random()*questionBank.length);
let randomProblem = questionBank[randomNumber]["Question"];


btn.addEventListener("click", e => {
    var i;
    for (i=0; i<4; i++) {
        userChoices[i].checked = false;
    }
    results.innerHTML = ``;
    randomNumber = Math.floor(Math.random()*questionBank.length);
    randomProblem = questionBank[randomNumber]["Question"];
    problem.innerHTML = `<img src = "${randomProblem}" class = "center">`;
    checkboxes.classList.remove("hidden");
    btn.disabled = true;
    submitbtn.disabled = false;
});

submitbtn.addEventListener("click", e => {
    
    var i;
    for (i = 0; i<4; i++) { 
        if (userChoices[i].checked == true) {
            if (userChoices[i].value == questionBank[randomNumber]["Answer"]) {
                results.innerHTML = `Your answer is correct!`;
                score+=5;
                scorediv.innerHTML = `+5! Your score is ${score}`;
                
            }else {
                results.innerHTML = `Your answer is incorrect!`;
                scorediv.innerHTML = `+0 Your score is ${score}`;
                scorediv.innerHTML = `Your score is ${score}`;
            }
        }
    }
    btn.disabled = false;
    submitbtn.disabled = true;
});

if (score==10) {
    winner.innerHTML = `You win!`;
    // alert("You win!");
}
// sendScore.addEventListener("click", e => {
 
// })









// gustavo wuz here

////////////////////////////////////////////////////////////////




