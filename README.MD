🚀 此仓库为`Hexo`博客生成目录

博客请访问请访问：[Vercel部署](https://zykj.js.org/)、[Cloudflare部署](https://zykj.pages.dev)、[Netlify部署](https://zykj.netlify.app)

<div align="center">

# hexo-theme-butterfly

一个适用于 Hexo 的现代化、美观且功能丰富的主题

![master version](https://img.shields.io/github/package-json/v/jerryc127/hexo-theme-butterfly/master?color=%231ab1ad&label=master)
![dev version](https://img.shields.io/github/package-json/v/jerryc127/hexo-theme-butterfly/dev?label=dev)
![npm version](https://img.shields.io/npm/v/hexo-theme-butterfly?color=%09%23bf00ff)
![hexo version](https://img.shields.io/badge/hexo-5.3.0+-0e83cd)
![license](https://img.shields.io/github/license/jerryc127/hexo-theme-butterfly?color=FF5531)
![GitHub stars](https://img.shields.io/github/stars/jerryc127/hexo-theme-butterfly?style=social)

📢 **在线预览**: [Butterfly 官方](https://butterfly.js.org/) | [CrazyWong 博客](https://blog.crazywong.com/)

📖 **完整文档**: [中文文档](https://butterfly.js.org/posts/21cfbf15/) | [English Docs](https://butterfly.js.org/en/posts/butterfly-docs-en-get-started/)

![Butterfly 主题预览](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/theme-butterfly-readme.png)

</div>

---

## 🚀 快速开始

### 💾 安装方式

#### 方式一：Git 安装（推荐）

> 💡 **提示**: 如果您在中国大陆访问 GitHub 速度较慢，可以使用 [Gitee 镜像](https://gitee.com/immyw/hexo-theme-butterfly.git)

在您的 Hexo 博客根目录下执行：

```bash
# 安装稳定版本（推荐）
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

```bash
# 安装开发版本（抢先体验新功能）
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

#### 方式二：NPM 安装

> ⚠️ **注意**: NPM 安装方式仅支援 Hexo 5.0.0 及以上版本

```bash
npm install hexo-theme-butterfly
```

### ⚙️ 主题配置

1. **启用主题**: 修改您的 Hexo 配置档桉 `_config.yml`：

```yaml
theme: butterfly
```

2. **安装依赖**: 如果您尚未安装 pug 和 stylus 渲染器，请执行：

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## ✨ 主题特色

### 🎨 设计风格
- [x] **卡片化设计** - 现代化的卡片式佈局
- [x] **圆角/直角设计** - 支援自订边框样式
- [x] **响应式设计** - 完美适配各种萤幕尺寸
- [x] **双栏佈局** - 优化的阅读体验
- [x] **深色模式** - 护眼的夜间模式

### 📝 内容功能
- [x] **多级选单** - 支援二级导航选单
- [x] **阅读模式** - 专注的文章阅读体验
- [x] **目录导航** - 电脑和手机双端支援 TOC
- [x] **字数统计** - 显示文章字数和阅读时间
- [x] **相关文章** - 智能推荐相关内容
- [x] **过期提醒** - 自动提示文章更新状态
- [x] **简繁转换** - 支援繁体中文和简体中文切换
- [x] **标籤外挂** - 丰富的标籤外挂支持

### 🔍 搜寻与导航
- [x] **多种搜寻** - Algolia 搜寻 / 本地搜寻 / Docsearch
- [x] **内建 404** - 美观的 404 错误页面
- [x] **Pjax 支援** - 流畅的页面切换体验

### 🎨 程式码展示
- [x] **语法高亮** - 内建多种主题（darker/pale night/light/ocean）
- [x] **程式码功能** - 语言显示/摺叠展开/複制按钮/自动换行
- [x] **数学公式** - 支援 Mathjax 和 Katex

### 💬 社交互动
- [x] **多元评论系统** - Disqus/Gitalk/Valine/Waline/Twikoo/Giscus/Artalk 等
- [x] **双评论支援** - 可同时启用两套评论系统
- [x] **分享功能** - Sharejs/Addtoany 分享套件
- [x] **线上客服** - Chatra/Tidio/Crisp 即时聊天

### 📊 数据分析
- [x] **访问统计** - 不蒜子计数器
- [x] **网站分析** - Google Analytics/百度统计/Cloudflare Analytics/Microsoft Clarity/Umami
- [x] **站长验证** - 各大搜寻引擎验证
- [x] **广告支援** - Google AdSense/自订广告位

### 🎪 视觉效果
- [x] **打字特效** - activate_power_mode 动画
- [x] **背景特效** - 静态彩带/动态彩带/飘带效果/Canvas Nest
- [x] **滑鼠特效** - 烟花/爱心/文字点击效果
- [x] **载入动画** - Preloader 和 pace.js 进度条
- [x] **图片效果** - Medium Zoom/Fancybox 图片灯箱
- [x] **懒载入** - 图片延迟载入优化

### 🛠️ 进阶功能
- [x] **PWA 支援** - 渐进式网页应用
- [x] **複制保护** - 可关闭文字複制/版权资讯追加
- [x] **主题定制** - 自订网站配色方桉
- [x] **图表支援** - Mermaid 流程图/Chart.js 数据图表
- [x] **音乐符号** - ABCJS 音乐记谱法支援
- [x] **音乐播放器** - APlayer/Meting 音乐播放功能
- [x] **系列文章** - 系列文章组织功能
- [x] **Instantpage** - 页面预载入加速
- [x] **Snackbar** - 优雅的提示讯息

## 🤝 贡献者

感谢所有为 Butterfly 主题做出贡献的开发者们！

[![Contributors](https://contrib.rocks/image?repo=jerryc127/hexo-theme-butterfly)](https://github.com/jerryc127/hexo-theme-butterfly/graphs/contributors)

## 📸 主题截图

<div align="center">

![主题展示](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-1.jpg)

![主题展示](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-2.jpg)

![主题展示](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-3.jpg)

![主题展示](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/butterfly-readme-screenshots-4.jpg)

</div>


## ⭐ Star 趋势

[![Star History Chart](https://api.star-history.com/svg?repos=jerryc127/hexo-theme-butterfly&type=Date)](https://star-history.com/#jerryc127/hexo-theme-butterfly&Date)

## 🤝 一起构建更美好的主题

我们相信，**开源的力量来自于每一个人的参与**！无论您是开发者、设计师还是用户，都可以为 Butterfly 主题的发展贡献力量。

### 💬 获取帮助与支援

- 🐛 **发现问题？** → [GitHub Issues](https://github.com/jerryc127/hexo-theme-butterfly/issues) - 让我们一起解决！
- 💡 **有好想法？** → [GitHub Discussions](https://github.com/jerryc127/hexo-theme-butterfly/discussions) - 分享您的创意想法！
- 📚 **学习使用？** → [官方文档](https://butterfly.js.org/) - 详细的使用指南
- 💬 **即时讨论？** → [Telegram 群组](https://t.me/bu2fly) - 与社群成员实时交流

### 🎯 参与贡献

想要让 Butterfly 变得更好吗？我们欢迎您的任何形式的贡献：

- **🔧 代码贡献** - 修复 Bug、添加新功能、优化性能
- **📝 文档完善** - 改进文档、翻译内容、撰写教程
- **🎨 设计建议** - UI/UX 改进、主题配色、图示设计
- **🧪 测试反馈** - 测试新功能、回报问题、提供使用体验
- **💰 资金支援** - [赞助项目](https://buy.stripe.com/3cs6rP6YA91sbbG5kk) - 支持长期发展

## 📄 授权条款

本项目采用 [Apache 2.0](LICENSE) 授权条款。

## 🙏 致敬与感谢

本主题基于 [hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody) 进行开发，感谢原作者的精彩创作为我们提供了灵感与基础！

感谢所有为 Butterfly 主题发展做出贡献的朋友们，是你们的支持让这个主题能够不断完善与进步。

---

<div align="center">

**✨ 如果这个主题对您有帮助，请给我们一个 ⭐ Star！✨**
</div>

