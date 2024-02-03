import { todos } from "../data.js";
import { INewTodo, ITodo } from "../interfaces.js";
import { Todo } from "./Todo.js";
import * as config from "../config.js";
import * as tools from '../tools.js';

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

export const createTodo = (newTodo: INewTodo) => {
	return {
		suuid: tools.getSuuid(),
		...newTodo
	}
}
