let userList = [];
let table = document.querySelector('#table');
let inputFIO = document.querySelector('#fio');
let inputMarks = document.querySelector('#marks');

function add() {
    let user = new Object();
    user.fio = inputFIO.value;
    user.marks = inputMarks.value;
    userList.push(user);
    inputFIO.value = '';
    inputMarks.value = '';
    table.innerHTML +='<tr id=user__' + (userList.length - 1) + '><td>' + user.fio + '</td><td>' + user.marks + '</td><td><button onclick=deleteUser(' + (userList.length - 1) + ')>Удалить</button></td><td><button onclick=editUser(' + (userList.length - 1) + ')>Изменить</button></td></tr>'; 
}

function deleteUser(i) {
    userList.splice(i, 1);
    showTable();
}

function showTable() {
    table.innerHTML = '';
    table.innerHTML = '<tr><th>ФИО</th><th>Оценки</th></tr>';
    for (i = 0; i < userList.length; i++) {
        table.innerHTML += '<tr id=user__' + i + '><td>' + userList[i].fio + '</td><td>' + userList[i].marks + '</td><td><button onclick=deleteUser(' + i + ')>Удалить</button></td><td><button onclick=editUser(' + i + ')>Изменить</button></td></tr>';
    }
}

function editUser(i) {
    inputFIO.value = userList[i].fio;
    inputMarks.value = userList[i].marks;
    deleteUser(i);
}

function edit() {
    let user = new Object();
    user.fio = inputFIO.value;
    user.marks = inputMarks.value;
    userList.push(user);
    inputFIO.value = '';
    inputMarks.value = '';
    showTable();
}