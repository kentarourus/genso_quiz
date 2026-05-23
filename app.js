const elements = [
  [1, "H", "水素"], [2, "He", "ヘリウム"], [3, "Li", "リチウム"], [4, "Be", "ベリリウム"],
  [5, "B", "ホウ素"], [6, "C", "炭素"], [7, "N", "窒素"], [8, "O", "酸素"],
  [9, "F", "フッ素"], [10, "Ne", "ネオン"], [11, "Na", "ナトリウム"], [12, "Mg", "マグネシウム"],
  [13, "Al", "アルミニウム"], [14, "Si", "ケイ素"], [15, "P", "リン"], [16, "S", "硫黄"],
  [17, "Cl", "塩素"], [18, "Ar", "アルゴン"], [19, "K", "カリウム"], [20, "Ca", "カルシウム"],
  [21, "Sc", "スカンジウム"], [22, "Ti", "チタン"], [23, "V", "バナジウム"], [24, "Cr", "クロム"],
  [25, "Mn", "マンガン"], [26, "Fe", "鉄"], [27, "Co", "コバルト"], [28, "Ni", "ニッケル"],
  [29, "Cu", "銅"], [30, "Zn", "亜鉛"], [31, "Ga", "ガリウム"], [32, "Ge", "ゲルマニウム"],
  [33, "As", "ヒ素"], [34, "Se", "セレン"], [35, "Br", "臭素"], [36, "Kr", "クリプトン"],
  [37, "Rb", "ルビジウム"], [38, "Sr", "ストロンチウム"], [39, "Y", "イットリウム"], [40, "Zr", "ジルコニウム"],
  [41, "Nb", "ニオブ"], [42, "Mo", "モリブデン"], [43, "Tc", "テクネチウム"], [44, "Ru", "ルテニウム"],
  [45, "Rh", "ロジウム"], [46, "Pd", "パラジウム"], [47, "Ag", "銀"], [48, "Cd", "カドミウム"],
  [49, "In", "インジウム"], [50, "Sn", "スズ"], [51, "Sb", "アンチモン"], [52, "Te", "テルル"],
  [53, "I", "ヨウ素"], [54, "Xe", "キセノン"], [55, "Cs", "セシウム"], [56, "Ba", "バリウム"],
  [57, "La", "ランタン"], [58, "Ce", "セリウム"], [59, "Pr", "プラセオジム"], [60, "Nd", "ネオジム"],
  [61, "Pm", "プロメチウム"], [62, "Sm", "サマリウム"], [63, "Eu", "ユウロピウム"], [64, "Gd", "ガドリニウム"],
  [65, "Tb", "テルビウム"], [66, "Dy", "ジスプロシウム"], [67, "Ho", "ホルミウム"], [68, "Er", "エルビウム"],
  [69, "Tm", "ツリウム"], [70, "Yb", "イッテルビウム"], [71, "Lu", "ルテチウム"], [72, "Hf", "ハフニウム"],
  [73, "Ta", "タンタル"], [74, "W", "タングステン"], [75, "Re", "レニウム"], [76, "Os", "オスミウム"],
  [77, "Ir", "イリジウム"], [78, "Pt", "白金"], [79, "Au", "金"], [80, "Hg", "水銀"],
  [81, "Tl", "タリウム"], [82, "Pb", "鉛"], [83, "Bi", "ビスマス"], [84, "Po", "ポロニウム"],
  [85, "At", "アスタチン"], [86, "Rn", "ラドン"], [87, "Fr", "フランシウム"], [88, "Ra", "ラジウム"],
  [89, "Ac", "アクチニウム"], [90, "Th", "トリウム"], [91, "Pa", "プロトアクチニウム"], [92, "U", "ウラン"],
  [93, "Np", "ネプツニウム"], [94, "Pu", "プルトニウム"], [95, "Am", "アメリシウム"], [96, "Cm", "キュリウム"],
  [97, "Bk", "バークリウム"], [98, "Cf", "カリホルニウム"], [99, "Es", "アインスタイニウム"], [100, "Fm", "フェルミウム"],
  [101, "Md", "メンデレビウム"], [102, "No", "ノーベリウム"], [103, "Lr", "ローレンシウム"], [104, "Rf", "ラザホージウム"],
  [105, "Db", "ドブニウム"], [106, "Sg", "シーボーギウム"], [107, "Bh", "ボーリウム"], [108, "Hs", "ハッシウム"],
  [109, "Mt", "マイトネリウム"], [110, "Ds", "ダームスタチウム"], [111, "Rg", "レントゲニウム"], [112, "Cn", "コペルニシウム"],
  [113, "Nh", "ニホニウム"], [114, "Fl", "フレロビウム"], [115, "Mc", "モスコビウム"], [116, "Lv", "リバモリウム"],
  [117, "Ts", "テネシン"], [118, "Og", "オガネソン"],
].map(([number, symbol, name]) => ({ number, symbol, name }));

const labels = {
  number: "原子番号",
  symbol: "元素記号",
  name: "元素名",
};

const nameAliases = {
  水素: ["スイソ"],
  ホウ素: ["ホウソ", "ボロン"],
  炭素: ["タンソ", "カーボン"],
  窒素: ["チッソ"],
  酸素: ["サンソ"],
  ケイ素: ["ケイソ", "シリコン"],
  硫黄: ["イオウ", "ユオウ"],
  塩素: ["エンソ"],
  鉄: ["テツ"],
  銅: ["ドウ"],
  亜鉛: ["アエン"],
  ヒ素: ["ヒソ"],
  臭素: ["シュウソ"],
  銀: ["ギン"],
  白金: ["ハッキン", "プラチナ"],
  金: ["キン"],
  水銀: ["スイギン"],
  鉛: ["ナマリ"],
};

const state = {
  questionMode: "number",
  answerMode: "symbol",
  current: null,
  correct: 0,
  total: 0,
  setSize: 10,
  setActive: false,
  setStartedAt: null,
  timerId: null,
  history: [],
  records: JSON.parse(localStorage.getItem("elementQuizRecords") || "[]"),
};

const questionValue = document.querySelector("#questionValue");
const questionMeta = document.querySelector("#questionMeta");
const progressText = document.querySelector("#progressText");
const answerLabel = document.querySelector("#answerLabel");
const answerInput = document.querySelector("#answerInput");
const feedback = document.querySelector("#feedback");
const correctCount = document.querySelector("#correctCount");
const totalCount = document.querySelector("#totalCount");
const timer = document.querySelector("#timer");
const historyList = document.querySelector("#historyList");
const recordsList = document.querySelector("#recordsList");
const startSetButton = document.querySelector("#startSetButton");

function valueFor(element, mode) {
  return String(element[mode]);
}

function normalize(value, mode) {
  const normalized = value.normalize("NFKC").trim();
  if (mode === "symbol") return normalized.toLowerCase();
  if (mode === "number") return String(Number(normalized.replace(/\D/g, "")));
  return normalizeElementName(normalized);
}

function normalizeElementName(value) {
  return value
    .normalize("NFKC")
    .trim()
    .replace(/[\s・･.\-＿_]/g, "")
    .replace(/[ぁ-ゖ]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60))
    .replace(/ー/g, "")
    .toLowerCase();
}

function acceptedAnswers(element, mode) {
  if (mode !== "name") return [valueFor(element, mode)];
  return [element.name, ...(nameAliases[element.name] || [])];
}

function isAnswerCorrect(userAnswer, element, mode) {
  const normalizedUserAnswer = normalize(userAnswer, mode);
  return acceptedAnswers(element, mode).some((answer) => normalize(answer, mode) === normalizedUserAnswer);
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function chooseElement() {
  const next = elements[Math.floor(Math.random() * elements.length)];
  if (state.current && next.number === state.current.number) return chooseElement();
  return next;
}

function setMode(group, mode) {
  state[group] = mode;
  const container = document.querySelector(`#${group}`);
  container.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
}

function updateScore() {
  correctCount.textContent = state.correct;
  totalCount.textContent = state.total;
  progressText.textContent = state.setActive ? `${state.total + 1} / ${state.setSize} 問目` : "セット未開始";
}

function updateTimer() {
  if (!state.setActive || !state.setStartedAt) return;
  timer.textContent = formatTime(Date.now() - state.setStartedAt);
}

function ensureDifferentModes() {
  if (state.questionMode !== state.answerMode) return;
  const fallback = state.answerMode === "symbol" ? "name" : "symbol";
  setMode("answerMode", fallback);
}

function newQuestion() {
  ensureDifferentModes();
  state.current = chooseElement();
  questionValue.textContent = valueFor(state.current, state.questionMode);
  questionMeta.textContent = `${labels[state.questionMode]}から${labels[state.answerMode]}を答える`;
  answerLabel.textContent = `${labels[state.answerMode]}を入力`;
  answerInput.value = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  updateScore();
  answerInput.focus();
}

function startSet() {
  state.correct = 0;
  state.total = 0;
  state.setActive = true;
  state.setStartedAt = Date.now();
  window.clearInterval(state.timerId);
  state.timerId = window.setInterval(updateTimer, 250);
  timer.textContent = "00:00";
  startSetButton.textContent = "セットやり直し";
  newQuestion();
}

function startSetTimerOnly() {
  state.correct = 0;
  state.total = 0;
  state.setActive = true;
  state.setStartedAt = Date.now();
  window.clearInterval(state.timerId);
  state.timerId = window.setInterval(updateTimer, 250);
  timer.textContent = "00:00";
  startSetButton.textContent = "セットやり直し";
  updateScore();
}

function finishSet() {
  state.setActive = false;
  window.clearInterval(state.timerId);
  const elapsed = Date.now() - state.setStartedAt;
  const record = {
    size: state.setSize,
    correct: state.correct,
    time: elapsed,
    date: new Date().toLocaleString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
    mode: `${labels[state.questionMode]}→${labels[state.answerMode]}`,
  };
  state.records.unshift(record);
  state.records = state.records.slice(0, 8);
  localStorage.setItem("elementQuizRecords", JSON.stringify(state.records));
  renderRecords();
  feedback.textContent = `${state.setSize}問セット完了: ${state.correct}/${state.setSize}、${formatTime(elapsed)}`;
  feedback.className = "feedback done";
  progressText.textContent = "セット完了";
  startSetButton.textContent = "セット開始";
  answerInput.value = "";
}

function addHistory(wasCorrect) {
  const answer = valueFor(state.current, state.answerMode);
  state.history.unshift({
    wasCorrect,
    question: `${labels[state.questionMode]}: ${valueFor(state.current, state.questionMode)}`,
    answer: `${labels[state.answerMode]}: ${answer}`,
  });
  state.history = state.history.slice(0, 6);
  historyList.innerHTML = state.history
    .map((item) => `<li><strong>${item.wasCorrect ? "正解" : "確認"}</strong> ${item.question} → ${item.answer}</li>`)
    .join("");
}

function renderRecords() {
  if (state.records.length === 0) {
    recordsList.innerHTML = `<li class="empty-note">セットを終えると時間が残ります。</li>`;
    return;
  }
  recordsList.innerHTML = state.records
    .map((record) => `<li><strong>${record.correct}/${record.size}</strong> ${formatTime(record.time)}<br>${record.mode}・${record.date}</li>`)
    .join("");
}

document.querySelectorAll("#questionMode, #answerMode").forEach((container) => {
  container.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    setMode(container.id, button.dataset.mode);
    newQuestion();
  });
});

document.querySelector("#setSize").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.setSize = Number(button.dataset.size);
  document.querySelectorAll("#setSize button").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  if (!state.setActive) updateScore();
});

document.querySelector("#answerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.setActive) startSetTimerOnly();

  const expected = valueFor(state.current, state.answerMode);
  const isCorrect = isAnswerCorrect(answerInput.value, state.current, state.answerMode);
  state.total += 1;
  if (isCorrect) state.correct += 1;
  updateScore();
  addHistory(isCorrect);

  if (state.total >= state.setSize) {
    finishSet();
    return;
  }

  feedback.textContent = isCorrect ? `正解です。${state.current.name} (${state.current.symbol})` : `答えは ${expected} です。${state.current.name} (${state.current.symbol})`;
  feedback.className = `feedback ${isCorrect ? "ok" : "bad"}`;
  window.setTimeout(newQuestion, isCorrect ? 650 : 1300);
});

document.querySelector("#skipButton").addEventListener("click", newQuestion);
document.querySelector("#startSetButton").addEventListener("click", startSet);

document.querySelector("#hintButton").addEventListener("click", () => {
  const answer = valueFor(state.current, state.answerMode);
  const hint = state.answerMode === "number" ? `${answer.length}桁` : `${answer.slice(0, 1)} から始まります`;
  feedback.textContent = `ヒント: ${hint}`;
  feedback.className = "feedback hint";
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.correct = 0;
  state.total = 0;
  state.setActive = false;
  state.history = [];
  window.clearInterval(state.timerId);
  timer.textContent = "00:00";
  startSetButton.textContent = "セット開始";
  historyList.innerHTML = "";
  updateScore();
  newQuestion();
});

document.querySelector("#clearRecordsButton").addEventListener("click", () => {
  state.records = [];
  localStorage.removeItem("elementQuizRecords");
  renderRecords();
});

renderRecords();
newQuestion();
