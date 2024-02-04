import { ITodo } from "../interfaces";
import * as Todos from "./Todos";

export const Todo = (todo: ITodo, todos: ITodo[]) => {
	const htmlTodoId = `section-${todo.suuid}`;
	const htmlCheckboxId = `checkbox-${todo.suuid}`;

	setTimeout(() => {
		const todoElem = document.querySelector<HTMLDivElement>(
			`#${htmlTodoId}`
		);
		const todoCheckboxElem = document.querySelector<HTMLDivElement>(
			`#${htmlTodoId} input[type=checkbox]`
		);
		const btnDeleteElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnDelete`
		);
		const btnEditElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnEdit`
		);
		const btnAddElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnAdd`
		);
		const btnCancelEditElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnCancelEdit`
		);
		const btnSaveEditElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnSaveEdit`
		);
		const btnCancelDeleteElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnCancelDelete`
		);
		const btnPerformDeleteElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnPerformDelete`
		);
		const btnCancelAddElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnCancelAdd`
		);
		const btnPerformAddElem = document.querySelector<HTMLButtonElement>(
			`#${htmlTodoId} .btnPerformAdd`
		);


		// EDIT ITEM
		if (btnCancelEditElem) {
			btnCancelEditElem.addEventListener("click", () => {
				todo.isEditing = !todo.isEditing;
				Todos.render(todos);
			});
		}

		if (btnSaveEditElem) {
			const inputEditTextElem = document.querySelector<HTMLButtonElement>(
				`#${htmlTodoId} input.text`
			);
			const inputEditRankElem = document.querySelector<HTMLButtonElement>(
				`#${htmlTodoId} input.rank`
			);
			if (inputEditTextElem && inputEditRankElem) {
				btnSaveEditElem.addEventListener("click", () => {
					todo.text = inputEditTextElem.value;
					todo.rank = Number(inputEditRankElem.value);
					todo.isEditing = !todo.isEditing;
					Todos.render(todos);
				});
			}
		}

		// DELETE ITEM
		if (btnCancelDeleteElem) {
			btnCancelDeleteElem.addEventListener("click", () => {
				todo.isDeleting = !todo.isDeleting
				Todos.render(todos);
			});
		}

		if (btnPerformDeleteElem) {
			btnPerformDeleteElem.addEventListener("click", () => {
				todos = todos.filter((m) => m.suuid !== todo.suuid);
				Todos.render(todos);
			});
		}


		// ADD ITEM
		if (btnCancelAddElem) {
			btnCancelAddElem.addEventListener("click", () => {
				todo.isAdding = !todo.isAdding
				Todos.render(todos);
			});
		}

		if (btnPerformAddElem) {
			const inputAddTextElem = document.querySelector<HTMLButtonElement>(
				`#${htmlTodoId} input.text`
			);
			const inputAddRankElem = document.querySelector<HTMLButtonElement>(
				`#${htmlTodoId} input.rank`
			);
			if (inputAddTextElem && inputAddRankElem) {
				btnPerformAddElem.addEventListener("click", () => {
					todos.push(
						Todos.createTodo({
							text: inputAddTextElem.value,
							rank: Number(inputAddRankElem.value),
							finished: false
						})
					);
					todo.isAdding = false;
					Todos.render(todos);
				});
			}
		}


		if (
			todoElem &&
			todoCheckboxElem &&
			btnDeleteElem &&
			btnEditElem &&
			btnAddElem
		) {
			todoCheckboxElem.addEventListener("click", () => {
				todo.finished = !todo.finished;
				Todos.render(todos);
			});
			btnDeleteElem.addEventListener("click", () => {
				todo.isDeleting = !todo.isDeleting;
				Todos.render(todos);
			});
			btnEditElem.addEventListener("click", () => {
				todo.isEditing = !todo.isEditing;
				todo.isAdding = false;
				Todos.render(todos);
			});
			btnAddElem.addEventListener("click", () => {
				todo.isAdding = !todo.isAdding;
				Todos.render(todos);
			});
		}
	}, 0);

	return /*html*/ `
<div id="${htmlTodoId}" class="mb-4">

${todo.isEditing
			? /*html*/ `
	<div class="bg-green-800 mb-2 p-3 rounded border border-gray-700 flex justify-between">
		<form class="w-full">
			<div class="flex gap-2 mt-2">
				<label class="w-[3rem]" for="text">Text:</label>
				<input class="text" type="text" value="${todo.text}" id="text">
			</div>
			<div class="flex gap-2 mt-2">
				<label class="w-[3rem]" for="rank">Rank:</label>
				<input class="rank w-[5rem] text-right" value="${todo.rank}" type="number" id="rank">
			</div>
			<div class="pt-2 flex gap-2 justify-end">
				<button class="formButton btnCancelEdit" type="button">Cancel</button>
				<button class="formButton btnSaveEdit" type="button">Save</button>
			</div>
		</form>
	</div>
	` : ''}

${todo.isDeleting
			? /*html*/ `
	<div class="bg-red-800 mb-2 p-3 rounded border border-gray-700">
		<section class="mb-4">
		${todo.text}
		</section>
		<form class="w-full flex gap-2 justify-between">
			<p>Are you sure?</p>
			<div class="pt-2 flex gap-2 justify-end">
				<button class="formButton btnCancelDelete" type="button">Cancel</button>
				<button class="formButton btnPerformDelete" type="button">Delete</button>
			</div>
		</form>
	</div>
	` : ''}

	
${!todo.isEditing && !todo.isDeleting
			? /*html*/ `
	<div class="bg-gray-800 mb-2 p-3 rounded border border-gray-700 flex justify-between">
		<section class="flex gap-2 align-middle">
			<p><input type="checkbox" id="${htmlCheckboxId}" ${todo.finished ? " checked" : ""
			}/></p>
			<label class="select-none cursor-pointer hover:text-gray-50 
			}" for="${htmlCheckboxId}"><div><span class="relative -top-3">*****</span><span class="${todo.finished ? `line-through` : ""} relative -left-9">${todo.text}</span></div></label>
			
		</section>
		<section class="flex gap-3 md:gap-2">
			<button><i class="btnEdit fa fa-pencil text-green-500 hover:text-green-300" aria-hidden="true"></i></button>
			<button><i class="btnDelete fa fa-trash text-red-500 hover:text-red-300" aria-hidden="true"></i></button>
			<button><i class="btnAdd fa fa-plus-square text-yellow-500 hover:text-yellow-300" aria-hidden="true"></i></button>
		</section>
	</div>
	`: ''}

${todo.isAdding
			? /*html*/ `
	<div class="bg-yellow-500 text-gray-950 mb-2 p-3 rounded border border-gray-700">
		<section class="mb-4">
			<div class="flex gap-2 mt-2">
				<label class="w-[3rem]" for="text">Text:</label>
				<input class="text" type="text" value="" id="text">
			</div>
			<div class="flex gap-2 mt-2">
				<label class="w-[3rem]" for="rank">Rank:</label>
				<input class="rank w-[5rem] text-right" value="3" type="number" id="rank">
			</div>
		</section>
		<form class="w-full flex gap-2 justify-end">
			<button class="formButton btnCancelAdd" type="button">Cancel</button>
			<button class="formButton btnPerformAdd" type="button">Add</button>
		</form>
	</div>
	` : ''}


</div>
	`;
};
