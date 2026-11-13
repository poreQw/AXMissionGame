// 每个词条是同一 IT 概念的中、英、韩术语，并附拼音和韩文释义。
const vocabulary = [
  { day: "DAY 08 · AI와 대화할 때", ko: "인공지능", zh: "人工智能", py: "Ren Gong Zhi Neng", en: "Artificial Intelligence (AI)", meaning: "사람의 지능적인 일을 컴퓨터가 수행하도록 하는 기술" },
  { day: "DAY 08 · AI와 대화할 때", ko: "생성형 AI", zh: "生成式人工智能", py: "Sheng Cheng Shi Ren Gong Zhi Neng", en: "Generative AI", meaning: "글·그림·코드 등 새로운 콘텐츠를 만드는 AI" },
  { day: "DAY 08 · AI와 대화할 때", ko: "대규모 언어 모델", zh: "大语言模型", py: "Da Yu Yan Mo Xing", en: "Large Language Model (LLM)", meaning: "많은 글을 학습해 문장을 이해하고 생성하는 AI" },
  { day: "DAY 08 · AI와 대화할 때", ko: "프롬프트", zh: "提示词", py: "Ti Shi Ci", en: "Prompt", meaning: "AI에 입력하는 질문이나 작업 지시" },
  { day: "DAY 08 · AI와 대화할 때", ko: "모델", zh: "人工智能模型", py: "Ren Gong Zhi Neng Mo Xing", en: "AI Model", meaning: "데이터를 학습하여 예측이나 생성을 하는 시스템" },
  { day: "DAY 08 · AI와 대화할 때", ko: "토큰", zh: "词元", py: "Ci Yuan", en: "Token", meaning: "AI가 글을 처리할 때 사용하는 작은 단위" },
  { day: "DAY 08 · AI와 대화할 때", ko: "컨텍스트", zh: "上下文", py: "Shang Xia Wen", en: "Context", meaning: "AI가 답할 때 참고하는 앞뒤 정보" },
  { day: "DAY 08 · AI와 대화할 때", ko: "출력", zh: "输出", py: "Shu Chu", en: "Output", meaning: "AI나 프로그램이 만들어 돌려주는 결과" },
  { day: "DAY 08 · AI와 대화할 때", ko: "환각", zh: "幻觉", py: "Huan Jue", en: "Hallucination", meaning: "AI가 사실과 다른 내용을 그럴듯하게 말하는 현상" },
  { day: "DAY 08 · AI와 대화할 때", ko: "추론", zh: "推理", py: "Tui Li", en: "Inference", meaning: "학습한 모델이 새로운 입력에 답을 만드는 과정" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "기계학습", zh: "机器学习", py: "Ji Qi Xue Xi", en: "Machine Learning", meaning: "데이터를 이용해 규칙을 배우는 AI 기술" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "딥러닝", zh: "深度学习", py: "Shen Du Xue Xi", en: "Deep Learning", meaning: "여러 층의 신경망을 사용하는 기계학습 방법" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "학습 데이터", zh: "训练数据", py: "Xun Lian Shu Ju", en: "Training Data", meaning: "AI가 패턴을 배우는 데 사용하는 자료" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "신경망", zh: "神经网络", py: "Shen Jing Wang Luo", en: "Neural Network", meaning: "여러 계산 단위를 연결해 정보를 처리하는 구조" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "알고리즘", zh: "算法", py: "Suan Fa", en: "Algorithm", meaning: "문제를 풀기 위한 단계적인 처리 방법" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "예측", zh: "预测", py: "Yu Ce", en: "Prediction", meaning: "주어진 정보를 바탕으로 결과를 추정하는 것" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "컨텍스트 창", zh: "上下文窗口", py: "Shang Xia Wen Chuang Kou", en: "Context Window", meaning: "모델이 한 번에 참고할 수 있는 정보의 범위" },
  { day: "DAY 17 · AI 모델의 이해", ko: "시스템 지시", zh: "系统指令", py: "Xi Tong Zhi Ling", en: "System Instruction", meaning: "AI의 역할과 기본 행동을 정하는 상위 지시" },
  { day: "DAY 17 · AI 모델의 이해", ko: "대화 기록", zh: "聊天记录", py: "Liao Tian Ji Lu", en: "Chat History", meaning: "AI와 이전에 주고받은 메시지" },
  { day: "DAY 17 · AI 모델의 이해", ko: "멀티모달", zh: "多模态", py: "Duo Mo Tai", en: "Multimodal", meaning: "글·이미지·소리 등 여러 형태를 다루는 방식" },
  { day: "DAY 17 · AI 모델의 이해", ko: "매개변수(모델)", zh: "模型参数", py: "Mo Xing Can Shu", en: "Model Parameters", meaning: "AI 모델 내부에서 학습되는 수치" },
  { day: "DAY 17 · AI 모델의 이해", ko: "파인튜닝", zh: "微调", py: "Wei Diao", en: "Fine-tuning", meaning: "이미 학습한 모델을 추가 자료로 조정하는 것" },
  { day: "DAY 17 · AI 모델의 이해", ko: "임베딩", zh: "嵌入向量", py: "Qian Ru Xiang Liang", en: "Embedding", meaning: "글 등의 의미를 숫자 벡터로 표현하는 방식" },
  { day: "DAY 17 · AI 모델의 이해", ko: "벡터", zh: "向量", py: "Xiang Liang", en: "Vector", meaning: "여러 숫자를 한 묶음으로 나타낸 것" },
  { day: "DAY 17 · AI 모델의 이해", ko: "유사도", zh: "相似度", py: "Xiang Si Du", en: "Similarity", meaning: "두 정보가 얼마나 비슷한지를 나타내는 정도" },
  { day: "DAY 17 · AI 모델의 이해", ko: "온도", zh: "温度参数", py: "Wen Du Can Shu", en: "Temperature", meaning: "AI 응답의 다양성을 조절하는 설정" },
  { day: "DAY 17 · AI 모델의 이해", ko: "오픈소스", zh: "开源", py: "Kai Yuan", en: "Open Source", meaning: "소스 코드를 공개해 정해진 조건으로 사용할 수 있게 한 방식" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "공개 가중치", zh: "开放权重", py: "Kai Fang Quan Zhong", en: "Open Weights", meaning: "학습된 모델의 가중치를 내려받도록 공개하는 것" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "벤치마크", zh: "基准测试", py: "Ji Zhun Ce Shi", en: "Benchmark", meaning: "정해진 문제로 모델 성능을 비교하는 시험" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "성능 평가", zh: "评估", py: "Ping Gu", en: "Evaluation", meaning: "AI 결과의 정확성이나 품질을 점검하는 일" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "역할 지정", zh: "角色设定", py: "Jiao Se She Ding", en: "Role Prompting", meaning: "AI에게 전문가나 도우미 같은 역할을 지정하기" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "지시문", zh: "指令", py: "Zhi Ling", en: "Instruction", meaning: "AI가 수행할 작업을 분명히 설명한 문장" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "예시 제공", zh: "少样本提示", py: "Shao Yang Ben Ti Shi", en: "Few-shot Prompting", meaning: "입출력 예시 몇 개를 보여주고 따라 하게 하기" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "제로샷", zh: "零样本提示", py: "Ling Yang Ben Ti Shi", en: "Zero-shot Prompting", meaning: "별도 예시 없이 바로 작업을 요청하는 방식" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "출력 형식", zh: "输出格式", py: "Shu Chu Ge Shi", en: "Output Format", meaning: "답을 표·목록·JSON 등으로 받도록 정한 형태" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "제약 조건", zh: "约束条件", py: "Yue Shu Tiao Jian", en: "Constraint", meaning: "답변에 적용할 길이·언어 등의 제한" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "단계별 지시", zh: "分步指令", py: "Fen Bu Zhi Ling", en: "Step-by-step Instruction", meaning: "복잡한 작업을 여러 단계로 나누어 요청하기" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "프롬프트 템플릿", zh: "提示词模板", py: "Ti Shi Ci Mo Ban", en: "Prompt Template", meaning: "빈칸을 바꿔 반복 사용하도록 만든 지시문" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "검증", zh: "核实", py: "He Shi", en: "Verification", meaning: "AI가 낸 답을 자료나 실행으로 확인하는 일" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "요청 제한", zh: "速率限制", py: "Su Lu Xian Zhi", en: "Rate Limit", meaning: "일정 시간에 보낼 수 있는 요청 수의 한도" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "사용량", zh: "使用量", py: "Shi Yong Liang", en: "Usage", meaning: "API나 서비스를 사용한 양" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "과금", zh: "计费", py: "Ji Fei", en: "Billing", meaning: "사용한 서비스에 대해 비용을 계산하는 것" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "엔드포인트", zh: "端点", py: "Duan Dian", en: "API Endpoint", meaning: "API 요청을 보내는 특정 주소" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "SDK", zh: "软件开发工具包", py: "Ruan Jian Kai Fa Gong Ju Bao", en: "Software Development Kit", meaning: "특정 서비스를 쉽게 쓰도록 제공하는 개발 도구 모음" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "오류 코드", zh: "错误代码", py: "Cuo Wu Dai Ma", en: "Error Code", meaning: "실패 원인을 알려주는 번호나 표시" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "인증", zh: "身份认证", py: "Shen Fen Ren Zheng", en: "Authentication", meaning: "사용자나 프로그램의 신원을 확인하는 과정" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "작업 흐름", zh: "工作流程", py: "Gong Zuo Liu Cheng", en: "Workflow", meaning: "일을 시작부터 끝까지 진행하는 순서" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "복호화", zh: "解密", py: "Jie Mi", en: "Decryption", meaning: "암호화한 정보를 다시 읽을 수 있게 되돌리는 것" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "개인정보", zh: "个人信息", py: "Ge Ren Xin Xi", en: "Personal Information", meaning: "사람을 알아볼 수 있는 이름·연락처 등의 정보" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "민감 정보", zh: "敏感信息", py: "Min Gan Xin Xi", en: "Sensitive Information", meaning: "노출되면 피해가 큰 비밀번호 등 중요한 정보" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "이중 인증", zh: "双因素认证", py: "Shuang Yin Su Ren Zheng", en: "Two-factor Authentication (2FA)", meaning: "비밀번호 외에 한 가지 인증 수단을 더 확인하는 방법" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "피싱", zh: "网络钓鱼", py: "Wang Luo Diao Yu", en: "Phishing", meaning: "가짜 메시지나 사이트로 정보를 빼내는 사기" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "취약점", zh: "安全漏洞", py: "An Quan Lou Dong", en: "Vulnerability", meaning: "공격에 악용될 수 있는 시스템의 약한 부분" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "비밀 키 관리", zh: "密钥管理", py: "Mi Yao Guan Li", en: "Secret Management", meaning: "API 키 등을 안전하게 보관하고 사용하는 일" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "검색 증강 생성", zh: "检索增强生成", py: "Jian Suo Zeng Qiang Sheng Cheng", en: "Retrieval-Augmented Generation (RAG)", meaning: "찾은 자료를 참고하여 AI가 답하도록 하는 방식" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "지식 베이스", zh: "知识库", py: "Zhi Shi Ku", en: "Knowledge Base", meaning: "문서와 지식을 모아 찾기 쉽게 관리한 곳" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "문서 분할", zh: "文本分块", py: "Wen Ben Fen Kuai", en: "Chunking", meaning: "긴 문서를 검색하기 쉽게 작은 부분으로 나누는 것" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "벡터 데이터베이스", zh: "向量数据库", py: "Xiang Liang Shu Ju Ku", en: "Vector Database", meaning: "벡터로 표현한 정보를 저장하고 찾는 시스템" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "의미 검색", zh: "语义搜索", py: "Yu Yi Sou Suo", en: "Semantic Search", meaning: "단어 일치뿐 아니라 의미가 비슷한 내용을 찾는 검색" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "재정렬", zh: "重排序", py: "Zhong Pai Xu", en: "Reranking", meaning: "검색된 결과를 관련성에 따라 다시 정렬하는 과정" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "출처 표시", zh: "引用来源", py: "Yin Yong Lai Yuan", en: "Citation", meaning: "AI 답변에 참고한 자료의 위치나 이름을 밝히는 것" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "검색 결과", zh: "搜索结果", py: "Sou Suo Jie Guo", en: "Search Result", meaning: "검색 조건에 맞아 찾아낸 자료" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "문서 인식", zh: "光学字符识别", py: "Guang Xue Zi Fu Shi Bie", en: "Optical Character Recognition (OCR)", meaning: "이미지 속 글자를 컴퓨터가 읽을 수 있게 변환하는 기술" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "텍스트 추출", zh: "文本提取", py: "Wen Ben Ti Qu", en: "Text Extraction", meaning: "파일이나 문서에서 글자 내용을 가져오는 것" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "AI 에이전트", zh: "AI智能体", py: "AIZhi Neng Ti", en: "AI Agent", meaning: "목표를 위해 도구를 사용하며 여러 작업을 수행하는 AI 시스템" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "도구 호출", zh: "工具调用", py: "Gong Ju Diao Yong", en: "Tool Calling", meaning: "AI가 검색이나 계산 같은 외부 기능을 실행하도록 요청하는 것" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "자동화", zh: "自动化", py: "Zi Dong Hua", en: "Automation", meaning: "사람이 반복하던 일을 프로그램이 대신 처리하는 것" }
];

// 词条自动生成题目；answerIndex 指向正确选项，显示时再随机打乱顺序。
const questions = vocabulary.map((term, index, terms) => {
  const answerIndex = index % 4;
  const optionIndexes = [];
  for (let offset = 1; optionIndexes.length < 3; offset += 1) {
    const candidate = (index + offset) % terms.length;
    if (candidate !== index && !optionIndexes.includes(candidate)) optionIndexes.push(candidate);
  }
  optionIndexes.splice(answerIndex, 0, index);
  return {
    id: index + 1,
    questionZh: `请选择与「${term.zh}」对应的韩语术语。`,
    questionKo: `「${term.ko}」에 해당하는 영어 용어를 고르세요.`,
    questionEn: `Choose the Chinese term for "${term.en}".`,
    correctEn: term.en,
    correctKo: term.ko,
    correctZh: term.zh,
    options: optionIndexes.map(optionIndex => ({
      en: terms[optionIndex].en,
      ko: terms[optionIndex].ko,
      zh: terms[optionIndex].zh,
      py: terms[optionIndex].py
    })),
    answerIndex,
    day: term.day,
    py: term.py,
    meaning: term.meaning
  };
});

const letters = ["A", "B", "C", "D"];
const ROUND_SIZE = 10;
const BEST_SCORE_KEY = "axMissionBestScore";
const termFields = { en: "correctEn", ko: "correctKo", zh: "correctZh" };
const languagePairs = [
  { source: "zh", target: "ko", promptKey: "questionZh" },
  { source: "ko", target: "en", promptKey: "questionKo" },
  { source: "en", target: "zh", promptKey: "questionEn" }
];
// 游戏状态只保存在本次页面内；只有最高分会持久化到浏览器。
let order = [];
let current = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let timerId = null;
let secondsLeft = 20;
let answered = false;
let startedAt = 0;
let reviewMode = false;
let bestScore = 0;
const answerHistory = [];

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const timerEl = document.getElementById("timer");
const progressTrack = document.querySelector(".progress-track");

function showStorageNotice() {
  document.getElementById("storage-notice").classList.remove("hidden");
}

function loadBestScore() {
  try {
    // 隐私模式或浏览器策略可能禁用 LocalStorage，因此读写都单独处理。
    const savedScore = Number(localStorage.getItem(BEST_SCORE_KEY));
    if (Number.isFinite(savedScore) && savedScore >= 0) bestScore = savedScore;
  } catch {
    showStorageNotice();
  }
}

function updateStats() {
  document.getElementById("score-stat").innerHTML = `${score}<span style="font-size:11px;color:var(--muted)"> pt</span>`;
  document.getElementById("best-score-stat").innerHTML = `${bestScore}<span style="font-size:11px;color:var(--muted)"> pt</span>`;
  document.getElementById("correct-stat").innerHTML = `${answerHistory.filter(item => item.correct).length}<span style="font-size:11px;color:var(--muted)"> / ${ROUND_SIZE}</span>`;
  document.getElementById("streak-stat").innerHTML = `${streak}<span style="font-size:11px;color:var(--muted)"> 🔥</span>`;
}

function startGame() {
  clearInterval(timerId);
  order = questions.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  order = order.slice(0, ROUND_SIZE);
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  answerHistory.length = 0;
  reviewMode = false;
  startedAt = Date.now();
  intro.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  updateStats();
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timerId);
  answered = false;
  const questionIndex = order[current];
  const question = questions[questionIndex];
  const pair = languagePairs[current % languagePairs.length];
  const displayedOptions = question.options.map((option, index) => ({ option, originalIndex: index }));
  for (let index = displayedOptions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [displayedOptions[index], displayedOptions[swapIndex]] = [displayedOptions[swapIndex], displayedOptions[index]];
  }
  const correctAnswer = displayedOptions.findIndex(item => item.originalIndex === question.answerIndex);
  document.getElementById("question-number").textContent = String(current + 1).padStart(2, "0");
  document.getElementById("question-tag").textContent = question.day;
  document.getElementById("question-text").textContent = question[pair.promptKey];
  const sourceTerm = document.getElementById("source-term");
  sourceTerm.lang = pair.source;
  sourceTerm.innerHTML = `<span>${question[termFields[pair.source]]}</span>${pair.source === "zh" ? `<span class="source-pinyin">${question.py}</span>` : ""}`;
  progressTrack.setAttribute("aria-valuenow", String(current));
  document.getElementById("progress-fill").style.width = `${current / ROUND_SIZE * 100}%`;
  feedbackEl.className = "feedback";
  feedbackEl.textContent = "";
  nextButton.classList.add("hidden");
  document.getElementById("answer-hint").textContent = "가장 알맞은 답을 선택하세요";
  optionsEl.replaceChildren();

  displayedOptions.forEach(({ option }, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.innerHTML = `<span class="option-key">${letters[index]}</span><span class="option-copy"></span>`;
    const copy = button.lastElementChild;
    copy.lang = pair.target;
    copy.textContent = "";
    const label = document.createElement("span");
    label.textContent = option[pair.target];
    copy.append(label);
    if (pair.target === "zh") {
      const pinyin = document.createElement("span");
      pinyin.className = "option-pinyin";
      pinyin.textContent = option.py;
      copy.append(pinyin);
    }
    button.addEventListener("click", () => selectAnswer(index, false));
    optionsEl.append(button);
  });
  question.roundData = { pair, options: displayedOptions.map(item => item.option), correctAnswer };

  secondsLeft = 20;
  updateTimer();
  timerId = setInterval(() => {
    secondsLeft -= 1;
    updateTimer();
    if (secondsLeft <= 0) selectAnswer(-1, true);
  }, 1000);
  optionsEl.firstElementChild.focus();
}

function updateTimer() {
  timerEl.textContent = `00:${String(secondsLeft).padStart(2, "0")}`;
  timerEl.classList.toggle("warning", secondsLeft <= 5);
}

function selectAnswer(selected, timedOut) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);
  const question = questions[order[current]];
  const { pair, options, correctAnswer } = question.roundData;
  const correct = selected === correctAnswer;
  answerHistory[current] = { questionIndex: order[current], selected, correct, pair, options, correctAnswer };
  // 答对加 10 分并延长连对；答错或超时清零当前连对。
  if (correct) {
    score += 10;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
  } else {
    streak = 0;
  }

  [...optionsEl.children].forEach((button, index) => {
    button.disabled = true;
    if (index === correctAnswer) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("incorrect");
  });
  feedbackEl.classList.add("visible");
  const correctTerm = options[correctAnswer];
  const opening = timedOut
    ? `<strong>시간 초과!</strong> 정답은 ${letters[correctAnswer]} · ${correctTerm[pair.target]}예요. `
    : correct
      ? "<strong>정답이에요!</strong> 정확하게 알고 있네요. "
      : `<strong>아쉬워요!</strong> 정답은 ${letters[correctAnswer]} · ${correctTerm[pair.target]}예요. `;
  feedbackEl.innerHTML = `${opening}<br><b>${question.correctKo} · ${question.correctZh} · ${question.correctEn}</b><br><span class="option-pinyin">${question.py}</span><br>${question.meaning}`;
  document.getElementById("answer-hint").textContent = correct ? "정답을 맞혔어요! 잘하고 있어요." : "해설을 읽고 다음 문제로 넘어가세요.";
  nextButton.textContent = current === ROUND_SIZE - 1 ? "결과 확인하기 →" : "다음 문제 →";
  nextButton.classList.remove("hidden");
  updateStats();
  nextButton.focus();
}

function showResults() {
  clearInterval(timerId);
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  document.getElementById("progress-fill").style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", String(ROUND_SIZE));
  const correctCount = answerHistory.filter(item => item.correct).length;
  const elapsed = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
  const isNewRecord = score > bestScore;
  if (isNewRecord) {
    bestScore = score;
    try {
      // 只保存最高分，刷新或下次访问时仍可读取。
      localStorage.setItem(BEST_SCORE_KEY, String(bestScore));
    } catch {
      showStorageNotice();
    }
  }
  document.getElementById("score-number").textContent = String(score);
  document.getElementById("result-detail").textContent = `${ROUND_SIZE}문제 중 ${correctCount}문제 정답 · 최고 연속 정답 ${bestStreak}개 · ${Math.floor(elapsed / 60)}분 ${elapsed % 60}초`;
  document.getElementById("result-correct").textContent = `${correctCount} / ${ROUND_SIZE}`;
  document.getElementById("result-accuracy").textContent = `${Math.round(correctCount / ROUND_SIZE * 100)}%`;
  document.getElementById("result-streak").textContent = String(bestStreak);
  document.getElementById("result-best-score").textContent = String(bestScore);
  document.getElementById("record-message").textContent = isNewRecord ? "新纪录！新的最高分已保存 · 새 최고 점수를 저장했어요!" : "";
  document.getElementById("result-title").textContent = correctCount === 10 ? "완벽한 미션 클리어!" : correctCount >= 7 ? "대단해요, 거의 전문가!" : correctCount >= 4 ? "좋은 출발이에요!" : "도전한 것만으로도 성공!";
  document.getElementById("result-badge").textContent = correctCount === 10 ? "成绩报告 · PERFECT CLEAR" : "成绩报告 · MISSION COMPLETE";
  document.getElementById("review-button").textContent = "정답 돌아보기";
  updateStats();
}

function showReview() {
  if (!reviewMode) {
    order = answerHistory.map(item => item.questionIndex);
    current = 0;
    reviewMode = true;
  } else {
    current += 1;
  }
  if (current >= order.length) {
    result.classList.remove("hidden");
    quiz.classList.add("hidden");
    reviewMode = false;
    current = 0;
    document.getElementById("review-button").textContent = "정답 돌아보기";
    return;
  }
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderReviewQuestion();
}

function renderReviewQuestion() {
  clearInterval(timerId);
  answered = true;
  const record = answerHistory[current];
  const question = questions[record.questionIndex];
  document.getElementById("question-number").textContent = String(current + 1).padStart(2, "0");
  document.getElementById("question-tag").textContent = question.day;
  document.getElementById("question-text").textContent = question[record.pair.promptKey];
  const sourceTerm = document.getElementById("source-term");
  sourceTerm.lang = record.pair.source;
  sourceTerm.innerHTML = `<span>${question[termFields[record.pair.source]]}</span>${record.pair.source === "zh" ? `<span class="source-pinyin">${question.py}</span>` : ""}`;
  progressTrack.setAttribute("aria-valuenow", String(current + 1));
  document.getElementById("progress-fill").style.width = `${(current + 1) / ROUND_SIZE * 100}%`;
  optionsEl.replaceChildren();
  record.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.disabled = true;
    button.innerHTML = `<span class="option-key">${letters[index]}</span><span class="option-copy"></span>`;
    const copy = button.lastElementChild;
    copy.lang = record.pair.target;
    const label = document.createElement("span");
    label.textContent = option[record.pair.target];
    copy.append(label);
    if (record.pair.target === "zh") {
      const pinyin = document.createElement("span");
      pinyin.className = "option-pinyin";
      pinyin.textContent = option.py;
      copy.append(pinyin);
    }
    if (index === record.correctAnswer) button.classList.add("correct");
    if (index === record.selected && !record.correct) button.classList.add("incorrect");
    optionsEl.append(button);
  });
  timerEl.textContent = "REVIEW";
  timerEl.classList.remove("warning");
  feedbackEl.className = "feedback visible";
  feedbackEl.innerHTML = `${record.correct ? "<strong>내가 맞힌 문제</strong>" : "<strong>다시 확인해 보세요</strong>"}<br><b>${question.correctKo} · ${question.correctZh} · ${question.correctEn}</b><br><span class="option-pinyin">${question.py}</span><br>${question.meaning}`;
  document.getElementById("answer-hint").textContent = `${current + 1} / ${order.length} 정답 해설`;
  nextButton.textContent = current === order.length - 1 ? "결과로 돌아가기 →" : "다음 해설 →";
  nextButton.classList.remove("hidden");
  nextButton.focus();
}

// 页面事件入口：开始/重开、导航、答题后继续和答案回顾。
document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("restart-button").addEventListener("click", startGame);
document.getElementById("home-nav").addEventListener("click", () => {
  clearInterval(timerId);
  order = [];
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  answerHistory.length = 0;
  reviewMode = false;
  answered = false;
  timerEl.textContent = "00:20";
  timerEl.classList.remove("warning");
  intro.classList.remove("hidden");
  quiz.classList.add("hidden");
  result.classList.add("hidden");
  document.getElementById("home-page").classList.remove("hidden");
  document.getElementById("about-page").classList.add("hidden");
  document.getElementById("home-nav").classList.add("active");
  document.getElementById("about-nav").classList.remove("active");
  document.getElementById("home-nav").setAttribute("aria-current", "page");
  document.getElementById("about-nav").removeAttribute("aria-current");
  updateStats();
});
document.getElementById("about-nav").addEventListener("click", () => {
  document.getElementById("home-page").classList.add("hidden");
  document.getElementById("about-page").classList.remove("hidden");
  document.getElementById("home-nav").classList.remove("active");
  document.getElementById("about-nav").classList.add("active");
  document.getElementById("about-nav").setAttribute("aria-current", "page");
  document.getElementById("home-nav").removeAttribute("aria-current");
});
nextButton.addEventListener("click", () => {
  if (reviewMode) {
    showReview();
    return;
  }
  current += 1;
  if (current >= ROUND_SIZE) showResults();
  else renderQuestion();
});
document.getElementById("review-button").addEventListener("click", showReview);
loadBestScore();
updateStats();
