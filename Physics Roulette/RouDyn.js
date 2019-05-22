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
 //June 2018 Questions
 {"Question": "Images/physImgs/PHY June 2018/J18Q1.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q2.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q3.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q4.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q5.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q6.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q7.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q8.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q9.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q10.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q11.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q12.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q13.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q14.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q15.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q16.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q17.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q18.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q19.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q20.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q21.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q22.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q23.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q24.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q25.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q26.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q27.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q28.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q29.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q30.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q31.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q32.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q33.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q34.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q35.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q36.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q37.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q38.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q39.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q40.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q41.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q42.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q43.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q44.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q45.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q46.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q47.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q48.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q49.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 {"Question": "Images/physImgs/PHY June 2018/J18Q50.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "",
  "Topic": ""
 },
 
 // June 2017 Questions
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q1.PNG",
  "Answer": 2,
  "Key Idea": "5.1a",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 1.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q2.PNG",
  "Answer": 3,
  "Key Idea": "5.1.vi",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 2.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q3.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 3.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q4.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 4.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q5.PNG",
  "Answer": 4,
  "Key Idea": "5.1.iii",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 5.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q6.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 6.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q7.PNG",
  "Answer": 3,
  "Key Idea": "5.1.iii",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 7.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q8.PNG",
  "Answer": 1,
  "Key Idea": "5.1.viii",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 8.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q9.PNG",
  "Answer": 2,
  "Key Idea": "4.3.vii",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 9.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q10.PNG",
  "Answer": 3,
  "Key Idea": "5.1s",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 10.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q11.PNG",
  "Answer": 4,
  "Key Idea": "5.1.xii",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 11.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q12.PNG",
  "Answer": 3,
  "Key Idea": "5.1.xi",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 12.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q13.PNG",
  "Answer": 2,
  "Key Idea": "4.1p",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 13.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q14.PNG",
  "Answer": 2,
  "Key Idea": "5.1t",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 14.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q15.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 15.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q16.PNG",
  "Answer": 3,
  "Key Idea": "5.3i",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 16.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q17.PNG",
  "Answer": 1,
  "Key Idea": "5.3i",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 17.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q18.PNG",
  "Answer": 4,
  "Key Idea": "4.1l",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 18.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q19.PNG",
  "Answer": 2,
  "Key Idea": "4.1i",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 19.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q20.PNG",
  "Answer": 3,
  "Key Idea": "4.1.xiv",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 20.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q21.PNG",
  "Answer": 4,
  "Key Idea": "4.1p",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 21.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q22.PNG",
  "Answer": 1,
  "Key Idea": "4.1i",
  "Video": "",
  "Topic": "Videos/PhysVids/June 2017/June 2017 - Number 22.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q23.PNG",
  "Answer": 2,
  "Key Idea": "4.3b",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 23.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q24.PNG",
  "Answer": 3,
  "Key Idea": "4.3f",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 24.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q25.PNG",
  "Answer": 3,
  "Key Idea": "4.3d",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 25.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q26.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 26.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q27.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 27.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q28.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 28.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q29.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 29.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q30.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 30.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q31.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 31.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q32.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 32.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q33.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 33.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q34.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 34.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q35.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 35.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q36.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 36.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q37.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 37.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q38.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 38.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q39.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 39.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q40.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 40.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q41.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 41.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q42.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 42.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q43.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 43.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q44.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 44.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q45.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 45.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q46.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 46.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q47.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 47.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q48.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 48.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q49.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 49.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2017/J17Q50.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2017/June 2017 - Number 50.mp4",
  "Topic": ""
 },
 //June 2016 Problems
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q1.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 1.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q2.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 2.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q3.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 3.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q4.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 4.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q5.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 5.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q6.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 6.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q7.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 7.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q8.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 8.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q9.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 9.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q10.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 10.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q11.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 11.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q12.JPG",
  "Answer": 2,
  "Key Idea": "Videos/PhysVids/June 2016/June 2016 - Number 12.mp4",
  "Video": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q13.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 13.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q14.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 14.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q15.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 15.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q16.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 16.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q17.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 17.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q18.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 18.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q19.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 19.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q20.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 20.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q21.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 21.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q22.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 22.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q23.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 23.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q24.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 24.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q25.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 25.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q26.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 26.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q27.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 27.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q28.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 28.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q29.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 29.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q30.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 30.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q31.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 31.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q32.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 32.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q33.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 33.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q34.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 34.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q35.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 35.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q36.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 36.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q37.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 37.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q38.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 38.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q39.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 39.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q40.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 40.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q41.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 41.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q42.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 42.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q43.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 43.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q44.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 44.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q45.JPG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 45.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q46.JPG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 46.wmv",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q47.JPG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 47.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q48.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 48.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q49.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 49.mp4",
  "Topic": ""
 },
 {
  "Question": "Images/physImgs/PHY June 2016/J16Q50.JPG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2016/June 2016 - Number 50.mp4",
  "Topic": ""
 },
 //June 2015 Problems
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q1.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 1.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q2.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 2.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q3.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 3.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q4.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 4.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q5.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 5.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q6.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 6.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q7.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 7.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q8.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 8.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q9.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 9.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q10.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 10.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q11.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 11.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q12.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 12.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q13.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 13.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q14.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 14.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q15.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 15.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q16.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 16.wmv"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q17.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 17.wmv"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q18.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 18.wmv"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q19.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 19.wmv"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q20.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 20.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q21.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 21.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q22.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 22.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q23.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 23.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q24.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 24.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q25.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 25.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q26.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 26.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q27.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 27.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q28.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 28.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q29.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 29.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q30.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 30.wmv"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q31.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 31.wmv"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q32.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 32.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q33.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 33.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q34.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 34.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q35.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 35.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q36.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 36.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q37.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 37.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q38.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 38.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q39.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 39.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q40.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 40.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q41.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 41.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q42.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 42.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q43.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 43.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q44.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 45.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q45.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 46.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q46.PNG",
  "Answer": 4,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 46.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q47.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 47.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q48.PNG",
  "Answer": 3,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 48.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q49.PNG",
  "Answer": 2,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 49.mp4"
 },
 {
  "Question": "Images/physImgs/PHY June 2015/J15Q50.PNG",
  "Answer": 1,
  "Key Idea": "",
  "Video": "Videos/PhysVids/June 2015/June 2015 - Number 50.mp4"
 },

 //  //June 2009 Problems
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q1.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q1.mp4",
  "Key Idea": "5.1"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q2.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q2.mp4",
  "Key Idea": "5.1.vi"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q3.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q3.mp4",
  "Key Idea": "5.1a"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q4.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q4.mp4",
  "Key Idea": "5.1"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q5.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q5.mp4",
  "Key Idea": "5.1"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q6.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q6.WMV",
  "Key Idea": "5.1h"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q7.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q7.mp4",
  "Key Idea": "5.1.xi"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q8.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q8.mp4",
  "Key Idea": "5.1.xi"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q9.PNG",
  "Answer": 4,
  "Key Idea": "5.1i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q10.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q10.mp4",
  "Key Idea": "5.1.ix"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q11.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q11.mp4",
  "Key Idea": "5.1.viii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q12.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q12.mp4",
  "Key Idea": "5.1.ix"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q13.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q13.mp4",
  "Key Idea": "4.1.vii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q14.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q14.mp4",
  "Key Idea": "4.1.i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q15.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q15.mp4",
  "Key Idea": "4.1.i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q16.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q16.mp4",
  "Key Idea": "4.1.iii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q17.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q17.mp4",
  "Key Idea": "3.1"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q18.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q18.mp4",
  "Key Idea": "4.1.xi"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q19.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q19.mp4",
  "Key Idea": "4.1.viii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q20.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q20.mp4",
  "Key Idea": "4.1p"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q21.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q21.mp4",
  "Key Idea": "5.1s"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q22.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q22.mp4",
  "Key Idea": "5.1t"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q23.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q23.mp4",
  "Key Idea": "4.3i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q24.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q24.mp4",
  "Key Idea": "4.3d"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q25.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q25.mp4",
  "Key Idea": "4.3i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q26.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q26.mp4",
  "Key Idea": "4.3i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q27.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q27.mp4",
  "Key Idea": "4.3.viii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q28.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q28.mp4",
  "Key Idea": "4.3.vii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q29.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q29.mp4",
  "Key Idea": "4.3.vi"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q30.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q30.mp4",
  "Key Idea": "4.3f"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q31.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q31.mp4",
  "Key Idea": "5.3b"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q32.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q32.mp4",
  "Key Idea": "5.3i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q33.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q33.mp4",
  "Key Idea": "5.3c"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q34.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q34.mp4",
  "Key Idea": "3.1"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q35.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q35.mp4",
  "Key Idea": "***"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q36.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q36.mp4",
  "Key Idea": "3.1"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q37.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q37.mp4",
  "Key Idea": "5.1.ii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q38.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q38.mp4",
  "Key Idea": "5.`.ii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q39.PNG",
  "Answer": 2,
  "Video": "Images/physImgs/PHY June 2009/J09Q39.mp4",
  "Key Idea": "5.1.iii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q40.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q40.mp4",
  "Key Idea": "5.1p"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q41.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q41.mp4",
  "Key Idea": "5.1.ii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q42.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q42.mp4",
  "Key Idea": "4.1.i"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q43.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q43.mp4",
  "Key Idea": "***"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q44.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q44.mp4",
  "Key Idea": "5.3d"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q45.PNG",
  "Answer": 1,
  "Video": "Images/physImgs/PHY June 2009/J09Q45.mp4",
  "Key Idea": "***"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q46.PNG",
  "Answer": 4,
  "Video": "Images/physImgs/PHY June 2009/J09Q46.mp4",
  "Key Idea": "4.1.viii"
 },
 {
  "Question": "Images/physImgs/PHY June 2009/J09Q47.PNG",
  "Answer": 3,
  "Video": "Images/physImgs/PHY June 2009/J09Q47.mp4",
  "Key Idea": "4.1.xii"
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
 vidbtn.classList.remove("hidden");
 videoSolution.innerHTML = ``;
 greatjob.innerHTML = ``;
 if (questionBank[randomNumber]["Video"] != undefined){
  problem.innerHTML +=`Video is available!`
 }
 console.log(randomProblem)
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
 vidbtn.disabled = false;
 anotherbtn.classList.remove("hidden");
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