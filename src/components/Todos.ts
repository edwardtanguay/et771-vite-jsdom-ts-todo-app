import { todos as _todos } from "../data";
import { INewTodo, ITodo } from "../interfaces";
import { Todo } from "./Todo";
import * as config from "../config";
import * as tools from '../tools';

// build todos with extra fields
const todos:ITodo[] = [];
for (const _todo of _todos) {
	const todo:ITodo = {
		..._todo,
		isEditing: false,
		isDeleting: false
	}
	todos.push(todo);
}

export const Todos = () => {
	setTimeout(() => {
		render(todos);
	}, 0);

	return /*html*/ `
<div class="mt-4">
	<div id="todos-component"></div>
</div>
`;
};

export const render = (todos: ITodo[]) => {
	const todosComponentElem =
		document.querySelector<HTMLDivElement>("#todos-component");
	let html = "";
	if (todosComponentElem) {
		for (const todo of todos) {
			html += Todo(todo, todos);
		}
		if (config.debuggingIsOn()) {
			html += `
			<pre class="debuggingArea">${JSON.stringify(todos, null, 2)}</pre>
			`.trim();
		}
		todosComponentElem.innerHTML = html;
	}
};

export const createTodo = (newTodo: INewTodo): ITodo => {
	return {
		suuid: tools.getSuuid(),
		...newTodo,
		isEditing: false,
		isDeleting: false
	}
}
