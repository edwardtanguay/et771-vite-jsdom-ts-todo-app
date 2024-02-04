import { todos as _todos } from "../data";
import { INewTodo, ITodo } from "../interfaces";
import { Todo } from "./Todo";
import * as config from "../config";
import * as tools from '../tools';
import * as TodosFunctions from './Todos';
import * as StateManager from '../StateManager';

export const Todos = () => {
	setTimeout(() => {
		// render(todos);
		StateManager.render({});
	}, 0);

	return /*html*/ `
<div class="mt-4">
	<div id="todos-component"></div>
</div>
`;
};

export const render = (todos: ITodo[]) => {
	todos.sort((a, b) => a.rank < b.rank ? 1 : -1);
	const todosComponentElem =
		document.querySelector<HTMLDivElement>("#todos-component");
	let html = "";
	if (todosComponentElem) {
		for (const todo of todos) {
			html += Todo(todo, todos);
		}
		if (html.trim() === '') {
			html = /*html*/ `<button class="btnAddFirstTodo bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs px-2 py-1 rounded" type="button">Add Todo</button>`;

			html += /*html*/ `
	<div style="display:none" class="addTodoForm bg-yellow-500 text-gray-950 mb-2 p-3 rounded border border-gray-700 mt-4">
		<section class="mb-4">
			<div class="flex gap-2 mt-2">
				<label class="w-[3rem]" for="text">Text:</label>
				<input class="text" type="text" value="" id="text">
			</div>
			<div class="flex gap-2 mt-2">
				<label class="w-[3rem]" for="rank">Stars:</label>
				<input class="rank w-[5rem] text-right" value="3" type="number" id="rank">
				<span>(0-5)</span>
			</div>
		</section>
		<form class="w-full flex gap-2 justify-end">
			<button class="formButton btnCancelAdd" type="button">Cancel</button>
			<button class="formButton btnPerformAdd" type="button">Add</button>
		</form>
	</div>
			`
		}
		if (config.showDebuggingInfo()) {
			html += `
			<pre class="debuggingArea">${JSON.stringify(todos, null, 2)}</pre>
			`.trim();
		}
		todosComponentElem.innerHTML = html;


		const btnAddFirstTodoElem = document.querySelector<HTMLButtonElement>(
			`.btnAddFirstTodo`
		);

		if (btnAddFirstTodoElem) {
			btnAddFirstTodoElem.addEventListener("click", () => {
				const addTodoFormElem = document.querySelector<HTMLDivElement>('.addTodoForm');
				if (addTodoFormElem) {
					addTodoFormElem.style.display = addTodoFormElem.style.display === 'block' ? 'none' : 'block';
					if (addTodoFormElem.style.display === 'block') {
						const inputAddTextElem = document.querySelector<HTMLButtonElement>(
							`input.text`
						);
						const inputAddRankElem = document.querySelector<HTMLButtonElement>(
							`input.rank`
						);
						const btnCancelAddElem = document.querySelector<HTMLButtonElement>(
							`.btnCancelAdd`
						);
						const btnPerformAddElem = document.querySelector<HTMLButtonElement>(
							`.btnPerformAdd`
						);

						if (inputAddTextElem && inputAddRankElem && btnCancelAddElem && btnPerformAddElem) {
							btnCancelAddElem.addEventListener('click', () => {
								addTodoFormElem.style.display = 'none';
							})
							if (btnPerformAddElem.getAttribute('listener') !== 'true') {
								btnPerformAddElem.setAttribute('listener', 'true');
								btnPerformAddElem.addEventListener("click", () => {
									todos.push(
										TodosFunctions.createTodo({
											text: inputAddTextElem.value,
											rank: tools.cleanseRank(Number(inputAddRankElem.value)),
											finished: false
										})
									);
									TodosFunctions.render(todos);
								});
							}
						} else {
							console.log('ERROR: something not right');
						}
					}
				} else {
					console.log('ERROR: addTodoFormElem is null');
				}
			})
		}
	}
};

export const createTodo = (newTodo: INewTodo): ITodo => {
	return {
		suuid: tools.getSuuid(),
		...newTodo,
		isEditing: false,
		isDeleting: false,
		isAdding: false
	}
}
