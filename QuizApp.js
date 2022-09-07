function createCategory(){
    for(let i = 0; i < myApp.length; i++){
        const categoryList = document.createElement("div");
        categoryList.innerHTML = myApp[i].category;
        categoryList.setAttribute("data-id",i);
        categoryList.setAttribute("onclick","selectedCategory(this)");
        categoryBox.appendChild(categoryList);
    }
    }
    function selectedCategory(ele){
        categoryIndex = ele.getAttribute("data-id");
        categoryText.innerHTML = myApp(categoryIndex).category;
        quizHomeBox.classList.remove("show");
        quizBox.classList.add("show");
        startTimer();
        startEveryQuestionTimer()
        nextQuestion();
    }
function check(ele) {
    const id = ele.id;
    if(id == myApp[categroryIndex].quizWrap[questionIndex].answer){
        ele.classList.add("correct");
        score++;
        scoreBoard();
    }else{
        ele.classList.add("wrong");
        for(let i = 0; i < optionBox.children.length;i++)
        {
            if(
                optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer
            ){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions();
    showNextQuestionsBtn();
    if(number == myApp[categoryIndex].quizWrap.length){
        quizOver();
    }
}


nextQuestionBtn.addEventListener("click",nextQuestion);
function nextQuestion(){
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    clearInterval(everyQuestionInterval);
    startEveryQuestionTimer();
    hideTImeUpText();
}


function generateRandomQuestion(){
    const randomNumber = Math.floor(
        Math.random() * myApp[categoryIndex].quizWrap.length
    );
    let hitDuplicate = 0;
    if(myArray.length == 0){
        questionindex = randomwNumber;
    }else{
        for( let i = 0 ; i < myArray.length;i++){
            if(randomNumber == myArray[i]){
                hitDuplicate = 1 ;
            }
        }
        if(hitDuplicate == 1 ){
            generateRandomQuestion();
            return;
        }else {
            questionIndex = randomwNumber;
        }
    }
    myArray.push(randomNumber);
    console.log(myArray)
}


// scoreBoard
  function quizResult(){
    let calCTime = timeLimitGlobal - value;
    document.querySelector(".username-value").innerHTML = sessionStorage.getItem("username");
    takenTime.innerHTML = calCTime;
    document.querySelector(".total-question").innerHTML = myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHtml = attempt;
    document.querySelector(".total-correct").innerHTML = score;
    document.querySelector(".total-wrong").innerHTML = attempt - score; 
    const percentage = (score / myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";

    console.log("ans",perQuestionTimeStamps)
    let count = 1
     perQuestionResult.innerHTML = perQuestionTimeStamps.map(
        (data)=>(
            `<div class = "res-data">Q${count++}- ${data} secs</div>)`
        )
     )
//   }


  myApp = [
    {
        category: "Pipes and Cisterns",
        quizWrap: [
        {
        question:
        "Two pipes A and B can fill a tank in 15 minutes and 20 minutes
        respectively. Both the pipes are opened together but after 4 minutes, pipe
        A is turned off. What is the total time required to fill the tank?",
        
        options: [
        "10 min. 20 sec.",
        
        "11 min. 45 sec.",
        "11 min. 45 sec.",
        "14 min. 40 sec.",
        ],
        answer: 3,
        },

        "13 min 10 sec.",
        "14 min 40 sec.",
        ],
        answer: 3,
        },
        ],
        }]
const startingMinutes = 20;
 let val = startingMinutes * 60 ;
 const countdownEl = document.getElementById('countdown');
    setInterval(updateCountdown , 1000)
 function updateCountdown(){
    const minutes = Math.floor(val/60);
    let seconds = val % 60;
    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    val--;
 }


 const startingSeconds= 30;
 let times = startingMilliseconds * 60 ;
 const countdown1El = document.getElementsByid('coundown'); 

   setInterval(updateCountdown , 1000)

 function updateCountdown1(){
    const seconds = Math.floor(times/60);
    let milliseconds = times % 60;
    countdown1El.innerHTML = `${seconds} : ${milliseconds}`;
    times--;
 }
