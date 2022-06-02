var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 13,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    799: {
      spaceBetween: 75,
    },
  },
});

// 首頁動畫區

function hideIframe() {
  const iframe = document.querySelector('iframe');
  iframe.style.display = 'none';
}

function not_ready() {
  $('#alertModal').modal('toggle');
}

function readyGo() {
  fetch_quizData();
}

// 測驗區
// 抓取的結果
let quizDataResult = [];
// 不重複的10個考題
let quiz = [];

function fetch_quizData() {
  fetch('quiz.csv')
    .then(function (quizResponse) {
      return quizResponse.blob();
    })
    .then(function (quizBlob) {
      const quizReader = new FileReader();
      quizReader.readAsText(quizBlob, 'big5');
      quizReader.onload = (quizText) => {
        let quizResult = quizText.target.result;
        let lines = quizResult.split('\r\n');
        let quizHeaders = lines[0].split(',');

        for (let i = 1; i < lines.length - 1; i++) {
          let obj = {};
          let currentline = lines[i].split(',');
          for (let j = 0; j < quizHeaders.length; j++) {
            obj[quizHeaders[j]] = currentline[j];
          }
          quizDataResult.push(obj);
        }
        quizChoice();
      };
    });
}

function quizChoice() {
  let quizLength = quizDataResult.length;
  let randomNum;
  let quizRandom = [];
  do {
    randomNum = Math.floor(Math.random() * quizLength);
    
    if (quizRandom.indexOf(randomNum) === -1){
      quizRandom.push(randomNum);
      quiz.push(quizDataResult[randomNum]);
    }
  } while (quizRandom.length < 10);
  console.log(quiz);
}
