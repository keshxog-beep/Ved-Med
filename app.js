/* VEDMED - static SPA (India-focused). */

const STORAGE_KEYS = {
  theme: "vedmed_theme",
  lang: "vedmed_lang",
  session: "vedmed_session",
  users: "vedmed_users",
  meds: "vedmed_meds"
};

// If you used Cloudflare Worker name "vedmed-gemini" on subdomain "keshxog.workers.dev"
// then this default should work. If yours is different, update this URL.
const GEMINI_WORKER_CHAT_URL = "https://vedmed-gemini.keshxog.workers.dev/chat";

const SUPPORTED_LANGS = ["en", "hi", "or"]; // English, Hindi, Odia

const I18N = {
  en: {
    tagline: "India-first health companion",
    nav_home: "Home",
    nav_assistant: "Assistant",
    nav_hospitals: "Hospitals",
    nav_tracker: "Tracker",
    nav_order: "Order",
    nav_sos: "SOS",
    nav_settings: "Settings",
    nav_info: "Info",
    theme: "Theme",
    login: "Login",
    logout: "Logout",
    footer_disclaimer: "Educational demo only. Not a substitute for a doctor.",
    privacy: "Privacy",
    about: "About",

    login_title: "Login",
    login_sub: "Sign in to use tracker & personalized shortcuts.",
    register_title: "Create account",
    email: "Email",
    password: "Password",
    full_name: "Full name",
    sign_in: "Sign in",
    create_account: "Create account",
    have_account: "Already have an account?",
    no_account: "New here?",
    go_login: "Go to login",
    go_register: "Create an account",

    assistant_title: "Medicine Assistant (Search + Summary)",
    assistant_sub: "Ask about a medicine: use, dosage info, common side effects. Always confirm with a licensed doctor.",
    ask_placeholder: "E.g. Paracetamol 500mg side effects",
    ask_btn: "Ask",
    sources: "Sources",
    safety_title: "Safety",
    safety_copy:
      "This is an educational tool. For emergencies call 112/108. Don’t self-medicate; check allergies, pregnancy/lactation, existing conditions, and interactions.",

    hospitals_title: "Nearby Hospitals (GPS)",
    hospitals_sub: "Find hospitals near your current location in India.",
    use_location: "Use my location",
    radius_km: "Radius (km)",
    find_hospitals: "Find hospitals",
    location_denied: "Location permission denied. Enable it in browser settings and try again.",
    hospitals_found: "Hospitals found",
    call_now: "Call",
    directions: "Directions",

    tracker_title: "Medicine Tracker (Calendar)",
    tracker_sub: "Add medicines with schedule. Stored locally on this device.",
    add_medicine: "Add medicine",
    med_name: "Medicine name",
    dose: "Dose / notes",
    start_date: "Start date",
    end_date: "End date (optional)",
    times: "Times (comma separated, 24h)",
    example_times: "Example: 09:00, 21:00",
    save: "Save",
    your_schedule: "Your schedule",
    month_prev: "Prev",
    month_next: "Next",
    today: "Today",

    sos_title: "SOS / First Aid",
    sos_sub: "Quick guidance for common situations + India emergency numbers.",
    emergency_numbers: "Emergency numbers (India)",
    ambulance_108: "Ambulance (108)",
    police_112: "Emergency (112)",
    women_1091: "Women helpline (1091)",
    child_1098: "Child helpline (1098)",
    poison: "If poisoning",
    burn: "Burns",
    cut: "Cut / wound",
    fever: "Fever",
    asthma: "Asthma attack",
    disclaimer_med: "If severe symptoms, bleeding won’t stop, breathing trouble, fainting, chest pain: call 112/108 now.",

    order_title: "Order medicines",
    order_sub: "Open trusted Indian pharmacy apps/sites (external).",

    settings_title: "Settings",
    settings_sub: "Language, theme, and project info.",
    language: "Language",
    dark_mode: "Dark mode",
    light_mode: "Light mode",
    clear_data: "Clear local data",
    clear_data_warn: "This will remove local users & medicine schedule from this device.",

    privacy_title: "Privacy",
    privacy_copy:
      "VEDMED stores login + medicine tracker data only in your browser (localStorage). No server is used in this demo.",

    about_title: "About",
    about_copy:
      "VEDMED is a college project demo for India-focused health utilities: medicine info summary, nearby hospitals, calendar tracker, and SOS guidance.",

    info_title: "Information",
    info_sub: "Group members and college details.",

    must_login: "Please login to use the tracker.",
    toast_saved: "Saved",
    toast_saved_sub: "Your changes were saved on this device.",
    toast_error: "Something went wrong",
    toast_logged_in: "Logged in",
    toast_logged_out: "Logged out",
    toast_created: "Account created",
    toast_cleared: "Cleared",
    toast_cleared_sub: "Local data removed from this device.",
    toast_querying: "Searching…",
    toast_querying_sub: "Fetching public info sources.",
    toast_done: "Done",
    toast_done_sub: "Summary generated.",
  },
  hi: {
    tagline: "भारत-केन्द्रित हेल्थ साथी",
    nav_home: "होम",
    nav_assistant: "सहायक",
    nav_hospitals: "अस्पताल",
    nav_tracker: "ट्रैकर",
    nav_order: "ऑर्डर",
    nav_sos: "आपात",
    nav_settings: "सेटिंग्स",
    nav_info: "जानकारी",
    theme: "थीम",
    login: "लॉगिन",
    logout: "लॉगआउट",
    footer_disclaimer: "यह केवल शैक्षिक डेमो है। डॉक्टर का विकल्प नहीं।",
    privacy: "प्राइवेसी",
    about: "परिचय",

    login_title: "लॉगिन",
    login_sub: "ट्रैकर और पर्सनल शॉर्टकट के लिए साइन इन करें।",
    register_title: "खाता बनाएँ",
    email: "ईमेल",
    password: "पासवर्ड",
    full_name: "पूरा नाम",
    sign_in: "साइन इन",
    create_account: "खाता बनाएँ",
    have_account: "पहले से खाता है?",
    no_account: "नया अकाउंट?",
    go_login: "लॉगिन पर जाएँ",
    go_register: "खाता बनाएँ",

    assistant_title: "मेडिसिन असिस्टेंट (सर्च + सारांश)",
    assistant_sub: "दवा के उपयोग/जानकारी/सामान्य साइड-इफेक्ट पूछें। डॉक्टर से पुष्टि करें।",
    ask_placeholder: "जैसे Paracetamol 500mg side effects",
    ask_btn: "पूछें",
    sources: "स्रोत",
    safety_title: "सुरक्षा",
    safety_copy:
      "यह शैक्षिक टूल है। आपात स्थिति में 112/108 कॉल करें। खुद से दवा न लें; एलर्जी/गर्भावस्था/बीमारी/इंटरैक्शन देखें।",

    hospitals_title: "पास के अस्पताल (GPS)",
    hospitals_sub: "आपके लोकेशन के पास भारत में अस्पताल खोजें।",
    use_location: "लोकेशन उपयोग करें",
    radius_km: "रेडियस (किमी)",
    find_hospitals: "खोजें",
    location_denied: "लोकेशन अनुमति नहीं मिली। ब्राउज़र सेटिंग्स में अनुमति देकर फिर प्रयास करें।",
    hospitals_found: "अस्पताल मिले",
    call_now: "कॉल",
    directions: "रूट",

    tracker_title: "मेडिसिन ट्रैकर (कैलेंडर)",
    tracker_sub: "दवाइयाँ और शेड्यूल जोड़ें। डेटा इसी डिवाइस में सेव होता है।",
    add_medicine: "दवा जोड़ें",
    med_name: "दवा का नाम",
    dose: "डोज / नोट्स",
    start_date: "शुरू तारीख",
    end_date: "अंत तारीख (वैकल्पिक)",
    times: "समय (comma से अलग, 24h)",
    example_times: "उदाहरण: 09:00, 21:00",
    save: "सेव",
    your_schedule: "आपका शेड्यूल",
    month_prev: "पिछला",
    month_next: "अगला",
    today: "आज",

    sos_title: "SOS / फर्स्ट एड",
    sos_sub: "सामान्य स्थितियों के लिए त्वरित गाइड + भारत आपात नंबर।",
    emergency_numbers: "आपात नंबर (भारत)",
    ambulance_108: "एम्बुलेंस (108)",
    police_112: "आपात (112)",
    women_1091: "महिला हेल्पलाइन (1091)",
    child_1098: "चाइल्ड हेल्पलाइन (1098)",
    poison: "जहर/विषाक्तता",
    burn: "जलना",
    cut: "कट / घाव",
    fever: "बुखार",
    asthma: "अस्थमा अटैक",
    disclaimer_med: "गंभीर लक्षण/बहुत रक्तस्राव/सांस की दिक्कत/बेहोशी/सीने में दर्द: तुरंत 112/108 कॉल करें।",

    order_title: "दवा ऑर्डर करें",
    order_sub: "भारत के भरोसेमंद फार्मेसी ऐप/साइट (external) खोलें।",

    settings_title: "सेटिंग्स",
    settings_sub: "भाषा, थीम और जानकारी।",
    language: "भाषा",
    dark_mode: "डार्क मोड",
    light_mode: "लाइट मोड",
    clear_data: "लोकल डेटा हटाएँ",
    clear_data_warn: "इससे लोकल यूज़र और मेडिसिन शेड्यूल हट जाएगा।",

    privacy_title: "प्राइवेसी",
    privacy_copy:
      "इस डेमो में लॉगिन और ट्रैकर डेटा सिर्फ आपके ब्राउज़र (localStorage) में रहता है। कोई सर्वर नहीं।",

    about_title: "परिचय",
    about_copy:
      "VEDMED एक कॉलेज प्रोजेक्ट डेमो है: मेडिसिन सारांश, पास के अस्पताल, कैलेंडर ट्रैकर और SOS गाइड।",

    info_title: "जानकारी",
    info_sub: "ग्रुप मेंबर्स और कॉलेज डिटेल्स।",

    must_login: "ट्रैकर के लिए कृपया लॉगिन करें।",
    toast_saved: "सेव हुआ",
    toast_saved_sub: "डेटा इस डिवाइस में सेव किया गया।",
    toast_error: "कुछ गलत हुआ",
    toast_logged_in: "लॉगिन हो गया",
    toast_logged_out: "लॉगआउट",
    toast_created: "खाता बन गया",
    toast_cleared: "हटाया गया",
    toast_cleared_sub: "लोकल डेटा हटा दिया गया।",
    toast_querying: "खोज रहे हैं…",
    toast_querying_sub: "पब्लिक स्रोत से जानकारी ला रहे हैं।",
    toast_done: "हो गया",
    toast_done_sub: "सारांश तैयार।"
  },
  or: {
    tagline: "ଭାରତ-କେନ୍ଦ୍ରିକ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ",
    nav_home: "ହୋମ୍",
    nav_assistant: "ସହାୟକ",
    nav_hospitals: "ହସ୍ପିଟାଲ୍",
    nav_tracker: "ଟ୍ରାକର୍",
    nav_order: "ଅର୍ଡର୍",
    nav_sos: "SOS",
    nav_settings: "ସେଟିଂସ୍",
    nav_info: "ସୂଚନା",
    theme: "ଥିମ୍",
    login: "ଲଗିନ୍",
    logout: "ଲଗଅାଉଟ୍",
    footer_disclaimer: "ଏହା ଶିକ୍ଷାମୂଳକ ଡେମୋ। ଡାକ୍ତରଙ୍କ ପରିବର୍ତ୍ତେ ନୁହେଁ।",
    privacy: "ପ୍ରାଇଭେସି",
    about: "ବିଷୟରେ",

    login_title: "ଲଗିନ୍",
    login_sub: "ଟ୍ରାକର୍ ଓ ପର୍ସୋନାଲ୍ ସର୍କଟକଟ ପାଇଁ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ।",
    register_title: "ଅକାଉଣ୍ଟ ସୃଷ୍ଟି କରନ୍ତୁ",
    email: "ଇମେଲ୍",
    password: "ପାସୱାର୍ଡ",
    full_name: "ପୂର୍ଣ୍ଣ ନାମ",
    sign_in: "ସାଇନ୍ ଇନ୍",
    create_account: "ଅକାଉଣ୍ଟ ସୃଷ୍ଟି",
    have_account: "ଆଗରୁ ଅକାଉଣ୍ଟ ଅଛି?",
    no_account: "ନୂଆ?",
    go_login: "ଲଗିନ୍ ପୃଷ୍ଠାକୁ",
    go_register: "ଅକାଉଣ୍ଟ କରନ୍ତୁ",

    assistant_title: "ମେଡିସିନ୍ ସହାୟକ (ସର୍ଚ୍ + ସାରାଂଶ)",
    assistant_sub: "ଔଷଧ ବ୍ୟବହାର/ତଥ୍ୟ/ସାଧାରଣ ସାଇଡ଼ ଇଫେକ୍ଟ ପଚାରନ୍ତୁ। ଡାକ୍ତର ସହ ପୁଷ୍ଟି କରନ୍ତୁ।",
    ask_placeholder: "ଉଦାହରଣ: Paracetamol 500mg side effects",
    ask_btn: "ପଚାରନ୍ତୁ",
    sources: "ସ୍ରୋତ",
    safety_title: "ସୁରକ୍ଷା",
    safety_copy:
      "ଏହା ଶିକ୍ଷାମୂଳକ ଟୁଲ୍। ଆପାତକାଳୀନରେ 112/108 କଲ୍ କରନ୍ତୁ। ନିଜେ ଔଷଧ ନେବେ ନାହିଁ।",

    hospitals_title: "ନିକଟସ୍ଥ ହସ୍ପିଟାଲ୍ (GPS)",
    hospitals_sub: "ଆପଣଙ୍କ ଲୋକେସନ୍ ପାଖରେ ଭାରତର ହସ୍ପିଟାଲ୍ ଖୋଜନ୍ତୁ।",
    use_location: "ଲୋକେସନ୍ ବ୍ୟବହାର କରନ୍ତୁ",
    radius_km: "ରେଡିଅସ୍ (କି.ମି.)",
    find_hospitals: "ଖୋଜନ୍ତୁ",
    location_denied: "ଲୋକେସନ୍ ପରମିଶନ୍ ନାହିଁ। ବ୍ରାଉଜର ସେଟିଂସ୍ ରୁ ଅନୁମତି ଦିଅନ୍ତୁ।",
    hospitals_found: "ହସ୍ପିଟାଲ୍ ମିଳିଲା",
    call_now: "କଲ୍",
    directions: "ରାସ୍ତା",

    tracker_title: "ମେଡିସିନ୍ ଟ୍ରାକର୍ (କ୍ୟାଲେଣ୍ଡର୍)",
    tracker_sub: "ଔଷଧ ଓ ସ୍କେଡ୍ୟୁଲ୍ ଯୋଡନ୍ତୁ। ଏହି ଡିଭାଇସ୍ ରେ ସେଭ୍ ହୁଏ।",
    add_medicine: "ଔଷଧ ଯୋଡନ୍ତୁ",
    med_name: "ଔଷଧ ନାମ",
    dose: "ଡୋଜ୍ / ନୋଟ୍",
    start_date: "ଆରମ୍ଭ ତାରିଖ",
    end_date: "ଶେଷ ତାରିଖ (ଏଚ୍ଛାନୁସାରେ)",
    times: "ସମୟ (comma ଦ୍ଵାରା, 24h)",
    example_times: "ଉଦାହରଣ: 09:00, 21:00",
    save: "ସେଭ୍",
    your_schedule: "ଆପଣଙ୍କ ସ୍କେଡ୍ୟୁଲ୍",
    month_prev: "ପୂର୍ବ",
    month_next: "ପର",
    today: "ଆଜି",

    sos_title: "SOS / ପ୍ରଥମ ସାହାଯ୍ୟ",
    sos_sub: "ସାଧାରଣ ପରିସ୍ଥିତି ପାଇଁ ଗାଇଡ୍ + ଭାରତ ଆପାତ ନମ୍ବର୍।",
    emergency_numbers: "ଆପାତ ନମ୍ବର୍ (ଭାରତ)",
    ambulance_108: "ଆମ୍ବୁଲାନ୍ସ (108)",
    police_112: "ଆପାତ (112)",
    women_1091: "ମହିଳା ହେଲ୍ପଲାଇନ୍ (1091)",
    child_1098: "ଶିଶୁ ହେଲ୍ପଲାଇନ୍ (1098)",
    poison: "ବିଷାକ୍ତତା",
    burn: "ପୋଡ଼ା",
    cut: "କଟ୍ / ଆଘାତ",
    fever: "ଜ୍ୱର",
    asthma: "ଆସ୍ଥମା ଆଟାକ୍",
    disclaimer_med: "ଗୁରୁତର ଲକ୍ଷଣ/ରକ୍ତସ୍ରାବ ଥାମୁନାହିଁ/ଶ୍ୱାସକଷ୍ଟ: 112/108 କଲ୍ କରନ୍ତୁ।",

    order_title: "ଔଷଧ ଅର୍ଡର୍",
    order_sub: "ଭାରତର ବିଶ୍ୱସନୀୟ ଫାର୍ମେସି ସାଇଟ୍/ଆପ୍ ଖୋଲନ୍ତୁ (external)।",

    settings_title: "ସେଟିଂସ୍",
    settings_sub: "ଭାଷା, ଥିମ୍ ଓ ସୂଚନା।",
    language: "ଭାଷା",
    dark_mode: "ଡାର୍କ ମୋଡ୍",
    light_mode: "ଲାଇଟ୍ ମୋଡ୍",
    clear_data: "ଲୋକାଲ୍ ଡାଟା କ୍ଲିଅର୍",
    clear_data_warn: "ଏହା ଲୋକାଲ୍ ୟୁଜର୍ ଓ ମେଡିସିନ୍ ସ୍କେଡ୍ୟୁଲ୍ ହଟାଇଦେବ।",

    privacy_title: "ପ୍ରାଇଭେସି",
    privacy_copy:
      "VEDMED ଡେମୋ ରେ ଡାଟା କେବଳ ଆପଣଙ୍କ ବ୍ରାଉଜର (localStorage) ରେ ରହେ। ସର୍ଭର ନାହିଁ।",

    about_title: "ବିଷୟରେ",
    about_copy:
      "VEDMED କଲେଜ ପ୍ରୋଜେକ୍ଟ ଡେମୋ: ଔଷଧ ସାରାଂଶ, ନିକଟସ୍ଥ ହସ୍ପିଟାଲ୍, କ୍ୟାଲେଣ୍ଡର ଟ୍ରାକର୍ ଓ SOS ଗାଇଡ୍।",

    info_title: "ସୂଚନା",
    info_sub: "ଗ୍ରୁପ୍ ସଦସ୍ୟ ଏବଂ କଲେଜ ତଥ୍ୟ।",

    must_login: "ଟ୍ରାକର୍ ବ୍ୟବହାର ପାଇଁ ଦୟାକରି ଲଗିନ୍ କରନ୍ତୁ।",
    toast_saved: "ସେଭ୍ ହେଲା",
    toast_saved_sub: "ଏହି ଡିଭାଇସ୍ ରେ ସେଭ୍ ହେଲା।",
    toast_error: "କିଛି ଭୁଲ୍",
    toast_logged_in: "ଲଗିନ୍ ହେଲା",
    toast_logged_out: "ଲଗଅାଉଟ୍",
    toast_created: "ଅକାଉଣ୍ଟ ହେଲା",
    toast_cleared: "କ୍ଲିଅର୍ ହେଲା",
    toast_cleared_sub: "ଲୋକାଲ୍ ଡାଟା ହଟିଗଲା।",
    toast_querying: "ଖୋଜୁଛି…",
    toast_querying_sub: "ପବ୍ଲିକ ସ୍ରୋତରୁ ତଥ୍ୟ ଆଣୁଛି।",
    toast_done: "ସମ୍ପୂର୍ଣ୍ଣ",
    toast_done_sub: "ସାରାଂଶ ପ୍ରସ୍ତୁତ।"
  }
};

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function getLang() {
  const v = localStorage.getItem(STORAGE_KEYS.lang);
  if (v && SUPPORTED_LANGS.includes(v)) return v;
  const fallback = (navigator.language || "en").toLowerCase().startsWith("hi") ? "hi" : "en";
  return fallback;
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  renderI18n();
  renderRoute();
}

function getTheme() {
  const v = localStorage.getItem(STORAGE_KEYS.theme);
  if (v === "light" || v === "dark") return v;
  return "dark";
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", getTheme());
}

function toast(title, body) {
  const wrap = document.getElementById("toastWrap");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<div class="t1">${escapeHtml(title)}</div><div class="t2">${escapeHtml(body || "")}</div>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    el.style.transition = "all 240ms ease";
    setTimeout(() => el.remove(), 260);
  }, 2600);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// --- Demo auth (localStorage) ---
function getUsers() {
  return readJson(STORAGE_KEYS.users, []);
}

function setUsers(users) {
  writeJson(STORAGE_KEYS.users, users);
}

function hashLike(s) {
  // Not cryptographic; demo-only (no backend available).
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

function getSession() {
  return readJson(STORAGE_KEYS.session, null);
}

function setSession(session) {
  writeJson(STORAGE_KEYS.session, session);
  syncAuthUI();
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
  syncAuthUI();
}

function currentUser() {
  const s = getSession();
  if (!s || !s.email) return null;
  const users = getUsers();
  const u = users.find((x) => x.email === s.email);
  return u || null;
}

function requireLogin() {
  if (!currentUser()) {
    toast(t("toast_error"), t("must_login"));
    location.hash = "#/login";
    return false;
  }
  return true;
}

function syncAuthUI() {
  const u = currentUser();
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");
  if (u) {
    btnLogin.classList.add("hidden");
    btnLogout.classList.remove("hidden");
  } else {
    btnLogout.classList.add("hidden");
    btnLogin.classList.remove("hidden");
  }
}

// --- Router ---
const routes = {
  "/": viewHome,
  "/login": viewLogin,
  "/assistant": viewAssistant,
  "/hospitals": viewHospitals,
  "/tracker": viewTracker,
  "/order": viewOrder,
  "/sos": viewSOS,
  "/settings": viewSettings,
  "/privacy": viewPrivacy,
  "/about": viewAbout,
  "/info": viewInfo
};

function getPath() {
  const h = location.hash || "#/";
  const path = h.replace(/^#/, "");
  return path || "/";
}

function renderRoute() {
  const view = document.getElementById("view");
  const path = getPath();
  const fn = routes[path] || viewNotFound;
  view.innerHTML = fn();
  highlightNav(path);
  bindView(path);
  renderI18n();
  document.getElementById("main").focus();
}

function highlightNav(path) {
  document.querySelectorAll(".navlink").forEach((a) => {
    const isActive = a.getAttribute("href") === `#${path}`;
    a.classList.toggle("active", isActive);
  });
}

function renderI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  const lang = getLang();
  const label = document.getElementById("langLabel");
  if (label) label.textContent = lang.toUpperCase();
}

// --- Views ---
function viewHome() {
  return `
  <div class="grid page">
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title">VEDMED</div>
          <div class="subtitle">${escapeHtml(t("tagline"))}</div>
          <div class="kpi">
            <span class="pill">🇮🇳 India only</span>
            <span class="pill">GPS hospitals</span>
            <span class="pill">Medicine calendar</span>
            <span class="pill">SOS first aid</span>
          </div>
        </div>
        <span class="pill">Demo</span>
      </div>
      <div class="card-b">
        <div class="row" style="justify-content:space-between; align-items:center">
          <img src="./assets/vedmed-logo.png" alt="VEDMED logo" style="width:92px; height:92px; object-fit:contain; filter: drop-shadow(0 12px 22px rgba(109,40,217,0.16)) drop-shadow(0 12px 22px rgba(249,115,22,0.12));" />
          <span class="pill">Dashboard</span>
        </div>
        <div class="hr"></div>
        <div class="two">
          <a class="btn primary" href="#/assistant">Open Assistant</a>
          <a class="btn ghost" href="#/hospitals">Find Hospitals</a>
          <a class="btn ghost" href="#/tracker">Medicine Tracker</a>
          <a class="btn bad" href="#/sos">SOS / First Aid</a>
        </div>
        <div class="hr"></div>
        <div class="muted small">${escapeHtml(t("safety_copy"))}</div>
      </div>
    </section>
    <aside class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="order_title">${escapeHtml(t("order_title"))}</div>
          <div class="subtitle" data-i18n="order_sub">${escapeHtml(t("order_sub"))}</div>
        </div>
      </div>
      <div class="card-b">
        <div class="list">
          ${orderLinksHtml()}
        </div>
      </div>
    </aside>
  </div>`;
}

function viewLogin() {
  const u = currentUser();
  if (u) {
    return `
      <section class="card">
        <div class="card-h">
          <div>
            <div class="title">${escapeHtml(u.name || u.email)}</div>
            <div class="subtitle">You are already logged in.</div>
          </div>
          <a class="btn ghost" href="#/settings">Settings</a>
        </div>
        <div class="card-b">
          <div class="muted small">Tip: use the tracker to add your medicines schedule.</div>
          <div class="hr"></div>
          <a class="btn primary" href="#/tracker">Open tracker</a>
        </div>
      </section>`;
  }

  return `
  <div class="grid">
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="login_title">${escapeHtml(t("login_title"))}</div>
          <div class="subtitle" data-i18n="login_sub">${escapeHtml(t("login_sub"))}</div>
        </div>
      </div>
      <div class="card-b">
        <form id="formLogin" class="field">
          <div class="field">
            <div class="label" data-i18n="email">${escapeHtml(t("email"))}</div>
            <input id="loginEmail" type="email" required autocomplete="email" placeholder="name@gmail.com" />
          </div>
          <div class="field">
            <div class="label" data-i18n="password">${escapeHtml(t("password"))}</div>
            <input id="loginPass" type="password" required autocomplete="current-password" placeholder="••••••••" />
          </div>
          <div class="row">
            <button class="btn primary" type="submit" data-i18n="sign_in">${escapeHtml(t("sign_in"))}</button>
            <a class="btn ghost" href="#/settings" data-i18n="nav_settings">${escapeHtml(t("nav_settings"))}</a>
          </div>
          <div class="muted small">
            <span data-i18n="no_account">${escapeHtml(t("no_account"))}</span>
            <a class="link" href="#/login?mode=register" data-i18n="go_register">${escapeHtml(t("go_register"))}</a>
          </div>
        </form>
      </div>
    </section>

    <aside class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="register_title">${escapeHtml(t("register_title"))}</div>
          <div class="subtitle">Demo account stored on this device only.</div>
        </div>
      </div>
      <div class="card-b">
        <form id="formRegister" class="field">
          <div class="field">
            <div class="label" data-i18n="full_name">${escapeHtml(t("full_name"))}</div>
            <input id="regName" type="text" required placeholder="Your name" />
          </div>
          <div class="field">
            <div class="label" data-i18n="email">${escapeHtml(t("email"))}</div>
            <input id="regEmail" type="email" required placeholder="name@gmail.com" />
          </div>
          <div class="field">
            <div class="label" data-i18n="password">${escapeHtml(t("password"))}</div>
            <input id="regPass" type="password" required minlength="6" placeholder="Min 6 chars" />
          </div>
          <button class="btn primary" type="submit" data-i18n="create_account">${escapeHtml(t("create_account"))}</button>
          <div class="muted small">
            <span data-i18n="have_account">${escapeHtml(t("have_account"))}</span>
            <a class="link" href="#/login" data-i18n="go_login">${escapeHtml(t("go_login"))}</a>
          </div>
        </form>
      </div>
    </aside>
  </div>`;
}

function viewAssistant() {
  return `
  <div class="grid">
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="assistant_title">${escapeHtml(t("assistant_title"))}</div>
          <div class="subtitle" data-i18n="assistant_sub">${escapeHtml(t("assistant_sub"))}</div>
        </div>
        <span class="pill">India</span>
      </div>
      <div class="card-b chat">
        <div class="chatlog" id="chatlog" aria-label="Chat log"></div>
        <div class="row">
          <input id="chatInput" type="text" placeholder="${escapeHtml(t("ask_placeholder"))}" />
          <button class="btn primary" id="btnAsk" type="button" data-i18n="ask_btn">${escapeHtml(t("ask_btn"))}</button>
        </div>
        <div class="muted small"><b data-i18n="safety_title">${escapeHtml(t("safety_title"))}</b>: <span data-i18n="safety_copy">${escapeHtml(t("safety_copy"))}</span></div>
      </div>
    </section>
    <aside class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="sources">${escapeHtml(t("sources"))}</div>
          <div class="subtitle">We show citations for transparency.</div>
        </div>
      </div>
      <div class="card-b">
        <div class="list" id="sourceList">
          <div class="item">
            <h4>Wikipedia</h4>
            <p>General overview (not medical advice).</p>
          </div>
          <div class="item">
            <h4>OpenFDA</h4>
            <p>Adverse event reports (signals, not proof).</p>
          </div>
          <div class="item">
            <h4>Tip</h4>
            <p>Ask: “<i>Medicine name</i> common side effects, precautions, interactions”.</p>
          </div>
        </div>
      </div>
    </aside>
  </div>`;
}

function viewHospitals() {
  return `
  <div class="grid">
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="hospitals_title">${escapeHtml(t("hospitals_title"))}</div>
          <div class="subtitle" data-i18n="hospitals_sub">${escapeHtml(t("hospitals_sub"))}</div>
        </div>
        <span class="pill">GPS</span>
      </div>
      <div class="card-b">
        <div class="two">
          <div class="field">
            <div class="label" data-i18n="radius_km">${escapeHtml(t("radius_km"))}</div>
            <select id="radiusKm">
              <option value="2">2</option>
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div class="field">
            <div class="label">&nbsp;</div>
            <button class="btn primary" id="btnHospitals" type="button" data-i18n="use_location">${escapeHtml(t("use_location"))}</button>
          </div>
        </div>
        <div class="hr"></div>
        <div id="locStatus" class="muted small">Tip: works best on mobile with GPS enabled.</div>
        <div class="hr"></div>
        <div class="list" id="hospitalList"></div>
      </div>
    </section>
    <aside class="card">
      <div class="card-h">
        <div>
          <div class="title">India emergency</div>
          <div class="subtitle">One-tap calls (works on phones).</div>
        </div>
      </div>
      <div class="card-b">
        ${emergencyCardsHtml()}
      </div>
    </aside>
  </div>`;
}

function viewOrder() {
  return `
  <section class="card">
    <div class="card-h">
      <div>
        <div class="title" data-i18n="order_title">${escapeHtml(t("order_title"))}</div>
        <div class="subtitle" data-i18n="order_sub">${escapeHtml(t("order_sub"))}</div>
      </div>
      <span class="pill">India</span>
    </div>
    <div class="card-b">
      <div class="list">
        ${orderLinksHtml()}
      </div>
      <div class="hr"></div>
      <div class="muted small">
        Note: ordering opens external pharmacy websites/apps. Always verify prescription requirements and expiry.
      </div>
    </div>
  </section>`;
}

function viewInfo() {
  const members = [
    { name: "Sujal kumar singh", roll: "23BCA060" },
    { name: "Dolly tiwari", roll: "23BCA061" },
    { name: "Tarun adiya pati", roll: "23BCA064" },
    { name: "Satyam Kumar yadav", roll: "23BCA021" }
  ];
  const college = "Govt autonomous college rourkela sundargarh";

  return `
  <section class="card page">
    <div class="card-h">
      <div>
        <div class="title" data-i18n="info_title">${escapeHtml(t("info_title"))}</div>
        <div class="subtitle" data-i18n="info_sub">${escapeHtml(t("info_sub"))}</div>
      </div>
      <span class="pill">College</span>
    </div>
    <div class="card-b">
      <div class="team-grid">
        ${members.map((m) => `
          <div class="member">
            <div>
              <div class="m1">${escapeHtml(m.name)}</div>
              <div class="m2">BCA • Roll: ${escapeHtml(m.roll)}</div>
            </div>
            <span class="badge">${escapeHtml(m.roll)}</span>
          </div>
        `).join("")}
      </div>

      <div class="hr"></div>

      <div class="item">
        <h4>College</h4>
        <p>${escapeHtml(college)}</p>
      </div>

      <img class="logo-img" src="./assets/college-logo.png" alt="Govt Autonomous College Rourkela logo" />
    </div>
  </section>`;
}

function viewTracker() {
  if (!currentUser()) {
    return `
      <section class="card">
        <div class="card-h">
          <div>
            <div class="title" data-i18n="tracker_title">${escapeHtml(t("tracker_title"))}</div>
            <div class="subtitle" data-i18n="must_login">${escapeHtml(t("must_login"))}</div>
          </div>
          <a class="btn primary" href="#/login" data-i18n="login">${escapeHtml(t("login"))}</a>
        </div>
        <div class="card-b">
          <div class="muted small">We keep your schedule locally on this device.</div>
        </div>
      </section>`;
  }

  return `
  <div class="grid">
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="tracker_title">${escapeHtml(t("tracker_title"))}</div>
          <div class="subtitle" data-i18n="tracker_sub">${escapeHtml(t("tracker_sub"))}</div>
        </div>
        <span class="pill">${escapeHtml(currentUser().name || currentUser().email)}</span>
      </div>
      <div class="card-b">
        <form id="formMed">
          <div class="two">
            <div class="field">
              <div class="label" data-i18n="med_name">${escapeHtml(t("med_name"))}</div>
              <input id="medName" required placeholder="e.g. Paracetamol" />
            </div>
            <div class="field">
              <div class="label" data-i18n="dose">${escapeHtml(t("dose"))}</div>
              <input id="medDose" placeholder="e.g. 500mg after food" />
            </div>
          </div>
          <div class="two">
            <div class="field">
              <div class="label" data-i18n="start_date">${escapeHtml(t("start_date"))}</div>
              <input id="medStart" type="date" required />
            </div>
            <div class="field">
              <div class="label" data-i18n="end_date">${escapeHtml(t("end_date"))}</div>
              <input id="medEnd" type="date" />
            </div>
          </div>
          <div class="field">
            <div class="label" data-i18n="times">${escapeHtml(t("times"))}</div>
            <input id="medTimes" placeholder="${escapeHtml(t("example_times"))}" />
          </div>
          <div class="row">
            <button class="btn primary" type="submit" data-i18n="save">${escapeHtml(t("save"))}</button>
            <button class="btn ghost" type="button" id="btnDownloadIcs">Add to Calendar (.ics)</button>
          </div>
        </form>
        <div class="hr"></div>
        <div class="title" style="font-size:15px" data-i18n="your_schedule">${escapeHtml(t("your_schedule"))}</div>
        <div class="row" style="margin-top:10px">
          <button class="btn ghost" type="button" id="btnPrev" data-i18n="month_prev">${escapeHtml(t("month_prev"))}</button>
          <button class="btn ghost" type="button" id="btnToday" data-i18n="today">${escapeHtml(t("today"))}</button>
          <button class="btn ghost" type="button" id="btnNext" data-i18n="month_next">${escapeHtml(t("month_next"))}</button>
          <span class="pill" id="monthLabel">—</span>
        </div>
        <div class="cal-head" id="calHead"></div>
        <div class="calendar" id="calendar"></div>
      </div>
    </section>
    <aside class="card">
      <div class="card-h">
        <div>
          <div class="title">Your medicines</div>
          <div class="subtitle">Tap a card to delete.</div>
        </div>
      </div>
      <div class="card-b">
        <div class="list" id="medList"></div>
      </div>
    </aside>
  </div>`;
}

function viewSOS() {
  return `
  <div class="grid">
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="sos_title">${escapeHtml(t("sos_title"))}</div>
          <div class="subtitle" data-i18n="sos_sub">${escapeHtml(t("sos_sub"))}</div>
        </div>
        <span class="pill">India</span>
      </div>
      <div class="card-b">
        <div class="muted small" data-i18n="disclaimer_med">${escapeHtml(t("disclaimer_med"))}</div>
        <div class="hr"></div>
        ${sosGuidesHtml()}
      </div>
    </section>
    <aside class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="emergency_numbers">${escapeHtml(t("emergency_numbers"))}</div>
          <div class="subtitle">Tap to call (mobile).</div>
        </div>
      </div>
      <div class="card-b">
        ${emergencyCardsHtml()}
        <div class="hr"></div>
        <div class="title" style="font-size:15px" data-i18n="order_title">${escapeHtml(t("order_title"))}</div>
        <div class="subtitle" data-i18n="order_sub">${escapeHtml(t("order_sub"))}</div>
        <div class="hr"></div>
        <div class="list">
          ${orderLinksHtml()}
        </div>
      </div>
    </aside>
  </div>`;
}

function viewSettings() {
  const theme = getTheme();
  const lang = getLang();
  return `
  <section class="card">
    <div class="card-h">
      <div>
        <div class="title" data-i18n="settings_title">${escapeHtml(t("settings_title"))}</div>
        <div class="subtitle" data-i18n="settings_sub">${escapeHtml(t("settings_sub"))}</div>
      </div>
      <span class="pill">India</span>
    </div>
    <div class="card-b">
      <div class="two">
        <div class="field">
          <div class="label" data-i18n="language">${escapeHtml(t("language"))}</div>
          <select id="selLang">
            <option value="en" ${lang === "en" ? "selected" : ""}>English</option>
            <option value="hi" ${lang === "hi" ? "selected" : ""}>हिन्दी</option>
            <option value="or" ${lang === "or" ? "selected" : ""}>ଓଡ଼ିଆ</option>
          </select>
        </div>
        <div class="field">
          <div class="label" data-i18n="theme">${escapeHtml(t("theme"))}</div>
          <select id="selTheme">
            <option value="dark" ${theme === "dark" ? "selected" : ""}>${escapeHtml(t("dark_mode"))}</option>
            <option value="light" ${theme === "light" ? "selected" : ""}>${escapeHtml(t("light_mode"))}</option>
          </select>
        </div>
      </div>
      <div class="hr"></div>
      <div class="item">
        <h4 data-i18n="clear_data">${escapeHtml(t("clear_data"))}</h4>
        <p data-i18n="clear_data_warn">${escapeHtml(t("clear_data_warn"))}</p>
        <div class="meta">
          <button class="btn bad" id="btnClear" type="button">Clear now</button>
        </div>
      </div>
      <div class="hr"></div>
      <div class="muted small">
        <b>Project note:</b> This build is “static-only” so it works without Node/Python installed. If you want a real backend login + database, tell me what runtime you can use and I’ll upgrade it.
      </div>
    </div>
  </section>`;
}

function viewPrivacy() {
  return `
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="privacy_title">${escapeHtml(t("privacy_title"))}</div>
          <div class="subtitle">Local-first.</div>
        </div>
      </div>
      <div class="card-b">
        <div class="muted" data-i18n="privacy_copy">${escapeHtml(t("privacy_copy"))}</div>
      </div>
    </section>`;
}

function viewAbout() {
  return `
    <section class="card">
      <div class="card-h">
        <div>
          <div class="title" data-i18n="about_title">${escapeHtml(t("about_title"))}</div>
          <div class="subtitle">College project demo</div>
        </div>
      </div>
      <div class="card-b">
        <div class="muted" data-i18n="about_copy">${escapeHtml(t("about_copy"))}</div>
      </div>
    </section>`;
}

function viewNotFound() {
  return `
    <section class="card">
      <div class="card-h"><div class="title">404</div></div>
      <div class="card-b"><a class="btn primary" href="#/">Go home</a></div>
    </section>`;
}

// --- Binding per view ---
function bindView(path) {
  if (path === "/login") bindLogin();
  if (path === "/assistant") bindAssistant();
  if (path === "/hospitals") bindHospitals();
  if (path === "/tracker") bindTracker();
  if (path === "/settings") bindSettings();
}

function bindLogin() {
  const formLogin = document.getElementById("formLogin");
  const formRegister = document.getElementById("formRegister");

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim().toLowerCase();
      const pass = document.getElementById("loginPass").value;
      const users = getUsers();
      const u = users.find((x) => x.email === email);
      if (!u || u.passHash !== hashLike(pass)) {
        toast(t("toast_error"), "Invalid email or password.");
        return;
      }
      setSession({ email, at: Date.now() });
      toast(t("toast_logged_in"), email);
      location.hash = "#/tracker";
    });
  }

  if (formRegister) {
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim().toLowerCase();
      const pass = document.getElementById("regPass").value;
      if (!email.includes("@")) {
        toast(t("toast_error"), "Enter a valid email.");
        return;
      }
      const users = getUsers();
      if (users.some((x) => x.email === email)) {
        toast(t("toast_error"), "Account already exists. Please login.");
        return;
      }
      users.push({ id: cryptoId(), name, email, passHash: hashLike(pass), createdAt: Date.now() });
      setUsers(users);
      setSession({ email, at: Date.now() });
      toast(t("toast_created"), email);
      location.hash = "#/tracker";
    });
  }
}

function bindAssistant() {
  const log = document.getElementById("chatlog");
  const input = document.getElementById("chatInput");
  const btn = document.getElementById("btnAsk");

  const seed = readJson("vedmed_chat_seed", null);
  if (!seed) {
    pushMsg(log, "bot", "Ask me about a medicine. Example: “Dolo 650 side effects” or “Cetirizine precautions”.");
    writeJson("vedmed_chat_seed", { done: true });
  } else {
    // Keep last messages in DOM only, to stay privacy-friendly.
    pushMsg(log, "bot", "Ready. What medicine do you want to check?");
  }

  const ask = async () => {
    const q = input.value.trim();
    if (!q) return;
    input.value = "";
    pushMsg(log, "user", q);
    const thinking = pushThinking(log);
    btn.disabled = true;
    input.disabled = true;
    try {
      const ans = await assistantAnswer(q);
      thinking.remove();
      pushMsg(log, "bot", ans.text);
      renderSources(ans.sources || []);
      toast(t("toast_done"), t("toast_done_sub"));
    } catch (e) {
      thinking.remove();
      pushMsg(log, "bot", "I couldn’t fetch info right now. Please try again in a minute.");
      toast(t("toast_error"), String(e && e.message ? e.message : e));
    } finally {
      btn.disabled = false;
      input.disabled = false;
      input.focus();
    }
  };

  btn.addEventListener("click", ask);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") ask();
  });
}

function pushThinking(log) {
  const msg = document.createElement("div");
  msg.className = "msg bot";
  msg.innerHTML = `
    <div class="avatar" aria-hidden="true">AI</div>
    <div class="bubble"><span class="dots" aria-label="Loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span></div>
  `;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
  return msg;
}

async function assistantAnswer(query) {
  // Prefer Gemini via Cloudflare Worker (if configured). Fallback to public sources.
  const gem = await Promise.allSettled([geminiAnswerViaWorker(query)]);
  if (gem[0].status === "fulfilled" && gem[0].value && gem[0].value.text) {
    return gem[0].value;
  }
  return await medicineAnswer(query);
}

async function geminiAnswerViaWorker(message) {
  const res = await fetch(GEMINI_WORKER_CHAT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  if (!res.ok) throw new Error(`Gemini worker failed (HTTP ${res.status})`);
  const data = await res.json();
  const text = (data && data.text) ? String(data.text) : "";
  if (!text) throw new Error("Empty Gemini response");
  return {
    text,
    sources: [{ label: "Gemini (Cloudflare Worker)", url: GEMINI_WORKER_CHAT_URL.replace(/\/chat$/, "/") }]
  };
}

function bindHospitals() {
  const btn = document.getElementById("btnHospitals");
  const radiusSel = document.getElementById("radiusKm");
  const status = document.getElementById("locStatus");
  const list = document.getElementById("hospitalList");

  const run = async () => {
    list.innerHTML = "";
    status.innerHTML = `Requesting location… <span class="dots" aria-hidden="true"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>`;
    btn.disabled = true;
    try {
      const pos = await getBestPosition();
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const acc = pos.coords.accuracy ? ` ±${Math.round(pos.coords.accuracy)}m` : "";
      const rkm = Number(radiusSel.value || 5);
      status.textContent = `Location: ${lat.toFixed(4)}, ${lon.toFixed(4)}${acc} • Searching within ${rkm} km…`;

      const hospitals = await queryHospitalsOverpass(lat, lon, rkm);
      status.textContent = `${t("hospitals_found")}: ${hospitals.length}`;
      list.innerHTML = hospitals.length ? hospitals.map((h) => hospitalItemHtml(h, lat, lon)).join("") : emptyState("No hospitals found nearby. Try 10–20 km.");
      list.querySelectorAll("[data-call]").forEach((a) => {
        a.addEventListener("click", (e) => {
          if (!a.getAttribute("href") || a.getAttribute("href") === "#") {
            e.preventDefault();
            toast(t("toast_error"), "Phone number not available for this listing.");
          }
        });
      });
    } catch (e) {
      status.textContent = "Couldn’t get location. Turn on GPS, allow permission, and try again.";
      toast(t("toast_error"), "Location not available. Check GPS + permissions.");
    } finally {
      btn.disabled = false;
    }
  };

  btn.addEventListener("click", run);
  radiusSel.addEventListener("change", () => {
    // If user already granted location, refresh automatically on radius change.
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: "geolocation" }).then((p) => {
        if (p && p.state === "granted") run();
      }).catch(() => {});
    }
  });

  // Auto-run once when page opens (works if already granted; otherwise prompts).
  setTimeout(() => run(), 200);
}

async function getBestPosition() {
  // Try high accuracy first, then fall back to normal accuracy.
  try {
    return await getCurrentPosition({ enableHighAccuracy: true, timeout: 12000, maximumAge: 15000 });
  } catch {
    return await getCurrentPosition({ enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 });
  }
}

function bindTracker() {
  if (!currentUser()) return;

  const form = document.getElementById("formMed");
  const list = document.getElementById("medList");
  const cal = document.getElementById("calendar");
  const head = document.getElementById("calHead");
  const monthLabel = document.getElementById("monthLabel");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnToday = document.getElementById("btnToday");
  const btnIcs = document.getElementById("btnDownloadIcs");

  const state = {
    cursor: startOfMonth(new Date())
  };

  renderDow(head);
  renderMeds();
  renderCalendar();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("medName").value.trim();
    const dose = document.getElementById("medDose").value.trim();
    const start = document.getElementById("medStart").value;
    const end = document.getElementById("medEnd").value;
    const timesRaw = document.getElementById("medTimes").value.trim();

    if (!name || !start) return;
    const times = timesRaw
      ? timesRaw.split(",").map((x) => x.trim()).filter(Boolean)
      : ["09:00"];
    const fixedTimes = times.map(normalizeTime).filter(Boolean);
    if (!fixedTimes.length) {
      toast(t("toast_error"), "Enter times like 09:00, 21:00");
      return;
    }

    const meds = getMedsForUser();
    meds.push({
      id: cryptoId(),
      name,
      dose,
      start,
      end: end || null,
      times: fixedTimes,
      createdAt: Date.now()
    });
    setMedsForUser(meds);
    form.reset();
    toast(t("toast_saved"), t("toast_saved_sub"));
    renderMeds();
    renderCalendar();
  });

  btnPrev.addEventListener("click", () => {
    state.cursor = addMonths(state.cursor, -1);
    renderCalendar();
  });
  btnNext.addEventListener("click", () => {
    state.cursor = addMonths(state.cursor, 1);
    renderCalendar();
  });
  btnToday.addEventListener("click", () => {
    state.cursor = startOfMonth(new Date());
    renderCalendar();
  });

  btnIcs.addEventListener("click", () => {
    const meds = getMedsForUser();
    if (!meds.length) {
      toast(t("toast_error"), "Add at least one medicine first.");
      return;
    }
    const ics = buildIcsForMeds(meds);
    downloadText("vedmed-medicine-schedule.ics", ics, "text/calendar");
    toast("Calendar file created", "Open the .ics file to add into Google Calendar.");
  });

  function renderMeds() {
    const meds = getMedsForUser();
    if (!meds.length) {
      list.innerHTML = emptyState("No medicines added yet.");
      return;
    }
    list.innerHTML = meds
      .slice()
      .sort((a, b) => (a.start || "").localeCompare(b.start || ""))
      .map((m) => `
        <div class="item" data-med="${escapeHtml(m.id)}" role="button" tabindex="0" title="Click to delete">
          <h4>${escapeHtml(m.name)} <span class="tag">${escapeHtml((m.times || []).join(", "))}</span></h4>
          <p>${escapeHtml(m.dose || "")}</p>
          <div class="meta">
            <span class="tag ok">${escapeHtml(m.start)}${m.end ? " → " + escapeHtml(m.end) : ""}</span>
            <span class="tag warn">Local only</span>
          </div>
        </div>
      `)
      .join("");

    list.querySelectorAll("[data-med]").forEach((el) => {
      const id = el.getAttribute("data-med");
      const del = () => {
        const meds2 = getMedsForUser().filter((x) => x.id !== id);
        setMedsForUser(meds2);
        toast("Deleted", "Medicine removed from this device.");
        renderMeds();
        renderCalendar();
      };
      el.addEventListener("click", del);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") del();
      });
    });
  }

  function renderCalendar() {
    const cursor = state.cursor;
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    monthLabel.textContent = cursor.toLocaleString(getLang(), { month: "long", year: "numeric" });

    const grid = monthGrid(cursor);
    const meds = getMedsForUser();
    const eventsByDate = buildEventsByDate(meds, grid.firstDate, grid.lastDate);

    cal.innerHTML = grid.days.map((d) => {
      const key = ymd(d);
      const evs = eventsByDate.get(key) || [];
      const isThisMonth = d.getMonth() === month;
      const alpha = isThisMonth ? 1 : 0.55;
      const dots = evs.slice(0, 4).map((ev, idx) => {
        const cls = idx % 2 === 0 ? "" : "o";
        return `<span class="dotpill ${cls}">${escapeHtml(ev.name)}</span>`;
      }).join("");
      const more = evs.length > 4 ? `<span class="dotpill">+${evs.length - 4}</span>` : "";
      return `
        <div class="day" style="opacity:${alpha}">
          <div class="num">${d.getDate()}</div>
          <div class="dots">${dots}${more}</div>
        </div>`;
    }).join("");
  }
}

function bindSettings() {
  const selLang = document.getElementById("selLang");
  const selTheme = document.getElementById("selTheme");
  const btnClear = document.getElementById("btnClear");

  selLang.addEventListener("change", () => setLang(selLang.value));
  selTheme.addEventListener("change", () => setTheme(selTheme.value));

  btnClear.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.users);
    localStorage.removeItem(STORAGE_KEYS.session);
    localStorage.removeItem(STORAGE_KEYS.meds);
    localStorage.removeItem("vedmed_chat_seed");
    toast(t("toast_cleared"), t("toast_cleared_sub"));
    syncAuthUI();
    renderRoute();
  });
}

// --- Helpers / components ---
function pushMsg(log, who, text) {
  const msg = document.createElement("div");
  msg.className = `msg ${who}`;
  const avatar = who === "user" ? "U" : "AI";
  msg.innerHTML = `
    <div class="avatar" aria-hidden="true">${avatar}</div>
    <div class="bubble">${renderTextBlock(text)}</div>`;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;
}

function renderTextBlock(text) {
  const safe = escapeHtml(text || "");
  // light markdown-ish formatting
  return safe
    .replaceAll(/\n{2,}/g, "\n\n")
    .split("\n")
    .map((line) => {
      if (line.trim().startsWith("- ")) return `<div>• ${line.trim().slice(2)}</div>`;
      return `<div>${line || "&nbsp;"}</div>`;
    })
    .join("");
}

function emptyState(text) {
  return `<div class="item"><p>${escapeHtml(text)}</p></div>`;
}

function emergencyCardsHtml() {
  return `
    <div class="callrow">
      <a class="call" href="tel:108" data-i18n="ambulance_108">${escapeHtml(t("ambulance_108"))}</a>
      <a class="call" href="tel:112" data-i18n="police_112">${escapeHtml(t("police_112"))}</a>
    </div>
    <div class="callrow">
      <a class="chip" href="tel:1091" data-i18n="women_1091">${escapeHtml(t("women_1091"))}</a>
      <a class="chip" href="tel:1098" data-i18n="child_1098">${escapeHtml(t("child_1098"))}</a>
    </div>
  `;
}

function orderLinksHtml() {
  const links = [
    { name: "Tata 1mg", url: "https://www.1mg.com/" },
    { name: "PharmEasy", url: "https://pharmeasy.in/" },
    { name: "Apollo 24|7", url: "https://www.apollo247.com/" },
    { name: "Netmeds", url: "https://www.netmeds.com/" }
  ];
  return links.map((l) => `
    <div class="item">
      <h4>${escapeHtml(l.name)}</h4>
      <p>Opens external site for ordering.</p>
      <div class="meta">
        <a class="btn ghost" target="_blank" rel="noreferrer" href="${escapeHtml(l.url)}">Open</a>
      </div>
    </div>
  `).join("");
}

function sosGuidesHtml() {
  const guides = [
    {
      k: "cut",
      steps: [
        "Wash hands. Apply gentle pressure with clean cloth/gauze to stop bleeding.",
        "Rinse wound with clean running water. Avoid putting strong antiseptic deep inside.",
        "Apply antiseptic around wound; cover with sterile dressing/bandage.",
        "If deep cut, heavy bleeding, animal bite, or dirty wound: seek care urgently; tetanus shot may be needed."
      ]
    },
    {
      k: "burn",
      steps: [
        "Cool the burn under cool running water for 10–20 minutes (no ice).",
        "Remove tight items (rings) if possible before swelling.",
        "Cover with clean non-stick dressing. Don’t pop blisters.",
        "If large/deep/face/genitals/chemical/electrical burn: call 112/108."
      ]
    },
    {
      k: "fever",
      steps: [
        "Rest and drink fluids/ORS. Check temperature every few hours.",
        "If high fever persists >24–48h, severe headache, rash, breathing trouble: consult doctor.",
        "For children/elderly/pregnancy: seek earlier medical advice."
      ]
    },
    {
      k: "asthma",
      steps: [
        "Sit upright. Use prescribed reliever inhaler (as directed).",
        "If not improving, difficulty speaking, blue lips, or severe breathlessness: call 112/108."
      ]
    },
    {
      k: "poison",
      steps: [
        "If person is unconscious, vomiting repeatedly, or has seizures: call 112/108.",
        "Do not force vomiting unless a medical professional instructs.",
        "If possible, keep the container/label for doctors."
      ]
    }
  ];

  return guides.map((g) => `
    <div class="item">
      <h4 data-i18n="${escapeHtml(g.k)}">${escapeHtml(t(g.k))}</h4>
      <p>${g.steps.map((s) => `- ${s}`).join("\n")}</p>
    </div>
  `).join("");
}

// --- Medicine assistant: open sources + summarizer ---
async function medicineAnswer(query) {
  const drug = guessDrugName(query);
  const [wiki, fda, wikiSearch] = await Promise.allSettled([
    fetchWikipediaSummary(drug),
    fetchOpenFdaSideEffects(drug),
    fetchWikipediaSearchFallback(drug)
  ]);

  const wikiOk = wiki.status === "fulfilled" ? wiki.value : null;
  const fdaOk = fda.status === "fulfilled" ? fda.value : null;
  const wikiSearchOk = wikiSearch.status === "fulfilled" ? wikiSearch.value : null;

  const parts = [];
  parts.push(`Medicine: ${drug}`);

  const wikiExtract = (wikiOk && wikiOk.extract) || (wikiSearchOk && wikiSearchOk.extract) || "";
  const wikiUrl = (wikiOk && wikiOk.url) || (wikiSearchOk && wikiSearchOk.url) || "";

  if (wikiExtract) {
    parts.push("");
    parts.push("Summary (public sources):");
    parts.push(summarizeText(wikiExtract, 3));
  } else {
    parts.push("");
    parts.push("Summary:");
    parts.push("- I couldn’t find a reliable public summary for this exact name. Try the generic name or spelling.");
  }

  if (fdaOk && fdaOk.effects && fdaOk.effects.length) {
    parts.push("");
    parts.push("Commonly reported side effects (signals from reports):");
    parts.push(fdaOk.effects.slice(0, 10).map((x) => `- ${x}`).join("\n"));
  } else {
    parts.push("");
    parts.push("Side effects:");
    parts.push("- Not available from OpenFDA for this query. Try the generic name (e.g., “acetaminophen” for paracetamol).");
  }

  parts.push("");
  parts.push("India safety reminders:");
  parts.push("- Check allergies and other medicines to avoid interactions.");
  parts.push("- If severe reaction (swelling, breathing trouble): call 112/108.");
  parts.push("- For pregnancy/children/elderly, consult a doctor/pharmacist.");

  const sources = [];
  if (wikiUrl) sources.push({ label: "Wikipedia", url: wikiUrl });
  if (fdaOk && fdaOk.url) sources.push({ label: "OpenFDA", url: fdaOk.url });

  return { text: parts.join("\n"), sources };
}

function guessDrugName(q) {
  const s = (q || "").trim();
  if (!s) return "Paracetamol";
  // take first 1-3 words, strip dosage units
  const cleaned = s.replaceAll(/(\d+(\.\d+)?)\s*(mg|mcg|g|ml|iu)\b/gi, "").trim();
  const tokens = cleaned.split(/\s+/).filter(Boolean).slice(0, 3);
  const name = tokens.join(" ");
  // Normalize common Indian term
  if (/dolo\b/i.test(name)) return "Paracetamol";
  return titleCase(name);
}

function titleCase(s) {
  return (s || "").split(" ").map((w) => w ? (w[0].toUpperCase() + w.slice(1)) : "").join(" ");
}

async function fetchWikipediaSummary(term) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`;
  const data = await fetchJson(url);
  return {
    extract: (data && data.extract) || "",
    url:
      (data && data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page) ||
      `https://en.wikipedia.org/wiki/${encodeURIComponent(term)}`
  };
}

async function fetchWikipediaSearchFallback(term) {
  // If the summary endpoint doesn't match the medicine spelling, use search to find best page title.
  const url = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${encodeURIComponent(term)}&limit=1`;
  const data = await fetchJson(url);
  const title = data && data.pages && data.pages[0] && data.pages[0].title;
  if (!title) throw new Error("No Wikipedia match");
  return await fetchWikipediaSummary(title);
}

async function fetchOpenFdaSideEffects(term) {
  // OpenFDA FAERS (adverse events) - we aggregate reactions.
  const q = `patient.drug.medicinalproduct:"${term}"`;
  const url = `https://api.fda.gov/drug/event.json?search=${encodeURIComponent(q)}&count=patient.reaction.reactionmeddrapt.exact`;
  const data = await fetchJson(url);
  const effects = (data.results || []).map((r) => r.term).filter(Boolean);
  return { effects, url };
}

async function fetchJson(url) {
  // GitHub Pages is static; some public APIs block browser CORS. We try direct, then a CORS mirror.
  try {
    const res = await fetch(url, { headers: { "Accept": "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    const mirror = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const res2 = await fetch(mirror, { headers: { "Accept": "application/json" } });
    if (!res2.ok) throw new Error(`Mirror HTTP ${res2.status}`);
    return await res2.json();
  }
}

function summarizeText(text, sentences = 3) {
  const cleaned = String(text || "")
    .replaceAll(/\s+/g, " ")
    .trim();
  if (!cleaned) return "No summary available.";
  const raw = cleaned.split(/(?<=[.!?])\s+/);
  const picked = raw.slice(0, Math.max(1, sentences));
  return picked.join(" ");
}

function renderSources(sources) {
  const list = document.getElementById("sourceList");
  if (!list) return;
  if (!sources.length) return;
  const html = sources.map((s) => `
    <div class="item">
      <h4>${escapeHtml(s.label || "Source")}</h4>
      <p class="small"><a class="link" target="_blank" rel="noreferrer" href="${escapeHtml(s.url)}">${escapeHtml(s.url)}</a></p>
    </div>
  `).join("");
  list.innerHTML = html;
}

// --- Hospital finder: Overpass (OSM) ---
async function queryHospitalsOverpass(lat, lon, radiusKm) {
  const radiusM = Math.max(500, Math.min(50000, Math.round(radiusKm * 1000)));
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="hospital"](around:${radiusM},${lat},${lon});
      way["amenity"="hospital"](around:${radiusM},${lat},${lon});
      relation["amenity"="hospital"](around:${radiusM},${lat},${lon});
    );
    out center tags;
  `;
  const url = "https://overpass-api.de/api/interpreter";
  const res = await fetch(url, { method: "POST", body: query, headers: { "Content-Type": "text/plain" } });
  if (!res.ok) throw new Error("Overpass request failed");
  const data = await res.json();
  const el = (data.elements || []).map((e) => {
    const tags = e.tags || {};
    const name = tags.name || tags["name:en"] || "Hospital";
    const phone = tags.phone || tags["contact:phone"] || tags["contact:mobile"] || "";
    const address = formatAddress(tags);
    const lat2 = e.lat || (e.center && e.center.lat);
    const lon2 = e.lon || (e.center && e.center.lon);
    const distKm = lat2 && lon2 ? haversineKm(lat, lon, lat2, lon2) : null;
    return {
      id: String(e.id),
      name,
      phone,
      address,
      lat: lat2,
      lon: lon2,
      distKm
    };
  });

  return el
    .filter((x) => x.lat && x.lon)
    .sort((a, b) => (a.distKm ?? 1e9) - (b.distKm ?? 1e9))
    .slice(0, 30);
}

function formatAddress(tags) {
  const parts = [];
  const street = tags["addr:street"];
  const city = tags["addr:city"] || tags["addr:town"] || tags["addr:village"];
  const state = tags["addr:state"];
  const postcode = tags["addr:postcode"];
  if (street) parts.push(street);
  if (city) parts.push(city);
  if (state) parts.push(state);
  if (postcode) parts.push(postcode);
  return parts.join(", ");
}

function hospitalItemHtml(h, myLat, myLon) {
  const dist = h.distKm != null ? `${h.distKm.toFixed(1)} km` : "—";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${h.lat},${h.lon}`)}`;
  const dirUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${myLat},${myLon}`)}&destination=${encodeURIComponent(`${h.lat},${h.lon}`)}`;
  const phone = cleanPhone(h.phone);
  const callHref = phone ? `tel:${phone}` : "#";
  const callAttrs = callHref.startsWith("tel:") ? "" : `target="_blank" rel="noreferrer"`;
  return `
    <div class="item">
      <h4>${escapeHtml(h.name)} <span class="tag ok">${escapeHtml(dist)}</span></h4>
      <p>${escapeHtml(h.address || "Address not listed")}</p>
      <div class="meta">
        <a class="btn ghost" target="_blank" rel="noreferrer" href="${escapeHtml(mapUrl)}">Map</a>
        <a class="btn ghost" target="_blank" rel="noreferrer" href="${escapeHtml(dirUrl)}" data-i18n="directions">${escapeHtml(t("directions"))}</a>
        <a class="btn primary" data-call ${callAttrs} href="${escapeHtml(callHref)}" data-i18n="call_now">${escapeHtml(t("call_now"))}</a>
      </div>
      <div class="muted small">${phone ? `☎ ${escapeHtml(phone)}` : "☎ Not available"}</div>
    </div>
  `;
}

function cleanPhone(phone) {
  const p = String(phone || "").trim();
  if (!p) return "";
  // Keep digits and +
  const s = p.replaceAll(/[^\d+]/g, "");
  // If missing country code and looks like 10-digit, keep as-is.
  return s;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
function deg2rad(d) { return d * (Math.PI / 180); }

function getCurrentPosition(opts) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) reject(new Error("Geolocation not supported"));
    navigator.geolocation.getCurrentPosition(resolve, reject, opts);
  });
}

// --- Medicine tracker storage + calendar ---
function getMedsForUser() {
  const u = currentUser();
  if (!u) return [];
  const all = readJson(STORAGE_KEYS.meds, {});
  return all[u.email] || [];
}

function setMedsForUser(meds) {
  const u = currentUser();
  if (!u) return;
  const all = readJson(STORAGE_KEYS.meds, {});
  all[u.email] = meds;
  writeJson(STORAGE_KEYS.meds, all);
}

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function ymd(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function monthGrid(monthDate) {
  const first = startOfMonth(monthDate);
  const start = new Date(first);
  const dow = (start.getDay() + 6) % 7; // Monday=0
  start.setDate(start.getDate() - dow);
  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return { days, firstDate: days[0], lastDate: days[days.length - 1] };
}

function renderDow(headEl) {
  const dowsEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // Keep short labels universal for this demo.
  headEl.innerHTML = dowsEn.map((d) => `<div class="cal-dow">${d}</div>`).join("");
}

function normalizeTime(s) {
  const m = String(s || "").trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

function buildEventsByDate(meds, fromDate, toDate) {
  const map = new Map();
  const start = new Date(fromDate);
  const end = new Date(toDate);
  for (const m of meds) {
    const s = new Date(m.start + "T00:00:00");
    const e = m.end ? new Date(m.end + "T00:00:00") : new Date(end);
    const until = e < end ? e : end;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d < s || d > until) continue;
      const key = ymd(d);
      const arr = map.get(key) || [];
      arr.push({ id: m.id, name: m.name, times: m.times || [] });
      map.set(key, arr);
    }
  }
  return map;
}

function buildIcsForMeds(meds) {
  const now = new Date();
  const dtstamp = icsDateTime(now);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//VEDMED//Medicine Tracker//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ];

  for (const m of meds) {
    const startDate = m.start;
    const endDate = m.end || null;
    const times = (m.times || ["09:00"]).map((x) => normalizeTime(x)).filter(Boolean);
    const until = endDate ? endDate.replaceAll("-", "") : null;
    for (const tm of times) {
      const uid = `${m.id}-${tm.replace(":", "")}@vedmed`;
      const dtstart = icsDateTime(new Date(`${startDate}T${tm}:00`));
      const summary = escapeIcsText(`${m.name}${m.dose ? " - " + m.dose : ""}`);
      const rule = [
        "FREQ=DAILY",
        until ? `UNTIL=${until}T235900Z` : null,
        "INTERVAL=1"
      ].filter(Boolean).join(";");

      lines.push("BEGIN:VEVENT");
      lines.push(`UID:${uid}`);
      lines.push(`DTSTAMP:${dtstamp}`);
      lines.push(`DTSTART:${dtstart}`);
      lines.push(`RRULE:${rule}`);
      lines.push(`SUMMARY:${summary}`);
      lines.push("END:VEVENT");
    }
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function icsDateTime(d) {
  // Use UTC to keep it consistent across clients.
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mi = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");
  return `${yyyy}${mm}${dd}T${hh}${mi}${ss}Z`;
}

function escapeIcsText(s) {
  return String(s || "").replaceAll("\\", "\\\\").replaceAll(";", "\\;").replaceAll(",", "\\,").replaceAll("\n", "\\n");
}

function downloadText(filename, text, mime) {
  const blob = new Blob([text], { type: mime || "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function cryptoId() {
  // Prefer crypto for uniqueness.
  if (crypto && crypto.getRandomValues) {
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);
    return Array.from(buf).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return String(Date.now()) + "-" + Math.random().toString(16).slice(2);
}

// --- Global header controls ---
function bindGlobal() {
  const btnTheme = document.getElementById("btnTheme");
  const btnLang = document.getElementById("btnLang");
  const btnLogout = document.getElementById("btnLogout");

  btnTheme.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });

  btnLang.addEventListener("click", () => {
    const cur = getLang();
    const idx = SUPPORTED_LANGS.indexOf(cur);
    const next = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length];
    setLang(next);
  });

  btnLogout.addEventListener("click", () => {
    clearSession();
    toast(t("toast_logged_out"), "");
    location.hash = "#/";
  });
}

// --- Init ---
function init() {
  applyTheme();
  syncAuthUI();
  bindGlobal();
  renderI18n();
  window.addEventListener("hashchange", renderRoute);
  if (!location.hash) location.hash = "#/";
  renderRoute();
}

init();

