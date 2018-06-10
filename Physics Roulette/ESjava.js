let ESbtn = document.querySelector("#ESbtn");
let ESproblem = document.querySelector("#ESproblems");
let EScheckboxes = document.querySelector("#EScheckboxes");
let ESsubmitbtn = document.querySelector("#ESsubmitbtn");
let ESresults = document.querySelector("#ESresults");
let ESuserChoices = document.querySelectorAll(".ans");
let ESscorediv = document.querySelector("#ESscorediv");
let ESscore = 0;

let ESquestionBank = [
  {"Question": "ESJ17Q1.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q2.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q3.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q4.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q5.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q6.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q7.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q8.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q9.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q10.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q11.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q12.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q13.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q14.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q15.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q16.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q17.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q18.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q19.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q20.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q21.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q22.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q23.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q24.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q25.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q26.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q27.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q28.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q29.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q30.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q31.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q32.PNG",
  "Answer": 1},
  {"Question": "ESJ17Q33.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q34.PNG",
  "Answer": 3},
  {"Question": "ESJ17Q35.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q36.PNG",
  "Answer": 2},
  {"Question": "ESJ17Q37.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q38.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q39.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q40.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q41.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q42.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q43.PNG",
  "Answer": 4},
  {"Question": "ESJ17Q44.PNG",
  "Answer": 4},
  ];

let ESrandomNumber = Math.floor(Math.random()*ESquestionBank.length);
let ESrandomProblem = ESquestionBank[ESrandomNumber]["Question"];


ESbtn.addEventListener("click", e => {
    var i;
    for (i=0; i<4; i++) {
        ESuserChoices[i].checked = false;
    }
    ESresults.innerHTML = ``;
    ESrandomNumber = Math.floor(Math.random()*ESquestionBank.length);
    ESrandomProblem = ESquestionBank[ESrandomNumber]["Question"];
    
    console.log(ESrandomProblem);
    
    ESproblem.innerHTML = `<img src = "${ESrandomProblem}" class = "center">`;
    EScheckboxes.classList.remove("hidden");
    ESbtn.disabled = true;
    ESsubmitbtn.disabled = false;
});

ESsubmitbtn.addEventListener("click", e => {
    
    var i;
    for (i = 0; i<4; i++) { 
        if (ESuserChoices[i].checked == true) {
            if (ESuserChoices[i].value == ESquestionBank[ESrandomNumber]["Answer"]) {
                ESresults.innerHTML = `Your answer is correct!`;
                ESscore+=100;
                ESscorediv.innerHTML = `+100! Your score is ${ESscore}`;
                
            }else {
                ESresults.innerHTML = `Your answer is incorrect!`;
                ESscorediv.innerHTML = `+0 Your score is ${ESscore}`;
                ESscorediv.innerHTML = `Your score is ${ESscore}`;
            }
        }
    }
    ESbtn.disabled = false;
    ESsubmitbtn.disabled = true;
});