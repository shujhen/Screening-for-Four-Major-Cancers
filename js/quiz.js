let quizCaption = document.querySelector('.quiz-caption');
let quizCount = document.querySelector('.quizCount');
let quizQuestion = document.querySelector('.quizQuestion');
let quizAnswer = document.querySelector('.quizAnswer');

quizDefault();
let quizReadygo = document.querySelector('.quizbtn-readyGo');
quizReadygo.addEventListener('click',quizGame);


function quizDefault(){
    quizCount.innerHTML = `
        <span class="textForCalling1">馬上來檢測你了解多少癌篩小知識吧!</span>
        <span class="textForCalling2">透過問答檢測<br>自己了解多少吧!</span>
    `
    quizQuestion.innerHTML = `
        <div class="justify-content-center quizImgs">
            <img src="./images/quiz/quiz-mouth.svg" alt="">
            <div class="spaceBetweenImage"></div>
            <img src="./images/quiz/quiz-breast.svg" alt="">
            <div class="spaceBetweenImage"></div>
            <img src="./images/quiz/quiz-biglong.svg" alt="">
            <div class="spaceBetweenImage"></div>
            <img src="./images/quiz/quiz-HIV.svg" alt="">
        </div>
    `
    quizAnswer.innerHTML =`
        <div class="row justify-content-center">
            <div class="quizbtn-readyGo quizbtn-game-bgSet justify-content-center align-items-center ">
                <div>開始測驗</div>
            </div>
        </div> 
    `      
};

//按鈕符號
// <div><img src="./images/quiz/linkbtn-play.svg" alt=""></div>

function quizGame(){
    quizCount.innerHTML ='';
    quizQuestion.innerHTML ='';
    quizAnswer.innerHTML ='';
    fetch_quizData();
   
    

    
};

function fetch_quizData() {
    fetch('quiz.csv')
    .then(function(quizResponse){
        return quizResponse.blob();
    })
    .then(function(quizBlob){          
        const quizReader = new FileReader();
	    quizReader.readAsText(quizBlob, 'big5');
        quizReader.onload = (quizText) => {
            var quizResult = quizText.target.result
            var lines = quizResult.split('\r\n');
            var quizDataResult = [];
            var quizHeaders = lines[0].split(",");

            for (var i = 1; i < lines.length - 1; i++) {
                var obj = {};
                var currentline = lines[i].split(",");
                for (var j = 0; j < quizHeaders.length; j++) {
                    obj[quizHeaders[j]] = currentline[j];
                }
                quizDataResult.push(obj);
            }
            quizChoice(quizDataResult)
	    };
    });
};

function quizChoice(quizDataResult) {
    // console.log(quizDataResult[0]);
    // quizCaption.innerHTML = quizDataResult[0].題目;

    var quizArr = [];
    var quizQuestions = [];
    for (var k = 0 ; k < quizDataResult.length ; k++) {
        quizArr.push(k);
    }
    for (var a = 1 ; a < 11 ; a++){
        var quizPosition = Math.floor(Math.random()*quizArr.length);
        quizQuestions[a - 1] = quizDataResult[quizPosition];
        quizArr.splice(quizPosition,1);
        console.log(quizQuestions[a - 1]);
    }
    var quizCube = [];
    // for (var b = 0 ; b < 10 ; b++){
        for ( var c = 1 ; c < 11 ; c++){
            quizCube.push(c);
            quizCount.innerHTML += `
            <div class="quizCubeForm" style="background-color: #392D2D; color:#FFFFFF; font-size:30px; float: left; width: 50px; height: 50px; margin:5px ">
                ${quizCube[c - 1]}
            </div>
            `
        }
        quizCount.innerHTML += '答對：0題' 
        

        quizQuestion.innerHTML = "Q9："+ quizQuestions[9].題目;
        
        quizAnswer.innerHTML = "Ans："+ quizQuestions[9].解說;
        console.log("Ans："+ quizQuestion[9].題目);

    // };



    // console.log(quizNewArr);
    // console.log(quizArr);

    

   
        
}



