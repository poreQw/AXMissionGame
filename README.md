# AX Mission AI 词汇闯关

AX Mission 是一款无需安装依赖、打开浏览器即可游玩的 AI/IT 术语测验。玩家可以在中文、英文和韩文之间进行词汇配对练习。题库词汇参考 [BNC AX Junior Lab · 30日 IT 词汇学习](https://drplan.kr/AX_Study/AXTERM.html)。

## 游戏页面与功能

项目包含开始页、答题页、结果页和项目介绍页。开始页可以启动新一轮游戏，项目介绍页说明项目目的、适用对象、规则、功能、技术、截图占位、开发问题与学习收获。

- 题库包含 20 道以上的 AI/IT 词汇，每条包括中文、拼音、英文、韩文和韩文释义。
- 每轮随机抽取 10 道不重复的题目；每题提供 4 个选项，只有 1 个正确答案。
- 每题限时 20 秒，只能作答一次；答对得 10 分，答错或超时得 0 分，满分 100 分。
- 题目轮流考查中文到韩语、韩语到英语、英语到中文的词汇对应。
- 提交答案后显示正误反馈、三语对照和释义；结束后可以回顾答案。
- 答题页显示进度和当前得分；结果页展示总分、正确题数、正确率和连续答对纪录。
- 可随时重新开始，当前分数和答题记录会重置。
- 最高分保存在当前浏览器的 `localStorage` 中，刷新页面后仍然保留。
- 页面适配手机和桌面屏幕，按钮支持触控操作。

## 文件结构

```text
AXMissionGame/
├── index.html   # 游戏页面、样式和题库
└── README.md    # 项目说明
```

## 如何运行

### 本地直接打开

下载或克隆项目后，直接用浏览器打开 `index.html` 即可。项目为纯静态页面，不需要安装依赖、构建或启动服务器。

### 可选：本地 HTTP 预览

在项目目录运行 Python 自带的静态文件服务器：

```bash
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 题库示例

每个词条包含中文、拼音、韩语、英语和韩语释义。例如：

| 中文 | 拼音 | 한국어 | English | 释义 |
|---|---|---|---|---|
| 生成式人工智能 | Sheng Cheng Shi Ren Gong Zhi Neng | 생성형 AI | Generative AI | 生成文字、图像、代码等新内容的 AI |
| 提示词 | Ti Shi Ci | 프롬프트 | Prompt | 输入给 AI 的问题或任务指示 |
| 检索增强生成 | Jian Suo Zeng Qiang Sheng Cheng | 검색 증강 생성 | Retrieval-Augmented Generation (RAG) | 参考检索到的资料来生成回答 |
| AI智能体 | AIZhi Neng Ti | AI 에이전트 | AI Agent | 为实现目标而使用工具、执行多项任务的 AI 系统 |

拼音采用参考教材中的无声调辅助标记。题库数据和出题设置可在 `index.html` 的 `questions` 数组中修改；每轮题数由 `ROUND_SIZE` 设置。每题分值为 10 分，修改每轮题数时请同时确认满分规则是否仍符合预期。

## 题库数据结构

每道题包含稳定编号、中韩文题干、三语正确答案、四个三语选项，以及从 0 开始的正确选项下标 `answerIndex`。题目还可带有分类、拼音和释义等辅助字段：

```js
{
  id: 1,
  questionZh: "请选择与「人工智能」对应的英文或韩文术语。",
  questionKo: "「인공지능」에 해당하는 영어 또는 중국어 용어를 고르세요.",
  correctEn: "Artificial Intelligence (AI)",
  correctKo: "인공지능",
  correctZh: "人工智能",
  options: [
    { en: "Artificial Intelligence (AI)", ko: "인공지능", zh: "人工智能" },
    { en: "Generative AI", ko: "생성형 AI", zh: "生成式人工智能" },
    { en: "Large Language Model (LLM)", ko: "대규모 언어 모델", zh: "大语言模型" },
    { en: "Prompt", ko: "프롬프트", zh: "提示词" }
  ],
  answerIndex: 0
}
```

当前题库由词汇基础资料生成，每题的四个选项及其 `answerIndex` 在初始化时一并构建；进入游戏后会随机排列选项显示顺序。

## 部署到 GitHub Pages

### 1. 推送到 GitHub 仓库

在项目目录执行以下命令。将 `<你的 GitHub 仓库地址>` 替换为新建仓库的 HTTPS 或 SSH 地址：

```bash
git init
git add index.html README.md
git commit -m "Add AX Mission vocabulary quiz"
git branch -M main
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

如果该目录已经关联了 GitHub 仓库，可跳过 `git init` 和 `git remote add origin`，提交并推送需要发布的更改即可。

### 2. 开启 GitHub Pages

1. 打开 GitHub 仓库的 **Settings → Pages**。
2. 在 **Build and deployment** 的 **Source** 中选择 **Deploy from a branch**。
3. **Branch** 选择 `main`，目录选择 `/(root)`，然后点击 **Save**。
4. 等待 GitHub Actions 完成部署。页面地址通常为：
   `https://<GitHub 用户名>.github.io/<仓库名>/`

修改并推送 `main` 分支后，GitHub Pages 会自动重新部署。确保 `index.html` 位于所选发布目录根目录下。

## 数据保存说明

最高分使用浏览器 `localStorage` 保存，仅在同一浏览器和网站来源下共享。清除浏览器站点数据或更换浏览器后，最高分不会保留；不同 GitHub Pages 仓库地址也分别保存。
