# 响应式to-do-list

这是一个基于原生 HTML, CSS, 和 JavaScript 实现的待办事项管理工具。它展示了前端三要素如何协同工作，实现清晰的 UI 状态切换和事件委托等核心交互逻辑。

## 项目预览
https://grant-ccc.github.io/to-do-list/

## 项目界面
<img width="2515" height="1303" alt="image" src="https://github.com/user-attachments/assets/df1b974f-21e7-4450-b681-674433bf33b7" />
<img width="545" height="1181" alt="phone" src="https://github.com/user-attachments/assets/2644ed60-3351-4328-afed-5f7ef3c4e47c" />

## 主要功能
* **任务增删：** 支持用户在文本框输入后点击“+”按钮新增待办事项，通过点击任务旁的“X”删除待办事项
* **状态切换：** 通过点击任务左侧的正方形图标来实现任务从“未完成”（wait）和“已完成”（finish）两种状态的相互转换
* **事件委托:** 列表的交互逻辑采用事件委托机制实现，保证了动态添加的任务也能高效响应事件
* **响应式设计：** 界面针对不同的尺寸的设备（手机、平板、电脑等）进行了界面优化，确保小屏幕也能良好使用

## 技术栈
* HTML5 (用于页面结构)
* CSS3 (用于样式和响应式布局)
* Vanilla JavaScript (用于实现核心逻辑和 DOM 操作)

## 运行项目
1.  **克隆仓库:** git clone [https://github.com/](https://github.com/)grant-ccc/to-do-list.git
2.  **打开文件:** 在浏览器中直接双击打开仓库中的 `index.html` 文件即可运行。
