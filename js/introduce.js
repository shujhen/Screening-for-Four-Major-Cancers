let img = '<span><img src="./images/right-arrow.svg" alt=""></span>';
function changeText1() {
    let element = document.getElementById("btn1");
    let elementTitle = document.getElementById("title1");
    // 按鈕、title改變
    if (element.value == "口腔癌介紹"){
        element.value = "口腔癌篩檢介紹";
        element.innerHTML = "口腔癌篩檢介紹" + img;
        elementTitle.innerHTML = "口腔癌介紹";
    }else{
        element.value = "口腔癌介紹";
        element.innerHTML = "口腔癌介紹" + img;
        elementTitle.innerHTML = "口腔癌篩檢介紹";
    }
    
    // 文字改變
    let btn1_p1 = document.querySelector('.btn1_p1');
    let btn1_p2 = document.querySelector('.btn1_p2');
    if (element.value == "口腔癌介紹") {
        btn1_p1.innerHTML = "口腔黏膜檢查是由醫生目視或觸診口腔黏膜，看有沒有疑似癌前病變或癌症的病兆，不會疼痛，也沒有副作用。"
        btn1_p2.innerHTML = "檢查結果若為陰性，請持續每2年接受1次口腔黏膜檢查。若為陽性，請根據醫生指示做後續治療。"
    } else if (element.value = "口腔癌篩檢介紹") {
        btn1_p1.innerHTML = "口腔癌為我國青壯年（25-44歲）男性最容易發生的癌症，平均死亡年齡為54歲，較其他癌症早10年以上。"
        btn1_p2.innerHTML = "每年約有5,400名口腔癌個案，2,300人死於口腔癌，嚼檳榔、吸菸是造成口腔癌的主因。罹病後，輕則毀容，重則奪命。篩檢政策 國外研究顯示，口腔黏膜檢查可有效降低口腔癌之死亡率。"
    }
}

function changeText2() {
    let element = document.getElementById("btn2");
    let elementTitle = document.getElementById("title2");
    // 按鈕、title改變
    if (element.value == "乳癌介紹"){
        element.value = "乳癌篩檢介紹";
        element.innerHTML = "乳癌篩檢介紹" + img;
        elementTitle.innerHTML = "乳癌介紹";
    }else{
        element.value = "乳癌介紹";
        element.innerHTML = "乳癌介紹" + img;
        elementTitle.innerHTML = "乳癌篩檢介紹";
    }
    // 文字改變
    let btn2_p1 = document.querySelector('.btn2_p1');
    let btn2_p2 = document.querySelector('.btn2_p2');
    if (element.value == "乳癌介紹") {
        btn2_p1.innerHTML = "乳房X光攝影檢查過程中，女性放射師會以壓迫板緊壓乳房， 以獲得清晰的影像並減少輻射劑量，所以會有疼痛感。"
        btn2_p2.innerHTML = "檢查結果若無異常，請持續每2年接受1次乳房X光攝影檢查。若有無法確定診斷之變化，需再做其他影像檢查 。若有疑似良性變化，請3-6個月進行追蹤內檢查。吸菸是造成口腔癌的主因。罹病後，輕則毀容，重則奪命。篩檢政策 國外研究顯示，口腔黏膜檢查可有效降低口腔癌之死亡率。"
    } else if (element.value = "乳癌篩檢介紹") {
        btn2_p1.innerHTML = "乳癌為我國婦女發生率第1位之癌症，發生高峰約在45-69歲之間，約每十萬名婦女188-194人。"
        btn2_p2.innerHTML = "依據衛生福利部死因統計及國民健康署癌症登記資料顯示，每年有逾萬位婦女罹患乳癌，逾2,000名婦女死於乳癌，相當於每天約31位婦女被診斷罹患乳癌、6位婦女因乳癌而失去寶貴性命。定期乳房X光攝影篩檢是最重要的防治策略。"
    }
}
function changeText3() {
    let element = document.getElementById("btn3");
    let elementTitle = document.getElementById("title3");
    // 按鈕、title改變
    if (element.value == "大腸癌介紹"){
        element.value = "大腸癌篩檢介紹";
        element.innerHTML = "大腸癌篩檢介紹" + img;
        elementTitle.innerHTML = "大腸癌介紹";
    }else{
        element.value = "大腸癌介紹";
        element.innerHTML = "大腸癌介紹" + img;
        elementTitle.innerHTML = "大腸癌篩檢介紹";
    }
    // 文字改變
    let btn3_p1 = document.querySelector('.btn3_p1');
    let btn3_p2 = document.querySelector('.btn3_p2');
    if (element.value == "大腸癌介紹") {
        btn3_p1.innerHTML = "大腸內的腫瘤或息肉，受到糞便摩擦而出血，血液因而附在糞便表面排出，經採集表面糞便送至檢驗室檢驗，即可測出是否含血液。為避免糞便中血紅素受熱破壞，檢體應放在含保存液之採便管冷藏保存，並儘速送回檢驗。"
        btn3_p2.innerHTML = "檢查結果若為陰性，請持續每2年接受1次糞便潛血檢查。檢查結果若為陽性，請根據醫生指示做後續治療。"
    } else if (element.value = "乳癌篩檢介紹") {
        btn3_p1.innerHTML = "子宮頸抹片檢查會先以擴陰器擴張陰道，再以小木棒或刷子輕輕刮取子宮頸 剝落的細胞，塗抹於玻片和染色後，經顯微鏡觀察是否有 癌前病變或是癌症。"
        btn3_p2.innerHTML = "檢查結果若正常，請持續每3年至少接受1次子宮頸每抹片檢查。若有意義不明的鱗狀細胞變化 、有輕度癌前病變 、重度癌前病變、意義未明的腺體細胞變化或癌症，請根據醫生指示做後續治療。"
    }
}
function changeText4() {
    let element = document.getElementById("btn4");
    let elementTitle = document.getElementById("title4");
    // 按鈕、title改變
    if (element.value == "乳癌介紹"){
        element.value = "乳癌篩檢介紹";
        element.innerHTML = "乳癌篩檢介紹" + img;
        elementTitle.innerHTML = "乳癌介紹";
    }else{
        element.value = "乳癌介紹";
        element.innerHTML = "乳癌介紹" + img;
        elementTitle.innerHTML = "乳癌篩檢介紹";
    }
    // 文字改變
    let btn4_p1 = document.querySelector('.btn4_p1');
    let btn4_p2 = document.querySelector('.btn4_p2');
    if (element.value == "乳癌介紹") {
        btn4_p1.innerHTML = "子宮頸抹片檢查會先以擴陰器擴張陰道，再以小木棒或刷子輕輕刮取子宮頸 剝落的細胞，塗抹於玻片和染色後，經顯微鏡觀察是否有 癌前病變或是癌症。"
        btn4_p2.innerHTML = "檢查結果若正常，請持續每3年至少接受1次子宮頸每抹片檢查。若有意義不明的鱗狀細胞變化 、有輕度癌前病變 、重度癌前病變、意義未明的腺體細胞變化或癌症，請根據醫生指示做後續治療。"
    } else if (element.value = "乳癌篩檢介紹") {
        btn4_p1.innerHTML = "大腸癌是可以早期發現早期治療，且治癒率很高的癌症。根據統計，早期的大腸癌如果妥善治療，存活率高達90％以上。大腸癌主要是由大腸內的腺瘤瘜肉癌化所造成，因此如能早期發現腺瘤瘜肉予以切除，可以減少大腸癌的發生。"
        btn4_p2.innerHTML = "透過實施糞便潛血檢查可以降低大腸癌發生率，如果糞便潛血檢查呈陽性時，應進一步接受大腸鏡檢查，其好處是檢查過程如有發現病兆或瘜肉時，可以直接取樣做切片或是將它切除。"
    }
}