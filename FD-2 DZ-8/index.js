let addTo = document.getElementById('add');
let deleteId = document.getElementById('deleteID');
let sort = document.getElementById('sort');
let deleteAll = document.getElementById('deleteAll');
let list = document.getElementById('list');

class TodoList {
    constructor() {
        this.todo = []
    }
    render() {
        list.innerHTML = '';
        this.todo.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.innerText = item.text;
            list.appendChild(listItem);
        })
    }

    addToList() {
        let text = prompt('Введите Ваше задание!');
        const object = {
            text: text,
            date: Date.now(),
            id: Math.floor(Math.random() * 100)
        };
        this.todo.push(object);
        this.render();
    }

    removeFromList() {
        let id = Number(prompt('Введите Ваш ID!'));
        const index = this.todo.findIndex(n => n.id === id);
        if (index !== -1) {
            this.todo.splice(index, 1);
        }
        this.render();
    }

    sort(date) {
        this.todo.sort((a, b) => {
            return b.date - a.date;
        })
        this.render();
    }

    clear() {
        this.todo.length = 0;
        this.render();
    }
}
const todo = new TodoList();


addTo.addEventListener('click', (event) => {
    todo.addToList();
})


deleteId.addEventListener('click', (event) => {
    todo.removeFromList();
})


sort.addEventListener('click', (event) => {
    todo.sort();
})

deleteAll.addEventListener('click', (event) => {
    todo.clear();
})

// todo.addToList('text', 1);
// todo.addToList('text', 2);
// todo.addToList('text', 3);
// todo.addToList('text', 4);
// todo.addToList('text', 5);
// todo.addToList('text', 6);
// todo.removeFromList(5);
// todo.removeFromList(2);
// todo.sort();
// // todo.clear(); // delete all todo 
console.log(todo);