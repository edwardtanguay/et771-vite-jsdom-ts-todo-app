import { ITodo } from "../interfaces"
import * as Todos from "./Todos";


export const Todo = (todo: ITodo, todos: ITodo[]) => {
	const htmlTodoId = `section-${todo.suuid}`;
	const htmlCheckboxId = `checkbox-${todo.suuid}`;

	setTimeout(() => {
		const todoElem = document.querySelector<HTMLDivElement>(`#${htmlTodoId}`);
		const todoCheckboxElem = document.querySelector<HTMLDivElement>(`#${htmlTodoId} input[type=checkbox]`);
		const btnDeleteElem = document.querySelector<HTMLButtonElement>(`#${htmlTodoId} .btnDelete`);
		const btnEditElem = document.querySelector<HTMLButtonElement>(`#${htmlTodoId} .btnEdit`);
		const btnAddElem = document.querySelector<HTMLButtonElement>(`#${htmlTodoId} .btnAdd`);

		if (todoElem && todoCheckboxElem && btnDeleteElem && btnEditElem && btnAddElem) {
			todoCheckboxElem.addEventListener('click', () => {
				todo.finished = !todo.finished;
				Todos.render(todos);
			});
			btnDeleteElem.addEventListener('click', () => {
				todos = todos.filter(m => m.suuid !== todo.suuid);
				Todos.render(todos);
			});
			btnEditElem.addEventListener('click', () => {
				todo.isEditing = !todo.isEditing;
				console.log(333, 'clicked editign');
				Todos.render(todos);
			});
			btnAddElem.addEventListener('click', () => {
				todos.push(Todos.createTodo({
					text: `NEW: ${Math.random()}`,
					rank: 3,
					finished: false,
					isEditing: false
				}))
				Todos.render(todos);
			});
		}
	}, 0);

	return /*html*/ `
<div id="${htmlTodoId}">
	<div class="bg-gray-800 mb-2 p-3 rounded border border-gray-700 flex justify-between">
${!todo.isEditing ? `
		<section class="flex gap-2 align-middle">
			<p><input type="checkbox" id="${htmlCheckboxId}" ${todo.finished ? ' checked' : ''}/></p>
			<label class="select-none cursor-pointer hover:text-gray-50 ${todo.finished ? `line-through` : ''}" for="${htmlCheckboxId}">${todo.text}</label>
		</section>
		<section class="flex gap-2">
			<button><i class="btnEdit fa fa-pencil text-green-500 hover:text-green-300" aria-hidden="true"></i></button>
			<button><i class="btnDelete fa fa-trash text-red-500 hover:text-red-300" aria-hidden="true"></i></button>
			<button><i class="btnAdd fa fa-plus-square text-yellow-500 hover:text-yellow-300" aria-hidden="true"></i></button>
		</section>
	` : `editing...`}
	</div>
</div>
	`;
}