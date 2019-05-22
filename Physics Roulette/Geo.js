let btn = document.querySelector("#Geobtn");
let problem = document.querySelector("#Geoproblem");
let checkboxes = document.querySelector("#Geocheckboxes");
let submitbtn = document.querySelector("#Geosubmitbtn");
let results = document.querySelector("#Georesults");
let userChoices = document.querySelectorAll(".ans");
let scorediv = document.querySelector("#geoScoreDiv");
let score = 0;
let vidbtn = document.querySelector("#Geovidbtn");
let videoSolution = document.querySelector("#GeovideoSolution");
let anotherbtn = document.querySelector("#Geoanother");
let greatjob = document.querySelector("#Geogreatjob");
let progressBar = document.querySelector("#Geoprogress");
var questionProgress = 0;

// let sendScore = document.querySelector("#sendScore");
// let ESlink = document.querySelector("ES_Rou.html");
// let mainlink = document.querySelector("#mainlink");

let questionBank = [
    //June 2018
    {
        "Question": "Images/goeImgs/GeoJ2018Q1.JPG",
        "Answer": 1,
        "Key Idea": ""
    },
    {
        "Question": "Images/geoImgs/GeoJ2018Q2.JPG",
        "Answer": 3,
        "Key Idea": ""
    },
    {
        "Question": "Images/geoImgs/GeoJ2018Q3.JPG",
        "Answer": 4,
        "Key Idea": ""
    },
    {
        "Question": "Images/geoImgs/GeoJ2018Q4.JPG",
        "Answer": 3,
        "Key Idea": ""
    },
    {
        "Question": "Images/geoImgs/GeoJ2018Q5.JPG",
        "Answer": 4,
        "Key Idea": ""
    }

];

// ESlink.addEventListener("hover", e=> {
//  mainlink.
// })

let randomNumber = Math.floor(Math.random() * questionBank.length);
let randomProblem = questionBank[randomNumber]["Question"];


btn.addEventListener("click", e => {
    var i;
    for (i = 0; i < 4; i++) {
        userChoices[i].checked = false;
    }
    results.innerHTML = ``;
    randomNumber = Math.floor(Math.random() * questionBank.length);
    randomProblem = questionBank[randomNumber]["Question"];
    problem.innerHTML = `<img src = "${randomProblem}" class = "center">`;
    checkboxes.classList.remove("hidden");
    submitbtn.classList.remove("disabled")
    btn.classList.add("disabled")
    // btn.disabled = true;
    // submitbtn.disabled = false;
    vidbtn.classList.add("hide");
    anotherbtn.classList.add("hide");
    videoSolution.innerHTML = ``;
    greatjob.innerHTML = ``;

});



//Side Nav JS
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});


submitbtn.addEventListener("click", e => {

    var i;
    for (i = 0; i < 4; i++) {
        console.log(userChoices[i]);
        btn.classList.remove("disabled")
        submitbtn.classList.add("disabled")
        if (userChoices[i].checked == true) {
            if (userChoices[i].value == questionBank[randomNumber]["Answer"]) {
                results.innerHTML = `Your answer is correct!`;
                score += 5;
                scorediv.innerHTML = `+5! Your score is ${score}`;
                questionProgress += 1;
                progressBar.innerHTML = `${questionProgress} out of 100`;
                sendApiRequest();


            }
            else {
                results.innerHTML = `Your answer is incorrect!`;
                scorediv.innerHTML = `+0 Your score is ${score}`;
                scorediv.innerHTML = `Your score is ${score}`;
            }
        }
    }
    // btn.disabled = false;
    // submitbtn.disabled = true;
    vidbtn.classList.remove('hide')
    anotherbtn.classList.remove("hide");
});


vidbtn.addEventListener("click", e => {
    videoSolution.innerHTML = `<video width="800" height="600" controls>
 <source src="${questionBank[randomNumber]["Video"]}" type="video/mp4">`;
    vidbtn.disabled = true;
});


anotherbtn.addEventListener("click", e => {
    console.log("I've been clicked!");
    var i;
    var tempQuestPool = [];
    for (i = 0; i < questionBank.length; i++) {
        if (questionBank[i]["Key Idea"] == questionBank[randomNumber]["Key Idea"]) {
            tempQuestPool.push(questionBank[i]);
            console.log(tempQuestPool);
        }
        else {
            results.innerHTML = `This is a unique problem!`;
        }
    }
    randomNumber = Math.floor(Math.random() * tempQuestPool.length);
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

// If 3 questions in question pool wrong, reset the pool
// If # questions wrong in a row, prevent from moving forward (make watch a video)
