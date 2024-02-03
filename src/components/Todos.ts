import { todos } from '../data.js';
import { ITodo } from '../interfaces.js';
import { Todo } from './Todo.js';

export const Todos = () => {
	return /*html*/ `
<div id="todos-component">
	<div class="mt-4">
	${todos.map(todo => {
		return Todo(todo, todos);
	}).join('')}
	</div>
</div>
`
}

export const render = (todos: ITodo[]) => {
	const todosComponentElem = document.querySelector<HTMLDivElement>('#todos-component');
	let html = '';
	if (todosComponentElem) {
		for (const todo of todos) {
			html += Todo(todo, todos);
		}
		todosComponentElem.innerHTML = html;
	}
}