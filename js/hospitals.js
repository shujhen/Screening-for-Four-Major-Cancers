
let taichungHospitalData = [];
let taichungDistrictData = [];
const dist = document.querySelector('.dist');
const selectDist = document.querySelector('.selectDist');
const hospitalCards = document.querySelector('.hospital-cards');

districtArray.forEach((district) => {
  selectDist.innerHTML += `<option value="${district}">${district}</option>`;
});

// call API
fetch_data(
  'https://datacenter.taichung.gov.tw/swagger/OpenData/d07c49df-8069-4fec-9aaf-09960a67bb76'
);
// 取得 API 資料
function fetch_data(url) {
  // 非同步處理
  fetch(url, { cache: 'default' })
    // response 會是一個 Response資料組
    .then(function (response) {
      // json() 會將資料轉換成可供 javascript 使用的JSON

      return response.json();
    })
    .then(function (data) {
      // 原始資料：
      // 乳房X光攝影檢查: "V"
      // 區域: "霧峰"
      // 口腔黏膜檢查: "V"
      // 地址: "霧峰區福新路222號"
      // 子宮頸抹片檢查: "V"
      // 糞便潛血檢查: "V"
      // 編號: "1"
      // 醫療院所名稱: "亞洲大學附屬醫院"
      // 電話: "04-37061668"
      process(data);
    });
}

// 處理資料
function process(data) {
  // 把所有資料跑一次做地區分組
  // 預計處理後產出：

  // taichungHospitalData = [
  //   "霧峰區":[
  //   "name": "亞洲大學附屬醫院",
  //   "address": "霧峰區福新路222號",
  //   "tel": "04-37061668",
  //   "lungCancerCheck": "V",
  //   "oralCancerCheck": "",
  //   "breastCancerCheck": "V",
  //   "colorectalCancerCheck": "",
  // ]]

  let district = '';
  data.forEach((hospital) => {
    let address = hospital['地址'];
    if (hospital['區域']) {
      district = hospital['區域'];
    }
    if (address.indexOf('台中巿') !== -1) {
      address = address.split('台中巿')[1];
    }
    if (address.indexOf('區') !== -1) {
      district = address.split('區')[0] + '區';
    } else {
      address = district + address;
    }
    if (taichungHospitalData[district] === undefined) {
      taichungHospitalData[district] = [];
      taichungDistrictData.push(district);
    }

    taichungHospitalData[district].push({
      name: hospital['醫療院所名稱'],
      address: '台中市' + address,
      tel: hospital['電話'],
      colorectalCancerCheck: hospital['糞便潛血檢查'],
      oralCancerCheck: hospital['口腔黏膜檢查'],
      breastCancerCheck: hospital['乳房X光攝影檢查'],
      uterineCancerCheck: hospital['子宮頸抹片檢查'],
    });
  });
  insertIntoHtml();
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
// 監聽 select change 事件
selectDist.addEventListener('change', function () {
  dist.innerHTML = `<h2 class="font-seto">${selectDist.value}</h2>`;
  let allCards = document.querySelectorAll('.card');

  allCards.forEach((card) => {
    card.classList.add('d-none');
    let district = card.dataset.dist;
    if (district == selectDist.value) {
      card.classList.remove('d-none');
    }
  });
});
