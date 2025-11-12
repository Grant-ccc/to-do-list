# 响应式to-do-list
> [!NOTE]
> **版本状态：** 已升级至 **数据持久化** 版本。 (V2.0)

这是一个基于原生 HTML, CSS, 和 JavaScript 实现的待办事项管理工具。它展示了前端三要素如何协同工作，实现清晰的 UI 状态切换和事件委托等核心交互逻辑。

## 项目预览
https://grant-ccc.github.io/to-do-list/

## 项目界面
<img width="2515" height="1303" alt="image" src="https://github.com/user-attachments/assets/df1b974f-21e7-4450-b681-674433bf33b7" />
<img width="545" height="1181" alt="phone" src="https://github.com/user-attachments/assets/2644ed60-3351-4328-afed-5f7ef3c4e47c" />

## 项目核心特性 (V2.0 数据持久化)
本项目是一个基础的待办事项管理应用，旨在展示 **原生 JavaScript** 在前端数据管理和 DOM 交互中的应用。
### V2.0 主要升级点：数据持久化
* **永久存储：** 使用浏览器内置的 `localStorage` 实现任务数据的**持久化**。用户刷新或关闭浏览器后，待办事项列表内容不会丢失。
* **数据驱动视图：** 采用**数据驱动** (Data-Driven) 的架构，核心数据存储在 `tasks` 数组中。所有界面的增删改查操作都先修改数组，再重新渲染视图 (`renderTasks`)。
* **精准操作：** 利用 $\text{HTML5}$ **`data-index`** 自定义属性，实现对 `tasks` 数组中元素的精确索引、修改和删除 (`Array.prototype.splice`)。
### V1.0 基础功能 (已包含)
* **任务增删：** 支持用户在文本框输入后点击“+”按钮新增待办事项，通过点击任务旁的“X”删除待办事项
* **状态切换：** 通过点击任务左侧的正方形图标来实现任务从“未完成”（wait）和“已完成”（finish）两种状态的相互转换
* **事件委托:** 列表的交互逻辑采用事件委托机制实现，保证了动态添加的任务也能高效响应事件
* **响应式设计：** 界面针对不同的尺寸的设备（手机、平板、电脑等）进行了界面优化，确保小屏幕也能良好使用

## 技术栈
* HTML5 (用于页面结构)
* CSS3 (用于样式和响应式布局)
* Vanilla JavaScript (用于实现核心逻辑和 DOM 操作)
    * DOM 操作 (事件监听、元素选择)
    * 数据结构 (`Array`、`Object`)
    * **JSON API** (`JSON.stringify` / `JSON.parse` 用于持久化)
    * **Web Storage API** (`localStorage.setItem` / `getItem`)

## 运行项目
1.  **克隆仓库:** git clone [https://github.com/](https://github.com/)grant-ccc/to-do-list.git
2.  **打开文件:** 在浏览器中直接双击打开仓库中的 `index.html` 文件即可运行。
