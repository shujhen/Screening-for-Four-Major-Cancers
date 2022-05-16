let districtJson = {
  400: '中區',
  401: '東區',
  402: '南區',
  403: '西區',
  404: '北區',
  406: '北屯',
  407: '西屯',
  408: '南屯',
  411: '太平',
  412: '大里',
  413: '霧峰',
  414: '烏日',
  420: '豐原',
  421: '后里',
  422: '石岡',
  423: '東勢',
  424: '和平',
  426: '新社',
  427: '潭子',
  428: '大雅',
  429: '神岡',
  432: '大肚',
  433: '沙鹿',
  434: '龍井',
  435: '梧棲',
  436: '清水',
  437: '大甲',
  438: '外埔',
  439: '大安',
};

const selectDist = document.querySelector('#selectDist');
for (let index in districtJson) {
  selectDist.innerHTML += `<option value="${index}">${districtJson[index]}</option>`;
}
