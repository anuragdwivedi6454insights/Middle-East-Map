// ── SCENE DEFINITIONS ─────────────────────────────────────────────────────────
var SCENES = {

  overview: {
    info: '<strong>🗺️ Middle East — Overview</strong><br>This region holds 48% of world oil reserves and controls key shipping routes. Every country here plays a role in the current crisis. Tap any country to learn its specific role.',
    legend: [
      { color: '#7a1a1a', label: 'Iran — conflict epicentre' },
      { color: '#7d6608', label: 'Iraq — battleground' },
      { color: '#1a5276', label: 'Israel — under attack' },
      { color: '#c0392b', label: 'Yemen / Houthis' },
      { color: '#cc5520', label: 'India — most affected' }
    ],
    overlay: ''
  },

  us: {
    info: '<strong>🇺🇸 US Military — 30,000+ Troops</strong><br><b>Qatar</b>: Al-Udeid — 10,000 troops (Central Command HQ). <b>Kuwait</b>: Camp Arifjan — 13,500 troops. <b>UAE</b>: Al-Dhafra — F-35s and drones. <b>Bahrain</b>: 5th Fleet HQ controls the Gulf. <b>Iraq</b>: 2,500 troops — 170+ attacks on them since Oct 2023.',
    legend: [
      { color: '#1a7fc1', label: 'US military base' },
      { color: '#e8a020', label: 'Active attack zone' }
    ],
    overlay: [
      '<g class="pulse">',
      '  <circle cx="389" cy="258" r="12" fill="none" stroke="#1a7fc1" stroke-width="2.5"/>',
      '  <text x="389" y="255" text-anchor="middle" font-size="11" fill="#7af">★</text>',
      '</g>',
      '<text x="407" y="252" font-size="9" fill="#7af" font-weight="bold">Camp Arifjan (Kuwait)</text>',
      '<text x="407" y="263" font-size="8" fill="#5a9fd4">13,500 troops</text>',

      '<g class="pulse2">',
      '  <circle cx="429" cy="293" r="12" fill="none" stroke="#1a7fc1" stroke-width="2.5"/>',
      '  <text x="429" y="290" text-anchor="middle" font-size="11" fill="#7af">★</text>',
      '</g>',
      '<text x="447" y="287" font-size="9" fill="#7af" font-weight="bold">Al-Udeid (Qatar)</text>',
      '<text x="447" y="298" font-size="8" fill="#5a9fd4">10,000 troops — US HQ</text>',

      '<g class="pulse3">',
      '  <circle cx="411" cy="282" r="8" fill="none" stroke="#1a7fc1" stroke-width="2"/>',
      '  <text x="411" y="280" text-anchor="middle" font-size="9" fill="#7af">★</text>',
      '</g>',
      '<text x="368" y="270" font-size="8" fill="#7af">NSA Bahrain (5th Fleet)</text>',

      '<g class="pulse">',
      '  <circle cx="468" cy="310" r="10" fill="none" stroke="#1a7fc1" stroke-width="2"/>',
      '  <text x="468" y="308" text-anchor="middle" font-size="9" fill="#7af">★</text>',
      '</g>',
      '<text x="484" y="304" font-size="8" fill="#7af">Al-Dhafra (UAE) F-35s</text>',

      '<g class="pulse2">',
      '  <circle cx="355" cy="170" r="10" fill="none" stroke="#e8a020" stroke-width="2"/>',
      '  <text x="355" y="168" text-anchor="middle" font-size="9" fill="#fa0">★</text>',
      '</g>',
      '<text x="370" y="163" font-size="8" fill="#fa0" font-weight="bold">Iraq — 2 bases (170+ attacks)</text>'
    ].join('\n')
  },

  iran: {
    info: '<strong>🇮🇷 Iran Proxy Network — "Ring of Fire"</strong><br>Iran controls armed groups in 5 countries. <b>Lebanon</b>: Hezbollah 100,000+ rockets. <b>Gaza</b>: Hamas (Oct 7 attack). <b>Syria</b>: weapon supply corridor. <b>Iraq</b>: PMF 150,000 fighters attacking US. <b>Yemen</b>: Houthis attacking Red Sea ships.',
    legend: [
      { color: '#cc2222', label: 'Iran proxy forces' },
      { color: '#7a1a1a', label: 'Iran (controller)' }
    ],
    overlay: [
      '<path d="M498 149 Q370 108 245 186" fill="none" stroke="#cc2222" stroke-width="2.5" class="arrow-flow" marker-end="url(#aRed)"/>',
      '<text x="340" y="118" font-size="9" fill="#ff8888">→ Hezbollah (Lebanon)</text>',

      '<path d="M498 149 Q420 165 360 172" fill="none" stroke="#cc2222" stroke-width="2" class="arrow-flow2" marker-end="url(#aRed)"/>',
      '<text x="415" y="148" font-size="9" fill="#ff8888">→ PMF Iraq</text>',

      '<path d="M498 149 Q380 280 297 415" fill="none" stroke="#cc2222" stroke-width="2.5" class="arrow-flow3" marker-end="url(#aRed)"/>',
      '<text x="330" y="305" font-size="9" fill="#ff8888">→ Houthis Yemen</text>',

      '<path d="M498 149 Q415 112 278 192" fill="none" stroke="#cc2222" stroke-width="1.5" stroke-dasharray="5 4" class="arrow-flow" marker-end="url(#aRed)"/>',
      '<text x="370" y="128" font-size="8" fill="#cc8888">→ Syria route</text>',

      '<circle cx="239" cy="192" r="12" fill="#cc222244" stroke="#ee3333" stroke-width="2" class="pulse"/>',
      '<text x="220" y="215" font-size="8" fill="#ffaaaa">Hezbollah</text>',

      '<circle cx="296" cy="428" r="12" fill="#cc222244" stroke="#ee3333" stroke-width="2" class="pulse2"/>',
      '<text x="370" y="460" font-size="9" fill="#ffaaaa">Houthis — attack Red Sea ships</text>'
    ].join('\n')
  },

  israel: {
    info: '<strong>🇮🇱 Israel — Tiny Country, Multi-Front War</strong><br><b>North</b>: Hezbollah — 5,000+ rockets fired. <b>Gaza</b>: Hamas Oct 7 killed 1,200. <b>Iran</b>: April 2024 direct attack — 300+ drones and missiles. <b>Jordan/Egypt</b>: Peace treaties. India is Israel\'s #1 arms buyer.',
    legend: [
      { color: '#1a5276', label: 'Israel' },
      { color: '#cc2222', label: 'Enemy states' },
      { color: '#1e8449', label: 'Peace treaty' }
    ],
    overlay: [
      '<path d="M210 192 Q225 145 239 184" fill="none" stroke="#ee3333" stroke-width="2.5" class="arrow-flow3" marker-end="url(#aRed)"/>',
      '<text x="188" y="132" font-size="9" fill="#ff8888">Hezbollah rockets ↓</text>',

      '<path d="M498 152 Q350 95 218 196" fill="none" stroke="#cc2222" stroke-width="3" class="arrow-flow" marker-end="url(#aRed)"/>',
      '<text x="360" y="86" text-anchor="middle" font-size="10" fill="#ff5555" font-weight="bold">300+ drones — Iran to Israel April 2024</text>',

      '<rect x="194" y="181" width="32" height="46" rx="4" fill="none" stroke="#ffcc00" stroke-width="2.5" class="pulse"/>',

      '<text x="240" y="248" font-size="8" fill="#8ecf8a">Jordan → Peace (1994)</text>',
      '<text x="136" y="258" font-size="8" fill="#8ecf8a">Egypt → Cold Peace</text>'
    ].join('\n')
  },

  india: {
    info: '<strong>🇮🇳 India — Most Affected Bystander</strong><br><b>Oil</b>: Iraq 22% + Saudi 16% + UAE 7% from conflict zone. <b>People</b>: 8.5M Indians in Gulf sending $42B/year home. <b>Arms</b>: Israel is India\'s top weapons supplier. <b>Iran</b>: India built Chabahar Port. <b>Shipping</b>: Red Sea route to Europe is India\'s main lane.',
    legend: [
      { color: '#e8a020', label: 'Oil supply route' },
      { color: '#1a7fc1', label: 'People + remittances' },
      { color: '#1e8449', label: 'Shipping route' }
    ],
    overlay: [
      '<path d="M652 262 Q555 272 500 200" fill="none" stroke="#e8a020" stroke-width="2.5" class="arrow-flow" marker-end="url(#aGold)"/>',
      '<text x="565" y="257" font-size="9" fill="#e8a020">Oil from Iraq/Iran</text>',

      '<path d="M652 262 Q510 372 385 372" fill="none" stroke="#e8a020" stroke-width="2.5" class="arrow-flow2" marker-end="url(#aGold)"/>',
      '<text x="510" y="378" font-size="9" fill="#e8a020">Oil from Saudi</text>',

      '<path d="M652 262 Q590 340 502 330" fill="none" stroke="#1a7fc1" stroke-width="2" class="arrow-flow3" marker-end="url(#aBlue)"/>',
      '<text x="572" y="325" font-size="8" fill="#7af">$42B remittances</text>',

      '<path d="M652 242 Q638 175 608 148" fill="none" stroke="#1e8449" stroke-width="1.5" stroke-dasharray="6 4" class="arrow-flow2"/>',
      '<text x="634" y="178" text-anchor="middle" font-size="8" fill="#8ecf8a">Arms from Israel</text>',

      '<path d="M640 312 Q620 380 560 400 Q450 425 296 425 Q220 418 148 368 Q100 330 82 280" fill="none" stroke="#1e8449" stroke-width="1.5" stroke-dasharray="5 4" class="arrow-flow3"/>',
      '<text x="300" y="467" text-anchor="middle" font-size="9" fill="#8ecf8a">Red Sea route to Suez to Europe</text>',

      '<circle cx="652" cy="295" r="18" fill="none" stroke="#ff9955" stroke-width="3" class="pulse"/>'
    ].join('\n')
  },

  hormuz: {
    info: '<strong>⚠️ Strait of Hormuz — World\'s Most Critical Chokepoint</strong><br>This 33km strait between <b>Iran</b> and <b>Oman</b> carries 21 million barrels/day = 20% of global oil. If Iran blocks it, oil hits $150-200/barrel. India faces immediate energy crisis. The US 5th Fleet in Bahrain exists to keep this open.',
    legend: [
      { color: '#e8a020', label: 'Oil tanker route' },
      { color: '#cc2222', label: 'Iran threat zone' },
      { color: '#1a7fc1', label: 'US Navy patrol' }
    ],
    overlay: [
      '<ellipse cx="502" cy="324" rx="16" ry="11" fill="#e8a02044" stroke="#e8a020" stroke-width="2.5" class="pulse"/>',
      '<text x="502" y="345" text-anchor="middle" font-size="9" fill="#e8a020" font-weight="bold">HORMUZ</text>',
      '<text x="502" y="356" text-anchor="middle" font-size="8" fill="#cc8800">33km wide</text>',

      '<path d="M502 322 Q560 340 640 330" fill="none" stroke="#e8a020" stroke-width="2.5" class="arrow-flow" marker-end="url(#aGold)"/>',
      '<text x="576" y="318" font-size="9" fill="#e8a020">21M barrels/day</text>',

      '<path d="M502 322 Q480 290 470 240" fill="none" stroke="#cc2222" stroke-width="2" stroke-dasharray="6 3" class="arrow-flow2"/>',
      '<text x="432" y="265" font-size="9" fill="#ff6666" font-weight="bold">Iran can BLOCK this!</text>',

      '<circle cx="411" cy="283" r="10" fill="none" stroke="#1a7fc1" stroke-width="2" class="pulse2"/>',
      '<text x="384" y="268" font-size="8" fill="#7af">US 5th Fleet</text>'
    ].join('\n')
  },

  redsea: {
    info: '<strong>🚢 Red Sea Crisis — Houthis Attacking Shipping</strong><br>Yemen\'s Houthis attacked 100+ ships since Oct 2023. 12% of global trade, including India-Europe shipping, now reroutes around Africa — adding 14 days and $2M extra per trip. Indian exporters are losing price competitiveness.',
    legend: [
      { color: '#c0392b', label: 'Houthi attack zone' },
      { color: '#e8a020', label: 'Original route (blocked)' },
      { color: '#888888', label: 'New Africa detour' }
    ],
    overlay: [
      '<circle cx="296" cy="426" r="16" fill="#c0392b55" stroke="#e05040" stroke-width="2.5" class="pulse"/>',
      '<text x="345" y="420" font-size="9" fill="#ff8888" font-weight="bold">Houthis — 100+ ships attacked</text>',

      '<ellipse cx="120" cy="290" rx="14" ry="58" fill="#c0392b22" stroke="#e05040" stroke-width="1.5" stroke-dasharray="5 3" class="pulse2"/>',
      '<text x="55" y="286" text-anchor="middle" font-size="8" fill="#ff8888">Attack zone</text>',

      '<path d="M640 342 Q640 430 560 440 Q430 455 296 445 Q200 440 136 400 Q100 368 82 310" fill="none" stroke="#e8a020" stroke-width="2" class="arrow-flow" marker-end="url(#aGold)"/>',
      '<text x="38" y="32" font-size="8" fill="#e8a020">Suez Canal</text>',

      '<path d="M640 342 Q720 400 760 455" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="6 4" class="arrow-flow2"/>',
      '<text x="698" y="450" font-size="8" fill="#aaa">Africa detour</text>',
      '<text x="698" y="461" font-size="7" fill="#888">+14 days +$2M</text>'
    ].join('\n')
  }

};

// ── COUNTRY INFO ───────────────────────────────────────────────────────────────
var COUNTRIES = {
  iraq: {
    flag: '🇮🇶', name: 'Iraq', color: '#7d6608',
    role: "India's #2 oil source — 22% of imports",
    text: "CRITICAL FOR INDIA: Iraq is India's second largest oil source at 22%. Iran-backed PMF militia (150,000+ fighters) control much of the country alongside 2,500 US troops. 170+ attacks on US bases since Oct 2023. Iraq is the literal battlefield between US and Iran proxy forces."
  },
  iran: {
    flag: '🇮🇷', name: 'Iran', color: '#7a1a1a',
    role: 'India built Chabahar Port here',
    text: "India has complex ties with Iran. India built Chabahar Port — its gateway to Afghanistan and Central Asia. India buys Iranian oil despite US sanctions. Iran enriches uranium to 84% (near weapons grade). Iran backs Hamas, Hezbollah, Houthis, PMF — all coordinated as the Axis of Resistance."
  },
  israel: {
    flag: '🇮🇱', name: 'Israel', color: '#1a5276',
    role: "India's #1 arms supplier",
    text: "India's largest arms supplier — drones, missiles, surveillance tech. Israel was directly attacked by Iran in April 2024 with 300+ drones — first time ever. Fighting Hamas in Gaza since Oct 7, 2023 and Hezbollah in Lebanon. India officially supports Palestinian statehood but buys billions in Israeli weapons."
  },
  saudi: {
    flag: '🇸🇦', name: 'Saudi Arabia', color: '#8b6914',
    role: 'India imports 16% oil from here',
    text: "World's largest oil exporter. India imports 16% of its oil from Saudi. 2.2 million Indians live here sending $11B/year home. US ally with major military presence. Sunni rival to Shia Iran. Was close to normalizing relations with Israel when Hamas attacked on Oct 7, derailing the talks."
  },
  uae: {
    flag: '🇦🇪', name: 'UAE', color: '#1a6b5a',
    role: "3.5M Indians — world's largest diaspora",
    text: "3.5 MILLION Indians in UAE — the largest Indian community in any single country. India-UAE trade = $85 billion/year. UAE signed peace deal with Israel (Abraham Accords 2020). Hosts US Al-Dhafra Air Base. Dubai is India's financial capital abroad. Remittances: $18 billion/year to India."
  },
  india: {
    flag: '🇮🇳', name: 'India', color: '#cc5520',
    role: 'Most affected bystander',
    text: "THE MOST AFFECTED COUNTRY OUTSIDE THE CONFLICT. 88% oil imported. $180B+ annual oil bill. 8.5M people in Gulf. $42B remittances = 3% of GDP. Arms from Israel. Chabahar Port in Iran. Quad with USA. Every escalation hits India in fuel prices, rupee, inflation, and 8.5M peoples safety."
  },
  yemen: {
    flag: '🇾🇪', name: 'Yemen — Houthis', color: '#c0392b',
    role: 'Attacking Red Sea shipping',
    text: "Iran-backed Houthis have attacked 100+ commercial ships since Oct 2023 in solidarity with Gaza. This directly disrupts India's shipping to Europe — adding 14 days and $2M extra per trip. Indian exporters are losing competitiveness. Yemen is the poorest Arab country, destroyed by 9 years of civil war."
  },
  kuwait: {
    flag: '🇰🇼', name: 'Kuwait', color: '#6b6b1a',
    role: '900,000 Indians live here',
    text: "900,000 Indians in Kuwait. US has 13,500 troops at Camp Arifjan. Kuwait was invaded by Iraq in 1991 (Gulf War). Generally safe but within range of any Hormuz conflict. Remittances from Kuwait are crucial for families in Kerala and Uttar Pradesh."
  },
  qatar: {
    flag: '🇶🇦', name: 'Qatar', color: '#5b1a6b',
    role: 'US HQ base + Gaza mediator',
    text: "750,000 Indians in Qatar. Hosts Al-Udeid — the US Central Command HQ (10,000 troops). Also hosts Hamas political leadership for diplomatic talks. Qatar is actively mediating Gaza ceasefire negotiations. India buys LNG natural gas from Qatar."
  },
  bahrain: {
    flag: '🇧🇭', name: 'Bahrain', color: '#1a5276',
    role: 'US 5th Fleet — controls Hormuz',
    text: "The US 5th Fleet is based here, directly patrolling the Persian Gulf and Hormuz Strait. 200,000 Indians in Bahrain. If Iran threatens Hormuz, Bahrain is on the absolute frontline. Shia-majority population ruled by Sunni monarchy — internal tensions backed by Iran."
  },
  oman: {
    flag: '🇴🇲', name: 'Oman', color: '#2e7d32',
    role: 'Shares Hormuz Strait with Iran',
    text: "650,000 Indians in Oman. Oman shares the Strait of Hormuz with Iran — one shore each. Acts as quiet diplomatic back-channel between US and Iran. Generally peaceful and stable. India has strong historical trade ties with Oman dating back centuries."
  },
  egypt: {
    flag: '🇪🇬', name: 'Egypt', color: '#4a5a6a',
    role: 'Controls the Suez Canal',
    text: "Peace with Israel since 1979. Controls the Suez Canal — earns $9 billion/year. Deeply worried about conflict disrupting Suez. Mediating Gaza ceasefire talks. Receives $1.3B/year US military aid. If Red Sea stays dangerous, Egypt also loses Suez revenue."
  },
  turkey: {
    flag: '🇹🇷', name: 'Turkey', color: '#4a5560',
    role: 'NATO member, plays both sides',
    text: "NATO member but complicated ally. Sold Bayraktar drones to multiple countries. Has tense relations with US over Kurdish issue. Hosts 3.5 million Syrian refugees. Important trade partner for India. Supports Palestinian cause vocally."
  },
  syria: {
    flag: '🇸🇾', name: 'Syria', color: '#5a6040',
    role: 'Iran weapon supply corridor',
    text: "Iran uses Syria as the land corridor to supply weapons to Hezbollah in Lebanon. Israel has struck Syria 500+ times to destroy these shipments. Assad regime backed by Iran and Russia. A key node in Iran's proxy network."
  },
  lebanon: {
    flag: '🇱🇧', name: 'Lebanon', color: '#8b9467',
    role: 'Hezbollah base — 100K+ rockets',
    text: "Hezbollah (Iran-backed) controls southern Lebanon with 100,000+ rockets aimed at Israel. Major fighting erupted in 2024. India has around 20,000 citizens in Lebanon — some evacuated. Lebanon's economy has completely collapsed in a banking crisis."
  },
  jordan: {
    flag: '🇯🇴', name: 'Jordan', color: '#605840',
    role: 'Peace treaty with Israel',
    text: "Peace with Israel since 1994. Key US ally. Helped intercept Iranian drones during April 2024 attack. Hosts 700,000+ Palestinian refugees. India has warm trade relations with Jordan."
  },
  gaza: {
    flag: '🇵🇸', name: 'Gaza / Hamas', color: '#b8a000',
    role: 'Oct 7 triggered the crisis',
    text: "Oct 7, 2023: Hamas killed 1,200 Israelis in a surprise attack — the single trigger for the entire current crisis. Israel's military response has killed 40,000+ Palestinians. Gaza is almost completely destroyed. India officially supports Palestinian statehood while buying arms from Israel."
  },
  afghanistan: {
    flag: '🇦🇫', name: 'Afghanistan', color: '#45687d',
    role: 'Why India needs Chabahar Port',
    text: "US withdrew in 2021, Taliban controls it. India cannot reach Afghanistan or Central Asia through Pakistan. The ONLY alternative is via Chabahar Port in Iran — which is why India's relationship with Iran is strategically critical despite US pressure to isolate Iran."
  },
  pakistan: {
    flag: '🇵🇰', name: 'Pakistan', color: '#1b5e20',
    role: "Blocks India's land routes",
    text: "India's complicated neighbor. Pakistan blocks India from any land route to Iran, Afghanistan, or Central Asia. This is precisely why India built Chabahar Port in Iran — to bypass Pakistan. Pakistan has its own separate tensions with Iran."
  },
  libya: {
    flag: '🇱🇾', name: 'Libya', color: '#3a4a5a',
    role: 'Unstable border state',
    text: "Not a direct player but unstable since 2011. Arms sometimes flow through Libya. Borders Egypt which controls the Suez Canal. Part of the broader instability belt."
  }
};

// ── SHOW A SCENE ───────────────────────────────────────────────────────────────
function showScene(name, clickedBtn) {
  // Update active button styling
  document.querySelectorAll('.sbtn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }

  var scene = SCENES[name];
  var infoBox = document.getElementById('infoBox');

  // Set info text
  infoBox.innerHTML = scene.info;

  // Change left border color based on scene
  var borderColor = '#e8a020';
  if (name === 'iran')   borderColor = '#cc2222';
  if (name === 'india')  borderColor = '#ff6b35';
  if (name === 'us')     borderColor = '#1a7fc1';
  if (name === 'redsea') borderColor = '#c0392b';
  infoBox.style.borderLeftColor = borderColor;

  // Inject SVG overlay
  document.getElementById('overlay').innerHTML = scene.overlay;

  // Build legend
  var leg = document.getElementById('legendBox');
  leg.innerHTML = scene.legend.map(function(item) {
    return '<div class="leg-item">'
      + '<div class="leg-dot" style="background:' + item.color + '"></div>'
      + '<span>' + item.label + '</span>'
      + '</div>';
  }).join('');
}

// ── CLICK A COUNTRY ────────────────────────────────────────────────────────────
function clickCountry(id) {
  var d = COUNTRIES[id];
  if (!d) return;

  var infoBox = document.getElementById('infoBox');

  infoBox.innerHTML =
    '<strong style="font-size:15px;color:' + d.color + '">'
    + d.flag + ' ' + d.name
    + '</strong>'
    + '&nbsp;&nbsp;'
    + '<span style="font-size:11px;color:#e8a020;font-weight:600">'
    + d.role
    + '</span>'
    + '<br><br>'
    + d.text;

  infoBox.style.borderLeftColor = d.color;
  infoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── INIT ───────────────────────────────────────────────────────────────────────
showScene('overview', document.querySelector('.sbtn.active'));