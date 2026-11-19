// 每个词条是同一 IT 概念的中、英、韩术语，并附拼音和韩文释义。
const vocabulary = [
  { day: "DAY 08 · AI와 대화할 때", ko: "인공지능", zh: "人工智能", py: "Ren Gong Zhi Neng", en: "Artificial Intelligence (AI)", meaning: "사람의 지능적인 일을 컴퓨터가 수행하도록 하는 기술" },
  { day: "DAY 08 · AI와 대화할 때", ko: "생성형 AI", zh: "生成式人工智能", py: "Sheng Cheng Shi Ren Gong Zhi Neng", en: "Generative AI", meaning: "글·그림·코드 등 새로운 콘텐츠를 만드는 AI" },
  { day: "DAY 08 · AI와 대화할 때", ko: "프롬프트", zh: "提示词", py: "Ti Shi Ci", en: "Prompt", meaning: "AI에 입력하는 질문이나 작업 지시" },
  { day: "DAY 08 · AI와 대화할 때", ko: "모델", zh: "人工智能模型", py: "Ren Gong Zhi Neng Mo Xing", en: "AI Model", meaning: "데이터를 학습하여 예측이나 생성을 하는 시스템" },
  { day: "DAY 08 · AI와 대화할 때", ko: "대규모 언어 모델", zh: "大语言模型", py: "Da Yu Yan Mo Xing", en: "Large Language Model (LLM)", meaning: "많은 글을 학습해 문장을 이해하고 생성하는 AI" },
  { day: "DAY 17 · AI 모델의 이해", ko: "대화 기록", zh: "聊天记录", py: "Liao Tian Ji Lu", en: "Chat History", meaning: "AI와 이전에 주고받은 메시지" },
  { day: "DAY 08 · AI와 대화할 때", ko: "컨텍스트", zh: "上下文", py: "Shang Xia Wen", en: "Context", meaning: "AI가 답할 때 참고하는 앞뒤 정보" },
  { day: "DAY 08 · AI와 대화할 때", ko: "출력", zh: "输出", py: "Shu Chu", en: "Output", meaning: "AI나 프로그램이 만들어 돌려주는 결과" },
  { day: "DAY 17 · AI 모델의 이해", ko: "시스템 지시", zh: "系统指令", py: "Xi Tong Zhi Ling", en: "System Instruction", meaning: "AI의 역할과 기본 행동을 정하는 상위 지시" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "지시문", zh: "指令", py: "Zhi Ling", en: "Instruction", meaning: "AI가 수행할 작업을 분명히 설명한 문장" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "역할 지정", zh: "角色设定", py: "Jiao Se She Ding", en: "Role Prompting", meaning: "AI에게 전문가나 도우미 같은 역할을 지정하기" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "출력 형식", zh: "输出格式", py: "Shu Chu Ge Shi", en: "Output Format", meaning: "답을 표·목록·JSON 등으로 받도록 정한 형태" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "제약 조건", zh: "约束条件", py: "Yue Shu Tiao Jian", en: "Constraint", meaning: "답변에 적용할 길이·언어 등의 제한" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "프롬프트 템플릿", zh: "提示词模板", py: "Ti Shi Ci Mo Ban", en: "Prompt Template", meaning: "빈칸을 바꿔 반복 사용하도록 만든 지시문" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "단계별 지시", zh: "分步指令", py: "Fen Bu Zhi Ling", en: "Step-by-step Instruction", meaning: "복잡한 작업을 여러 단계로 나누어 요청하기" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "제로샷", zh: "零样本提示", py: "Ling Yang Ben Ti Shi", en: "Zero-shot Prompting", meaning: "별도 예시 없이 바로 작업을 요청하는 방식" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "예시 제공", zh: "少样本提示", py: "Shao Yang Ben Ti Shi", en: "Few-shot Prompting", meaning: "입출력 예시 몇 개를 보여주고 따라 하게 하기" },
  { day: "DAY 17 · AI 모델의 이해", ko: "멀티모달", zh: "多模态", py: "Duo Mo Tai", en: "Multimodal", meaning: "글·이미지·소리 등 여러 형태를 다루는 방식" },
  { day: "DAY 08 · AI와 대화할 때", ko: "환각", zh: "幻觉", py: "Huan Jue", en: "Hallucination", meaning: "AI가 사실과 다른 내용을 그럴듯하게 말하는 현상" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "검증", zh: "核实", py: "He Shi", en: "Verification", meaning: "AI가 낸 답을 자료나 실행으로 확인하는 일" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "검색 결과", zh: "搜索结果", py: "Sou Suo Jie Guo", en: "Search Result", meaning: "검색 조건에 맞아 찾아낸 자료" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "출처 표시", zh: "引用来源", py: "Yin Yong Lai Yuan", en: "Citation", meaning: "AI 답변에 참고한 자료의 위치나 이름을 밝히는 것" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "개인정보", zh: "个人信息", py: "Ge Ren Xin Xi", en: "Personal Information", meaning: "사람을 알아볼 수 있는 이름·연락처 등의 정보" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "민감 정보", zh: "敏感信息", py: "Min Gan Xin Xi", en: "Sensitive Information", meaning: "노출되면 피해가 큰 비밀번호 등 중요한 정보" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "피싱", zh: "网络钓鱼", py: "Wang Luo Diao Yu", en: "Phishing", meaning: "가짜 메시지나 사이트로 정보를 빼내는 사기" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "이중 인증", zh: "双因素认证", py: "Shuang Yin Su Ren Zheng", en: "Two-factor Authentication (2FA)", meaning: "비밀번호 외에 한 가지 인증 수단을 더 확인하는 방법" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "기계학습", zh: "机器学习", py: "Ji Qi Xue Xi", en: "Machine Learning", meaning: "데이터를 이용해 규칙을 배우는 AI 기술" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "학습 데이터", zh: "训练数据", py: "Xun Lian Shu Ju", en: "Training Data", meaning: "AI가 패턴을 배우는 데 사용하는 자료" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "알고리즘", zh: "算法", py: "Suan Fa", en: "Algorithm", meaning: "문제를 풀기 위한 단계적인 처리 방법" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "예측", zh: "预测", py: "Yu Ce", en: "Prediction", meaning: "주어진 정보를 바탕으로 결과를 추정하는 것" },
  { day: "DAY 08 · AI와 대화할 때", ko: "추론", zh: "推理", py: "Tui Li", en: "Inference", meaning: "학습한 모델이 새로운 입력에 답을 만드는 과정" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "딥러닝", zh: "深度学习", py: "Shen Du Xue Xi", en: "Deep Learning", meaning: "여러 층의 신경망을 사용하는 기계학습 방법" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "신경망", zh: "神经网络", py: "Shen Jing Wang Luo", en: "Neural Network", meaning: "여러 계산 단위를 연결해 정보를 처리하는 구조" },
  { day: "DAY 08 · AI와 대화할 때", ko: "토큰", zh: "词元", py: "Ci Yuan", en: "Token", meaning: "AI가 글을 처리할 때 사용하는 작은 단위" },
  { day: "DAY 16 · 데이터와 AI 학습", ko: "컨텍스트 창", zh: "上下文窗口", py: "Shang Xia Wen Chuang Kou", en: "Context Window", meaning: "모델이 한 번에 참고할 수 있는 정보의 범위" },
  { day: "DAY 17 · AI 모델의 이해", ko: "온도", zh: "温度参数", py: "Wen Du Can Shu", en: "Temperature", meaning: "AI 응답의 다양성을 조절하는 설정" },
  { day: "DAY 17 · AI 모델의 이해", ko: "오픈소스", zh: "开源", py: "Kai Yuan", en: "Open Source", meaning: "소스 코드를 공개해 정해진 조건으로 사용할 수 있게 한 방식" },
  { day: "DAY 17 · AI 모델의 이해", ko: "매개변수(모델)", zh: "模型参数", py: "Mo Xing Can Shu", en: "Model Parameters", meaning: "AI 모델 내부에서 학습되는 수치" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "사용량", zh: "使用量", py: "Shi Yong Liang", en: "Usage", meaning: "API나 서비스를 사용한 양" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "과금", zh: "计费", py: "Ji Fei", en: "Billing", meaning: "사용한 서비스에 대해 비용을 계산하는 것" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "작업 흐름", zh: "工作流程", py: "Gong Zuo Liu Cheng", en: "Workflow", meaning: "일을 시작부터 끝까지 진행하는 순서" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "자동화", zh: "自动化", py: "Zi Dong Hua", en: "Automation", meaning: "사람이 반복하던 일을 프로그램이 대신 처리하는 것" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "오류 코드", zh: "错误代码", py: "Cuo Wu Dai Ma", en: "Error Code", meaning: "실패 원인을 알려주는 번호나 표시" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "인증", zh: "身份认证", py: "Shen Fen Ren Zheng", en: "Authentication", meaning: "사용자나 프로그램의 신원을 확인하는 과정" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "요청 제한", zh: "速率限制", py: "Su Lu Xian Zhi", en: "Rate Limit", meaning: "일정 시간에 보낼 수 있는 요청 수의 한도" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "엔드포인트", zh: "端点", py: "Duan Dian", en: "API Endpoint", meaning: "API 요청을 보내는 특정 주소" },
  { day: "DAY 19 · 프롬프트와 API 이용", ko: "SDK", zh: "软件开发工具包", py: "Ruan Jian Kai Fa Gong Ju Bao", en: "Software Development Kit", meaning: "특정 서비스를 쉽게 쓰도록 제공하는 개발 도구 모음" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "문서 인식", zh: "光学字符识别", py: "Guang Xue Zi Fu Shi Bie", en: "Optical Character Recognition (OCR)", meaning: "이미지 속 글자를 컴퓨터가 읽을 수 있게 변환하는 기술" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "텍스트 추출", zh: "文本提取", py: "Wen Ben Ti Qu", en: "Text Extraction", meaning: "파일이나 문서에서 글자 내용을 가져오는 것" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "지식 베이스", zh: "知识库", py: "Zhi Shi Ku", en: "Knowledge Base", meaning: "문서와 지식을 모아 찾기 쉽게 관리한 곳" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "검색 증강 생성", zh: "检索增强生成", py: "Jian Suo Zeng Qiang Sheng Cheng", en: "Retrieval-Augmented Generation (RAG)", meaning: "찾은 자료를 참고하여 AI가 답하도록 하는 방식" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "의미 검색", zh: "语义搜索", py: "Yu Yi Sou Suo", en: "Semantic Search", meaning: "단어 일치뿐 아니라 의미가 비슷한 내용을 찾는 검색" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "문서 분할", zh: "文本分块", py: "Wen Ben Fen Kuai", en: "Chunking", meaning: "긴 문서를 검색하기 쉽게 작은 부분으로 나누는 것" },
  { day: "DAY 17 · AI 모델의 이해", ko: "파인튜닝", zh: "微调", py: "Wei Diao", en: "Fine-tuning", meaning: "이미 학습한 모델을 추가 자료로 조정하는 것" },
  { day: "DAY 17 · AI 모델의 이해", ko: "임베딩", zh: "嵌入向量", py: "Qian Ru Xiang Liang", en: "Embedding", meaning: "글 등의 의미를 숫자 벡터로 표현하는 방식" },
  { day: "DAY 17 · AI 모델의 이해", ko: "벡터", zh: "向量", py: "Xiang Liang", en: "Vector", meaning: "여러 숫자를 한 묶음으로 나타낸 것" },
  { day: "DAY 17 · AI 모델의 이해", ko: "유사도", zh: "相似度", py: "Xiang Si Du", en: "Similarity", meaning: "두 정보가 얼마나 비슷한지를 나타내는 정도" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "공개 가중치", zh: "开放权重", py: "Kai Fang Quan Zhong", en: "Open Weights", meaning: "학습된 모델의 가중치를 내려받도록 공개하는 것" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "벤치마크", zh: "基准测试", py: "Ji Zhun Ce Shi", en: "Benchmark", meaning: "정해진 문제로 모델 성능을 비교하는 시험" },
  { day: "DAY 18 · AI 품질과 지시법", ko: "성능 평가", zh: "评估", py: "Ping Gu", en: "Evaluation", meaning: "AI 결과의 정확성이나 품질을 점검하는 일" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "복호화", zh: "解密", py: "Jie Mi", en: "Decryption", meaning: "암호화한 정보를 다시 읽을 수 있게 되돌리는 것" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "비밀 키 관리", zh: "密钥管理", py: "Mi Yao Guan Li", en: "Secret Management", meaning: "API 키 등을 안전하게 보관하고 사용하는 일" },
  { day: "DAY 27 · 보안과 AI 문서 검색", ko: "취약점", zh: "安全漏洞", py: "An Quan Lou Dong", en: "Vulnerability", meaning: "공격에 악용될 수 있는 시스템의 약한 부분" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "벡터 데이터베이스", zh: "向量数据库", py: "Xiang Liang Shu Ju Ku", en: "Vector Database", meaning: "벡터로 표현한 정보를 저장하고 찾는 시스템" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "재정렬", zh: "重排序", py: "Zhong Pai Xu", en: "Reranking", meaning: "검색된 결과를 관련성에 따라 다시 정렬하는 과정" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "AI 에이전트", zh: "AI智能体", py: "AIZhi Neng Ti", en: "AI Agent", meaning: "목표를 위해 도구를 사용하며 여러 작업을 수행하는 AI 시스템" },
  { day: "DAY 28 · AI 검색과 에이전트", ko: "도구 호출", zh: "工具调用", py: "Gong Ju Diao Yong", en: "Tool Calling", meaning: "AI가 검색이나 계산 같은 외부 기능을 실행하도록 요청하는 것" },
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
const MAX_SAVED_MISSIONS = 10;
const BEST_SCORE_KEY = "axMissionBestScore";
const PROFILE_KEY = "axQuestProfileV2";
const badges = [
  { id: "quest-starter", icon: "⚑", name: "firstQuestBadge", description: "firstQuestBadgeDescription" },
  { id: "quick-study", icon: "✦", name: "quickStudyBadge", description: "quickStudyBadgeDescription" },
  { id: "perfect-clear", icon: "★", name: "perfectBadge", description: "perfectBadgeDescription" },
  { id: "combo-master", icon: "⚡", name: "comboBadge", description: "comboBadgeDescription" },
  { id: "xp-pioneer", icon: "◆", name: "xpBadge", description: "xpBadgeDescription" }
];
const LANGUAGE_KEY = "axQuestLanguage";
const UI_SETTINGS_KEY = "axQuestUiSettings";
const uiSettings = { displayMode: "auto", animations: "on", scale: "1" };
const translations = {
  ko: {
    pageTitle: "AX QUEST v2.0 — AI·IT 용어 퀴즈",
    pageDescription: "AI·IT 용어를 익히고 XP, 레벨, 업적 배지를 모으는 삼국어 퀴즈",
    pageNavLabel: "페이지 탐색", homeNav: "홈", aboutNav: "소개", profileNav: "프로필", closeProfile: "프로필 닫기", settingsNav: "설정",
    topNote: "AI × IT · 지식을 레벨업하세요", heroLabel: "게임 소개",
    heroEyebrow: "YOUR NEXT MISSION STARTS HERE",
    heroCopy: "AI·IT 용어를 한국어·中文·English로 익히고 XP를 모아 레벨을 올려 보세요. 미션을 완료해 나만의 업적 배지를 수집하세요.",
    editionTitle: "SEASON 01 · v2.0", editionLine: "XP · LEVEL · BADGES", editionCopy: "10개 용어 미션에 도전하세요",
    quizLabel: "퀴즈", introTitle: "퀘스트를 시작할 준비가 됐나요?",
    introCopy: "10개 용어 미션에 도전하고 경험치를 쌓아 레벨을 올려 보세요. 정답과 빠른 답변은 더 많은 XP를 주며, 미션 기록에 따라 새로운 배지를 획득할 수 있어요.",
    metaTimer: "◷ 문제당 20초", metaQuestions: "▦ 미션당 10문제", metaSpeed: "✦ 정답 XP + 스피드 보너스",
    metaPersistent: "⚑ 영구 레벨 · 배지",
    orbitQuestions: "▦ 미션당 10문제", orbitBadges: "⚑ 영구 배지 시스템",
    orbitTimer: "◷ 문제당 20초", orbitXp: "✦ 정답 XP 획득",
    orbitSpeed: "⚡ 빠른 답변 보너스", orbitLevel: "LV 영구 레벨 시스템",
    startButton: "퀘스트 시작하기", missionLabel: "MISSION",
    questionTotal: " / 10", quizProgress: "퀴즈 진행률", answerHint: "가장 알맞은 답을 선택하세요",
    nextQuestion: "다음 문제", showResults: "결과 보기", nextReview: "다음 해설", returnResults: "결과로 돌아가기",
    resultStatsLabel: "이번 라운드 성적", correctLabel: "정답 수", accuracyLabel: "정답률",
    bestStreakLabel: "최고 연속 정답", bestScoreLabel: "최고 점수", resultProgressLabel: "XP와 레벨 진행 상황",
    missionXp: "이번 미션 XP", levelProgressLabel: "다음 레벨 진행률", questBadges: "이번 퀘스트 배지",
    badgeCount: "{count} / {total}개 획득", restartButton: "다시 시작", reviewButton: "정답 돌아보기",
    profileLabel: "퀘스트 현황", profileTitle: "퀘스트 프로필", profileCaption: "나의 누적 성장 기록",
    currentRank: "CURRENT RANK", levelLabel: "LEVEL {level}", xpTotal: "{xp} XP TOTAL",
    xpProgress: "{current} / {required} XP", xpProgressAria: "레벨 {level}, 다음 레벨까지 {current} / {required} XP",
    badgesEarned: "획득 배지", notEarned: "미획득", missionStatus: "MISSION STATUS",
    roundCaption: "이번 라운드의 기록", currentScore: "현재 점수", streakLabel: "연속 정답",
    pointsUnit: "pt", fieldTip: "FIELD TIP",
    fieldTipCopy: "용어의 뜻을 외우는 것보다, 어떤 문제를 해결하는 기술인지 이해하면 더 오래 기억할 수 있어요.",
    storageNotice: "이 브라우저에서 진행 상황이나 설정을 저장할 수 없습니다.",
    historyEyebrow: "YOUR QUEST JOURNAL", historyTitle: "학습 기록",
    historySummaryEmpty: "완료한 미션과 다시 볼 용어를 이 기기에 저장해요.",
    historySummary: "누적 {missions}회 완료 · 최근 {count}회 기록",
    historyRetention: "최근 10회 저장", historyEmpty: "첫 퀘스트를 완료하면 점수와 복습할 용어가 여기에 기록돼요.",
    historyCorrect: "정답", historyScore: "점수", historyXp: "획득 XP", historyStreak: "최고 연속",
    historyReview: "복습할 용어", historyPerfect: "오답 없음 · 완벽한 미션", historyLevel: "LEVEL {level}",
    footerPrefix: "AX QUEST v2.0 · 용어 출처:", footerLink: "BNC AX Junior Lab · 30일 IT 용어 마스터",
    aboutEyebrow: "ABOUT THIS PROJECT", aboutTitle: "프로젝트 소개",
    aboutLead: "AX QUEST v2.0은 AI와 IT 용어를 한국어·중국어·영어로 익히는 퀴즈 게임입니다. 미션을 완료해 XP를 모으고 레벨과 배지를 획득하세요.",
    aboutPurposeTitle: "프로젝트 목적",
    aboutPurpose: "짧고 재미있는 퀴즈를 통해 AI·IT 용어를 익히고 세 언어 사이의 연결을 자연스럽게 배웁니다.",
    aboutAudienceTitle: "추천 대상",
    aboutAudience: "AI 입문자, 한국어·중국어·영어 학습자, 기술 용어를 가볍게 복습하고 싶은 분에게 적합합니다.",
    aboutRulesTitle: "게임 규칙", aboutRule1: "용어는 기초부터 고급 순으로 학습하며, 매 라운드마다 다음 문제 10개를 풉니다.",
    aboutRule2: "문제마다 보기 4개, 제한 시간 20초이며 한 번만 답할 수 있습니다.",
    aboutRule3: "정답은 10점, 오답과 시간 초과는 0점입니다. 답변하면 XP를 얻고 정답과 빠른 답변에는 보너스가 있습니다.",
    aboutFeaturesTitle: "주요 기능",
    aboutFeature1: "3개 국어 용어 퀴즈, 병음 힌트, 즉시 피드백과 정답 복습",
    aboutFeature2: "점수와 XP, 레벨 진행률, 레벨 업 안내와 배지 표시",
    aboutFeature3: "첫 미션, 7문제 정답, 만점, 5연속 정답, XP 500 달성 배지",
    aboutFeature4: "최근 완료한 미션 10회와 복습할 오답 용어 저장",
    aboutFeature5: "XP, 레벨, 배지와 학습 기록을 이 브라우저에 저장",
    aboutFeature6: "설정에서 화면 언어·기기 표시 모드·UI 크기·애니메이션을 변경하고 저장",
    aboutTechTitle: "사용 기술",
    aboutTech: "HTML, CSS, 순수 JavaScript와 LocalStorage로 구현했습니다. 별도 설치 없이 실행할 수 있습니다.",
    aboutChallengesTitle: "개발 중 고민",
    aboutChallenges: "문제와 선택지 중복 방지, 유일한 정답 보장, 시간 초과와 반복 클릭 처리, 다양한 화면 크기와 저장 기능을 함께 고려했습니다.",
    aboutLearnedTitle: "배운 점",
    aboutLearned: "JavaScript 상태 관리, 배열 섞기, 타이머, DOM 조작, 브라우저 저장과 반응형 CSS를 연습했습니다.",
    aboutScreenshotsTitle: "화면 미리보기", screenshotPlaceholder1: "시작 화면 · 퀴즈 화면 미리보기",
    screenshotPlaceholder2: "결과 화면 · 프로젝트 소개 미리보기",
    settingsEyebrow: "PREFERENCES", settingsTitle: "설정",
    settingsCopy: "화면 언어와 기기별 레이아웃을 설정하세요.", languageLabel: "표시 언어",
    languageHint: "언어 설정은 이 브라우저에 자동 저장됩니다.",
    displayModeLabel: "기기 표시 모드", displayModeAuto: "Auto · 자동 맞춤",
    displayModeDesktop: "Desktop · 데스크톱", displayModeMobile: "Mobile · 모바일",
    displayModeHint: "표시 모드는 레이아웃만 조정하며 다른 기기의 사용을 제한하지 않습니다.",
    animationLabel: "애니메이션", enabledOption: "켜기", disabledOption: "끄기",
    uiScaleLabel: "UI 크기", uiScaleSmall: "작게 · 90%", uiScaleNormal: "표준 · 100%",
    uiScaleLarge: "크게 · 110%", uiScaleHint: "환경설정은 이 브라우저에 저장됩니다.",
    plannedFeaturesTitle: "후속 단계 계획",
    plannedFeaturesCopy: "부엉이 상호작용은 2단계, 효과음은 3단계에서 개발할 예정이며 아직 사용할 수 없습니다.",
    settingsDone: "완료", closeSettings: "설정 닫기",
    feedbackTimeout: "<strong>시간 초과!</strong> 정답은 {letter} · {answer}예요.",
    feedbackCorrect: "<strong>정답이에요!</strong> 정확하게 알고 있네요.",
    feedbackIncorrect: "<strong>아쉬워요!</strong> 정답은 {letter} · {answer}예요.",
    hintTimeout: "시간 초과 · 정답을 확인하고 다음 문제로 넘어가세요.",
    hintCorrect: "정답이에요! XP +{xp} 획득 · 다음 문제에 도전하세요.",
    hintIncorrect: "답변 XP +5 · 해설을 확인하고 다음 문제로 넘어가세요.",
    reviewCorrect: "<strong>내가 맞힌 문제</strong>", reviewIncorrect: "<strong>다시 확인해 보세요</strong>",
    reviewPosition: "{current} / {total} 정답 해설", reviewTimer: "복습",
    resultDetail: "{count}문제 중 {correct}문제 정답 · 최고 연속 정답 {streak}개 · {minutes}분 {seconds}초",
    resultPerfectTitle: "완벽한 미션 클리어!", resultExpertTitle: "대단해요, 거의 전문가!",
    resultGoodTitle: "좋은 출발이에요!", resultTryTitle: "도전한 것만으로도 성공!",
    resultPerfectBadge: "성적 보고 · PERFECT CLEAR", resultCompleteBadge: "성적 보고 · MISSION COMPLETE",
    levelUp: "레벨 업! LEVEL {level} 달성", newBadges: "새 배지 획득: {badges}",
    noNewBadges: "미션을 계속 완료해 모든 배지를 모아 보세요!",
    newBestScore: "새 최고 점수를 저장했어요!", firstQuestBadge: "첫 퀘스트",
    firstQuestBadgeDescription: "첫 번째 미션 완료", quickStudyBadge: "개념 정복",
    quickStudyBadgeDescription: "한 미션에서 7문제 정답", perfectBadge: "퍼펙트 클리어",
    perfectBadgeDescription: "한 미션 10문제 모두 정답", comboBadge: "콤보 마스터",
    comboBadgeDescription: "5문제 연속 정답", xpBadge: "XP 개척자",
    xpBadgeDescription: "누적 XP 500 달성"
  },
  zh: {
    pageTitle: "AX QUEST v2.0 — AI·IT 词汇问答",
    pageDescription: "学习 AI·IT 词汇，赚取 XP、升级并收集成就徽章",
    pageNavLabel: "页面导航", homeNav: "首页", aboutNav: "介绍", profileNav: "档案", closeProfile: "关闭档案", settingsNav: "设置",
    topNote: "AI × IT · 知识升级", heroLabel: "游戏介绍",
    heroEyebrow: "下一场任务，即刻开启",
    heroCopy: "用韩语、中文和英语学习 AI·IT 词汇，赚取 XP 并提升等级。完成任务，收集专属成就徽章。",
    editionTitle: "赛季 01 · v2.0", editionLine: "XP · 等级 · 徽章", editionCopy: "挑战 10 道词汇任务",
    quizLabel: "答题", introTitle: "准备好开始任务了吗？",
    introCopy: "挑战 10 道词汇题，积累经验并提升等级。答对和快速作答可获得更多 XP，还能根据任务表现解锁徽章。",
    metaTimer: "◷ 每题 20 秒", metaQuestions: "▦ 每轮 10 题", metaSpeed: "✦ 答对 XP + 速度奖励",
    metaPersistent: "⚑ 永久等级 · 徽章",
    orbitQuestions: "▦ 每轮 10 题", orbitBadges: "⚑ 成就徽章系统",
    orbitTimer: "◷ 每题限时 20 秒", orbitXp: "✦ 答对获得 XP",
    orbitSpeed: "⚡ 快速答题奖励", orbitLevel: "LV 永久等级系统",
    startButton: "开始任务", missionLabel: "任务",
    questionTotal: " / 10", quizProgress: "答题进度", answerHint: "请选择最合适的答案",
    nextQuestion: "下一题", showResults: "查看结果", nextReview: "下一题解析", returnResults: "返回结果",
    resultStatsLabel: "本轮成绩", correctLabel: "答对题数", accuracyLabel: "正确率",
    bestStreakLabel: "最高连对", bestScoreLabel: "最高分", resultProgressLabel: "XP 与等级进度",
    missionXp: "本轮 XP", levelProgressLabel: "升级进度", questBadges: "本次任务徽章",
    badgeCount: "已获得 {count} / {total} 枚", restartButton: "再来一轮", reviewButton: "回顾答案",
    profileLabel: "任务状态", profileTitle: "任务档案", profileCaption: "我的成长记录",
    currentRank: "当前等级", levelLabel: "等级 {level}", xpTotal: "累计 {xp} XP",
    xpProgress: "{current} / {required} XP", xpProgressAria: "等级 {level}，距离下一级还需 {current} / {required} XP",
    badgesEarned: "已获徽章", notEarned: "未获得", missionStatus: "本轮状态",
    roundCaption: "当前任务记录", currentScore: "当前得分", streakLabel: "连续答对",
    pointsUnit: "分", fieldTip: "任务提示",
    fieldTipCopy: "理解一项技术解决什么问题，比单纯记住术语更容易留下印象。",
    storageNotice: "此浏览器无法保存任务进度或设置。",
    historyEyebrow: "任务日志", historyTitle: "学习记录",
    historySummaryEmpty: "已完成任务与待复习词汇会保存在此设备上。",
    historySummary: "累计完成 {missions} 轮 · 保存最近 {count} 轮",
    historyRetention: "保存最近 10 轮", historyEmpty: "完成第一轮任务后，成绩和待复习词汇会显示在这里。",
    historyCorrect: "答对", historyScore: "得分", historyXp: "获得 XP", historyStreak: "最高连对",
    historyReview: "待复习词汇", historyPerfect: "没有错题 · 完美通关", historyLevel: "等级 {level}",
    footerPrefix: "AX QUEST v2.0 · 词汇来源：", footerLink: "BNC AX Junior Lab · 30 天 IT 词汇学习",
    aboutEyebrow: "项目介绍", aboutTitle: "关于项目",
    aboutLead: "AX QUEST v2.0 是一款帮助学习者用韩语、中文和英语认识 AI 与 IT 词汇的问答游戏。完成任务可获得 XP、提升等级并解锁徽章。",
    aboutPurposeTitle: "项目目的",
    aboutPurpose: "通过简短有趣的问答学习 AI 与 IT 术语，自然建立三种语言之间的词汇联系。",
    aboutAudienceTitle: "适用对象",
    aboutAudience: "适合 AI 初学者、韩语/中文/英语学习者，以及想轻松复习技术词汇的用户。",
    aboutRulesTitle: "游戏规则", aboutRule1: "词汇按基础到高级排序，每轮依次学习接下来的 10 题。",
    aboutRule2: "每题有 4 个选项，限时 20 秒，每题只能作答一次。",
    aboutRule3: "答对得 10 分，答错或超时得 0 分。作答可获得 XP，答对和快速作答有额外奖励。",
    aboutFeaturesTitle: "主要功能",
    aboutFeature1: "三语词汇练习、拼音提示、即时反馈与答案回顾",
    aboutFeature2: "显示得分、XP、等级进度、升级提示与徽章",
    aboutFeature3: "完成首个任务、单轮答对 7 题、满分、五连对和累计 500 XP 可获徽章",
    aboutFeature4: "保存最近 10 次任务成绩和待复习错题",
    aboutFeature5: "XP、等级、徽章和学习记录保存在当前浏览器",
    aboutFeature6: "可在设置中调整并保存界面语言、设备显示模式、UI 大小和动画",
    aboutTechTitle: "开发技术",
    aboutTech: "使用 HTML、CSS、原生 JavaScript 和 LocalStorage 开发，无需安装依赖。",
    aboutChallengesTitle: "开发中的问题",
    aboutChallenges: "需要确保题目与选项不重复、答案唯一，并处理超时和重复点击，同时兼顾不同屏幕尺寸与本地存档。",
    aboutLearnedTitle: "学到的知识",
    aboutLearned: "练习了 JavaScript 状态管理、随机排序、计时器、DOM 更新、本地存储和响应式 CSS。",
    aboutScreenshotsTitle: "界面预览", screenshotPlaceholder1: "开始页 · 答题页预览",
    screenshotPlaceholder2: "结果页 · 项目介绍页预览",
    settingsEyebrow: "偏好设置", settingsTitle: "设置",
    settingsCopy: "设置界面语言和设备布局偏好。", languageLabel: "显示语言",
    languageHint: "语言选择会自动保存在此浏览器。",
    displayModeLabel: "设备显示模式", displayModeAuto: "Auto · 自动适配",
    displayModeDesktop: "Desktop · 电脑端", displayModeMobile: "Mobile · 手机端",
    displayModeHint: "显示模式只调整布局，不会限制其他设备上的正常使用。",
    animationLabel: "动画效果", enabledOption: "开启", disabledOption: "关闭",
    uiScaleLabel: "界面大小", uiScaleSmall: "较小 · 90%", uiScaleNormal: "标准 · 100%",
    uiScaleLarge: "较大 · 110%", uiScaleHint: "偏好设置会保存在此浏览器。",
    plannedFeaturesTitle: "后续阶段计划",
    plannedFeaturesCopy: "猫头鹰互动将在第二阶段开发，音效将在第三阶段开发；目前尚未启用。",
    settingsDone: "完成", closeSettings: "关闭设置",
    feedbackTimeout: "<strong>时间到！</strong> 正确答案是 {letter} · {answer}。",
    feedbackCorrect: "<strong>答对了！</strong> 回答正确。",
    feedbackIncorrect: "<strong>差一点！</strong> 正确答案是 {letter} · {answer}。",
    hintTimeout: "时间到 · 查看正确答案后继续。",
    hintCorrect: "答对了！获得 +{xp} XP · 继续挑战下一题。",
    hintIncorrect: "作答获得 +5 XP · 查看解析后继续。",
    reviewCorrect: "<strong>这题答对了</strong>", reviewIncorrect: "<strong>再复习一下</strong>",
    reviewPosition: "答案解析 {current} / {total}", reviewTimer: "复习",
    resultDetail: "答对 {correct} / {count} 题 · 最高连对 {streak} 题 · 用时 {minutes} 分 {seconds} 秒",
    resultPerfectTitle: "完美通关！", resultExpertTitle: "太棒了，快成为专家了！",
    resultGoodTitle: "不错的开始！", resultTryTitle: "勇于挑战就是成功！",
    resultPerfectBadge: "成绩报告 · 完美通关", resultCompleteBadge: "成绩报告 · 任务完成",
    levelUp: "升级啦！达到等级 {level}", newBadges: "获得新徽章：{badges}",
    noNewBadges: "继续完成任务，收集所有徽章吧！",
    newBestScore: "已保存新的最高分！", firstQuestBadge: "初次出任务",
    firstQuestBadgeDescription: "完成第一轮任务", quickStudyBadge: "概念掌握者",
    quickStudyBadgeDescription: "单轮答对至少 7 题", perfectBadge: "完美通关",
    perfectBadgeDescription: "单轮 10 题全对", comboBadge: "连击大师",
    comboBadgeDescription: "连续答对 5 题", xpBadge: "XP 探险家",
    xpBadgeDescription: "累计获得 500 XP"
  },
  en: {
    pageTitle: "AX QUEST v2.0 — AI & IT Vocabulary Quest",
    pageDescription: "Learn AI and IT vocabulary, earn XP, level up, and collect achievement badges",
    pageNavLabel: "Page navigation", homeNav: "Home", aboutNav: "About", profileNav: "Profile", closeProfile: "Close profile", settingsNav: "Settings",
    topNote: "AI × IT · LEVEL UP YOUR KNOWLEDGE", heroLabel: "Game introduction",
    heroEyebrow: "YOUR NEXT MISSION STARTS HERE",
    heroCopy: "Learn AI and IT terms in Korean, Chinese, and English. Earn XP, level up, and collect achievement badges.",
    editionTitle: "SEASON 01 · v2.0", editionLine: "XP · LEVEL · BADGES", editionCopy: "Take on a 10-term quest",
    quizLabel: "Quiz", introTitle: "Ready to start your quest?",
    introCopy: "Take on 10 vocabulary questions and earn XP to level up. Correct and fast answers give bonus XP, and mission results unlock badges.",
    metaTimer: "◷ 20 seconds per question", metaQuestions: "▦ 10 questions per quest",
    metaSpeed: "✦ Correct-answer XP + speed bonus", metaPersistent: "⚑ Persistent levels · badges",
    orbitQuestions: "▦ 10 questions per quest", orbitBadges: "⚑ Achievement badge system",
    orbitTimer: "◷ 20 seconds per question", orbitXp: "✦ Earn XP for correct answers",
    orbitSpeed: "⚡ Fast-answer reward", orbitLevel: "LV Permanent level system",
    startButton: "Start quest", missionLabel: "MISSION", questionTotal: " / 10",
    quizProgress: "Quiz progress", answerHint: "Choose the best answer",
    nextQuestion: "Next question", showResults: "View results", nextReview: "Next explanation",
    returnResults: "Back to results", resultStatsLabel: "Round results", correctLabel: "Correct",
    accuracyLabel: "Accuracy", bestStreakLabel: "Best streak", bestScoreLabel: "Best score",
    resultProgressLabel: "XP and level progress", missionXp: "Quest XP",
    levelProgressLabel: "Progress to next level", questBadges: "Quest badges",
    badgeCount: "{count} / {total} earned", restartButton: "Play again", reviewButton: "Review answers",
    profileLabel: "Quest status", profileTitle: "QUEST PROFILE", profileCaption: "Your lifetime progress",
    currentRank: "CURRENT RANK", levelLabel: "LEVEL {level}", xpTotal: "{xp} XP TOTAL",
    xpProgress: "{current} / {required} XP", xpProgressAria: "Level {level}, {current} / {required} XP to the next level",
    badgesEarned: "Badges earned", notEarned: "Not earned",
    missionStatus: "MISSION STATUS", roundCaption: "Current round",
    currentScore: "Current score", streakLabel: "Current streak", pointsUnit: "pt",
    fieldTip: "FIELD TIP",
    fieldTipCopy: "Understanding the problem a technology solves makes its terminology easier to remember.",
    storageNotice: "Quest progress or settings could not be saved in this browser.",
    historyEyebrow: "YOUR QUEST JOURNAL", historyTitle: "Learning history",
    historySummaryEmpty: "Completed quests and terms to review are saved on this device.",
    historySummary: "{missions} quests completed · Showing the latest {count}",
    historyRetention: "Latest 10 quests", historyEmpty: "Complete your first quest to see your score and review terms here.",
    historyCorrect: "Correct", historyScore: "Score", historyXp: "XP earned",
    historyStreak: "Best streak", historyReview: "Review terms",
    historyPerfect: "No missed terms · Perfect quest", historyLevel: "LEVEL {level}",
    footerPrefix: "AX QUEST v2.0 · Vocabulary source:", footerLink: "BNC AX Junior Lab · 30-Day IT Vocabulary",
    aboutEyebrow: "ABOUT THIS PROJECT", aboutTitle: "About the project",
    aboutLead: "AX QUEST v2.0 is a vocabulary quiz for learning AI and IT terms in Korean, Chinese, and English. Complete quests to earn XP, level up, and unlock badges.",
    aboutPurposeTitle: "Purpose",
    aboutPurpose: "Learn AI and IT terms through short, interactive quizzes and build connections across three languages.",
    aboutAudienceTitle: "Who it's for",
    aboutAudience: "Great for AI beginners, Korean/Chinese/English learners, and anyone who wants to review technical vocabulary.",
    aboutRulesTitle: "How to play", aboutRule1: "Terms progress from beginner to advanced; each round presents the next 10 questions in order.",
    aboutRule2: "Each question has 4 choices and a 20-second timer. You can answer once.",
    aboutRule3: "Correct answers earn 10 points; wrong or timed-out answers earn 0. Answers earn XP, with bonuses for correct and fast responses.",
    aboutFeaturesTitle: "Features",
    aboutFeature1: "Three-language vocabulary practice, pinyin hints, instant feedback, and answer review",
    aboutFeature2: "Scores, XP, level progress, level-up messages, and badges",
    aboutFeature3: "Badges for your first quest, 7 correct, a perfect round, a five-answer streak, and 500 total XP",
    aboutFeature4: "Stores scores and terms to review from your 10 most recent quests",
    aboutFeature5: "XP, levels, badges, and learning history saved in this browser",
    aboutFeature6: "Adjust and save the interface language, device layout, UI size, and animations in Settings",
    aboutTechTitle: "Built with",
    aboutTech: "Built with HTML, CSS, vanilla JavaScript, and LocalStorage. No dependencies required.",
    aboutChallengesTitle: "Challenges",
    aboutChallenges: "Preventing duplicate questions and choices, ensuring one correct answer, handling timeouts and repeat clicks, and supporting different screen sizes and local saves.",
    aboutLearnedTitle: "What I learned",
    aboutLearned: "Practiced JavaScript state management, shuffling, timers, DOM updates, browser storage, and responsive CSS.",
    aboutScreenshotsTitle: "Screen previews", screenshotPlaceholder1: "Home · Quiz screen preview",
    screenshotPlaceholder2: "Results · Project overview preview",
    settingsEyebrow: "PREFERENCES", settingsTitle: "Settings",
    settingsCopy: "Choose your interface language and device layout preferences.", languageLabel: "Display language",
    languageHint: "Your language choice is saved in this browser.",
    displayModeLabel: "Device display mode", displayModeAuto: "Auto · Fit automatically",
    displayModeDesktop: "Desktop", displayModeMobile: "Mobile",
    displayModeHint: "This changes the layout only and does not prevent use on other devices.",
    animationLabel: "Animations", enabledOption: "On", disabledOption: "Off",
    uiScaleLabel: "Interface size", uiScaleSmall: "Small · 90%", uiScaleNormal: "Default · 100%",
    uiScaleLarge: "Large · 110%", uiScaleHint: "Preferences are saved in this browser.",
    plannedFeaturesTitle: "Planned for later phases",
    plannedFeaturesCopy: "Owl interactions are planned for phase 2 and sound effects for phase 3; neither is enabled yet.",
    settingsDone: "Done", closeSettings: "Close settings",
    feedbackTimeout: "<strong>Time's up!</strong> The correct answer is {letter} · {answer}.",
    feedbackCorrect: "<strong>Correct!</strong> Nicely done.",
    feedbackIncorrect: "<strong>Not quite.</strong> The correct answer is {letter} · {answer}.",
    hintTimeout: "Time's up · Check the answer and continue.",
    hintCorrect: "Correct! +{xp} XP earned · On to the next question.",
    hintIncorrect: "Answer submitted: +5 XP · Review the explanation and continue.",
    reviewCorrect: "<strong>You got this one right</strong>",
    reviewIncorrect: "<strong>Take another look</strong>",
    reviewPosition: "Explanation {current} / {total}", reviewTimer: "REVIEW",
    resultDetail: "{correct} of {count} correct · Best streak {streak} · {minutes}m {seconds}s",
    resultPerfectTitle: "Perfect clear!", resultExpertTitle: "Amazing—you’re nearly an expert!",
    resultGoodTitle: "A great start!", resultTryTitle: "Showing up is a win!",
    resultPerfectBadge: "RESULTS · PERFECT CLEAR", resultCompleteBadge: "RESULTS · QUEST COMPLETE",
    levelUp: "LEVEL UP! You reached level {level}", newBadges: "New badge unlocked: {badges}",
    noNewBadges: "Keep completing quests to collect every badge!",
    newBestScore: "Your new best score has been saved!",
    firstQuestBadge: "First quest", firstQuestBadgeDescription: "Complete your first quest",
    quickStudyBadge: "Quick study", quickStudyBadgeDescription: "Get at least 7 correct in a quest",
    perfectBadge: "Perfect clear", perfectBadgeDescription: "Answer all 10 questions correctly",
    comboBadge: "Combo master", comboBadgeDescription: "Get 5 answers correct in a row",
    xpBadge: "XP pioneer", xpBadgeDescription: "Earn 500 XP in total"
  }
};
const termFields = { en: "correctEn", ko: "correctKo", zh: "correctZh" };
const languagePairs = [
  { source: "zh", target: "ko", promptKey: "questionZh" },
  { source: "ko", target: "en", promptKey: "questionKo" },
  { source: "en", target: "zh", promptKey: "questionEn" }
];
// 当前答题状态只保存在页面内；个人档案和已完成的学习记录持久化到浏览器。
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
let xpAwardedThisRound = 0;
let levelAtStart = 1;
let roundCompleted = false;
let newBadges = [];
const profile = { xp: 0, missions: 0, badges: [], history: [] };
const answerHistory = [];
let currentLanguage = "zh";
let lastResult = null;

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

function t(key, values = {}) {
  const template = translations[currentLanguage][key] || translations.ko[key] || key;
  return template.replace(/\{(\w+)\}/g, (match, name) => (
    Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : match
  ));
}

function setButtonLabel(id, key) {
  const label = document.getElementById(id);
  label.dataset.i18n = key;
  label.textContent = t(key);
}

function loadLanguagePreference() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (Object.prototype.hasOwnProperty.call(translations, savedLanguage)) currentLanguage = savedLanguage;
  } catch {
    showStorageNotice();
  }
}

function applyUiSettings() {
  const root = document.documentElement;
  root.dataset.displayMode = uiSettings.displayMode;
  root.dataset.animations = uiSettings.animations;
  root.style.setProperty("--ui-scale", uiSettings.scale);
  document.getElementById("display-mode-select").value = uiSettings.displayMode;
  document.getElementById("animation-select").value = uiSettings.animations;
  document.getElementById("ui-scale-select").value = uiSettings.scale;
}

function loadUiSettings() {
  try {
    const savedSettings = localStorage.getItem(UI_SETTINGS_KEY);
    if (!savedSettings) return;
    const parsedSettings = JSON.parse(savedSettings);
    if (!parsedSettings || typeof parsedSettings !== "object" || Array.isArray(parsedSettings)) {
      showStorageNotice();
      return;
    }
    if (["auto", "desktop", "mobile"].includes(parsedSettings.displayMode)) {
      uiSettings.displayMode = parsedSettings.displayMode;
    }
    if (["on", "off"].includes(parsedSettings.animations)) {
      uiSettings.animations = parsedSettings.animations;
    }
    if (["0.9", "1", "1.1"].includes(String(parsedSettings.scale))) {
      uiSettings.scale = String(parsedSettings.scale);
    }
  } catch {
    showStorageNotice();
  }
}

function saveUiSettings() {
  try {
    localStorage.setItem(UI_SETTINGS_KEY, JSON.stringify(uiSettings));
  } catch {
    showStorageNotice();
  }
}

function updateUiSetting(setting, value) {
  const allowedValues = {
    displayMode: ["auto", "desktop", "mobile"],
    animations: ["on", "off"],
    scale: ["0.9", "1", "1.1"]
  };
  if (!allowedValues[setting].includes(value)) return;
  uiSettings[setting] = value;
  applyUiSettings();
  saveUiSettings();
}

function applyLanguage() {
  const language = translations[currentLanguage];
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
  document.title = t("pageTitle");
  document.getElementById("page-description").content = t("pageDescription");
  document.getElementById("language-select").value = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = language[element.dataset.i18n] || translations.ko[element.dataset.i18n] || element.textContent;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  updateStats();
  renderLearningHistory();
  if (!result.classList.contains("hidden") && lastResult) renderResultText();
  if (!quiz.classList.contains("hidden")) {
    if (reviewMode) renderReviewQuestion(false);
    else if (answered && answerHistory[current]) renderAnswerFeedback(answerHistory[current]);
    else document.getElementById("answer-hint").textContent = t("answerHint");
  }
}

function setLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(translations, language)) return;
  currentLanguage = language;
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    showStorageNotice();
  }
  applyLanguage();
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

function getLevelProgress(xp) {
  const level = Math.floor((1 + Math.sqrt(1 + 8 * xp / 100)) / 2);
  const xpAtLevelStart = (level - 1) * level * 50;
  const xpForNextLevel = level * 100;
  return {
    level,
    current: xp - xpAtLevelStart,
    required: xpForNextLevel,
    percent: Math.floor((xp - xpAtLevelStart) / xpForNextLevel * 100)
  };
}

function loadProfile() {
  try {
    const savedProfile = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
    if (!savedProfile || typeof savedProfile !== "object" || Array.isArray(savedProfile)) return;
    if (Number.isSafeInteger(savedProfile.xp) && savedProfile.xp >= 0) profile.xp = savedProfile.xp;
    if (Number.isSafeInteger(savedProfile.missions) && savedProfile.missions >= 0) profile.missions = savedProfile.missions;
    if (Array.isArray(savedProfile.badges)) {
      profile.badges = badges.filter(badge => savedProfile.badges.includes(badge.id)).map(badge => badge.id);
    }
    if (Array.isArray(savedProfile.history)) {
      profile.history = savedProfile.history
        .filter(record => record
          && typeof record.completedAt === "string"
          && Number.isFinite(Date.parse(record.completedAt))
          && Number.isSafeInteger(record.score) && record.score >= 0
          && Number.isSafeInteger(record.correctCount) && record.correctCount >= 0 && record.correctCount <= ROUND_SIZE
          && Number.isSafeInteger(record.xp) && record.xp >= 0
          && Number.isSafeInteger(record.level) && record.level >= 1
          && Number.isSafeInteger(record.bestStreak) && record.bestStreak >= 0
          && Array.isArray(record.answers))
        .slice(0, MAX_SAVED_MISSIONS)
        .map(record => ({
          completedAt: record.completedAt,
          score: record.score,
          correctCount: record.correctCount,
          xp: record.xp,
          level: record.level,
          bestStreak: record.bestStreak,
          answers: record.answers
            .filter(answer => answer
              && typeof answer.ko === "string"
              && typeof answer.zh === "string"
              && typeof answer.en === "string"
              && typeof answer.correct === "boolean")
            .map(answer => ({
              ko: answer.ko,
              zh: answer.zh,
              en: answer.en,
              correct: answer.correct
            }))
        }));
    }
  } catch {
    showStorageNotice();
  }
}

function saveProfile() {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    showStorageNotice();
  }
}

function renderBadges() {
  const badgeList = document.getElementById("badge-list");
  badgeList.replaceChildren();
  badges.forEach(badge => {
    const earned = profile.badges.includes(badge.id);
    const name = t(badge.name);
    const description = t(badge.description);
    const item = document.createElement("div");
    item.className = `badge-item${earned ? " earned" : ""}`;
    item.title = `${name} · ${description}`;
    item.setAttribute("aria-label", `${name}: ${description} (${earned ? t("badgesEarned") : t("notEarned")})`);
    const icon = document.createElement("span");
    icon.className = "badge-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = badge.icon;
    const nameElement = document.createElement("span");
    nameElement.className = "badge-name";
    nameElement.textContent = name;
    item.append(icon, nameElement);
    badgeList.append(item);
  });
  document.getElementById("badge-count").textContent = t("badgeCount", { count: profile.badges.length, total: badges.length });
  document.getElementById("player-badge-count").textContent = `${profile.badges.length} / ${badges.length}`;
}

function renderLearningHistory() {
  const historyList = document.getElementById("history-list");
  const isEmpty = profile.history.length === 0;
  document.getElementById("history-empty").classList.toggle("hidden", !isEmpty);
  document.getElementById("history-summary").textContent = isEmpty
    ? t("historySummaryEmpty")
    : t("historySummary", { missions: profile.missions, count: profile.history.length });
  historyList.replaceChildren();

  profile.history.forEach(record => {
    const entry = document.createElement("article");
    entry.className = "history-entry";

    const heading = document.createElement("div");
    heading.className = "history-entry-heading";
    const date = document.createElement("time");
    date.dateTime = record.completedAt;
    const dateLocale = currentLanguage === "zh" ? "zh-CN" : currentLanguage === "en" ? "en-US" : "ko-KR";
    date.textContent = new Date(record.completedAt).toLocaleString(dateLocale, {
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    });
    const level = document.createElement("span");
    level.className = "history-level";
    level.textContent = t("historyLevel", { level: record.level });
    heading.append(date, level);

    const stats = document.createElement("div");
    stats.className = "history-stats";
    [
      [t("historyCorrect"), `${record.correctCount} / ${ROUND_SIZE}`],
      [t("historyScore"), `${record.score} ${t("pointsUnit")}`],
      [t("historyXp"), `+${record.xp} XP`],
      [t("historyStreak"), `${record.bestStreak} 🔥`]
    ].forEach(([label, value]) => {
      const stat = document.createElement("div");
      stat.className = "history-stat";
      const statLabel = document.createElement("span");
      statLabel.textContent = label;
      const statValue = document.createElement("strong");
      statValue.textContent = value;
      stat.append(statLabel, statValue);
      stats.append(stat);
    });

    const missedTerms = record.answers.filter(answer => !answer.correct);
    const review = document.createElement("div");
    review.className = "history-review";
    const reviewLabel = document.createElement("span");
    reviewLabel.className = "history-review-label";
    reviewLabel.textContent = missedTerms.length ? t("historyReview") : t("historyPerfect");
    review.append(reviewLabel);
    missedTerms.slice(0, 4).forEach(answer => {
      const term = document.createElement("span");
      term.className = "history-term";
      term.title = `${answer.ko} · ${answer.zh} · ${answer.en}`;
      term.textContent = `${answer.ko} · ${answer.zh}`;
      review.append(term);
    });
    if (missedTerms.length > 4) {
      const more = document.createElement("span");
      more.className = "history-more";
      more.textContent = `+${missedTerms.length - 4}`;
      review.append(more);
    }

    entry.append(heading, stats, review);
    historyList.append(entry);
  });
}

function updateProfileStats() {
  const progress = getLevelProgress(profile.xp);
  document.getElementById("player-level").textContent = t("levelLabel", { level: progress.level });
  document.getElementById("player-xp-total").textContent = t("xpTotal", { xp: profile.xp.toLocaleString() });
  document.getElementById("player-xp-progress").textContent = t("xpProgress", progress);
  document.querySelectorAll(".xp-progress-track").forEach(track => {
    track.setAttribute("aria-valuenow", String(progress.percent));
    track.setAttribute("aria-valuetext", t("xpProgressAria", progress));
  });
  document.querySelectorAll(".xp-progress-fill").forEach(fill => {
    fill.style.width = `${progress.percent}%`;
  });
  document.getElementById("result-level-label").textContent = t("levelLabel", { level: progress.level });
  document.getElementById("result-xp-progress-label").textContent = t("xpProgress", progress);
  document.getElementById("xp-stat").innerHTML = `${xpAwardedThisRound}<span> XP</span>`;
  renderBadges();
}

function updateStats() {
  document.getElementById("score-stat").innerHTML = `${score}<span> ${t("pointsUnit")}</span>`;
  document.getElementById("best-score-stat").innerHTML = `${bestScore}<span> ${t("pointsUnit")}</span>`;
  document.getElementById("correct-stat").innerHTML = `${answerHistory.filter(item => item.correct).length}<span style="font-size:11px;color:var(--muted)"> / ${ROUND_SIZE}</span>`;
  document.getElementById("streak-stat").innerHTML = `${streak}<span style="font-size:11px;color:var(--muted)"> 🔥</span>`;
  updateProfileStats();
}

function startGame() {
  clearInterval(timerId);
  const curriculumRounds = Math.ceil(questions.length / ROUND_SIZE);
  const curriculumRound = profile.missions % curriculumRounds;
  const startIndex = Math.min(curriculumRound * ROUND_SIZE, questions.length - ROUND_SIZE);
  order = questions.slice(startIndex, startIndex + ROUND_SIZE).map((_, index) => startIndex + index);
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  xpAwardedThisRound = 0;
  levelAtStart = getLevelProgress(profile.xp).level;
  roundCompleted = false;
  lastResult = null;
  newBadges = [];
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
  document.getElementById("answer-hint").textContent = t("answerHint");
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
  // 答对加 10 分并延长连对；答错或超时清零当前连对。
  if (correct) {
    score += 10;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
  } else {
    streak = 0;
  }
  const xpEarned = timedOut ? 0 : 5 + (correct ? 15 + Math.floor(secondsLeft / 4) : 0);
  answerHistory[current] = {
    questionIndex: order[current], selected, correct, timedOut, xpEarned, pair, options, correctAnswer
  };
  xpAwardedThisRound += xpEarned;
  profile.xp += xpEarned;
  saveProfile();

  [...optionsEl.children].forEach((button, index) => {
    button.disabled = true;
    if (index === correctAnswer) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("incorrect");
  });
  renderAnswerFeedback(answerHistory[current]);
  updateStats();
  nextButton.focus();
}

function renderAnswerFeedback(record) {
  const question = questions[record.questionIndex];
  const correctTerm = record.options[record.correctAnswer];
  const opening = record.timedOut
    ? t("feedbackTimeout", { letter: letters[record.correctAnswer], answer: correctTerm[record.pair.target] })
    : record.correct
      ? t("feedbackCorrect")
      : t("feedbackIncorrect", { letter: letters[record.correctAnswer], answer: correctTerm[record.pair.target] });
  feedbackEl.classList.add("visible");
  feedbackEl.innerHTML = `${opening}<br><b>${question.correctKo} · ${question.correctZh} · ${question.correctEn}</b><br><span class="option-pinyin">${question.py}</span><br>${question.meaning}`;
  document.getElementById("answer-hint").textContent = record.timedOut
    ? t("hintTimeout")
    : record.correct
      ? t("hintCorrect", { xp: record.xpEarned })
      : t("hintIncorrect");
  setButtonLabel("next-button-label", current === ROUND_SIZE - 1 ? "showResults" : "nextQuestion");
  nextButton.classList.remove("hidden");
}

function renderResultText() {
  if (!lastResult) return;
  document.getElementById("score-number").textContent = String(lastResult.score);
  document.getElementById("result-detail").textContent = t("resultDetail", {
    count: ROUND_SIZE,
    correct: lastResult.correctCount,
    streak: lastResult.bestStreak,
    minutes: Math.floor(lastResult.elapsed / 60),
    seconds: lastResult.elapsed % 60
  });
  document.getElementById("result-correct").textContent = `${lastResult.correctCount} / ${ROUND_SIZE}`;
  document.getElementById("result-accuracy").textContent = `${Math.round(lastResult.correctCount / ROUND_SIZE * 100)}%`;
  document.getElementById("result-streak").textContent = String(lastResult.bestStreak);
  document.getElementById("result-best-score").textContent = String(lastResult.bestScore);
  document.getElementById("result-xp-earned").textContent = `+${lastResult.xp} XP`;
  document.getElementById("level-up-message").textContent = lastResult.leveledUp
    ? t("levelUp", { level: lastResult.level })
    : "";
  document.getElementById("level-up-message").classList.toggle("hidden", !lastResult.leveledUp);
  document.getElementById("new-badges-message").textContent = lastResult.newBadges.length
    ? t("newBadges", {
      badges: badges
        .filter(badge => lastResult.newBadges.includes(badge.id))
        .map(badge => t(badge.name))
        .join(" · ")
    })
    : t("noNewBadges");
  document.getElementById("record-message").textContent = lastResult.isNewRecord ? t("newBestScore") : "";
  document.getElementById("result-title").textContent = t(
    lastResult.correctCount === ROUND_SIZE
      ? "resultPerfectTitle"
      : lastResult.correctCount >= 7
        ? "resultExpertTitle"
        : lastResult.correctCount >= 4 ? "resultGoodTitle" : "resultTryTitle"
  );
  document.getElementById("result-badge").textContent = t(
    lastResult.correctCount === ROUND_SIZE ? "resultPerfectBadge" : "resultCompleteBadge"
  );
  document.getElementById("review-button").textContent = t("reviewButton");
}

function showResults() {
  if (roundCompleted) return;
  roundCompleted = true;
  clearInterval(timerId);
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  document.getElementById("progress-fill").style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", String(ROUND_SIZE));
  const correctCount = answerHistory.filter(item => item.correct).length;
  const elapsed = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
  profile.missions += 1;
  const earnedBadgeIds = [];
  if (profile.missions === 1) earnedBadgeIds.push("quest-starter");
  if (correctCount >= 7) earnedBadgeIds.push("quick-study");
  if (correctCount === ROUND_SIZE) earnedBadgeIds.push("perfect-clear");
  if (bestStreak >= 5) earnedBadgeIds.push("combo-master");
  if (profile.xp >= 500) earnedBadgeIds.push("xp-pioneer");
  newBadges = earnedBadgeIds.filter(id => !profile.badges.includes(id));
  profile.badges = [...profile.badges, ...newBadges];
  profile.history.unshift({
    completedAt: new Date().toISOString(),
    score,
    correctCount,
    xp: xpAwardedThisRound,
    level: getLevelProgress(profile.xp).level,
    bestStreak,
    answers: answerHistory.map(answer => {
      const term = vocabulary[answer.questionIndex];
      return { ko: term.ko, zh: term.zh, en: term.en, correct: answer.correct };
    })
  });
  profile.history = profile.history.slice(0, MAX_SAVED_MISSIONS);
  saveProfile();
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
  const levelProgress = getLevelProgress(profile.xp);
  const resultProgressTrack = document.querySelector("#result .xp-progress-track");
  resultProgressTrack.setAttribute("aria-valuenow", String(levelProgress.percent));
  lastResult = {
    correctCount,
    elapsed,
    score,
    bestScore,
    bestStreak,
    xp: xpAwardedThisRound,
    level: levelProgress.level,
    leveledUp: levelProgress.level > levelAtStart,
    isNewRecord,
    newBadges: [...newBadges]
  };
  renderResultText();
  updateStats();
  renderLearningHistory();
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
    document.getElementById("review-button").textContent = t("reviewButton");
    return;
  }
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderReviewQuestion();
}

function renderReviewQuestion(shouldFocus = true) {
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
  timerEl.textContent = t("reviewTimer");
  timerEl.classList.remove("warning");
  feedbackEl.className = "feedback visible";
  feedbackEl.innerHTML = `${t(record.correct ? "reviewCorrect" : "reviewIncorrect")}<br><b>${question.correctKo} · ${question.correctZh} · ${question.correctEn}</b><br><span class="option-pinyin">${question.py}</span><br>${question.meaning}`;
  document.getElementById("answer-hint").textContent = t("reviewPosition", { current: current + 1, total: order.length });
  setButtonLabel("next-button-label", current === order.length - 1 ? "returnResults" : "nextReview");
  nextButton.classList.remove("hidden");
  if (shouldFocus) nextButton.focus();
}

// 页面事件入口：开始/重开、导航、答题后继续和答案回顾。
document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("restart-button").addEventListener("click", startGame);
const introStage = document.querySelector(".intro-stage");
if (introStage) {
  introStage.addEventListener("pointerenter", () => {
    if (window.matchMedia("(hover: none)").matches) introStage.classList.add("revealed");
  });
  introStage.addEventListener("pointerleave", () => {
    if (window.matchMedia("(hover: none)").matches) introStage.classList.remove("revealed");
  });
}
document.getElementById("brand-home-button").addEventListener("click", () => document.getElementById("home-nav").click());
document.getElementById("home-nav").addEventListener("click", () => {
  clearInterval(timerId);
  order = [];
  current = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  xpAwardedThisRound = 0;
  roundCompleted = false;
  newBadges = [];
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
const profileDialog = document.getElementById("profile-dialog");
const profileDialogContent = document.getElementById("profile-dialog-content");
function closeBookDialog(dialog) {
  if (!dialog.open || dialog.classList.contains("book-close")) return;
  dialog.classList.remove("book-open");
  dialog.classList.add("book-close");
  window.setTimeout(() => {
    dialog.close();
    dialog.classList.remove("book-close");
  }, 340);
}
document.getElementById("profile-close-icon").addEventListener("click", () => closeBookDialog(profileDialog));
profileDialog.addEventListener("click", event => {
  if (event.target === profileDialog) closeBookDialog(profileDialog);
});
profileDialog.addEventListener("cancel", event => {
  event.preventDefault();
  closeBookDialog(profileDialog);
});
const historyDialog = document.getElementById("history-dialog");
const historyDialogTitle = document.getElementById("history-dialog-title");
document.getElementById("profile-rail-button").addEventListener("click", () => {
  const profileSnapshot = document.querySelector(".side-card").cloneNode(true);
  profileSnapshot.querySelectorAll("[id]").forEach(element => element.removeAttribute("id"));
  profileSnapshot.classList.remove("standalone-source", "hidden");
  profileDialogContent.replaceChildren(profileSnapshot);
  profileDialog.showModal();
  profileDialog.classList.remove("book-close");
  profileDialog.classList.add("book-open");
});
document.getElementById("history-rail-button").addEventListener("click", () => {
  const historySnapshot = document.querySelector(".learning-history").cloneNode(true);
  historySnapshot.querySelectorAll("[id]").forEach(element => element.removeAttribute("id"));
  historySnapshot.classList.remove("standalone-source", "hidden");
  historyDialogTitle.replaceChildren(historySnapshot);
  historyDialog.showModal();
  historyDialog.classList.remove("book-close");
  historyDialog.classList.add("book-open");
});
document.getElementById("history-close-icon").addEventListener("click", () => closeBookDialog(historyDialog));
historyDialog.addEventListener("click", event => {
  if (event.target === historyDialog) closeBookDialog(historyDialog);
});
historyDialog.addEventListener("cancel", event => {
  event.preventDefault();
  closeBookDialog(historyDialog);
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
const settingsDialog = document.getElementById("settings-dialog");
document.getElementById("settings-button").addEventListener("click", () => {
  document.getElementById("language-select").value = currentLanguage;
  settingsDialog.showModal();
});
document.getElementById("language-select").addEventListener("change", event => {
  setLanguage(event.target.value);
});
document.getElementById("display-mode-select").addEventListener("change", event => {
  updateUiSetting("displayMode", event.target.value);
});
document.getElementById("animation-select").addEventListener("change", event => {
  updateUiSetting("animations", event.target.value);
});
document.getElementById("ui-scale-select").addEventListener("change", event => {
  updateUiSetting("scale", event.target.value);
});
document.getElementById("settings-close-icon").addEventListener("click", () => settingsDialog.close());
document.getElementById("settings-done").addEventListener("click", () => settingsDialog.close());
settingsDialog.addEventListener("click", event => {
  if (event.target === settingsDialog) settingsDialog.close();
});
loadBestScore();
loadProfile();
loadLanguagePreference();
loadUiSettings();
applyUiSettings();
applyLanguage();
