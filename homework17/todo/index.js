const listItem = document.querySelectorAll('.list__items');

let todoItems = [];

const state = {
    inputValue: "",
    toos: [
        {
            isComplete: true,
        },
        {
            isComplete: false,
        },
        {
            isComplete: false,
        },
    ],
};

const renderTodo = (todo) => {
    todo.forEach((item, index) => {
        addTodo(item.innerText);
        item.addEventListener('click', () => {
            todoItems[0].isCompleted = true;
            if (todoItems[0].isCompleted !== true) {
                todoItems[0].isCompleted = true;
                todoItems[0].classList.add('done')
            } else if (todoItems[index - 1].isCompleted !== true) {
                if (todoItems[index - 1] < 0) {
                    todoItems[index - 1] = todoItems[0]
                }
                return false;
            }

            if (item.classList.contains('done')) {
                todoItems[index].isCompleted = false;
                item.classList.remove('done')
            } else {
                todoItems[index].isCompleted = true;
                item.classList.add('done')
            }

        })
    });
};

renderTodo(listItem);