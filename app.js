/**
 * ქიმიური ბმები და ნივთიერებათა აღნაგობა (Chemical Bonds and Structure of Matter)
 * Georgian National Curriculum (ესგ) Grades 9-11 Interactive EdTech Engine
 */

// ==========================================
// 1. DATA DICTIONARIES & CHEMICAL CONSTANTS
// ==========================================

const ATOMS_DATA = {
  Na: {
    symbol: 'Na',
    nameGeo: 'ნატრიუმი',
    atomicNumber: 11,
    en: 0.93,
    shells: [2, 8, 1],
    valence: 1,
    type: 'metal',
    color: '#f59e0b',
    radius: 46,
    electrons: 11,
    protons: 11
  },
  Cl: {
    symbol: 'Cl',
    nameGeo: 'ქლორი',
    atomicNumber: 17,
    en: 3.16,
    shells: [2, 8, 7],
    valence: 7,
    type: 'nonmetal',
    color: '#10b981',
    radius: 42,
    electrons: 17,
    protons: 17
  },
  H: {
    symbol: 'H',
    nameGeo: 'წყალბადი',
    atomicNumber: 1,
    en: 2.20,
    shells: [1],
    valence: 1,
    type: 'nonmetal',
    color: '#38bdf8',
    radius: 28,
    electrons: 1,
    protons: 1
  },
  O: {
    symbol: 'O',
    nameGeo: 'ჟანგბადი',
    atomicNumber: 8,
    en: 3.44,
    shells: [2, 6],
    valence: 6,
    type: 'nonmetal',
    color: '#f43f5e',
    radius: 36,
    electrons: 8,
    protons: 8
  },
  N: {
    symbol: 'N',
    nameGeo: 'აზოტი',
    atomicNumber: 7,
    en: 3.04,
    shells: [2, 5],
    valence: 5,
    type: 'nonmetal',
    color: '#8b5cf6',
    radius: 38,
    electrons: 7,
    protons: 7
  },
  C: {
    symbol: 'C',
    nameGeo: 'ნახშირბადი',
    atomicNumber: 6,
    en: 2.55,
    shells: [2, 4],
    valence: 4,
    type: 'nonmetal',
    color: '#94a3b8',
    radius: 38,
    electrons: 6,
    protons: 6
  },
  Mg: {
    symbol: 'Mg',
    nameGeo: 'მაგნიუმი',
    atomicNumber: 12,
    en: 1.31,
    shells: [2, 8, 2],
    valence: 2,
    type: 'metal',
    color: '#eab308',
    radius: 45,
    electrons: 12,
    protons: 12
  },
  F: {
    symbol: 'F',
    nameGeo: 'ფტორი',
    atomicNumber: 9,
    en: 3.98,
    shells: [2, 7],
    valence: 7,
    type: 'nonmetal',
    color: '#06b6d4',
    radius: 34,
    electrons: 9,
    protons: 9
  },
  Fe: {
    symbol: 'Fe',
    nameGeo: 'რკინა',
    atomicNumber: 26,
    en: 1.83,
    shells: [2, 8, 14, 2],
    valence: 2,
    type: 'metal',
    color: '#f97316',
    radius: 48,
    electrons: 26,
    protons: 26
  }
};

const MOLECULES_DATA = {
  H2: {
    name: 'წყალბადი (H₂)',
    multiplicity: '1 (ერთმაგი)',
    length: '74 pm (0.74 Å)',
    energy: '436 კჯ/მოლ',
    orbitalDesc: 'H₂-ის მოლეკულაში ორი 1s ორბიტალი გადაიფარება ბირთვების შემაერთებელი ღერძის გასწვრივ. წარმოიქმნება ერთი მტკიცე <strong>σ (სიგმა) ბმა</strong>.',
    sigmaCount: 1,
    piCount: 0,
    sharedPairs: 1
  },
  O2: {
    name: 'ჟანგბადი (O₂)',
    multiplicity: '2 (ორმაგი)',
    length: '121 pm (1.21 Å)',
    energy: '498 კჯ/მოლ',
    orbitalDesc: 'O₂-ის მოლეკულაში წარმოიქმნება <strong>ერთი σ-ბმა</strong> (2p_x ორბიტალების ღერძული გადაფარვით) და <strong>ერთი π-ბმა</strong> (2p_y ორბიტალების გვერდითი გადაფარვით ღერძის მართობულად). სულ 2 საზიარო ელექტრონული წყვილი.',
    sigmaCount: 1,
    piCount: 1,
    sharedPairs: 2
  },
  N2: {
    name: 'აზოტი (N₂)',
    multiplicity: '3 (სამმაგი)',
    length: '110 pm (1.10 Å)',
    energy: '945 კჯ/მოლ',
    orbitalDesc: 'N₂-ის მოლეკულაში არის <strong>ერთი σ-ბმა</strong> და <strong>ორი π-ბმა</strong> (2p_y და 2p_z ორბიტალების გვერდითი გადაფარვა). სამმაგი ბმა განსაკუთრებით მტკიცე და მოკლეა (945 კჯ/მოლ), რაც განაპირობებს აზოტის მაღალ ქიმიურ ინერტულობას ოთახის ტემპერატურაზე.',
    sigmaCount: 1,
    piCount: 2,
    sharedPairs: 3
  },
  CH4: {
    name: 'მეთანი (CH₄)',
    multiplicity: '4 × ერთმაგი',
    length: '109 pm (C-H)',
    energy: '413 კჯ/მოლ (თითო)',
    orbitalDesc: 'ნახშირბადის ატომი იმყოფება sp³ ჰიბრიდიზაციაში. ოთხი იდენტური sp³ ორბიტალი სივრცეში მიმართულია ტეტრაედრის წვეროებისკენ (კუთხე 109.5°), სადაც წყალბადის 1s ორბიტალებთან გადაფარვით წარმოქმნის <strong>4 ცალ σ-ბმას</strong>.',
    sigmaCount: 4,
    piCount: 0,
    sharedPairs: 4
  }
};

const LATTICES_DATA = {
  ionic: {
    title: '🧂 იონური კრისტალის ქცევა (მაგ. NaCl)',
    desc: 'იონურ კრისტალში კათიონები (Na⁺) და ანიონები (Cl⁻) მკაცრად ენაცვლება ერთმანეთს. მექანიკური დარტყმის დროს იონთა ერთი ფენა გადაადგილდება მეორის მიმართ, რის შედეგადაც ერთსახელიანი მუხტები (+ და +, - და -) აღმოჩნდება ერთმანეთის პირისპირ. უეცარი ელექტროსტატიკური განზიდვის ძალა ამსხვრევს კრისტალს — სწორედ ეს განსაზღვრავს იონური ნაერთების <strong>სიმყიფეს (Brittle)</strong>! დნობისთვის საჭიროა 801 °C, რის შემდეგაც იონები მოძრაობს და ნადნობი ატარებს დენს.',
    meltTemp: 801
  },
  atomic: {
    title: '💎 ატომური კრისტალის ქცევა (მაგ. ალმასი / C)',
    desc: 'ალმასში ნახშირბადის თითოეული ატომი დაკავშირებულია ოთხ მეზობელ ატომთან უაღრესად მტკიცე კოვალენტური ბმებით უწყვეტ 3D კარკასში. მექანიკური დარტყმისას ბმები თანაბრად ანაწილებს დატვირთვას და არ ირღვევა (ალმასი ყველაზე მაგარი ბუნებრივი მინერალია). დნობის წერტილი აღემატება 3500 °C-ს!',
    meltTemp: 3550
  },
  molecular: {
    title: '❄️ მოლეკულური კრისტალის ქცევა (მაგ. ყინული H₂O / იოდი I₂)',
    desc: 'მოლეკულურ კრისტალში კვანძებში მოთავსებულია მოლეკულები, რომელთა შორის მოქმედებს მხოლოდ სუსტი მოლეკულათშორისი ურთიერთქმედება (ვან-დერ-ვაალსის ძალები და წყალბადური ბმები). მცირე მექანიკური დარტყმა ან დაბალი ტემპერატურა (0 °C ყინულისთვის) ადვილად არღვევს ამ სუსტ ბმებს. ამიტომ მოლეკულური ნივთიერებები რბილია და დაბალ ტემპერატურაზე დნება.',
    meltTemp: 0
  },
  metallic: {
    title: '🔩 მეტალური კრისტალის ქცევა (მაგ. რკინა Fe / სპილენძი Cu)',
    desc: 'მეტალურ კრისტალში კათიონები გარემოცულია დელოკალიზებული "ელექტრონული ზღვით". მექანიკური დარტყმისას კათიონთა ფენები შეუფერხებლად გასრიალდება ერთმანეთის მიმართ, რადგან ელექტრონული ზღვა მუდმივად მიედინება და იცავს მათ ერთმანეთთან განზიდვისგან. შედეგად მეტალი არ იმსხვრევა, არამედ იცვლის ფორმას — ავლენს <strong>ჭედადობას (Malleability) და პლასტიკურობას</strong>!',
    meltTemp: 1538
  }
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    grade: 'grade9',
    gradeLabel: 'IX კლასი - საბაზო',
    question: 'ნატრიუმის (Na, EN = 0.93) და ქლორის (Cl, EN = 3.16) ურთიერთქმედებისას წარმოიქმნება სუფრის მარილი. ელექტროუარყოფითობათა სხვაობის (ΔEN = 2.23) მიხედვით, რა ტიპის ქიმიური ბმა წარმოიქმნება მათ შორის?',
    options: [
      { text: 'იონური ბმა (მეტალი გადასცემს ელექტრონს არამეტალს)', correct: true },
      { text: 'არაპოლარული კოვალენტური ბმა', correct: false },
      { text: 'მეტალური ბმა', correct: false },
      { text: 'წყალბადური ბმა', correct: false }
    ],
    hint: 'როდესაც ელექტროუარყოფითობათა სხვაობა ΔEN > 1.7-2.0, ელექტრონი თითქმის სრულად გადადის უფრო ელექტროუარყოფით არამეტალზე.',
    explanation: 'სწორი პასუხია <strong>იონური ბმა</strong>. ნატრიუმი არის ტიპური აქტიური მეტალი (დაბალი EN), ქლორი კი აქტიური არამეტალი (მაღალი EN). ΔEN = 3.16 - 0.93 = 2.23 > 1.7, რაც იწვევს Na-სგან 1 ვალენტური ელექტრონის სრულ გადასვლას Cl-ზე, წარმოიქმნება Na⁺ და Cl⁻ იონები.'
  },
  {
    id: 2,
    grade: 'grade9',
    gradeLabel: 'IX კლასი - საბაზო',
    question: 'ოქტეტის წესის მიხედვით, მაგნიუმის ატომს (Mg, Z=12) გარე შრეზე აქვს 2 ვალენტური ელექტრონი [2, 8, 2]. რა უნდა მოხდეს, რათა მან მიიღოს ინერტული აირის მდგრადი კონფიგურაცია?',
    options: [
      { text: 'უნდა გასცეს 2 ვალენტური ელექტრონი და გადავიდეს Mg²⁺ კათიონში', correct: true },
      { text: 'უნდა შეიერთოს 6 ელექტრონი', correct: false },
      { text: 'უნდა გაიზიაროს 4 ელექტრონი', correct: false },
      { text: 'არაფერი, 2 ელექტრონი უკვე მდგრადია', correct: false }
    ],
    hint: 'ატომისთვის ენერგეტიკულად გაცილებით მარტივია მცირე რაოდენობის (1-3) ელექტრონის გაცემა, ვიდრე 6-7 ელექტრონის შემოერთება.',
    explanation: 'სწორი პასუხია: <strong>გასცემს 2 ვალენტურ ელექტრონს</strong>. Mg [2,8,2] - 2e⁻ → Mg²⁺ [2,8]. მიღებული კათიონი იძენს ნეონის (Ne) მსგავს მდგრად 8-ელექტრონიან ოქტეტს.'
  },
  {
    id: 3,
    grade: 'grade9',
    gradeLabel: 'IX კლასი - საბაზო',
    question: 'რა განაპირობებს მეტალების მაღალ ელექტროგამტარობას და ჭედადობას (ფორმის შეცვლის უნარს დამსხვრევის გარეშე)?',
    options: [
      { text: 'დელოკალიზებული "ელექტრონული ზღვა", რომელშიც ელექტრონები თავისუფლად მოძრაობენ', correct: true },
      { text: 'მკაცრად ფიქსირებული იონური წყვილები', correct: false },
      { text: 'მხოლოდ კოვალენტური სიგმა ბმები', correct: false },
      { text: 'მოლეკულათშორისი ვან-დერ-ვაალსის ძალები', correct: false }
    ],
    hint: 'მეტალურ მესერში ვალენტური ელექტრონები არ ეკუთვნის კონკრეტულ ატომს, არამედ განაწილებულია მთელ კრისტალზე.',
    explanation: 'სწორია: <strong>დელოკალიზებული ელექტრონული ზღვა</strong>. როდესაც მეტალს ურტყამენ ჩაქუჩით, კათიონთა ფენები სრიალებს, თუმცა მოძრავი ელექტრონები მათ მუდმივად აკავებს ერთმანეთთან და კრისტალი არ იმსხვრევა.'
  },
  {
    id: 4,
    grade: 'grade10',
    gradeLabel: 'X-XI კლასი - გაღრმავებული',
    question: 'აზოტის მოლეკულაში (N₂) ატომებს შორის მყარდება სამმაგი კოვალენტური ბმა (N≡N). რამდენი σ (სიგმა) და π (პი) ბმისგან შედგება ეს სამმაგი ბმა?',
    options: [
      { text: '1 σ (სიგმა) და 2 π (პი) ბმა', correct: true },
      { text: '3 σ (სიგმა) ბმა', correct: false },
      { text: '2 σ (სიგმა) და 1 π (პი) ბმა', correct: false },
      { text: '3 π (პი) ბმა', correct: false }
    ],
    hint: 'ნებისმიერ ორ ატომს შორის ღერძული გადაფარვით მხოლოდ ერთი σ-ბმა შეიძლება დამყარდეს, ყოველი მომდევნო ბმა კი გვერდითი π-გადაფარვით იქმნება.',
    explanation: 'სწორი პასუხია: <strong>1 σ და 2 π ბმა</strong>. პირველი ბმა არის ღერძული σ-ბმა (2p_x - 2p_x), ხოლო დანარჩენი ორი არის ურთიერთმართობული გვერდითი π-ბმები (2p_y და 2p_z ორბიტალების გადაფარვა).'
  },
  {
    id: 5,
    grade: 'grade10',
    gradeLabel: 'X-XI კლასი - გაღრმავებული',
    question: 'როგორ იცვლება ბმის სიგრძე და ბმის ენერგია ნახშირბად-ნახშირბადის რიგში: ერთმაგი (C-C) → ორმაგი (C=C) → სამმაგი (C≡C)?',
    options: [
      { text: 'ბმის სიგრძე მცირდება, ხოლო ბმის ენერგია (სიმტკიცე) იზრდება', correct: true },
      { text: 'ბმის სიგრძეც და ენერგიაც იზრდება', correct: false },
      { text: 'ბმის სიგრძე იზრდება, ხოლო ენერგია მცირდება', correct: false },
      { text: 'არცერთი არ იცვლება, რადგან ორივე ნახშირბადია', correct: false }
    ],
    hint: 'რაც მეტია საზიარო ელექტრონული წყვილი, მით უფრო ძლიერად იზიდავენ ბირთვები ერთმანეთს და უახლოვდებიან.',
    explanation: 'სწორია: <strong>სიგრძე მცირდება, ენერგია იზრდება</strong>. C-C (154 pm, 348 კჯ/მოლ) → C=C (134 pm, 614 კჯ/მოლ) → C≡C (120 pm, 839 კჯ/მოლ). მეტი საზიარო ელექტრონი ბირთვებს მეტად აახლოებს.'
  },
  {
    id: 6,
    grade: 'grade10',
    gradeLabel: 'X-XI კლასი - გაღრმავებული',
    question: 'ნახშირორჟანგის მოლეკულაში (CO₂) თითოეული C=O ბმა ძლიერ პოლარულია (ΔEN = 0.89). რატომ არის თავად CO₂ მოლეკულა მთლიანობაში არაპოლარული (μ = 0)?',
    options: [
      { text: 'მოლეკულა ხაზოვანია (180°) და ორი იდენტური დიპოლური ვექტორი საპირისპიროა, რაც ერთმანეთს აბათილებს', correct: true },
      { text: 'ნახშირბადს არ გააჩნია ელექტრონები', correct: false },
      { text: 'ჟანგბადის ატომები ერთმანეთს იზიდავენ', correct: false },
      { text: 'CO₂ მხოლოდ აირად მდგომარეობაში არსებობს', correct: false }
    ],
    hint: 'დააკვირდით მოლეკულის სივრცით სიმეტრიას: O = C = O. მიმართეთ ვექტორები ნახშირბადიდან ჟანგბადებისკენ.',
    explanation: 'სწორი პასუხია: <strong>მოლეკულა ხაზოვანია და ვექტორები ერთმანეთს აბათილებს</strong>. CO₂-ში ნახშირბადი sp-ჰიბრიდულია (კუთხე 180°). ორი C=O ბმის დიპოლური მომენტი მიმართულია საპირისპიროდ, მათი ვექტორული ჯამი არის 0. განსხვავებით H₂O-სგან, რომელიც კუთხურია (104.5°) და პოლარულია.'
  },
  {
    id: 7,
    grade: 'grade10',
    gradeLabel: 'X-XI კლასი - გაღრმავებული',
    question: 'ნივთიერება X არის თეთრი მყარი კრისტალი. დნება 801 °C-ზე. მყარ მდგომარეობაში ელექტროდენს არ ატარებს, თუმცა მისი წყალხსნარი და ნადნობი შესანიშნავი გამტარია. მექანიკური დარტყმისას იმსხვრევა. რა ტიპის მესერი აქვს ნივთიერება X-ს?',
    options: [
      { text: 'იონური კრისტალური მესერი', correct: true },
      { text: 'ატომური კრისტალური მესერი', correct: false },
      { text: 'მოლეკულური კრისტალური მესერი', correct: false },
      { text: 'მეტალური კრისტალური მესერი', correct: false }
    ],
    hint: 'მყარში იონები ფიქსირებულია კვანძებში და ვერ გადაადგილდებიან. ნადნობსა და ხსნარში კი თავისუფლად მოძრავი იონები წარმოიქმნება.',
    explanation: 'სწორია: <strong>იონური კრისტალური მესერი</strong> (აღწერილია NaCl). იონურ ნაერთებს ახასიათებთ მაღალი დნობის წერტილი, სიმყიფე და დენის გატარება მხოლოდ ნადნობსა და წყალხსნარში (ელექტროლიტური დისოციაცია).'
  },
  {
    id: 8,
    grade: 'grade10',
    gradeLabel: 'X-XI კლასი - გაღრმავებული',
    question: 'რა არის მიკროსკოპული ფიზიკური მიზეზი იმისა, რომ იონური კრისტალები მექანიკური დარტყმისას იმსხვრევა (მყიფეა), ხოლო მეტალები დეფორმირდება (ჭედადია)?',
    options: [
      { text: 'დარტყმისას იონურ ფენათა გადაადგილებით ერთსახელიანი მუხტები (+ და +, - და -) ხვდება ერთმანეთის პირისპირ, რაც იწვევს ძლიერ ელექტროსტატიკურ განზიდვას', correct: true },
      { text: 'იონურ კრისტალში ატომები უფრო მძიმეა', correct: false },
      { text: 'მეტალებში საერთოდ არ არსებობს დადებითი მუხტი', correct: false },
      { text: 'იონურ კრისტალს არ აქვს გარე შრეები', correct: false }
    ],
    hint: 'გაიხსენეთ კულონის კანონი: ერთსახელიანი მუხტები განიზიდება, სხვადასხვასახელიანი — მიიზიდება.',
    explanation: 'სწორი პასუხია: <strong>ერთსახელიანი მუხტების პირისპირ მოხვედრა და ელექტროსტატიკური განზიდვა</strong>. მეტალში კი მოძრავი ელექტრონული ზღვა მყისიერად ეგუება ფენების ნებისმიერ წანაცვლებას და ხელს უშლის განზიდვას.'
  }
];

// ==========================================
// 2. AUDIO SYNTHESIZER (WEB AUDIO API)
// ==========================================

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('AudioContext not supported');
      }
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restriction catch
    }
  }

  playPop() { this.playTone(480, 'sine', 0.08, 0.08); }
  playBondForm() {
    this.playTone(330, 'triangle', 0.2, 0.12);
    setTimeout(() => this.playTone(440, 'triangle', 0.25, 0.12), 80);
    setTimeout(() => this.playTone(660, 'triangle', 0.35, 0.15), 160);
  }
  playHammer() {
    this.playTone(120, 'sawtooth', 0.2, 0.2);
    this.playTone(80, 'sine', 0.35, 0.25);
  }
  playSuccess() {
    this.playTone(523.25, 'sine', 0.15, 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.15, 0.1), 100);
    setTimeout(() => this.playTone(783.99, 'sine', 0.3, 0.12), 200);
  }
  playError() {
    this.playTone(220, 'sawtooth', 0.25, 0.15);
  }
}

const soundManager = new AudioSynth();

// ==========================================
// 3. APPLICATION STATE
// ==========================================

const AppState = {
  currentGrade: 'grade9', // 'grade9' or 'grade10'
  currentTab: 'module-builder',

  // Module 1 State
  builder: {
    atomA: 'Na',
    atomB: 'Cl',
    distance: 280, // pixels
    minDistance: 130,
    isReacted: false,
    animProgress: 0,
    isDragging: false,
    dragTarget: null
  },

  // Module 2 State
  covalent: {
    currentMol: 'H2',
    currentGeom: 'H2O'
  },

  // Module 3 State
  lattice: {
    type: 'ionic',
    temperature: 25,
    isStressed: false,
    stressOffset: 0
  },

  // Module 4 State
  quiz: {
    filter: 'all',
    userAnswers: {},
    hintsShown: {}
  }
};

// ==========================================
// 4. MODULE 1: BOND BUILDER CANVAS ENGINE
// ==========================================

class BondBuilderCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.time = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initEvents();
    this.renderLoop = this.renderLoop.bind(this);
    requestAnimationFrame(this.renderLoop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  initEvents() {
    let startX = 0;

    const handlePointerDown = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = this.width / 2;
      const leftX = centerX - AppState.builder.distance / 2;
      const rightX = centerX + AppState.builder.distance / 2;
      const atomY = this.height / 2;

      const dLeft = Math.hypot(x - leftX, y - atomY);
      const dRight = Math.hypot(x - rightX, y - atomY);

      if (dLeft < 80 || dRight < 80) {
        AppState.builder.isDragging = true;
        startX = x;
        soundManager.playPop();
      }
    };

    const handlePointerMove = (e) => {
      if (!AppState.builder.isDragging) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;

      const centerX = this.width / 2;
      let newDist = Math.abs(x - centerX) * 2;
      newDist = Math.max(70, Math.min(320, newDist));
      AppState.builder.distance = newDist;

      const slider = document.getElementById('atom-distance-slider');
      if (slider) slider.value = newDist;

      if (newDist <= AppState.builder.minDistance + 10 && !AppState.builder.isReacted) {
        triggerBondReaction();
      }
    };

    const handlePointerUp = () => {
      AppState.builder.isDragging = false;
    };

    this.canvas.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) handlePointerDown(e.touches[0]);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) handlePointerMove(e.touches[0]);
    }, { passive: true });
    window.addEventListener('touchend', handlePointerUp);
  }

  renderLoop() {
    this.time += 0.03;
    this.draw();
    requestAnimationFrame(this.renderLoop);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const atomAData = ATOMS_DATA[AppState.builder.atomA];
    const atomBData = ATOMS_DATA[AppState.builder.atomB];
    if (!atomAData || !atomBData) return;

    const deltaEN = Math.abs(atomAData.en - atomBData.en);
    const centerX = this.width / 2;
    const centerY = this.height / 2;

    const isMetalA = atomAData.type === 'metal';
    const isMetalB = atomBData.type === 'metal';
    const isBothMetals = isMetalA && isMetalB;
    const isIonic = (deltaEN >= 1.7) || (isMetalA !== isMetalB && deltaEN >= 1.2);
    const isCovalentNonpolar = !isIonic && !isBothMetals && deltaEN < 0.4;
    const isCovalentPolar = !isIonic && !isBothMetals && deltaEN >= 0.4;

    const dist = AppState.builder.distance;
    const leftX = centerX - dist / 2;
    const rightX = centerX + dist / 2;

    // Draw background grid lines (subtle lab style)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x < this.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }
    for (let y = 0; y < this.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // Reaction visualization when close
    if (dist < 180) {
      this.drawBondInteractions(ctx, leftX, rightX, centerY, atomAData, atomBData, isIonic, isBothMetals, isCovalentPolar, isCovalentNonpolar);
    }

    // Draw Atom A (Left)
    this.drawBohrAtom(ctx, leftX, centerY, atomAData, 'left', isIonic, dist < 140);

    // Draw Atom B (Right)
    this.drawBohrAtom(ctx, rightX, centerY, atomBData, 'right', isIonic, dist < 140);

    // Internuclear axis line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(leftX + atomAData.radius, centerY);
    ctx.lineTo(rightX - atomBData.radius, centerY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Distance Label
    const distPm = Math.round(dist * 0.85);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '11px JetBrains Mono, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${distPm} pm`, centerX, centerY - 10);
  }

  drawBohrAtom(ctx, x, y, data, side, isIonic, isClose) {
    const shells = data.shells;
    const numShells = shells.length;
    const baseRadius = 24;
    const shellGap = 18;

    // Atom Nucleus
    const grad = ctx.createRadialGradient(x, y, 0, x, y, baseRadius);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.4, data.color);
    grad.addColorStop(1, '#0f172a');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, baseRadius, 0, Math.PI * 2);
    ctx.fill();

    // Nucleus text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px JetBrains Mono, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(data.symbol, x, y - 2);

    // Proton count subscript
    ctx.font = '9px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillText(`+${data.protons}`, x, y + 10);

    // Draw Electron Shells & Electrons
    shells.forEach((electronCount, sIdx) => {
      const radius = baseRadius + (sIdx + 1) * shellGap;

      // Orbit line
      ctx.strokeStyle = (sIdx === numShells - 1) ? 'rgba(56, 189, 248, 0.45)' : 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = (sIdx === numShells - 1) ? 1.5 : 1;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Skip valence electron rendering for donor atom if ionic and close
      const isValenceShell = (sIdx === numShells - 1);
      let renderCount = electronCount;

      if (isIonic && isClose && isValenceShell) {
        if (data.type === 'metal') {
          renderCount = 0; // Transferred away!
        } else {
          renderCount = 8; // Octet filled!
        }
      }

      // Rotate each shell at slightly different speed
      const angleOffset = this.time * (0.5 / (sIdx + 1)) * (sIdx % 2 === 0 ? 1 : -1);

      for (let i = 0; i < renderCount; i++) {
        const angle = angleOffset + (i * 2 * Math.PI) / (renderCount || 1);
        const ex = x + radius * Math.cos(angle);
        const ey = y + radius * Math.sin(angle);

        // Electron glow
        ctx.fillStyle = isValenceShell ? '#38bdf8' : '#94a3b8';
        ctx.shadowColor = isValenceShell ? '#38bdf8' : 'transparent';
        ctx.shadowBlur = isValenceShell ? 6 : 0;

        ctx.beginPath();
        ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; // Reset shadow
      }
    });

    // Ionic charge badges when reacted/close
    if (isIonic && isClose) {
      const chargeSign = data.type === 'metal' ? `+${data.valence}` : `-${ATOMS_DATA[AppState.builder.atomA].valence}`;
      ctx.fillStyle = data.type === 'metal' ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 16px JetBrains Mono, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`[${data.symbol}]${chargeSign}`, x, y - baseRadius - numShells * shellGap - 14);

      // Electrostatic halo
      ctx.strokeStyle = data.type === 'metal' ? 'rgba(251, 191, 36, 0.4)' : 'rgba(52, 211, 153, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, baseRadius + numShells * shellGap + 8, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  drawBondInteractions(ctx, leftX, rightX, centerY, atomA, atomB, isIonic, isBothMetals, isPolar, isNonpolar) {
    const midX = (leftX + rightX) / 2;

    if (isIonic) {
      // 1. Electron transfer leap curve
      const metalX = atomA.type === 'metal' ? leftX : rightX;
      const nonmetalX = atomA.type === 'metal' ? rightX : leftX;
      const startX = metalX;
      const targetX = nonmetalX;
      const controlY = centerY - 70;

      // Curved transfer trajectory
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(startX, centerY);
      ctx.quadraticCurveTo(midX, controlY, targetX, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Leaping electron
      const t = (Math.sin(this.time * 3) + 1) / 2;
      const lex = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * targetX;
      const ley = (1 - t) * (1 - t) * centerY + 2 * (1 - t) * t * controlY + t * t * centerY;

      ctx.fillStyle = '#f43f5e';
      ctx.shadowColor = '#f43f5e';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(lex, ley, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label: Electron transfer
      ctx.fillStyle = '#fda4af';
      ctx.font = 'bold 12px Noto Sans Georgian, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ ელექტრონის სრული გადასვლა', midX, controlY - 12);

      // Electrostatic attraction glow between ions
      const attractionGrad = ctx.createLinearGradient(leftX, centerY, rightX, centerY);
      attractionGrad.addColorStop(0, 'rgba(251, 191, 36, 0.3)');
      attractionGrad.addColorStop(0.5, 'rgba(244, 63, 94, 0.5)');
      attractionGrad.addColorStop(1, 'rgba(52, 211, 153, 0.3)');

      ctx.strokeStyle = attractionGrad;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(leftX + 25, centerY);
      ctx.lineTo(rightX - 25, centerY);
      ctx.stroke();

    } else if (isBothMetals) {
      // 2. Delocalized electron sea
      ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
      ctx.beginPath();
      ctx.ellipse(midX, centerY, 130, 80, 0, 0, Math.PI * 2);
      ctx.fill();

      // Free flowing electron dots
      for (let i = 0; i < 14; i++) {
        const angle = this.time * 2 + i * (Math.PI * 2 / 14);
        const radiusX = 60 + Math.sin(this.time + i) * 35;
        const radiusY = 35 + Math.cos(this.time * 1.5 + i) * 25;
        const ex = midX + radiusX * Math.cos(angle);
        const ey = centerY + radiusY * Math.sin(angle);

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(ex, ey, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#fcd34d';
      ctx.font = 'bold 12px Noto Sans Georgian, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🌊 დელოკალიზებული "ელექტრონული ზღვა"', midX, centerY - 60);

    } else {
      // 3. Covalent shared pair
      const isPolarShift = isPolar;
      // Shift cloud towards atom with higher EN
      const shiftX = isPolarShift ? (atomA.en > atomB.en ? -18 : 18) : 0;
      const cloudX = midX + shiftX;

      // Electron density cloud
      const cloudGrad = ctx.createRadialGradient(cloudX, centerY, 5, cloudX, centerY, 55);
      if (isPolarShift) {
        cloudGrad.addColorStop(0, 'rgba(6, 182, 212, 0.5)');
        cloudGrad.addColorStop(0.7, 'rgba(6, 182, 212, 0.15)');
        cloudGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      } else {
        cloudGrad.addColorStop(0, 'rgba(16, 185, 129, 0.5)');
        cloudGrad.addColorStop(0.7, 'rgba(16, 185, 129, 0.15)');
        cloudGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      }

      ctx.fillStyle = cloudGrad;
      ctx.beginPath();
      ctx.ellipse(cloudX, centerY, 65, 42, 0, 0, Math.PI * 2);
      ctx.fill();

      // Shared electron pair dots revolving
      const pairCount = Math.min(atomA.valence, atomB.valence, 3);
      for (let p = 0; p < pairCount; p++) {
        const pAngle = this.time * 2.5 + (p * Math.PI / pairCount);
        const ex1 = cloudX + 16 * Math.cos(pAngle);
        const ey1 = centerY + 18 * Math.sin(pAngle);
        const ex2 = cloudX - 16 * Math.cos(pAngle);
        const ey2 = centerY - 18 * Math.sin(pAngle);

        ctx.fillStyle = isPolarShift ? '#22d3ee' : '#34d399';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(ex1, ey1, 3.5, 0, Math.PI * 2);
        ctx.arc(ex2, ey2, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Dipole badges (δ+ and δ-)
      if (isPolarShift) {
        const moreEnX = atomA.en > atomB.en ? leftX : rightX;
        const lessEnX = atomA.en > atomB.en ? rightX : leftX;

        ctx.font = 'bold 16px JetBrains Mono, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('δ⁻', moreEnX, centerY - 65);
        ctx.fillStyle = '#f87171';
        ctx.fillText('δ⁺', lessEnX, centerY - 65);

        // Dipole vector arrow
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(lessEnX, centerY - 50);
        ctx.lineTo(moreEnX, centerY - 50);
        ctx.stroke();

        ctx.font = '11px Noto Sans Georgian, sans-serif';
        ctx.fillStyle = '#67e8f9';
        ctx.fillText('საზიარო წყვილი გადახრილია (პოლარული)', midX, centerY + 55);
      } else {
        ctx.font = '11px Noto Sans Georgian, sans-serif';
        ctx.fillStyle = '#6ee7b7';
        ctx.fillText('სიმეტრიული საზიარო წყვილი (არაპოლარული)', midX, centerY + 55);
      }
    }
  }
}

// ==========================================
// 5. MODULE 2: COVALENT DEEP DIVE ENGINES
// ==========================================

class OrbitalsCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.time = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.renderLoop = this.renderLoop.bind(this);
    requestAnimationFrame(this.renderLoop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  renderLoop() {
    this.time += 0.035;
    this.draw();
    requestAnimationFrame(this.renderLoop);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const molKey = AppState.covalent.currentMol;
    const centerX = this.width / 2;
    const centerY = this.height / 2;

    if (molKey === 'H2') {
      this.drawH2(ctx, centerX, centerY);
    } else if (molKey === 'O2') {
      this.drawO2(ctx, centerX, centerY);
    } else if (molKey === 'N2') {
      this.drawN2(ctx, centerX, centerY);
    } else if (molKey === 'CH4') {
      this.drawCH4(ctx, centerX, centerY);
    }
  }

  drawH2(ctx, cx, cy) {
    const dist = 110;
    const x1 = cx - dist / 2;
    const x2 = cx + dist / 2;

    // 1s Spherical Overlap (Sigma bond)
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 75);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0.6)');
    grad.addColorStop(0.7, 'rgba(56, 189, 248, 0.2)');
    grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 75, 42, 0, 0, Math.PI * 2);
    ctx.fill();

    // Nuclei
    [x1, x2].forEach((x, i) => {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(x, cy, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('H', x, cy);
    });

    // Axial sigma label
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(x1 - 40, cy);
    ctx.lineTo(x2 + 40, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('σ (სიგმა) ბმა: 1s-1s ღერძული გადაფარვა', cx, cy - 60);
  }

  drawO2(ctx, cx, cy) {
    const dist = 140;
    const x1 = cx - dist / 2;
    const x2 = cx + dist / 2;

    // 1. Axial Sigma overlap along center
    const sigmaGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 45);
    sigmaGrad.addColorStop(0, 'rgba(56, 189, 248, 0.6)');
    sigmaGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = sigmaGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 45, 22, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Lateral Pi overlap (2 lobes: above and below)
    const piGradTop = ctx.createRadialGradient(cx, cy - 45, 10, cx, cy - 45, 45);
    piGradTop.addColorStop(0, 'rgba(244, 63, 94, 0.55)');
    piGradTop.addColorStop(1, 'rgba(244, 63, 94, 0)');
    ctx.fillStyle = piGradTop;
    ctx.beginPath();
    ctx.ellipse(cx, cy - 45, 55, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    const piGradBot = ctx.createRadialGradient(cx, cy + 45, 10, cx, cy + 45, 45);
    piGradBot.addColorStop(0, 'rgba(244, 63, 94, 0.55)');
    piGradBot.addColorStop(1, 'rgba(244, 63, 94, 0)');
    ctx.fillStyle = piGradBot;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 45, 55, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    // Nuclei
    [x1, x2].forEach((x) => {
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(x, cy, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('O', x, cy);
    });

    // Labels
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('1 × σ (ღერძული)', cx, cy + 5);

    ctx.fillStyle = '#f43f5e';
    ctx.font = 'bold 11px Noto Sans Georgian';
    ctx.fillText('1 × π (გვერდითი გადაფარვა)', cx, cy - 75);
  }

  drawN2(ctx, cx, cy) {
    const dist = 140;
    const x1 = cx - dist / 2;
    const x2 = cx + dist / 2;

    // Central Sigma overlap
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 40, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Two Pi overlaps (Vertical and Depth)
    ctx.fillStyle = 'rgba(168, 85, 247, 0.45)';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 50, 60, 24, 0, 0, Math.PI * 2);
    ctx.ellipse(cx, cy + 50, 60, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    // Horizontal depth Pi lobes
    ctx.fillStyle = 'rgba(236, 72, 153, 0.4)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 25, 48, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(cx, cy, 25, 48, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // Nuclei
    [x1, x2].forEach((x) => {
      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(x, cy, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('N', x, cy);
    });

    ctx.fillStyle = '#c084fc';
    ctx.font = 'bold 13px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('სამმაგი ბმა: 1 σ + 2 π (უმაღლესი სიმტკიცე: 945 კჯ/მოლ)', cx, cy - 85);
  }

  drawCH4(ctx, cx, cy) {
    // Carbon center
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C', cx, cy);

    // 4 Tetrahedral Hydrogens
    const angles = [-Math.PI / 2, Math.PI / 6, 5 * Math.PI / 6, Math.PI / 3 + 0.3];
    const armLen = 85;

    angles.forEach((ang, idx) => {
      const hx = cx + armLen * Math.cos(ang);
      const hy = cy + armLen * Math.sin(ang);

      // Sigma bond arm
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(hx, hy);
      ctx.stroke();

      // Hydrogen
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(hx, hy, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px JetBrains Mono';
      ctx.fillText('H', hx, hy);
    });

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('sp³ ჰიბრიდიზაცია — 4 ცალი ტეტრაედრული σ-ბმა (109.5°)', cx, cy + 115);
  }
}

class PolarityCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.time = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.renderLoop = this.renderLoop.bind(this);
    requestAnimationFrame(this.renderLoop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  renderLoop() {
  }

  renderLoop() {
    this.time += 0.03;
    this.draw();
    requestAnimationFrame(this.renderLoop);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const geom = AppState.covalent.currentGeom;
    const cx = this.width / 2;
    const cy = this.height / 2;

    if (geom === 'H2O') {
      this.drawWater(ctx, cx, cy);
    } else if (geom === 'CO2') {
      this.drawCO2(ctx, cx, cy);
    } else if (geom === 'NH3') {
      this.drawNH3(ctx, cx, cy);
    }
  }

  drawWater(ctx, cx, cy) {
    // Oxygen at top-center
    const ox = cx;
    const oy = cy - 25;

    // Two hydrogens at angle 104.5°
    const angleRad = (104.5 / 2) * (Math.PI / 180);
    const arm = 95;
    const h1x = ox - arm * Math.sin(angleRad);
    const h1y = oy + arm * Math.cos(angleRad);
    const h2x = ox + arm * Math.sin(angleRad);
    const h2y = oy + arm * Math.cos(angleRad);

    // Bonds
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(h1x, h1y);
    ctx.moveTo(ox, oy);
    ctx.lineTo(h2x, h2y);
    ctx.stroke();

    // Bond Dipole Vectors (pointing from H to O)
    this.drawArrow(ctx, h1x, h1y, ox - 12, oy + 8, '#06b6d4', 'μ₁');
    this.drawArrow(ctx, h2x, h2y, ox + 12, oy + 8, '#06b6d4', 'μ₂');

    // Oxygen atom
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(ox, oy, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('O', ox, oy);

    // Lone electron pairs (2 pairs)
    ctx.fillStyle = 'rgba(244, 63, 94, 0.4)';
    ctx.beginPath();
    ctx.ellipse(ox - 22, oy - 22, 16, 9, -Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(ox + 22, oy - 22, 16, 9, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // Hydrogens
    [ [h1x, h1y], [h2x, h2y] ].forEach(([x, y]) => {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.fillText('H', x, y);
    });

    // Net Resultant Dipole Vector (pointing straight up)
    this.drawArrow(ctx, ox, oy + 70, ox, oy - 65, '#f59e0b', 'μ_ჯამი = 1.85 D (პოლარული!)', 4);

    // Delta badges
    ctx.font = 'bold 14px JetBrains Mono';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('2δ⁻', ox, oy - 42);
    ctx.fillStyle = '#f87171';
    ctx.fillText('δ⁺', h1x - 18, h1y + 12);
    ctx.fillText('δ⁺', h2x + 18, h2y + 12);
  }

  drawCO2(ctx, cx, cy) {
    // Carbon center, Oxygens left and right (180°)
    const arm = 130;
    const ox1 = cx - arm;
    const ox2 = cx + arm;
    const oy = cy;

    // Double bonds (two lines each)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ox1 + 22, oy - 5);
    ctx.lineTo(cx - 22, oy - 5);
    ctx.moveTo(ox1 + 22, oy + 5);
    ctx.lineTo(cx - 22, oy + 5);

    ctx.moveTo(cx + 22, oy - 5);
    ctx.lineTo(ox2 - 22, oy - 5);
    ctx.moveTo(cx + 22, oy + 5);
    ctx.lineTo(ox2 - 22, oy + 5);
    ctx.stroke();

    // Opposing Dipole Arrows (pointing away from C to O)
    this.drawArrow(ctx, cx, oy - 35, ox1, oy - 35, '#06b6d4', 'μ₁ (←)');
    this.drawArrow(ctx, cx, oy - 35, ox2, oy - 35, '#06b6d4', 'μ₂ (→)');

    // Carbon
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(cx, oy, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C', cx, oy);

    // Oxygens
    [ox1, ox2].forEach(x => {
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(x, oy, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px JetBrains Mono';
      ctx.fillText('O', x, oy);
    });

    // Zero Dipole Banner
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 15px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('μ_ჯამი = 0 D  (ვექტორები აბათილებს ერთმანეთს → არაპოლარული!)', cx, cy + 65);
  }

  drawNH3(ctx, cx, cy) {
    const ny = cy - 25;
    const arm = 85;

    // 3 Hydrogens trigonal pyramidal
    const h1x = cx - arm * 0.9;
    const h1y = ny + arm * 0.7;
    const h2x = cx + arm * 0.9;
    const h2y = ny + arm * 0.7;
    const h3x = cx;
    const h3y = ny + arm * 0.95;

    // Bonds
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    [ [h1x, h1y], [h2x, h2y], [h3x, h3y] ].forEach(([hx, hy]) => {
      ctx.beginPath();
      ctx.moveTo(cx, ny);
      ctx.lineTo(hx, hy);
      ctx.stroke();
    });

    // Nitrogen
    ctx.fillStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.arc(cx, ny, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', cx, ny);

    // 1 Lone pair at top
    ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
    ctx.beginPath();
    ctx.ellipse(cx, ny - 25, 14, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hydrogens
    [ [h1x, h1y], [h2x, h2y], [h3x, h3y] ].forEach(([x, y]) => {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px JetBrains Mono';
      ctx.fillText('H', x, y);
    });

    // Net Resultant Dipole Vector
    this.drawArrow(ctx, cx, ny + 75, cx, ny - 65, '#f59e0b', 'μ_ჯამი = 1.47 D (პოლარული)', 4);
  }

  drawArrow(ctx, fromX, fromY, toX, toY, color, label, width = 2.5) {
    const headlen = 10;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);

    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();

    if (label) {
      ctx.fillStyle = color;
      ctx.font = 'bold 11px JetBrains Mono, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(label, (fromX + toX) / 2, (fromY + toY) / 2 - 8);
    }
  }
}

// ==========================================
// 6. MODULE 3: CRYSTAL LATTICES & STRESS ENGINE
// ==========================================

class LatticeCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.time = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.renderLoop = this.renderLoop.bind(this);
    requestAnimationFrame(this.renderLoop);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  renderLoop() {
    this.time += 0.04;
    this.draw();
    requestAnimationFrame(this.renderLoop);
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const type = AppState.lattice.type;
    const temp = AppState.lattice.temperature;
    const isStressed = AppState.lattice.isStressed;

    // Thermal vibration amplitude increases with temperature
    const vibAmp = Math.min(18, (temp / 100) * 1.2);

    if (type === 'ionic') {
      this.drawIonicLattice(ctx, vibAmp, isStressed, temp);
    } else if (type === 'atomic') {
      this.drawAtomicLattice(ctx, vibAmp, isStressed, temp);
    } else if (type === 'molecular') {
      this.drawMolecularLattice(ctx, vibAmp, isStressed, temp);
    } else if (type === 'metallic') {
      this.drawMetallicLattice(ctx, vibAmp, isStressed, temp);
    }
  }

  drawIonicLattice(ctx, vibAmp, isStressed, temp) {
    const rows = 4;
    const cols = 9;
    const spacing = 65;
    const startX = (this.width - (cols - 1) * spacing) / 2;
    const startY = 100;

    // If stressed: top two rows shift by 1 column spacing!
    const shift = isStressed ? spacing : 0;

    // Draw bonds between nodes
    ctx.strokeStyle = isStressed ? 'rgba(239, 68, 68, 0.4)' : 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;

    for (let r = 0; r < rows; r++) {
      const rowShift = (r < 2 && isStressed) ? shift : 0;
      for (let c = 0; c < cols; c++) {
        const x = startX + c * spacing + rowShift;
        const y = startY + r * spacing;

        // Horizontal bond
        if (c < cols - 1) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + spacing, y);
          ctx.stroke();
        }

        // Vertical bond (broken at fracture line r=1 to r=2 if stressed)
        if (r < rows - 1) {
          if (r === 1 && isStressed) {
            // Draw fracture crack / repulsion lightning!
            ctx.strokeStyle = '#ef4444';
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(startX - 20, y + spacing / 2);
            ctx.lineTo(startX + cols * spacing + 40, y + spacing / 2);
            ctx.stroke();
            ctx.setLineDash([]);
          } else {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + spacing);
            ctx.stroke();
          }
        }
      }
    }

    // Draw Ions
    for (let r = 0; r < rows; r++) {
      const rowShift = (r < 2 && isStressed) ? shift : 0;
      for (let c = 0; c < cols; c++) {
        // Alternating Na+ and Cl-
        const isNa = (r + c) % 2 === 0;
        const vibX = (Math.sin(this.time * 4 + r + c) * vibAmp);
        const vibY = (Math.cos(this.time * 4 + r * 2 + c) * vibAmp);

        const x = startX + c * spacing + rowShift + vibX;
        const y = startY + r * spacing + vibY;

        if (isNa) {
          // Na+ cation
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(x, y, 16, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px JetBrains Mono';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Na⁺', x, y);
        } else {
          // Cl- anion
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(x, y, 20, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px JetBrains Mono';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Cl⁻', x, y);
        }

        // If stressed, show intense repulsion arrows between row 1 and row 2
        if (isStressed && r === 1) {
          // Check if like charges align directly below!
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 15px sans-serif';
          ctx.fillText('⚡ განზიდვა!', x, y + spacing / 2);
        }
      }
    }

    // High temperature melting notification
    if (temp >= 801) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 14px Noto Sans Georgian';
      ctx.textAlign = 'center';
      ctx.fillText('🔥 ტემპერატურა ≥ 801 °C: იონური მესერი ირღვევა, გადადის ნადნობში (დენის გამტარი)!', this.width / 2, 40);
    }
  }

  drawMetallicLattice(ctx, vibAmp, isStressed, temp) {
    const rows = 4;
    const cols = 9;
    const spacing = 65;
    const startX = (this.width - (cols - 1) * spacing) / 2;
    const startY = 100;

    // If stressed: top rows slide smoothly, deformed plastically
    const shift = isStressed ? 45 : 0;

    // Electron sea shimmer background
    ctx.fillStyle = 'rgba(245, 158, 11, 0.08)';
    ctx.fillRect(startX - 30, startY - 30, cols * spacing + 60, rows * spacing + 60);

    // Flowing electron sea particles
    for (let i = 0; i < 40; i++) {
      const ex = startX - 20 + ((i * 37 + this.time * 60) % (cols * spacing + 40));
      const ey = startY - 20 + ((i * 29 + this.time * 30) % (rows * spacing + 40));

      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(ex, ey, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Metal Cations (Fe²⁺)
    for (let r = 0; r < rows; r++) {
      const rowShift = (r < 2 && isStressed) ? shift : 0;
      for (let c = 0; c < cols; c++) {
        const vibX = (Math.sin(this.time * 4 + r + c) * vibAmp);
        const vibY = (Math.cos(this.time * 4 + r + c) * vibAmp);

        const x = startX + c * spacing + rowShift + vibX;
        const y = startY + r * spacing + vibY;

        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Fe²⁺', x, y);
      }
    }

    if (isStressed) {
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 14px Noto Sans Georgian';
      ctx.textAlign = 'center';
      ctx.fillText('✨ ფენები გასრიალდა უსაფრთხოდ! ელექტრონული ზღვა იცავს დამსხვრევისგან → ჭედადობა (Malleability)', this.width / 2, 45);
    }
  }

  drawAtomicLattice(ctx, vibAmp, isStressed, temp) {
    const cx = this.width / 2;
    const cy = this.height / 2;

    // Diamond tetrahedral mesh lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 3;

    const nodes = [
      { x: cx, y: cy - 70 },
      { x: cx - 90, y: cy },
      { x: cx + 90, y: cy },
      { x: cx - 45, y: cy + 75 },
      { x: cx + 45, y: cy + 75 },
      { x: cx - 140, y: cy + 60 },
      { x: cx + 140, y: cy + 60 },
      { x: cx, y: cy + 10 }
    ];

    // Bonds
    ctx.beginPath();
    nodes.forEach((n1, i) => {
      nodes.forEach((n2, j) => {
        if (i < j && Math.hypot(n1.x - n2.x, n1.y - n2.y) < 115) {
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
        }
      });
    });
    ctx.stroke();

    // Carbon Atoms
    nodes.forEach(n => {
      const vx = Math.sin(this.time * 3 + n.x) * (vibAmp * 0.4);
      const vy = Math.cos(this.time * 3 + n.y) * (vibAmp * 0.4);

      ctx.fillStyle = '#94a3b8';
      ctx.beginPath();
      ctx.arc(n.x + vx, n.y + vy, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('C', n.x + vx, n.y + vy);
    });

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('💎 უწყვეტი 3D კოვალენტური ქსელი: უმაღლესი სიმაგრე & მდგრადობა (> 3500 °C)', cx, 45);
  }

  drawMolecularLattice(ctx, vibAmp, isStressed, temp) {
    const cx = this.width / 2;
    const cy = this.height / 2;
    const isMelted = temp >= 0; // Ice melts at 0°C

    const molPositions = [
      { x: cx - 120, y: cy - 60 },
      { x: cx, y: cy - 70 },
      { x: cx + 120, y: cy - 60 },
      { x: cx - 70, y: cy + 30 },
      { x: cx + 70, y: cy + 30 },
      { x: cx, y: cy + 90 }
    ];

    // Weak intermolecular forces (dashed lines)
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let i = 0; i < molPositions.length; i++) {
      for (let j = i + 1; j < molPositions.length; j++) {
        if (Math.hypot(molPositions[i].x - molPositions[j].x, molPositions[i].y - molPositions[j].y) < 140) {
          ctx.moveTo(molPositions[i].x, molPositions[i].y);
          ctx.lineTo(molPositions[j].x, molPositions[j].y);
        }
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Water Molecules
    molPositions.forEach((pos, idx) => {
      const meltScatter = (isMelted && temp > 100) ? Math.sin(this.time * 2 + idx) * 35 : 0;
      const vx = Math.sin(this.time * 4 + idx) * vibAmp + meltScatter;
      const vy = Math.cos(this.time * 4 + idx) * vibAmp + meltScatter;

      const mx = pos.x + vx;
      const my = pos.y + vy;

      // Oxygen
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(mx, my, 12, 0, Math.PI * 2);
      ctx.fill();

      // Hydrogens
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(mx - 10, my + 10, 6, 0, Math.PI * 2);
      ctx.arc(mx + 10, my + 10, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = '#6ee7b7';
    ctx.font = 'bold 14px Noto Sans Georgian';
    ctx.textAlign = 'center';
    ctx.fillText('❄️ სუსტი მოლეკულათშორისი ძალები: ადვილად ირღვევა მცირე გაცხელებისას (დნობა 0 °C)', cx, 45);
  }
}

// ==========================================
// 7. MODULE 4: FORMATIVE ASSESSMENT LOGIC
// ==========================================

function initQuiz() {
  const container = document.getElementById('quiz-questions-list');
  if (!container) return;

  renderQuizQuestions();
  updateQuizScore();
}

function renderQuizQuestions() {
  const container = document.getElementById('quiz-questions-list');
  if (!container) return;

  const filter = AppState.quiz.filter;
  const filtered = QUIZ_QUESTIONS.filter(q => filter === 'all' || q.grade === filter);

  container.innerHTML = filtered.map((q, qIndex) => {
    const isAnswered = AppState.quiz.userAnswers.hasOwnProperty(q.id);
    const userAnswer = AppState.quiz.userAnswers[q.id];
    const isHintShown = AppState.quiz.hintsShown[q.id];

    let cardClass = 'question-card';
    if (isAnswered) {
      cardClass += userAnswer.correct ? ' answered-correct' : ' answered-incorrect';
    }

    return `
      <div class="${cardClass}" id="qcard-${q.id}">
        <div class="question-meta">
          <span class="question-tag ${q.grade}">${q.gradeLabel}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">კითხვა ${qIndex + 1} / ${filtered.length}</span>
        </div>

        <div class="question-text">${q.question}</div>

        <div class="options-list">
          ${q.options.map((opt, oIdx) => {
            let optClass = 'option-item';
            if (isAnswered) {
              optClass += ' locked';
              if (opt.correct) optClass += ' correct';
              else if (userAnswer.selectedIndex === oIdx) optClass += ' wrong';
            }

            return `
              <div class="${optClass}" onclick="handleOptionSelect(${q.id}, ${oIdx})">
                <span class="option-indicator">${String.fromCharCode(65 + oIdx)}</span>
                <span>${opt.text}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Hint Box -->
        <div class="quiz-hint-box ${isHintShown ? 'show' : ''}" id="hint-${q.id}">
          💡 <strong>მინიშნება:</strong> ${q.hint}
        </div>

        <!-- Feedback Box -->
        <div class="quiz-feedback-box ${isAnswered ? 'show ' + (userAnswer.correct ? 'success' : 'error') : ''}" id="feedback-${q.id}">
          ${isAnswered ? (userAnswer.correct ? '✅ <strong>სწორია!</strong> ' : '❌ <strong>არასწორია.</strong> ') + q.explanation : ''}
        </div>

        <!-- Card Actions -->
        <div class="question-actions">
          <button class="btn-secondary" style="font-size: 0.78rem;" onclick="toggleHint(${q.id})">
            <span>💡 მინიშნება</span>
          </button>
          ${isAnswered ? `
            <span style="font-size: 0.8rem; font-weight: 600; color: ${userAnswer.correct ? '#34d399' : '#f87171'}">
              ${userAnswer.correct ? '+1 ქულა' : '0 ქულა'}
            </span>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

window.handleOptionSelect = function(qId, optionIndex) {
  if (AppState.quiz.userAnswers.hasOwnProperty(qId)) return; // Already answered

  const question = QUIZ_QUESTIONS.find(q => q.id === qId);
  if (!question) return;

  const isCorrect = question.options[optionIndex].correct;
  AppState.quiz.userAnswers[qId] = {
    selectedIndex: optionIndex,
    correct: isCorrect
  };

  if (isCorrect) {
    soundManager.playSuccess();
  } else {
    soundManager.playError();
  }

  renderQuizQuestions();
  updateQuizScore();
};

window.toggleHint = function(qId) {
  AppState.quiz.hintsShown[qId] = !AppState.quiz.hintsShown[qId];
  soundManager.playPop();
  renderQuizQuestions();
};

function updateQuizScore() {
  const answeredCount = Object.keys(AppState.quiz.userAnswers).length;
  const correctCount = Object.values(AppState.quiz.userAnswers).filter(a => a.correct).length;
  const total = QUIZ_QUESTIONS.length;

  const scoreEl = document.getElementById('quiz-score-num');
  if (scoreEl) {
    scoreEl.textContent = `${correctCount} / ${total}`;
  }
}

// ==========================================
// 8. UI CONTROLLERS & EVENT BINDINGS
// ==========================================

function initUI() {
  // Navigation Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');
      switchTab(tabTarget);
    });
  });

  // Grade Scaffolding Switch
  const btnGrade9 = document.getElementById('btn-grade-9');
  const btnGrade10 = document.getElementById('btn-grade-10');

  if (btnGrade9 && btnGrade10) {
    btnGrade9.addEventListener('click', () => {
      btnGrade9.classList.add('active');
      btnGrade10.classList.remove('active');
      AppState.currentGrade = 'grade9';
      applyGradeScaffolding('grade9');
      soundManager.playPop();
    });

    btnGrade10.addEventListener('click', () => {
      btnGrade10.classList.add('active');
      btnGrade9.classList.remove('active');
      AppState.currentGrade = 'grade10';
      applyGradeScaffolding('grade10');
      soundManager.playPop();
    });
  }

  // Sound Toggle Button
  const btnSound = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  if (btnSound && soundIcon) {
    btnSound.addEventListener('click', () => {
      soundManager.enabled = !soundManager.enabled;
      soundIcon.textContent = soundManager.enabled ? '🔊' : '🔇';
    });
  }

  // Modals
  initModals();

  // Module 1 Init
  initModule1UI();

  // Module 2 Init
  initModule2UI();

  // Module 3 Init
  initModule3UI();

  // Module 4 Init
  initModule4UI();
}

function switchTab(tabId) {
  AppState.currentTab = tabId;

  // Toggle active tab buttons
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });

  // Toggle active views
  document.querySelectorAll('.module-view').forEach(v => {
    v.classList.toggle('active', v.id === tabId);
  });

  soundManager.playPop();

  // Trigger resize on newly visible canvases
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 25);
}

function applyGradeScaffolding(grade) {
  const m1Badge = document.getElementById('m1-badge-level');
  const m1ScaffoldExp = document.getElementById('m1-scaffold-explanation');

  if (grade === 'grade9') {
    if (m1Badge) m1Badge.textContent = 'IX კლასი (საბაზო)';
    if (m1ScaffoldExp) {
      m1ScaffoldExp.innerHTML = '<strong>ოქტეტის წესი (IX კლასი):</strong> ატომები მიისწრაფვიან, გარე ელექტრონულ შრეზე მიიღონ ინერტული აირის მსგავსი მდგრადი 8-ელექტრონიანი კონფიგურაცია (წყალბადისთვის 2 - დუბლეტი). მეტალები გასცემენ ელექტრონებს, არამეტალები კი იერთებენ ან იზიარებენ.';
    }
  } else {
    if (m1Badge) m1Badge.textContent = 'X-XI კლასი (გაღრმავებული)';
    if (m1ScaffoldExp) {
      m1ScaffoldExp.innerHTML = '<strong>ელექტროუარყოფითობა & ბმის ხასიათი (X-XI კლასი):</strong> პოლინგის სკალით ΔEN > 1.7 განაპირობებს იონურ ბმას; 0.4 ≤ ΔEN ≤ 1.7 პოლარულ კოვალენტურს (საზიარო წყვილის წანაცვლებით და ნაწილობრივი მუხტების δ+/δ- გაჩენით), ხოლო ΔEN < 0.4 — არაპოლარულს.';
    }
  }
}

// Module 1 UI Logic
function initModule1UI() {
  const palette = document.getElementById('atoms-palette');
  if (palette) {
    palette.innerHTML = Object.keys(ATOMS_DATA).map(key => {
      const atom = ATOMS_DATA[key];
      const isLeft = AppState.builder.atomA === key;
      const isRight = AppState.builder.atomB === key;
      let selClass = '';
      if (isLeft) selClass = 'selected-left';
      else if (isRight) selClass = 'selected-right';

      return `
        <div class="atom-chip ${selClass}" data-symbol="${key}">
          <span class="type-tag ${atom.type}"></span>
          <div class="symbol">${atom.symbol}</div>
          <div class="name-geo">${atom.nameGeo}</div>
          <div class="en-val">EN: ${atom.en}</div>
        </div>
      `;
    }).join('');

    // Atom chip click handler
    palette.querySelectorAll('.atom-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const sym = chip.getAttribute('data-symbol');
        selectAtom(sym);
      });
    });
  }

  // Presets
  document.querySelectorAll('.preset-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const [a, b] = pill.getAttribute('data-pair').split(',');
      AppState.builder.atomA = a;
      AppState.builder.atomB = b;
      updateModule1Slots();
      soundManager.playPop();
    });
  });

  // Distance Slider
  const distSlider = document.getElementById('atom-distance-slider');
  if (distSlider) {
    distSlider.addEventListener('input', (e) => {
      AppState.builder.distance = parseFloat(e.target.value);
      if (AppState.builder.distance <= 140 && !AppState.builder.isReacted) {
        triggerBondReaction();
      }
    });
  }

  // React & Reset Buttons
  const btnReact = document.getElementById('btn-react-animate');
  const btnReset = document.getElementById('btn-reset-atoms');

  if (btnReact) {
    btnReact.addEventListener('click', () => {
      triggerBondReaction();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      AppState.builder.distance = 280;
      AppState.builder.isReacted = false;
      const slider = document.getElementById('atom-distance-slider');
      if (slider) slider.value = 280;
      updateModule1Slots();
      soundManager.playPop();
    });
  }

  updateModule1Slots();
}

function selectAtom(sym) {
  // Alternate selection between Left (A) and Right (B)
  if (AppState.builder.atomA !== sym && AppState.builder.atomB !== sym) {
    AppState.builder.atomB = sym;
  } else if (AppState.builder.atomA === sym) {
    AppState.builder.atomA = AppState.builder.atomB;
    AppState.builder.atomB = sym;
  }
  updateModule1Slots();
  soundManager.playPop();
}

function triggerBondReaction() {
  AppState.builder.isReacted = true;
  AppState.builder.distance = 120;
  const slider = document.getElementById('atom-distance-slider');
  if (slider) slider.value = 120;
  soundManager.playBondForm();
  updateModule1Slots();
}

function updateModule1Slots() {
  const atomA = ATOMS_DATA[AppState.builder.atomA];
  const atomB = ATOMS_DATA[AppState.builder.atomB];
  if (!atomA || !atomB) return;

  const slotAVal = document.getElementById('slot-a-symbol');
  const slotASub = document.getElementById('slot-a-sub');
  const slotBVal = document.getElementById('slot-b-symbol');
  const slotBSub = document.getElementById('slot-b-sub');

  if (slotAVal) slotAVal.textContent = atomA.symbol;
  if (slotASub) slotASub.textContent = `${atomA.nameGeo} (EN: ${atomA.en})`;
  if (slotBVal) slotBVal.textContent = atomB.symbol;
  if (slotBSub) slotBSub.textContent = `${atomB.nameGeo} (EN: ${atomB.en})`;

  // Update HUD
  const deltaEN = Math.abs(atomA.en - atomB.en).toFixed(2);
  const hudDelta = document.getElementById('hud-delta-en');
  const hudBond = document.getElementById('hud-bond-type');
  const hudOctet = document.getElementById('hud-octet-status');
  const predText = document.getElementById('m1-prediction-text');

  if (hudDelta) hudDelta.textContent = `ΔEN = ${deltaEN}`;

  const isMetalA = atomA.type === 'metal';
  const isMetalB = atomB.type === 'metal';
  const isBothMetals = isMetalA && isMetalB;
  const isIonic = (deltaEN >= 1.7) || (isMetalA !== isMetalB && deltaEN >= 1.2);

  if (isBothMetals) {
    if (hudBond) {
      hudBond.className = 'hud-badge metallic';
      hudBond.textContent = 'მეტალური ბმა';
    }
    if (hudOctet) hudOctet.textContent = 'დელოკალიზებული ელექტრონული ზღვა & კათიონები';
    if (predText) {
      predText.innerHTML = `ორივე შერჩეული ელემენტი მეტალია (${atomA.nameGeo} და ${atomB.nameGeo}). წარმოიქმნება <strong>მეტალური ბმა</strong>, სადაც ვალენტური ელექტრონები დელოკალიზებულია და თავისუფლად მოძრაობს კრისტალურ მესერში.`;
    }
  } else if (isIonic) {
    if (hudBond) {
      hudBond.className = 'hud-badge ionic';
      hudBond.textContent = 'იონური ბმა';
    }
    if (hudOctet) hudOctet.textContent = `${atomA.type === 'metal' ? atomA.symbol + '⁺' : atomB.symbol + '⁺'} გასცემს e⁻ → სრული ოქტეტები`;
    if (predText) {
      predText.innerHTML = `ელექტროუარყოფითობათა სხვაობა დიდია (ΔEN = ${deltaEN} > 1.7). მეტალი გასცემს ვალენტურ ელექტრონ(ებ)ს არამეტალზე. წარმოიქმნება <strong>იონური ბმა</strong> ელექტროსტატიკური მიზიდვის შედეგად.`;
    }
  } else if (deltaEN >= 0.4) {
    if (hudBond) {
      hudBond.className = 'hud-badge covalent-polar';
      hudBond.textContent = 'პოლარული კოვალენტური';
    }
    if (hudOctet) hudOctet.textContent = 'საზიარო ელექტრონული წყვილები (წანაცვლებული)';
    if (predText) {
      const moreEn = atomA.en > atomB.en ? atomA : atomB;
      predText.innerHTML = `სხვაობა 0.4 ≤ ΔEN ≤ 1.7 (${deltaEN}). წარმოიქმნება <strong>პოლარული კოვალენტური ბმა</strong>. საზიარო ელექტრონული წყვილი გადახრილია უფრო ელექტროუარყოფითი ატომისკენ (<strong>${moreEn.nameGeo}</strong>), რის გამოც ჩნდება ნაწილობრივი მუხტები: δ⁻ და δ⁺.`;
    }
  } else {
    if (hudBond) {
      hudBond.className = 'hud-badge covalent-nonpolar';
      hudBond.textContent = 'არაპოლარული კოვალენტური';
    }
    if (hudOctet) hudOctet.textContent = 'სიმეტრიული საზიარო ელექტრონული წყვილები';
    if (predText) {
      predText.innerHTML = `სხვაობა ΔEN < 0.4 (${deltaEN}). წარმოიქმნება <strong>არაპოლარული კოვალენტური ბმა</strong>. საზიარო ელექტრონული წყვილი სიმეტრიულად ნაწილდება ორივე ატომის ბირთვებს შორის.`;
    }
  }

  // Update palette highlight classes
  const chips = document.querySelectorAll('.atom-chip');
  chips.forEach(chip => {
    const sym = chip.getAttribute('data-symbol');
    chip.classList.toggle('selected-left', sym === AppState.builder.atomA);
    chip.classList.toggle('selected-right', sym === AppState.builder.atomB);
  });
}

// Module 2 UI Logic
function initModule2UI() {
  document.querySelectorAll('.mol-pill-btn[data-mol]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mol-pill-btn[data-mol]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const molKey = btn.getAttribute('data-mol');
      AppState.covalent.currentMol = molKey;

      const data = MOLECULES_DATA[molKey];
      if (data) {
        document.getElementById('metric-multiplicity').textContent = data.multiplicity;
        document.getElementById('metric-length').textContent = data.length;
        document.getElementById('metric-energy').textContent = data.energy;
        document.getElementById('metric-orbital-desc').innerHTML = data.orbitalDesc;
      }

      soundManager.playPop();
    });
  });

  document.querySelectorAll('.mol-pill-btn[data-geom]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mol-pill-btn[data-geom]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const geom = btn.getAttribute('data-geom');
      AppState.covalent.currentGeom = geom;

      const desc = document.getElementById('polarity-vector-desc');
      if (geom === 'H2O') {
        desc.innerHTML = 'წყლის მოლეკულაში ჟანგბადის ორი გაუზიარებელი ელექტრონული წყვილის გამო გეომეტრია არის <strong>კუთხური (~104.5°)</strong>. ორივე O-H ბმის დიპოლური ვექტორი მიმართულია ჟანგბადისკენ. მათი ვექტორული ჯამი არ უდრის ნულს (<strong>μ = 1.85 D</strong>), ამიტომ წყალი <strong>ძლიერ პოლარული</strong> მოლეკულაა და უნივერსალური გამხსნელია!';
      } else if (geom === 'CO2') {
        desc.innerHTML = 'ნახშირორჟანგის მოლეკულა არის <strong>ხაზოვანი (180°)</strong>. თუმცა თითოეული C=O ბმა პოლარულია, ორი იდენტური დიპოლური ვექტორი მიმართულია საპირისპირო მხარეს (← და →). მათი ვექტორული ჯამი არის ზუსტად ნული (<strong>μ = 0 D</strong>), ამიტომ CO₂ მოლეკულა <strong>არაპოლარულია</strong>!';
      } else if (geom === 'NH3') {
        desc.innerHTML = 'ამიაკის მოლეკულა არის <strong>სამკუთხა პირამიდული (107°)</strong> ერთი გაუზიარებელი ელექტრონული წყვილით. სამი N-H ბმის დიპოლური ვექტორები იკრიბება და მიმართულია აზოტისკენ (<strong>μ = 1.47 D</strong>) — ამიაკი <strong>პოლარული ნაერთია</strong>!';
      }

      soundManager.playPop();
    });
  });
}

// Module 3 UI Logic
function initModule3UI() {
  document.querySelectorAll('.lattice-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lattice-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.getAttribute('data-lattice');
      AppState.lattice.type = type;
      AppState.lattice.isStressed = false;

      const info = LATTICES_DATA[type];
      if (info) {
        document.getElementById('lattice-desc-title').innerHTML = info.title;
        document.getElementById('lattice-desc-body').innerHTML = info.desc;
      }

      soundManager.playPop();
    });
  });

  // Hammer Stress Button
  const btnHammer = document.getElementById('btn-apply-force');
  if (btnHammer) {
    btnHammer.addEventListener('click', () => {
      AppState.lattice.isStressed = true;
      soundManager.playHammer();
    });
  }

  // Reset Lattice
  const btnReset = document.getElementById('btn-reset-lattice');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      AppState.lattice.isStressed = false;
      soundManager.playPop();
    });
  }

  // Temperature Slider
  const tempSlider = document.getElementById('temp-slider');
  const tempDisplay = document.getElementById('temp-display');
  if (tempSlider && tempDisplay) {
    tempSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      AppState.lattice.temperature = val;
      tempDisplay.textContent = `${val} °C`;
    });
  }
}

// Module 4 UI Logic
function initModule4UI() {
  document.querySelectorAll('.quiz-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      AppState.quiz.filter = btn.getAttribute('data-filter');
      renderQuizQuestions();
      soundManager.playPop();
    });
  });

  const btnResetQuiz = document.getElementById('btn-reset-quiz');
  if (btnResetQuiz) {
    btnResetQuiz.addEventListener('click', () => {
      AppState.quiz.userAnswers = {};
      AppState.quiz.hintsShown = {};
      renderQuizQuestions();
      updateQuizScore();
      soundManager.playPop();
    });
  }

  initQuiz();
}

// Modals Setup
function initModals() {
  const btnOpenPTable = document.getElementById('btn-open-ptable');
  const btnOpenSafety = document.getElementById('btn-open-safety');

  if (btnOpenPTable) {
    btnOpenPTable.addEventListener('click', () => openPTableModal());
  }

  if (btnOpenSafety) {
    btnOpenSafety.addEventListener('click', () => openSafetyModal());
  }

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('open');
      soundManager.playPop();
    });
  });

  // Populate Periodic Table Modal Content
  const ptableContent = document.getElementById('ptable-modal-content');
  if (ptableContent) {
    ptableContent.innerHTML = Object.keys(ATOMS_DATA).map(k => {
      const a = ATOMS_DATA[k];
      return `
        <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <strong style="font-size: 1.2rem; color: #ffffff;">${a.symbol}</strong>
            <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: bold;">EN: ${a.en}</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${a.nameGeo}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            რიგ. № ${a.atomicNumber} | შრეები: [${a.shells.join(', ')}]
          </div>
        </div>
      `;
    }).join('');
  }
}

window.openPTableModal = function() {
  const m = document.getElementById('modal-ptable');
  if (m) m.classList.add('open');
  soundManager.playPop();
};

window.openSafetyModal = function() {
  const m = document.getElementById('modal-safety');
  if (m) m.classList.add('open');
  soundManager.playPop();
};

// ==========================================
// 9. WINDOW ONLOAD BOOTSTRAP
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  initUI();

  // Instantiate Canvases
  new BondBuilderCanvas('builder-canvas');
  new OrbitalsCanvas('orbitals-canvas');
  new PolarityCanvas('polarity-canvas');
  new LatticeCanvas('lattice-canvas');

  console.log('Chemical Bonds EdTech Platform initialized successfully.');
});
