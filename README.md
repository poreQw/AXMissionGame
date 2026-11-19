# AX QUEST v2.0 — AI 词汇升级挑战

AX QUEST v2.0 是一款无需安装依赖、打开浏览器即可游玩的 AI/IT 术语测验。玩家可以在中文、英文和韩文之间进行词汇配对练习，通过答题赚取 XP、提升等级并收集徽章。题库词汇参考 [BNC AX Junior Lab · 30日 IT 词汇学习](https://drplan.kr/AX_Study/AXTERM.html)。

## 游戏页面与功能

项目包含开始页、答题页、结果页和项目介绍页。开始页可以启动新一轮游戏，项目介绍页说明项目目的、适用对象、规则、功能、技术、截图占位、开发问题与学习收获。

- 题库包含 20 道以上的 AI/IT 词汇，每条包括中文、拼音、英文、韩文和韩文释义。
- 词汇按基础 → 中级 → 高级排列，先学习日常 AI 使用常见术语，再逐步学习专业概念；每轮按顺序学习接下来的 10 题，完成词库后重新循环。
- 每题提供 4 个选项，只有 1 个正确答案。
- 每题限时 20 秒，只能作答一次；答对得 10 分，答错或超时得 0 分，满分 100 分。
- 每次有效作答获得 5 XP，答对额外获得 15 XP，并根据剩余时间获得最多 5 XP 的速度奖励；超时不获得 XP。
- XP 永久累计，升级所需经验随等级增加：升至下一级需要当前等级 × 100 XP。
- 可解锁 5 枚徽章：完成首个任务、单轮答对至少 7 题、单轮全对、单轮连续答对 5 题、累计获得 500 XP。
- 每次完成任务后保存成绩、等级、连续答对数和本轮词汇对错；主页展示最近 10 次记录与需复习词汇。
- 设置中可切换韩语、简体中文和英语界面，并选择 Auto/Desktop/Mobile 布局、动画开关和界面大小；这些偏好会保存在当前浏览器。
- 题目轮流考查中文到韩语、韩语到英语、英语到中文的词汇对应。
- 提交答案后显示正误反馈、三语对照和释义；结束后可以回顾答案。
- 答题页显示进度、得分、当前任务 XP 和个人等级进度；结果页展示成绩、任务 XP、升级提示与徽章。
- 可随时重新开始，当前轮分数和临时答题状态会重置；已保存的学习记录不会清除。
- XP、等级、徽章、已完成任务数、最近 10 次学习记录和最高分保存在当前浏览器的 `localStorage` 中，刷新页面后仍然保留。
- 页面适配手机和桌面屏幕，按钮支持触控操作。

当前优先完善基础界面和设置。猫头鹰、鼠标/触控视线追踪、圆形展开菜单和音效仍属于后续计划，当前版本尚未实现。

## 文件结构

```text
AXMissionGame/
├── index.html   # 游戏页面结构与内容
├── style.css    # 页面视觉样式和响应式布局
├── app.js       # 67 道三语题库、答题逻辑与成绩保存
└── README.md    # 项目说明与 GitHub Pages 部署步骤
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

拼音采用参考教材中的无声调辅助标记。题库数据位于 `app.js` 的 `vocabulary` 数组，题目会由词条自动生成；每轮题数由 `ROUND_SIZE` 设置。每题分值为 10 分，修改每轮题数时请同时确认满分规则是否仍符合预期。

## 题库数据结构

`app.js` 中的每个词条包含分类、韩语、中文、拼音、英语和韩语释义。程序根据词条生成 4 个三语选项，并用从 0 开始的 `answerIndex` 标记正确选项：

```js
{
  day: "DAY 08 · AI와 대화할 때",
  ko: "인공지능",
  zh: "人工智能",
  py: "Ren Gong Zhi Neng",
  en: "Artificial Intelligence (AI)",
  meaning: "사람의 지능적인 일을 컴퓨터가 수행하도록 하는 기술"
}
```

出题时轮流显示中文、韩语或英语题干和来源词；选项会再次随机排列，确保正确答案位置不会固定。

## 部署到 GitHub Pages

### 1. 推送到 GitHub 仓库

在项目目录执行以下命令。将 `<你的 GitHub 仓库地址>` 替换为新建仓库的 HTTPS 或 SSH 地址：

```bash
git init
git add index.html style.css app.js README.md
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

最高分使用 `axMissionBestScore` 保存；玩家 XP、任务数、徽章和最近 10 次学习记录使用 `axQuestProfileV2` 保存；界面语言使用 `axQuestLanguage` 保存。学习记录包括任务成绩及需复习的词汇。数据仅在同一浏览器和网站来源下共享。清除浏览器站点数据或更换浏览器后，记录不会保留；不同 GitHub Pages 仓库地址也分别保存。
