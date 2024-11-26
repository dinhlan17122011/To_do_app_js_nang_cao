import html from "../lib/core.js";

function header() {
    return html`
        <header class="header">
            <span class="title">My todo list</span>
            <div class="todo-work">
                <input type="text" class="input-todo" autofocus placeholder="Task content...">
                <button 
                    title="Add task" 
                    class="add"
                    onclick="dispatch('add', document.querySelector('.input-todo').value)"    
                >
                Add task
                </button>
            </div>
            <button title="Change theme" class="theme" onclick="dispatch('changeTheme')">
                <div class="light">
                    <i class="fa-light fa-sun-bright"></i>
                </div>
                <div class="dark">
                <i class="fa-light fa-moon"></i>
                </div>
            </button>
        </header>
    `
}

export default header