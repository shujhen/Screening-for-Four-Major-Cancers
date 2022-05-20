const qualifyCheckSection = document.querySelector('.qualify-check-section');
const resultSection = document.querySelector('.result-section');
// 結果頁預設隱藏
resultSection.style.display = 'none';

let date = new Date();
let thisYear = date.getFullYear();
let firstYear = thisYear - 130;
let defaultYear = thisYear;
let optionStr = '';

for (let i = thisYear; i >= firstYear; i--) {
  if (thisYear - i === 30) {
    defaultYear = thisYear - i;
    optionStr += `<option value="${i}" selected>${i}</option>`;
  } else {
    optionStr += `<option value="${i}">${i}</option>`;
  }
}

const selectBirthYear = document.querySelector('#selectBirthYear');
selectBirthYear.innerHTML = optionStr;

const linkBtn = document.querySelector('.btn-link');
const checkBtn = document.querySelector('.btn-check');
// 按下查詢
checkBtn.addEventListener('click', function () {
  // 用來存基數乘積
  let checkOptionsNum = 1;
  // 用來存兩年內已篩檢項目陣列
  let skipOptionsArr = [];
  // 用來存顯示可篩檢項目陣列
  let checkOptionsArr = [];

  // 出生年
  let birthYear = parseInt(selectBirthYear.value);
  // 年齡
  let age = thisYear - birthYear;
  // 選擇的性別
  let genderValue = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  // 所有篩檢項目
  let choices = document.querySelectorAll('.check-choice input');

  choices.forEach(function (choice) {
    let choiceValue = choice.value;
    switch (choiceValue) {
      // 口腔癌(30歲~)
      case '5':
        if (choice.checked) {
          skipOptionsArr.push('口腔癌');
          // 還原勾選
          choice.checked = false;
        } else if (age >= 30) {
          checkOptionsNum *= choiceValue;
          checkOptionsArr.push('口腔癌');
        }
        break;
      // 乳癌(45~69歲)
      case '2':
        if (choice.checked) {
          skipOptionsArr.push('乳癌');
          // 還原勾選
          choice.checked = false;
        } else if (age >= 45 && age <= 69 && genderValue === 'female') {
          checkOptionsNum *= choiceValue;
          checkOptionsArr.push('乳癌');
        }
        break;
      // 大腸癌(50~74歲)
      case '7':
        if (choice.checked) {
          skipOptionsArr.push('大腸癌');
          // 還原勾選
          choice.checked = false;
        } else if (age >= 50 && age <= 74) {
          checkOptionsNum *= choiceValue;
          checkOptionsArr.push('大腸癌');
        }
        break;
      // 子宮頸癌(30歲~)
      case '3':
        if (choice.checked) {
          skipOptionsArr.push('子宮頸癌');
          // 還原勾選
          choice.checked = false;
        } else if (age >= 30 && genderValue === 'female') {
          checkOptionsNum *= choiceValue;
          checkOptionsArr.push('子宮頸癌');
        }
        break;
    }
  });

  const birthYearSpan = document.querySelector('.span-birth-year');
  const genderSpan = document.querySelector('.span-gender');
  const choicesSpan = document.querySelector('.span-choices');
  const result = document.querySelector('.p-line-2');

  // 查詢條件
  birthYearSpan.innerHTML = birthYear;
  genderSpan.innerHTML = genderValue === 'male' ? '男性' : '女性';

  let conditionStr =
    skipOptionsArr.length > 0
      ? '過去兩年曾做過' + skipOptionsArr.join('、') + '篩檢'
      : '過去兩年沒有做四癌篩檢';

  choicesSpan.innerHTML = conditionStr;

  // 查詢結果
  let resultStr =
    checkOptionsArr.length > 0
      ? checkOptionsArr.join('、')
      : '沒有篩檢補助項目唷!';

  result.innerHTML = resultStr;

  // 機構列表連結加上傳遞參數
  if (checkOptionsNum > 1) {
    linkBtn.href = 'hospital-list.html?options=' + checkOptionsNum;
  }
  // 切換顯示頁
  qualifyCheckSection.style.display = 'none';
  resultSection.style.display = 'flex';

  // 還原查詢頁的選項
  // 預設年份
  let optionBirthYear = document.querySelector(
    'option[value="' + defaultYear + '"]'
  );
  optionBirthYear.selected = true;
  // 預設男性
  let defaultGender = document.querySelector(
    'input[name="gender"][value="male"]'
  );
  defaultGender.checked = true;
});

// 重新查詢
function refresh() {
  // 切換顯示頁
  qualifyCheckSection.style.display = 'flex';
  resultSection.style.display = 'none';
}
