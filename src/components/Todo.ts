import { ITodo } from "../interfaces"
import * as Todos from "./Todos";


export const Todo = (todo: ITodo, todos: ITodo[]) => {
	const htmlTodoId = `section-${todo.suuid}`;
	const htmlCheckboxId = `checkbox-${todo.suuid}`;

	setTimeout(() => {
		const todoElem = document.querySelector<HTMLDivElement>(`#${htmlTodoId}`);
		const todoCheckboxElem = document.querySelector<HTMLDivElement>(`#${htmlTodoId} input[type=checkbox]`);
		const btnDeleteElem = document.querySelector<HTMLButtonElement>(`#${htmlTodoId} .btnDelete`)
		if (todoElem && todoCheckboxElem && btnDeleteElem) {
			todoCheckboxElem.addEventListener('click', () => {
				todo.finished = !todo.finished;
				Todos.render(todos);
			});
			btnDeleteElem.addEventListener('click', () => {
				todos = todos.filter(m => m.suuid !== todo.suuid);
				console.log(333, todos);
				Todos.render(todos);
			});
		}
	}, 0);

	return /*html*/ `
<div id="${htmlTodoId}">
	<div class="bg-gray-800 mb-2 p-3 rounded border border-gray-700 flex justify-between">
		<section class="flex gap-2 align-middle">
			<p><input type="checkbox" id="${htmlCheckboxId}" ${todo.finished ? ' checked' : ''}/></p>
			<label class="select-none cursor-pointer hover:text-gray-50 ${todo.finished ? `line-through` : ''}" for="${htmlCheckboxId}">${todo.text}</label>
		</section>
		<section class="flex gap-2">
			<button><i class="btnAdd fa fa-plus-square text-yellow-500 hover:text-yellow-300" aria-hidden="true"></i></button>
			<button><i class="btnEdit fa fa-pencil text-green-500 hover:text-green-300" aria-hidden="true"></i></button>
			<button><i class="btnDelete fa fa-trash text-red-500 hover:text-red-300" aria-hidden="true"></i></button>
		</section>
	</div>
</div>
	`;
}