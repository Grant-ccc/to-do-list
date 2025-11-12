//搭建数据驱动和数据持久化框架
//①删除静态html：让界面展示的事件来自于localStorage（数据持久
//②需要一个存储的全局常量：

//LS_KEY用来区分不同网页在localStorage里面的数据 相当于一个索引
const LS_KEY = 'todoListTasks'; // 用于在localStorage中存储所有任务的数据标签
//核心数据数组：将存储数据的标签
//每个任务的结构{text:'任务内容', completed: false/true}
let tasks = [];


//元素选择器 找到要操作的元素(保持不变)
const addButton = document.querySelector('.add_button');
const newThingInput = document.querySelector('.new_thing');
const todoListContainer = document.querySelector('.todolist');

//一个监听事件（监听鼠标是不是click了)
//addEventListener 事件+函数
addButton.addEventListener('click', () => {
    //逻辑包含在此函数之中
    console.log('按钮被点击了！');
});

//tasks数组本质上起一个桥梁作用 input会放入tasks，tasks传给localStorge；反之亦然。
//创建持久化数组的底层逻辑，但它们目前仍然未被调用
//【写入】：将tasks数组保存到localStorage
function saveTasks(){
    //关键： 将js数组/对象转换为JSON格式的字符串
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
    console.log('数据已保存');
}
//【读取】：从localStorage读取数据并加载到tasks数组
function loadTasks(){
    const storedTasks = localStorage.getItem(LS_KEY);
    if(storedTasks){
        //关键：将JSON字符串转换为JS数组/对象
        tasks = JSON.parse(storedTasks);
    }
    //若没有数据那就保持为空数组
}

//要和tasks数组建立联系 新节点都是来自于tasks
// task-任务数据对象，包含text和completed属性
//index-任务在tasks数组的索引
//completedClass有点没看懂。。。（等会回来看
function createToDoItem(task, index) { 
    //根据数据对象的completed属性，决定是否添加completed class（
    const completedClass = task.completed ? 'completed' : '';

    return `
        <li class="todo-item ${completedClass}" data-index="${index}">
            <div class="status-toggle">
                <div class="wait"></div>
                <div class="finish"></div>
            </div>
            <span class="task_text">${task.text}</span>
            <svg t="1761189606894" class="icon delete-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4761" width="200" height="200">
                <path d="M886.784 746.496q29.696 30.72 43.52 56.32t-4.608 58.368q-4.096 6.144-11.264 14.848t-14.848 16.896-15.36 14.848-12.8 9.728q-25.6 15.36-60.416 8.192t-62.464-34.816l-43.008-43.008-57.344-57.344-67.584-67.584-73.728-73.728-131.072 131.072q-60.416 60.416-98.304 99.328-38.912 38.912-77.312 48.128t-68.096-17.408l-7.168-7.168-11.264-11.264-11.264-11.264q-6.144-6.144-7.168-8.192-11.264-14.336-13.312-29.184t2.56-29.184 13.824-27.648 20.48-24.576q9.216-8.192 32.768-30.72l55.296-57.344q33.792-32.768 75.264-73.728t86.528-86.016q-49.152-49.152-93.696-93.184t-79.872-78.848-57.856-56.832-27.648-27.136q-26.624-26.624-27.136-52.736t17.92-52.736q8.192-10.24 23.552-24.064t21.504-17.92q30.72-20.48 55.296-17.92t49.152 28.16l31.744 31.744q23.552 23.552 58.368 57.344t78.336 76.288 90.624 88.576q38.912-38.912 76.288-75.776t69.632-69.12 58.368-57.856 43.52-43.008q24.576-23.552 53.248-31.232t55.296 12.8q1.024 1.024 6.656 5.12t11.264 9.216 10.752 9.728 7.168 5.632q27.648 26.624 27.136 57.856t-27.136 57.856q-18.432 18.432-45.568 46.08t-60.416 60.416-70.144 69.632l-77.824 77.824q37.888 36.864 74.24 72.192t67.584 66.048 56.32 56.32 41.472 41.984z" fill="currentColor" p-id="4762">
                </path>
            </svg>
        </li>  
    `;
}

//让tasks内容出现在html真正呈现
function renderTasks(){
    //1. 清空当前列表所有的html内容（从干净画布开始
    todoListContainer.innerHTML = '';

    //2.遍历tasks数组，生成html字符串
    if(tasks.length > 0){
        let listHtml = '';
        tasks.forEach((task, index) => { //forEach是遍历
            listHtml += createToDoItem(task, index);
        });
        //3.一次性将所有HTML插入到DOM中
        todoListContainer.innerHTML = listHtml;
    }
}

//不直接操纵html 而是在tasks数组中添加数据对象
//增加任务
addButton.addEventListener('click', () => {
    //获取输入值
    //.trim() 移除文本两端的空格，避免用户只输入空格。
    const taskText = newThingInput.value.trim();

    //检查文本是不是空的
    //===严格相等（数据相等，类型相等
    if (taskText === "") {
        alert("请输入待办事项内容！");
        return; //没有执行后续代码的义务！
    }

    //①新逻辑：更新数据数组，创建一个人物对象并添加
    const newTask = {
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    //②保存数据
    saveTasks();
    //③重新渲染视图
    renderTasks();

    newThingInput.value = '';
});

//part 2&3(原本也就是在一个板块上面)
//是状态上的切换 所以如果是在li中包含了两种class 切换会更可以理解（详见createNewToDoItem这个函数补充
if(todoListContainer){
    todoListContainer.addEventListener('click', function(event){
        //找到任务在数组中的位置
        const listItem = event.target.closest('.todo-item');
        if(!listItem) return; //如果点击的不是任务块，则退出

        //通过data-index属性获取任务在tasks数组中的索引
        const index = parseInt(listItem.getAttribute('data-index')); //解码为整数

        //delete
        const deleteIcon = event.target.closest('.delete-icon');
        if(deleteIcon){
            //更新数据数组，delete该索引位置任务
            tasks.splice(index, 1);//splice(index, num) 删除index这个位置开始的num个数据组
            //保存数据并刷新视图
            saveTasks();
            renderTasks();
            return;
        }

        //状态修改
        const statusToggleArea = event.target.closest('.status-toggle');
        if(statusToggleArea){
            //更新数据数组：切换该索引位置任务的completed属性
            tasks[index].completed = !tasks[index].completed;
            //保存数据并刷新视图
            saveTasks();
            renderTasks();
        }
    });
}

//初始化 页面加载时执行：加载数据并首次渲染（立即执行函数表达式
//保证程序启动时，会尝试恢复上一次的工作进度
(function initialize(){
    //1.尝试从localStorage读取数据
    loadTasks();
    //2.根据读取到的数据，首次渲染页面
    renderTasks();
})();//开机自启
