import { todos } from "../data.js";
import { ITodo } from "../interfaces.js";
import { Todo } from "./Todo.js";
import * as config from "../config.js";

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
			<div class="debuggingArea">
			<p>debugging info</p>
			</div>
			`;
		}
		todosComponentElem.innerHTML = html;
	}
};
