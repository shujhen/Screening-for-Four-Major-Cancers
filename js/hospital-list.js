let taichungHospitalData = [];
let taichungDistrictData = [];
const h2 = document.querySelector('h2');
const hospitalCards = document.querySelector('.hospital-cards');
const searchBtn = document.querySelector('.btn-search');

let hospitalList;
let zipCode = 'all';

// 篩檢項目要全部符合(精準查詢)
let totalMatch = 1;
// 篩檢項目的檢查值陣列
let checkItems = [];

let cardsData = '';

// call API
fetch_data('json/hospital-list.json');
// 取得 API 資料
function fetch_data(url) {
  // 非同步處理
  fetch(url)
    // response 會是一個 Response資料組
    .then(function (response) {
      // json() 會將資料轉換成可供 javascript 使用的JSON
      return response.json();
    })
    .then(function (data) {
      hospitalList = data;

      // 判斷有傳入網址參數
      let getUrlString = location.href;
      let url = new URL(getUrlString);
      let options = url.searchParams.get('options');
      if (options) {
        let choices = document.querySelectorAll(
          '.search-choice input[type="checkbox"]'
        );
        choices.forEach((item) => {
          if (options % item.value == 0) {
            item.checked = true;
          }
        });
        organize();
      }
    });
}

function organize() {
  // 有選取的篩檢項目
  let choices = document.querySelectorAll('.search-choice input:checked');

  // 清空項目字串
  let checkString = '';
  // 篩檢項目要全部符合(精準查詢)
  totalMatch = 1;
  // 先清空檢查值陣列
  checkItems = [];

  choices.forEach((item) => {
    totalMatch *= item.value * 1;
    checkItems.push(item.value);

    checkString +=
      checkString === '' ? item.dataset.name : '、' + item.dataset.name;
  });

  if (checkItems.length < 1) {
    $('#alertModal').modal('toggle')
    return false;
  }
  // 將卡片資料清空
  hospitalCards.innerHTML = '<p class="w-100 mb-150">查無機構資料</p>';
  // 清空暫存字串
  cardsData = '';
  // h2 顯示搜尋 地區/篩檢項目
  h2.innerHTML =
    (districtJson[zipCode] ? districtJson[zipCode] : '全區') +
    ' / ' +
    checkString;
  // 處理資料
  process();
}

// 依據 zipCode 分別處理資料
function process() {
  if (zipCode === 'all') {
    for (let index in hospitalList) {
      doFilter(hospitalList[index]);
    }
  } else {
    doFilter(hospitalList[zipCode]);
  }
}

// 檢出符合查詢條件的醫院
function doFilter(items) {
  items.forEach((item) => {
    // 機構完全符合檢查項目(精準查詢)
    if (item.checkCode % totalMatch === 0) {
      showCard(item);
    }
    // 模糊查詢
    // checkItems.forEach((primeNum) => {
    //   // 此機構有提供其中一個檢查項目(模糊查詢)
    //   if (item.checkCode % primeNum === 0) {
    //     showCard(item);
    //   }
    // });
  });

  hospitalCards.innerHTML = cardsData + '<div class="w-100 mb-100"></div>';
}

// 生成卡片 & 顯示
function showCard(item) {
  cardsData += `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-text row flex-nowrap align-items-center no-gutters">
          <span>地址 : ${item.address}</span>`;
  if (item.mapUrl) {
    cardsData += `
            <a href="${item.mapUrl}" class="icon-location" target="_blank" title="前往 Google Map"></a>`;
  }
  cardsData += `
        </p>
        <p class="card-text">電話 : ${item.tel}</p>
        <div class="search-result-icons row no-gutters">
          <div class="icon-cancer icon-5 ${
            item.checkCode % 5 === 0 ? 'active' : 'none'
          }"></div>
          <div class="icon-cancer icon-2 ${
            item.checkCode % 2 === 0 ? 'active' : 'none'
          }"></div>
          <div class="icon-cancer icon-7 ${
            item.checkCode % 7 === 0 ? 'active' : 'none'
          }"></div>
          <div class="icon-cancer icon-3 ${
            item.checkCode % 3 === 0 ? 'active' : 'none'
          }"></div>
        </div>
      </div>
    </div>
  `;
}

// 監聽 select change 事件
selectDist.addEventListener('change', function () {
  zipCode = selectDist.value;

  return;
});
// 監聽 button click 事件
searchBtn.addEventListener('click', organize);
