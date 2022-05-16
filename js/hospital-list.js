let taichungHospitalData = [];
let taichungDistrictData = [];
const h2 = document.querySelector('h2');
const hospitalCards = document.querySelector('.hospital-cards');
const searchBtn = document.querySelector('.btn-search');

let hospitalList;
let zipCode;
// 篩檢項目的檢查值陣列
let checkItems = [];

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
      console.log(hospitalList);
    });
}

// 監聽 select change 事件
selectDist.addEventListener('change', function () {
  zipCode = selectDist.value;

  return;
  let allCards = document.querySelectorAll('.card');

  allCards.forEach((card) => {
    card.classList.add('d-none');
    let district = card.dataset.dist;
    if (district == selectDist.value) {
      card.classList.remove('d-none');
    }
  });
});

// 監聽 button click 事件
searchBtn.addEventListener('click', function () {
  // 有選取的篩檢項目
  let choices = document.querySelectorAll('.search-choice input:checked');

  let checkString = '';
  // 先清空檢查值陣列
  checkItems = [];
  choices.forEach((item) => {
    checkItems.push(item.value);

    checkString +=
      checkString === '' ? item.dataset.name : '、' + item.dataset.name;
  });

  if (checkItems.length < 1) {
    alert('請選擇篩檢項目');
    return false;
  }
  // 將卡片資料清空
  hospitalCards.innerHTML = '';
  // h2 顯示搜尋 地區/篩檢項目
  h2.innerHTML = districtJson[zipCode] + ' / ' + checkString;
  // 處理資料
  process();
});

// 依據 zipCode 分別處理資料
function process() {
  if (zipCode == 'all') {
    for(let index in hospitalList) {
      doFilter(hospitalList[index]);
    }
  } else {
    doFilter(hospitalList[zipCode]);
  }
}

// 檢出符合查詢條件的醫院
function doFilter(items) {
  items.forEach((item) => {
    checkItems.forEach((primeNum) => {
      // 被整除 = 此機構有提供這個檢查項目
      if (item.checkCode % primeNum === 0) {
        showCard(item);
      }
    });
  });
}

// 生成卡片 & 顯示
function showCard(item) {
  hospitalCards.innerHTML += `
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-text row flex-nowrap align-items-center no-gutters">
            <span>地址 : ${item.address}</span>
            <a href="${
              item.mapUrl
            }" class="icon-location" target="_blank" title="前往 Google Map"
              ></a>
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

// 將內容塞進HTML中
function insertIntoHtml() {
  taichungDistrictData.forEach((district) => {
    taichungHospitalData[district].forEach((hospital) => {
      let items = '';
      if (hospital.colorectalCancerCheck) {
        items +=
          '<span class="fz-12 text-nowrap border rounded m-1 p-1">糞便潛血檢查</span>';
      }
      if (hospital.oralCancerCheck) {
        items +=
          '<span class="fz-12 text-nowrap border rounded m-1 p-1">口腔黏膜檢查</span>';
      }
      if (hospital.breastCancerCheck) {
        items +=
          '<span class="fz-12 text-nowrap border rounded m-1 p-1">乳房X光攝影檢查</span>';
      }
      if (hospital.uterineCancerCheck) {
        items +=
          '<span class="fz-12 text-nowrap border rounded m-1 p-1">子宮頸抹片檢查</span>';
      }
      hospitalCards.innerHTML += `
        <div class="card col-md-6 col-sm-12 m-2 d-none" data-dist="${district}">
          <div class="card-body">
            <h3 class="card-title">${hospital.name}</h3>
            <p class="card-text">地址：${hospital.address} <a href="https://www.google.com/search?tbm=map&authuser=0&hl=zh-TW&gl=tw&q=${hospital.name}+${hospital.address}" target="_blank" title="前往 Google Map"><i class="fa-solid fa-location-dot red"></i></a><br>
              電話：${hospital.tel}<br>
              提供篩檢項目：${items}<br>
            </p>
          </div>
        </div>`;
    });
  });
}
