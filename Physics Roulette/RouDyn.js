let btn = document.querySelector("#btn");
let problem = document.querySelector("#problem");
let checkboxes = document.querySelector("#checkboxes");
let submitbtn = document.querySelector("#submitbtn");
let results = document.querySelector("#results");
let userChoices = document.querySelectorAll(".ans");
let scorediv = document.querySelector("#scorediv");
let score = 0;
let vidbtn = document.querySelector("#vidbtn");
let videoSolution = document.querySelector("#videoSolution");
let anotherbtn = document.querySelector("#another");
let greatjob = document.querySelector("#greatjob");
let progressBar = document.querySelector("#progress");
var questionProgress = 0;
vidbtn.disabled = true;
// let sendScore = document.querySelector("#sendScore");
// let ESlink = document.querySelector("ES_Rou.html");
// let mainlink = document.querySelector("#mainlink");

let questionBank = [
      {"Question": "J17Q1.PNG",
       "Answer": 2,
         "Key Idea": "5.1a"},
      {"Question": "J17Q2.PNG",
       "Answer": 3,
         "Key Idea": "5.1.vi"},
      {"Question": "J17Q3.PNG",
       "Answer": 4,},
      {"Question": "J17Q4.PNG",
       "Answer": 1},
      {"Question": "J17Q5.PNG",
       "Answer": 4,
         "Key Idea": "5.1.iii"},
      {"Question": "J17Q6.PNG",
       "Answer": 2},
      {"Question": "J17Q7.PNG",
       "Answer": 3,
         "Key Idea": "5.1.iii"},
      {"Question": "J17Q8.PNG",
       "Answer": 1,
         "Key Idea": "5.1.viii"},
      {"Question": "J17Q9.PNG",
       "Answer": 2,
         "Key Idea": "4.3.vii"},
      {"Question": "J17Q10.PNG",
       "Answer": 3,
         "Key Idea": "5.1s"},
      {"Question": "J17Q11.PNG",
       "Answer": 4,
         "Key Idea": "5.1.xii"},
      {"Question": "J17Q12.PNG",
       "Answer": 3,
         "Key Idea": "5.1.xi"},
      {"Question": "J17Q13.PNG",
       "Answer": 2,
         "Key Idea": "4.1p"},
      {"Question": "J17Q14.PNG",
       "Answer": 2,
         "Key Idea": "5.1t"},
      {"Question": "J17Q15.PNG",
       "Answer": 4},
      {"Question": "J17Q16.PNG",
       "Answer": 3,
         "Key Idea": "5.3i"},
      {"Question": "J17Q17.PNG",
       "Answer": 1,
         "Key Idea": "5.3i"},
      {"Question": "J17Q18.PNG",
       "Answer": 4,
         "Key Idea": "4.1l"},
      {"Question": "J17Q19.PNG",
       "Answer": 2,
         "Key Idea": "4.1i"},
      {"Question": "J17Q20.PNG",
       "Answer": 3,
         "Key Idea": "4.1.xiv"},
      {"Question": "J17Q21.PNG",
       "Answer": 4,
         "Key Idea": "4.1p"},
      {"Question": "J17Q22.PNG",
       "Answer": 1,
         "Key Idea": "4.1i"},
      {"Question": "J17Q23.PNG",
       "Answer": 2,
         "Key Idea": "4.3b"},
      {"Question": "J17Q24.PNG",
       "Answer": 3,
         "Key Idea": "4.3f"},
      {"Question": "J17Q25.PNG",
       "Answer": 3,
         "Key Idea": "4.3d"},
      {"Question": "J17Q26.PNG",
       "Answer": 4,
         
     },
      {"Question": "J17Q27.PNG",
       "Answer": 1},
      {"Question": "J17Q28.PNG",
       "Answer": 1},
      {"Question": "J17Q29.PNG",
       "Answer": 2},
      {"Question": "J17Q30.PNG",
       "Answer": 4},
      {"Question": "J17Q31.PNG",
       "Answer": 1},
      {"Question": "J17Q32.PNG",
       "Answer": 3},
      {"Question": "J17Q33.PNG",
       "Answer": 4},
      {"Question": "J17Q34.PNG",
       "Answer": 3},
      {"Question": "J17Q35.PNG",
       "Answer": 1},
      {"Question": "J17Q36.PNG",
       "Answer": 2},
      {"Question": "J17Q37.PNG",
       "Answer": 4},
      {"Question": "J17Q38.PNG",
       "Answer": 1},
      {"Question": "J17Q39.PNG",
       "Answer": 4},
      {"Question": "J17Q40.PNG",
       "Answer": 2},
      {"Question": "J17Q41.PNG",
       "Answer": 3},
      {"Question": "J17Q42.PNG",
       "Answer": 2},
      {"Question": "J17Q43.PNG",
       "Answer": 3},
      {"Question": "J17Q44.PNG",
       "Answer": 4},
      {"Question": "J17Q45.PNG",
       "Answer": 3},
      {"Question": "J17Q46.PNG",
       "Answer": 3},
      {"Question": "J17Q47.PNG",
       "Answer": 2},
      {"Question": "J17Q48.PNG",
       "Answer": 3},
      {"Question": "J17Q49.PNG",
       "Answer": 3},
      {"Question": "J17Q50.PNG",
       "Answer": 1}, 
       //June 2016 Problems
     {"Question": "J16Q1.JPG",
      "Answer": 4},
      {"Question": "J16Q2.JPG",
      "Answer": 2},
      {"Question": "J16Q3.JPG",
      "Answer": 4},
      {"Question": "J16Q4.JPG",
      "Answer": 1},
      {"Question": "J16Q5.JPG",
      "Answer": 3},
     {"Question": "J16Q6.JPG",
      "Answer": 2},
      {"Question": "J16Q7.JPG",
      "Answer": 2},
      {"Question": "J16Q8.JPG",
      "Answer": 1},
      {"Question": "J16Q9.JPG",
      "Answer": 2},
      {"Question": "J16Q10.JPG",
      "Answer": 3},
     {"Question": "J16Q11.JPG",
      "Answer": 3},
      {"Question": "J16Q12.JPG",
      "Answer": 2},
      {"Question": "J16Q13.JPG",
      "Answer": 2},
      {"Question": "J16Q14.JPG",
      "Answer": 2},
      {"Question": "J16Q15.JPG",
      "Answer": 3},
     {"Question": "J16Q16.JPG",
      "Answer": 1},
      {"Question": "J16Q17.JPG",
      "Answer": 3},
      {"Question": "J16Q18.JPG",
      "Answer": 3},
      {"Question": "J16Q19.JPG",
      "Answer": 4},
      {"Question": "J16Q20.JPG",
      "Answer": 1},
     {"Question": "J16Q21.JPG",
      "Answer": 3},
      {"Question": "J16Q22.JPG",
      "Answer": 4},
      {"Question": "J16Q23.JPG",
      "Answer": 2},
      {"Question": "J16Q24.JPG",
      "Answer": 1},
      {"Question": "J16Q25.JPG",
      "Answer": 2},
     {"Question": "J16Q26.JPG",
      "Answer": 1},
      {"Question": "J16Q27.JPG",
      "Answer": 3},
      {"Question": "J16Q28.JPG",
      "Answer": 1},
      {"Question": "J16Q29.JPG",
      "Answer": 3},
      {"Question": "J16Q30.JPG",
      "Answer": 2},
     {"Question": "J16Q31.JPG",
      "Answer": 2},
      {"Question": "J16Q32.JPG",
      "Answer": 4},
      {"Question": "J16Q33.JPG",
      "Answer": 3},
      {"Question": "J16Q34.JPG",
      "Answer": 3},
      {"Question": "J16Q35.JPG",
      "Answer": 4},
     {"Question": "J16Q36.JPG",
      "Answer": 2},
      {"Question": "J16Q37.JPG",
      "Answer": 4},
      {"Question": "J16Q38.JPG",
      "Answer": 4},
      {"Question": "J16Q39.JPG",
      "Answer": 3},
      {"Question": "J16Q40.JPG",
      "Answer": 2},
     {"Question": "J16Q41.JPG",
      "Answer": 3},
      {"Question": "J16Q42.JPG",
      "Answer": 2},
      {"Question": "J16Q43.JPG",
      "Answer": 1},
      {"Question": "J16Q44.JPG",
      "Answer": 1},
      {"Question": "J16Q45.JPG",
      "Answer": 4},
      {"Question": "J16Q46.JPG",
      "Answer": 1},
      {"Question": "J16Q47.JPG",
      "Answer": 2},
      {"Question": "J16Q48.JPG",
      "Answer": 3},
      {"Question": "J16Q49.JPG",
      "Answer": 3},
      {"Question": "J16Q50.JPG",
      "Answer": 3},
      //June 2015 Problems
       {"Question": "J15Q1.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q2.PNG",
       "Answer": 2,
         "Key Idea": ""},
      {"Question": "J15Q3.PNG",
       "Answer": 3,},
      {"Question": "J15Q4.PNG",
       "Answer": 1},
      {"Question": "J15Q5.PNG",
       "Answer": 3,
         "Key Idea": ""},
      {"Question": "J15Q6.PNG",
       "Answer": 2},
      {"Question": "J15Q7.PNG",
       "Answer": 3,
         "Key Idea": ""},
      {"Question": "J15Q8.PNG",
       "Answer": 4,
         "Key Idea": ""},
      {"Question": "J15Q9.PNG",
       "Answer": 2,
         "Key Idea": ""},
      {"Question": "J15Q10.PNG",
       "Answer": 3,
         "Key Idea": ""},
      {"Question": "J15Q11.PNG",
       "Answer": 3,
         "Key Idea": ""},
      {"Question": "J15Q12.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q13.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q14.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q15.PNG",
       "Answer": 4},
      {"Question": "J15Q16.PNG",
       "Answer": 2,
         "Key Idea": ""},
      {"Question": "J15Q17.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q18.PNG",
       "Answer": 4,
         "Key Idea": ""},
      {"Question": "J15Q19.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q20.PNG",
       "Answer": 3,
         "Key Idea": ""},
      {"Question": "J15Q21.PNG",
       "Answer": 2,
         "Key Idea": ""},
      {"Question": "J15Q22.PNG",
       "Answer": 2,
         "Key Idea": ""},
      {"Question": "J15Q23.PNG",
       "Answer": 3,
         "Key Idea": ""},
      {"Question": "J15Q24.PNG",
       "Answer": 1,
         "Key Idea": ""},
      {"Question": "J15Q25.PNG",
       "Answer": 4,
         "Key Idea": ""},
      {"Question": "J15Q26.PNG",
       "Answer": 1,
         
     },
     //  {"Question": "J15Q27.PNG",
     //   "Answer": 4},
     //  {"Question": "J15Q28.PNG",
     //   "Answer": 4},
     //  {"Question": "J15Q29.PNG",
     //   "Answer": 3},
     //  {"Question": "J15Q30.PNG",
     //   "Answer": 2},
     //  {"Question": "J15Q31.PNG",
     //   "Answer": 1},
     //  {"Question": "J15Q32.PNG",
     //   "Answer": 2},
     //  {"Question": "J15Q33.PNG",
     //   "Answer": 4},
     //  {"Question": "J15Q34.PNG",
     //   "Answer": 1},
     //  {"Question": "J15Q35.PNG",
     //   "Answer": 2},
     //  {"Question": "J15Q36.PNG",
     //   "Answer": 2},
     //  {"Question": "J15Q37.PNG",
     //   "Answer": 1},
     //  {"Question": "J15Q38.PNG",
     //   "Answer": 4},
     //  {"Question": "J15Q39.PNG",
     //   "Answer": 4},
     //  {"Question": "J15Q40.PNG",
     //   "Answer": 1},
     //  {"Question": "J15Q41.PNG",
     //   "Answer": 4},
     //  {"Question": "J1Q42.PNG",
     //   "Answer": 3},
     //  {"Question": "J15Q43.PNG",
     //   "Answer": 1},
     //  {"Question": "J15Q44.PNG",
     //   "Answer": 2},
     //  {"Question": "J15Q45.PNG",
     //   "Answer": 3},
     //  {"Question": "J15Q46.PNG",
     //   "Answer": 4},
     //  {"Question": "J15Q47.PNG",
     //   "Answer": 3},
     //  {"Question": "J15Q48.PNG",
     //   "Answer": 3},
     //  {"Question": "J15Q49.PNG",
     //   "Answer": 2},
     //  {"Question": "J15Q50.PNG",
     //   "Answer": 1}, 
      
     //  //June 2009 Problems
     // {"Question": "J09Q1.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q1.mp4",
     //  "Key Idea": "5.1"},
     // {"Question": "J09Q2.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q2.mp4",
     //  "Key Idea": "5.1.vi"},
     // {"Question": "J09Q3.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q3.mp4",
     //  "Key Idea": "5.1a"},
     // {"Question": "J09Q4.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q4.mp4",
     //  "Key Idea": "5.1"},
     // {"Question": "J09Q5.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q5.mp4",
     //  "Key Idea": "5.1"},
     // {"Question": "J09Q6.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q6.WMV",
     //  "Key Idea": "5.1h"},
     //  {"Question": "J09Q7.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q7.mp4",
     //  "Key Idea": "5.1.xi"},
     //  {"Question": "J09Q8.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q8.mp4",
     //  "Key Idea": "5.1.xi"},
     //  {"Question": "J09Q9.PNG",
     //  "Answer": 4,
     //  "Key Idea": "5.1i"},
     //  {"Question": "J09Q10.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q10.mp4",
     //  "Key Idea": "5.1.ix"},
     //  {"Question": "J09Q11.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q11.mp4",
     //  "Key Idea": "5.1.viii"},
     //  {"Question": "J09Q12.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q12.mp4",
     //  "Key Idea": "5.1.ix"},
     //  {"Question": "J09Q13.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q13.mp4",
     //  "Key Idea": "4.1.vii"},
     //  {"Question": "J09Q14.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q14.mp4",
     //  "Key Idea": "4.1.i"},
     //  {"Question": "J09Q15.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q15.mp4",
     //  "Key Idea": "4.1.i"},
     //  {"Question": "J09Q16.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q16.mp4",
     //  "Key Idea": "4.1.iii"},
     //  {"Question": "J09Q17.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q17.mp4",
     //  "Key Idea": "3.1"},
     //  {"Question": "J09Q18.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q18.mp4",
     //  "Key Idea": "4.1.xi"},
     //  {"Question": "J09Q19.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q19.mp4",
     //  "Key Idea": "4.1.viii"},
     //  {"Question": "J09Q20.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q20.mp4",
     //  "Key Idea": "4.1p"},
     //  {"Question": "J09Q21.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q21.mp4",
     //  "Key Idea": "5.1s"},
     //  {"Question": "J09Q22.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q22.mp4",
     //  "Key Idea": "5.1t"},
     //  {"Question": "J09Q23.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q23.mp4",
     //  "Key Idea": "4.3i"},
     //  {"Question": "J09Q24.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q24.mp4",
     //  "Key Idea": "4.3d"},
     //  {"Question": "J09Q25.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q25.mp4",
     //  "Key Idea": "4.3i"},
     //  {"Question": "J09Q26.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q26.mp4",
     //  "Key Idea": "4.3i"},
     //  {"Question": "J09Q27.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q27.mp4",
     //  "Key Idea": "4.3.viii"},
     //  {"Question": "J09Q28.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q28.mp4",
     //  "Key Idea": "4.3.vii"},
     //  {"Question": "J09Q29.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q29.mp4",
     //  "Key Idea": "4.3.vi"},
     //  {"Question": "J09Q30.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q30.mp4",
     //  "Key Idea": "4.3f"},
     //  {"Question": "J09Q31.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q31.mp4",
     //  "Key Idea": "5.3b"},
     //  {"Question": "J09Q32.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q32.mp4",
     //  "Key Idea": "5.3i"},
     //  {"Question": "J09Q33.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q33.mp4",
     //  "Key Idea": "5.3c"},
     //  {"Question": "J09Q34.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q34.mp4",
     //  "Key Idea": "3.1"},
     //  {"Question": "J09Q35.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q35.mp4",
     //  "Key Idea": "***"},
     //  {"Question": "J09Q36.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q36.mp4",
     //  "Key Idea": "3.1"},
     //  {"Question": "J09Q37.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q37.mp4",
     //  "Key Idea": "5.1.ii"},
     //  {"Question": "J09Q38.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q38.mp4",
     //  "Key Idea": "5.`.ii"},
     //  {"Question": "J09Q39.PNG",
     //  "Answer": 2,
     //  "Video": "J09Q39.mp4",
     //  "Key Idea": "5.1.iii"},
     //  {"Question": "J09Q40.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q40.mp4",
     //  "Key Idea": "5.1p"},
     //  {"Question": "J09Q41.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q41.mp4",
     //  "Key Idea": "5.1.ii"},
     //  {"Question": "J09Q42.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q42.mp4",
     //  "Key Idea": "4.1.i"},
     //  {"Question": "J09Q43.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q43.mp4",
     //  "Key Idea": "***"},
     //  {"Question": "J09Q44.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q44.mp4",
     //  "Key Idea": "5.3d"},
     //  {"Question": "J09Q45.PNG",
     //  "Answer": 1,
     //  "Video": "J09Q45.mp4",
     //  "Key Idea": "***"},
     //  {"Question": "J09Q46.PNG",
     //  "Answer": 4,
     //  "Video": "J09Q46.mp4",
     //  "Key Idea": "4.1.viii"},
     //  {"Question": "J09Q47.PNG",
     //  "Answer": 3,
     //  "Video": "J09Q47.mp4",
     //  "Key Idea": "4.1.xii"}
     
      
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
    vidbtn.classList.remove("hidden");
    videoSolution.innerHTML = ``;
    greatjob.innerHTML = ``;
    
});

submitbtn.addEventListener("click", e => {
    
    var i;
    for (i = 0; i<4; i++) { 
        console.log(userChoices[i]);
        if (userChoices[i].checked == true) {
            if (userChoices[i].value == questionBank[randomNumber]["Answer"]) {
                results.innerHTML = `Your answer is correct!`;
                score+=5;
                scorediv.innerHTML = `+5! Your score is ${score}`;
                questionProgress+=1;
                progressBar.innerHTML = `${questionProgress} out of 100`;
                sendApiRequest();
                
                
            }else {
                results.innerHTML = `Your answer is incorrect!`;
                scorediv.innerHTML = `+0 Your score is ${score}`;
                scorediv.innerHTML = `Your score is ${score}`;
            }
        }
    }
    btn.disabled = false;
    submitbtn.disabled = true;
    vidbtn.disabled = false;
    anotherbtn.classList.remove("hidden");
});


vidbtn.addEventListener("click", e=> {
 videoSolution.innerHTML = `<video width="800" height="600" controls>
 <source src="${questionBank[randomNumber]["Video"]}" type="video/mp4">`;
 vidbtn.disabled = true;
});


anotherbtn.addEventListener("click", e=>{
    console.log("I've been clicked!");
    var i;
    var tempQuestPool = [];
    for(i=0; i<questionBank.length; i++) {
        if(questionBank[i]["Key Idea"] == questionBank[randomNumber]["Key Idea"]) {
            tempQuestPool.push(questionBank[i]);
            console.log(tempQuestPool);
            }
            else{
             results.innerHTML = `This is a unique problem!`;
            }
    }
    randomNumber = Math.floor(Math.random()*tempQuestPool.length);
    randomProblem = tempQuestPool[randomNumber]["Question"];
    problem.innerHTML = `<img src = "${randomProblem}" class = "center">`;
    checkboxes.classList.remove("hidden");
    // btn.disabled = true;
    // submitbtn.disabled = false;
    vidbtn.classList.remove("hidden");
    videoSolution.innerHTML = ``;
})


// sendScore.addEventListener("click", e => {
 
// })

function sendApiRequest() {
  
    fetch("https://api.giphy.com/v1/gifs/search?api_key=6VXurE8MlzSUm8F4sYoXHHNUaQdvi1Zz&q=wow&limit=100&offset=0&rating=G&lang=en")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      // Pass the JSON on to the next function.
    let myURL = getImageURLfrom(json);
    addImageToScreen(myURL);
    });
}

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getImageURLfrom(myJSON) {
  console.log(myJSON.data[randomNumber].images.original.url);
  return myJSON.data[randomNumber].images.original.url;
}

// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  let greatjob = document.querySelector("#greatjob");
  greatjob.innerHTML = `<img src="${myURL}" class="center">`;
}








// gustavo wuz here

////////////////////////////////////////////////////////////////

//Self-reflection piece.  input textbox   


