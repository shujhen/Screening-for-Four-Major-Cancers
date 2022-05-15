let districtArray = [
  '大甲區',
  '大安區',
  '大肚區',
  '大里區',
  '大雅區',
  '中區',
  '太平區',
  '北屯區',
  '北區',
  '外埔區',
  '石岡區',
  '后里區',
  '西屯區',
  '西區',
  '沙鹿區',
  '和平區',
  '東區',
  '東勢區',
  '南屯區',
  '南區',
  '烏日區',
  '神岡區',
  '梧棲區',
  '清水區',
  '新社區',
  '潭子區',
  '龍井區',
  '豐原區',
  '霧峰區',
];

const selectDist = document.querySelector('#selectDist');
districtArray.forEach((district) => {
  selectDist.innerHTML += `<option value="${district}">${district}</option>`;
});