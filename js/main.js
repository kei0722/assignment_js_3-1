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
		deleteBtn: '削除',
	});

	const index = todoList.length - 1;

	const tdId = document.createElement('td');
	const tdComment = document.createElement('td');
	const tdStatus = document.createElement('td');
	const tdDeletebtn = document.createElement('td');

	tdId.textContent = todoList[index].id;

	tdComment.textContent = todoList[index].comment;

	statusButton.textContent = todoList[index].status;
	tdStatus.appendChild(statusButton);

	deleteButton.textContent = todoList[index].deleteBtn;
	tdDeletebtn.appendChild(deleteButton);

	addTr.appendChild(tdId);
	addTr.appendChild(tdComment);
	addTr.appendChild(tdStatus);
	addTr.appendChild(tdDeletebtn);

	document.getElementById('input-task').value = "";

});