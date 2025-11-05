// ①增加新的待办事件
// 检测点击div“+”——>input文本框内text——>在列出事项的板块新建事件div——>将text放到div中的文本div
// ②事件状态修改
// 检测点击左侧div小方框事件——>将其class属性修改成完成态
// ③事件移除
// 检测点击右侧svg——>删除整个事件的div

//part 1
//负责生成一个新的待办事项的HTML结构
//li元素内同时包含两种状态的div 用一个统一的容器（.status-toggle）包裹
//可见css文件的改变
function createNewToDoItem(taskText) {
    return `
        <li class="todo-item">
            <div class="status-toggle">
                <div class="wait"></div>
                <div class="finish"></div>
            </div>
            <span class="task_text">${taskText}</span>
            <svg t="1761189606894" class="icon delete-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4761" width="200" height="200">
                <path d="M886.784 746.496q29.696 30.72 43.52 56.32t-4.608 58.368q-4.096 6.144-11.264 14.848t-14.848 16.896-15.36 14.848-12.8 9.728q-25.6 15.36-60.416 8.192t-62.464-34.816l-43.008-43.008-57.344-57.344-67.584-67.584-73.728-73.728-131.072 131.072q-60.416 60.416-98.304 99.328-38.912 38.912-77.312 48.128t-68.096-17.408l-7.168-7.168-11.264-11.264-11.264-11.264q-6.144-6.144-7.168-8.192-11.264-14.336-13.312-29.184t2.56-29.184 13.824-27.648 20.48-24.576q9.216-8.192 32.768-30.72l55.296-57.344q33.792-32.768 75.264-73.728t86.528-86.016q-49.152-49.152-93.696-93.184t-79.872-78.848-57.856-56.832-27.648-27.136q-26.624-26.624-27.136-52.736t17.92-52.736q8.192-10.24 23.552-24.064t21.504-17.92q30.72-20.48 55.296-17.92t49.152 28.16l31.744 31.744q23.552 23.552 58.368 57.344t78.336 76.288 90.624 88.576q38.912-38.912 76.288-75.776t69.632-69.12 58.368-57.856 43.52-43.008q24.576-23.552 53.248-31.232t55.296 12.8q1.024 1.024 6.656 5.12t11.264 9.216 10.752 9.728 7.168 5.632q27.648 26.624 27.136 57.856t-27.136 57.856q-18.432 18.432-45.568 46.08t-60.416 60.416-70.144 69.632l-77.824 77.824q37.888 36.864 74.24 72.192t67.584 66.048 56.32 56.32 41.472 41.984z" fill="currentColor" p-id="4762">
                </path>
            </svg>
        </li>  
    `;
}

//元素选择器 找到要操作的元素
const addButton = document.querySelector('.add_button');
const newThingInput = document.querySelector('.new_thing');
const todoListContainer = document.querySelector('.todolist');

//一个监听事件（监听鼠标是不是click了)
//addEventListener 事件+函数
addButton.addEventListener('click', () => {
    //逻辑包含在此函数之中
    console.log('按钮被点击了！');
});

//获取输入文本
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

    console.log('用户输入的内容是：', taskText);

    //插入新的html结构

    //创建新的html板块
    const newHtml = createNewToDoItem(taskText);
    //将html插入到列表容器末尾
    //.insertAdjacentHTML('beforeend', ...)插入html字符最常用
    todoListContainer.insertAdjacentHTML('beforeend', newHtml);
    //清空输入框，方便user下次输入
    newThingInput.value = '';

});

//part 2&3(原本也就是在一个板块上面)
//是状态上的切换 所以如果是在li中包含了两种class 切换会更可以理解（详见createNewToDoItem这个函数补充
//监听器：一直监听li上的事件
if(todoListContainer){
    todoListContainer.addEventListener('click', function(event){
        //③
        // .closest('.delete-icon') 会从点击的元素开始，向上查找最近的 class 为 delete-icon 的父元素
        const deleteIcon = event.target.closest('.delete-icon');

        if(deleteIcon){ //确保删除事件存在并且真实发生
            //真正要删除的时<li> 要找到这个叉叉svg对应的li
            const listItem = deleteIcon.closest('li');

            if(listItem){
                //.remove 删除
                listItem.remove();
            }
            //删除完成，直接返回，不参与后续状态修改
            return;
        }

        //②
        //检查点击的部分是不是状态切换区域
        const statusToggleArea = event.target.closest('.status-toggle');

        if(statusToggleArea){
            //向上寻找整个代办事项父级li元素
            const listItem = statusToggleArea.closest('li');

            if(listItem){
                //使用toggle()方法切换'completed' class
                //如果li有这个class就移除，没有就添加
                listItem.classList.toggle('completed');
                console.log('状态已切换！');
            }
        }

        console.log('列表容器中有事件发生！');
    });
}