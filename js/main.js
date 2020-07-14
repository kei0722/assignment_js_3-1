'use strict';

const todoList = [];

document.getElementById('add-btn').addEventListener('click', () => {

	const tr = document.createElement('tr');
	const statusButton = document.createElement('button');
	const deleteButton = document.createElement('button');
	const tbody = document.querySelector('tbody');
	const addTr = tbody.appendChild(tr);

	todoList.push({
		id: todoList.length,
		comment: document.getElementById('input-task').value,
		status: '作業中',
		btn: '削除',
	});

	const index = todoList.length - 1;

	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	const td4 = document.createElement('td');

	td1.textContent = todoList[index].id;

	td2.textContent = todoList[index].comment;

	statusButton.textContent = todoList[index].status;
	td3.appendChild(statusButton);

	deleteButton.textContent = todoList[index].btn;
	td4.appendChild(deleteButton);

	addTr.appendChild(td1);
	addTr.appendChild(td2);
	addTr.appendChild(td3);
	addTr.appendChild(td4);

	document.getElementById('input-task').value = "";

});