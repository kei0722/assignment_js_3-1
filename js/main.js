'use strict';

const todoList = [];

document.getElementById('add-btn').addEventListener('click', () => {

	const tr = document.createElement('tr');
	const statusButton = document.createElement('button');
	const deleteButton = document.createElement('button');
	const tbody = document.querySelector('tbody');
	const addtr = tbody.appendChild(tr);

	todoList.push({
		id: todoList.length,
		comment: document.getElementById('input-task').value,
		status: '作業中',
		btn: '削除',
	});

	const index = todoList.length - 1;

	for (let i = 0; i < 4; i++){
		const td = document.createElement('td');

		switch( i ) {
			case 0:
				td.textContent = todoList[index].id;
				break;

			case 1:
				td.textContent = todoList[index].comment;
				break;

			case 2:
				statusButton.textContent = todoList[index].status;
				td.appendChild(statusButton);
				break;

			case 3:
				deleteButton.textContent = todoList[index].btn;
				td.appendChild(deleteButton);
				break;
			}

		addtr.appendChild(td);
	}

});