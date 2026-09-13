const itineraryData = [
  {day:1,date:'9/14 (一)',title:'抵達釜山・海雲台',area:'TPE ➜ PUS ➜ 海雲台',activities:[
    {time:'14:50',type:'flight',title:'JX1902 台北出發',desc:'桃園機場 T1 → 金海機場，預計 18:05 抵達。',highlight:'STARLUX JX1902'},
    {time:'18:05',type:'transport',title:'抵達金海機場',desc:'入境、領行李後前往海雲台。',tips:['若沒有有效 K-ETA，出發前先完成 e-Arrival Card。']},
    {time:'晚上',type:'hotel',title:'萬楓飯店 Check-in',query:'Fairfield by Marriott Busan Haeundae',desc:'前兩晚住海雲台。放完行李後只安排晚餐與散步。'},
    {time:'晚上',type:'food',title:'海雲台晚餐＋散步',query:'Haeundae Traditional Market Busan',desc:'第一晚不趕景點，保留體力。'}]},
  {day:2,date:'9/15 (二)',title:'西面醫美・Shopping Day',area:'海雲台 ➜ 西面 ➜ 海雲台',activities:[
    {time:'早上',type:'coffee',title:'有名咖啡廳早餐',query:'BLACKUP Coffee Seomyeon Busan',desc:'候選：西面 BLACKUP，或依當天狀態選海雲台咖啡廳。',tips:['如果醫美時間較早，直接選海雲台早開店，避免趕車。']},
    {time:'上午',type:'beauty',title:'西面皮膚管理／醫美',desc:'固定行程。療程後以室內購物為主，減少曝曬。',highlight:'防曬＋保濕要帶'},
    {time:'中午',type:'food',title:'李在模披薩',query:'Lee Jae Mo Pizza Seomyeon Busan',desc:'做完醫美後在西面吃午餐。'},
    {time:'下午',type:'shopping',title:'MUSINSA STANDARD 西面',query:'MUSINSA STANDARD Seomyeon Busan',desc:'服飾購物。'},
    {time:'下午',type:'shopping',title:'樂天百貨釜山總店',query:'Lotte Department Store Busan Main',desc:'看 Longchamp 價格，也順便找 Insta360 是否有現貨。',highlight:'先拍款式／價格，9/16 再和 Outlet 比價'},
    {time:'傍晚',type:'shopping',title:'Pas-Syab',desc:'回海雲台後逛 Pas-Syab；店名／位置出發前再確認。'},
    {time:'傍晚',type:'hotel',title:'回飯店休息',desc:'刻意留一段休息時間。'},
    {time:'晚上',type:'food',title:'海雲台市場晚餐',query:'Haeundae Traditional Market Busan',desc:'邊逛邊吃，行程不要排太滿。'}]},
  {day:3,date:'9/16 (三)',title:'MOMOS・機張・Longchamp Outlet',area:'海雲台 ➜ Marine City ➜ 機張 ➜ 廣安里',activities:[
    {time:'09:30',type:'luggage',title:'Check-out＋寄放行李',desc:'建議先確認萬楓退房時間，先把行李留在飯店再輕裝去機張。'},
    {time:'10:30',type:'coffee',title:'MOMOS Coffee Marine City',query:'Momos Coffee Marine City Busan',desc:'第一間 MOMOS。慢慢喝一杯再出發。'},
    {time:'中午前',type:'shopping',title:'Lotte Premium Outlet 東釜山',query:'Lotte Premium Outlets Dongbusan',desc:'重點：Longchamp Outlet，比較 9/15 樂天百貨價格與款式。'},
    {time:'午餐',type:'food',title:'機張市場吃螃蟹',query:'Gijang Market Busan',desc:'先問清楚每公斤價格、料理費、配菜／蒸煮費再點。',highlight:'先確認總價再秤重'},
    {time:'下午',type:'coffee',title:'Peak Square（有力氣才去）',query:'Peak Square Busan',desc:'Bonus 行程。累了直接跳過，不為咖啡店犧牲 Check-in。'},
    {time:'傍晚',type:'luggage',title:'回海雲台拿行李',desc:'回萬楓取行李，再移動到廣安里。'},
    {time:'晚上',type:'hotel',title:'Guess Who 海景房 Check-in',desc:'9/16–9/20 住廣安里，全海景房。'}]},
  {day:4,date:'9/17 (四)',title:'廣安里慢早晨・青沙浦夕景',area:'廣安里 ➜ 尾浦 ➜ 青沙浦 ➜ 廣安里',activities:[
    {time:'09:00',type:'coffee',title:'ALL SUNDAY',query:'All Sunday Gwangan Busan',desc:'廣安里早餐。',tips:['近期營業時間資訊有落差，前一晚用 Naver Map／IG 再確認是否 09:00 營業。']},
    {time:'11:00',type:'shopping',title:'SCENTICA Gwangan',query:'SCENTICA Gwangan Busan',desc:'香氛店，逛完時間夠就回飯店休息。'},
    {time:'中午',type:'food',title:'Daniels Tribe',query:'Daniels Tribe Busan',desc:'午餐／Brunch，可吃義大利麵、沙拉等。'},
    {time:'下午',type:'hotel',title:'回飯店休息／準備出發',desc:'不要太早到海雲台，保留一點休息感。'},
    {time:'16:30',type:'train',title:'Sky Capsule：尾浦 → 青沙浦',query:'Haeundae Blueline Park Mipo Station',desc:'已確定的重點行程。',highlight:'16:30 準時搭乘'},
    {time:'約17:00',type:'coffee',title:'Liberta',query:'Liberta Cheongsapo Busan',desc:'青沙浦咖啡＋麵包。'},
    {time:'傍晚',type:'sightseeing',title:'Cheongsapo Daritdol Skywalk',query:'Cheongsapo Daritdol Skywalk',desc:'傍晚看海、散步，時間不用趕。'},
    {time:'晚上',type:'food',title:'PURADAK 炸雞外帶',query:'PURADAK Gwangalli Busan',desc:'外帶回飯店吃。'},
    {time:'晚一點',type:'drink',title:'廣安里散步＋喝酒',query:'Gwangalli Beach bars',desc:'吃完炸雞再隨興找酒吧，不指定死店家。'}]},
  {day:5,date:'9/18 (五)',title:'完全自由日・西面晚餐',area:'廣安里 ➜ 西面 ➜ 荒嶺山（看天氣）',alert:'目前預報 9/18 有間歇性降雨；荒嶺山一定要看當晚能見度再決定。',activities:[
    {time:'上午',type:'relax',title:'睡飽／自由安排',desc:'這天刻意留空，吸收前幾天臨時看到的店。'},
    {time:'下午',type:'shopping',title:'自由補貨／Shopping',desc:'Longchamp、Olive Young、相機或其他臨時想買的東西都可放這裡。'},
    {time:'晚上',type:'food',title:'西面・釜山宅晚餐',query:'Busan Jip Seomyeon',desc:'固定晚餐。'},
    {time:'晚餐後',type:'sightseeing',title:'荒嶺山 황령산 夜景（天氣好才去）',query:'Hwangnyeongsan Observatory Busan',desc:'西面晚餐後上山最順。若下雨、低雲或能見度差就取消。',highlight:'Weather-dependent'}]},
  {day:6,date:'9/19 (六)',title:'影島咖啡・海景・醬蟹',area:'廣安里 ➜ 影島 ➜ 南浦（可選）➜ 廣安里',activities:[
    {time:'10:30',type:'coffee',title:'MOMOS Yeongdo',query:'Momos Yeongdo Roastery Coffee Bar Busan',desc:'第二間 MOMOS，影島烘焙工坊。'},
    {time:'中午',type:'food',title:'影島午餐',desc:'餐廳先不鎖死；當天依位置與想吃的東西挑。'},
    {time:'下午',type:'sightseeing',title:'影島慢慢逛',query:'Huinnyeoul Culture Village Busan',desc:'不追景點數量，以海岸散步為主。'},
    {time:'下午',type:'coffee',title:'Having Moment',query:'Having Moment Yeongdo Busan',desc:'海景咖啡廳，適合坐久一點。'},
    {time:'可選',type:'shopping',title:'南浦 Olive Young Town',query:'Olive Young Nampo Town Busan',desc:'如果影島結束還想逛，再去大型 Olive Young；不勉強。'},
    {time:'晚上',type:'food',title:'Lee-ha-jeong Ganjang Gaejang',query:'이하정간장게장 부산',desc:'廣安里／水營一帶吃醬蟹。'},
    {time:'晚上',type:'sightseeing',title:'廣安里夜晚',query:'Gwangalli Beach Busan',desc:'週六晚上留給廣安大橋與海邊。'}]},
  {day:7,date:'9/20 (日)',title:'回台灣',area:'廣安里 ➜ PUS ➜ TPE',activities:[
    {time:'早上',type:'coffee',title:'早餐＋最後海邊散步',query:'Gwangalli Beach Busan',desc:'不要排遠程景點。'},
    {time:'約10:30',type:'transport',title:'前往金海機場',query:'Gimhae International Airport',desc:'預留交通、退稅與托運時間。'},
    {time:'14:30',type:'flight',title:'JX1901 釜山出發',desc:'PUS → TPE，預計 15:45 抵達桃園 T1。',highlight:'STARLUX JX1901'}]}
];

const prepItems=['護照效期與信用卡海外交易功能','e-Arrival Card（若沒有有效 K-ETA）','韓國插頭轉接頭：220V、圓腳 Type C/F','醫美後防曬、帽子、保濕用品','Sky Capsule 16:30 訂位憑證截圖','退稅購物時帶護照；高價品保留商品與收據','Naver Map／Papago／Kakao T 或 Uber 可先登入','9/18 荒嶺山看即時雨勢與能見度再決定'];
const hotels=[['9/14–9/16','萬楓飯店・海雲台','前兩晚；9/16 退房後寄放行李'],['9/16–9/20','Guess Who・廣安里 全海景房','後四晚；週六晚上好好用海景房']];
const wishlistSeed=[{id:1,name:'Olive Young Nampo Town',area:'南浦',note:'9/19 可選'},{id:2,name:'Peak Square',area:'機張',note:'9/16 有體力才去'},{id:3,name:'荒嶺山 황령산',area:'西面／廣安里',note:'9/18 天氣好才去'}];
const icons={flight:'✈️',transport:'🚌',train:'🚋',coffee:'☕',food:'🍴',shopping:'🛍️',hotel:'🏨',beauty:'✨',sightseeing:'📍',drink:'🍸',luggage:'🧳',relax:'🌊'};
const typeClass={flight:'sky',transport:'sky',train:'sky',coffee:'amber',food:'orange',shopping:'rose',hotel:'indigo',beauty:'pink',sightseeing:'teal',drink:'purple',luggage:'stone',relax:'teal'};
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const naver=q=>`https://map.naver.com/p/search/${encodeURIComponent(q)}`;
const google=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
let state={tab:'trip',day:1,weather:null};

function activityHTML(a){return `<div class="timeline-row"><div class="timeline-dot tone-${typeClass[a.type]||'teal'}">${icons[a.type]||'📍'}</div><article class="card activity-card"><div class="activity-top"><span class="time-pill">🕒 ${esc(a.time)}</span><span>${icons[a.type]||'📍'}</span></div><h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p>${a.highlight?`<div class="highlight">★ ${esc(a.highlight)}</div>`:''}${a.tips?`<ul class="tips">${a.tips.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${a.query?`<div class="map-actions"><a href="${naver(a.query)}" target="_blank">➤ Naver Map</a><a href="${google(a.query)}" target="_blank">🗺 Google</a></div>`:''}</article></div>`}

function tripView(){const d=itineraryData.find(x=>x.day===state.day);return `<div class="page"><div class="day-tabs no-scrollbar">${itineraryData.map(x=>`<button data-day="${x.day}" class="${x.day===state.day?'active':''}"><span>${x.date.split(' ')[0]}</span><strong>D${x.day}</strong></button>`).join('')}</div><section class="hero-card card"><div><div class="eyebrow">C&M BUSAN 2026</div><h2>${d.title}</h2><div class="muted">📍 ${d.area}</div></div><img src="./public/icon-192.png" alt="C&M Busan icon"></section>${d.alert?`<div class="alert">⚠️ <span>${d.alert}</span></div>`:''}<div class="timeline">${d.activities.map(activityHTML).join('')}</div></div>`}

function weatherHTML(){if(!state.weather)return '<p class="muted pad">連線後載入最新天氣；離線時仍可使用其他功能。</p>';const d=state.weather.daily;return `<div class="weather-strip no-scrollbar">${d.time.map((t,i)=>{const c=d.weather_code[i],ic=c>=51?'🌧️':c<=1?'☀️':'⛅';return `<div class="wx"><small>${t.slice(5)}</small><span class="wxi">${ic}</span><strong>${Math.round(d.temperature_2m_max[i])}°</strong><span>${Math.round(d.temperature_2m_min[i])}° / ☔ ${d.precipitation_probability_max[i]}%</span></div>`}).join('')}</div>`}
function infoView(){return `<div class="page"><h2 class="section-title">旅程資訊</h2><section class="card info-block"><div class="block-head">✈️ 航班</div><div class="flight-grid"><div><small>去程 9/14</small><strong>JX1902</strong><span>14:50 TPE → 18:05 PUS</span></div><div><small>回程 9/20</small><strong>JX1901</strong><span>14:30 PUS → 15:45 TPE</span></div></div></section><section class="card info-block"><div class="block-head">🏨 住宿</div>${hotels.map(h=>`<div class="info-row"><div><small>${h[0]}</small><strong>${h[1]}</strong><span>${h[2]}</span></div></div>`).join('')}</section><section class="card info-block"><div class="block-head">⛅ 釜山即時 7 日預報</div>${weatherHTML()}</section><section class="card info-block"><div class="block-head">✅ 出發前 Checklist</div><div class="checklist">${prepItems.map((x,i)=>`<label><input type="checkbox" data-check="${i}" ${localStorage.getItem('cm_check_'+i)==='1'?'checked':''}><span>${x}</span></label>`).join('')}</div></section><section class="card info-block"><div class="block-head">🔗 實用連結</div><div class="link-list"><a target="_blank" href="https://www.e-arrivalcard.go.kr/">韓國 e-Arrival Card</a><a target="_blank" href="https://www.bluelinepark.com/booking.do">Haeundae Blue Line Park</a><a target="_blank" href="https://english.visitkorea.or.kr/">VISITKOREA</a></div></section></div>`}

function budgetData(){try{return JSON.parse(localStorage.getItem('cm_busan_budget')||'[]')}catch{return[]}}
function budgetView(){const items=budgetData(),total=items.reduce((s,x)=>s+x.amount,0),c=items.filter(x=>x.payer==='C').reduce((s,x)=>s+x.amount,0),m=total-c,bal=(c-m)/2;return `<div class="page"><h2 class="section-title">C&M 共同記帳</h2><section class="budget-hero"><small>總支出 KRW</small><strong>₩${total.toLocaleString()}</strong><div><span>C 付 ₩${c.toLocaleString()}</span><span>M 付 ₩${m.toLocaleString()}</span></div>${total?`<p>${bal>0?`M 給 C ₩${Math.round(bal).toLocaleString()}`:bal<0?`C 給 M ₩${Math.round(-bal).toLocaleString()}`:'目前剛好平衡'}</p>`:''}</section><form id="budgetForm" class="card budget-form"><div class="segmented"><button type="button" class="payer active" data-payer="C">C 付款</button><button type="button" class="payer" data-payer="M">M 付款</button></div><div class="category-row"><button type="button" class="cat active" data-cat="food">餐</button><button type="button" class="cat" data-cat="transport">車</button><button type="button" class="cat" data-cat="shopping">買</button><button type="button" class="cat" data-cat="other">其他</button></div><div class="input-row"><input id="budgetDesc" placeholder="項目，例如：醬蟹"><input id="budgetAmount" type="number" inputmode="numeric" placeholder="KRW"></div><button class="primary">＋ 加入</button></form><div class="expense-list">${items.map(x=>`<div class="card expense"><div><strong>${esc(x.desc)}</strong><small>${x.payer} 付款 · ${x.category}</small></div><div><b>₩${x.amount.toLocaleString()}</b><button class="delete-budget" data-id="${x.id}">🗑</button></div></div>`).join('')}</div></div>`}

function wishData(){try{return JSON.parse(localStorage.getItem('cm_busan_wishlist')||JSON.stringify(wishlistSeed))}catch{return wishlistSeed}}
function wishView(){const items=wishData();return `<div class="page"><h2 class="section-title">想去／臨時追加</h2><form id="wishForm" class="card quick-form"><input id="wishName" placeholder="店名／景點"><input id="wishArea" placeholder="區域（可空白）"><button class="primary">＋ 新增</button></form><div class="wish-list">${items.map(x=>`<div class="card wish"><div class="wish-icon">♥</div><div class="wish-main"><strong>${esc(x.name)}</strong><span>${esc(x.area)}${x.note?` · ${esc(x.note)}`:''}</span><a href="${naver(`${x.name} ${x.area} Busan`)}" target="_blank">Naver Map ↗</a></div><button class="delete-wish" data-id="${x.id}">🗑</button></div>`).join('')}</div></div>`}

function shell(content){return `<div class="app-shell"><header class="topbar"><img src="./public/icon-192.png"><div><strong>C&M BUSAN</strong><span>2026.09.14 — 09.20</span></div></header><main>${content}</main><nav class="bottom-nav">${[['trip','📅','行程'],['info','ℹ️','資訊'],['budget','💳','記帳'],['wish','♥','想去']].map(t=>`<button data-tab="${t[0]}" class="${state.tab===t[0]?'active':''}"><b>${t[1]}</b><span>${t[2]}</span></button>`).join('')}</nav></div>`}

function render(){const view=state.tab==='trip'?tripView():state.tab==='info'?infoView():state.tab==='budget'?budgetView():wishView();document.querySelector('#app').innerHTML=shell(view);bind()}
function bind(){document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;render();window.scrollTo(0,0)});document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{state.day=Number(b.dataset.day);render();window.scrollTo({top:0,behavior:'smooth'})});document.querySelectorAll('[data-check]').forEach(c=>c.onchange=()=>localStorage.setItem('cm_check_'+c.dataset.check,c.checked?'1':'0'));
 const bf=document.querySelector('#budgetForm');if(bf){let payer='C',cat='food';document.querySelectorAll('.payer').forEach(b=>b.onclick=()=>{payer=b.dataset.payer;document.querySelectorAll('.payer').forEach(x=>x.classList.toggle('active',x===b))});document.querySelectorAll('.cat').forEach(b=>b.onclick=()=>{cat=b.dataset.cat;document.querySelectorAll('.cat').forEach(x=>x.classList.toggle('active',x===b))});bf.onsubmit=e=>{e.preventDefault();const desc=document.querySelector('#budgetDesc').value.trim(),amount=Number(document.querySelector('#budgetAmount').value);if(!desc||!amount)return;const arr=budgetData();arr.unshift({id:Date.now(),desc,amount,payer,category:cat});localStorage.setItem('cm_busan_budget',JSON.stringify(arr));render()};document.querySelectorAll('.delete-budget').forEach(b=>b.onclick=()=>{localStorage.setItem('cm_busan_budget',JSON.stringify(budgetData().filter(x=>String(x.id)!==b.dataset.id)));render()})}
 const wf=document.querySelector('#wishForm');if(wf){wf.onsubmit=e=>{e.preventDefault();const name=document.querySelector('#wishName').value.trim(),area=document.querySelector('#wishArea').value.trim();if(!name)return;const arr=wishData();arr.unshift({id:Date.now(),name,area,note:'旅途中新增'});localStorage.setItem('cm_busan_wishlist',JSON.stringify(arr));render()};document.querySelectorAll('.delete-wish').forEach(b=>b.onclick=()=>{localStorage.setItem('cm_busan_wishlist',JSON.stringify(wishData().filter(x=>String(x.id)!==b.dataset.id)));render()})}}

async function loadWeather(){try{const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.1796&longitude=129.0756&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FSeoul&forecast_days=7');state.weather=await r.json();if(state.tab==='info')render()}catch{}}
render();loadWeather();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
