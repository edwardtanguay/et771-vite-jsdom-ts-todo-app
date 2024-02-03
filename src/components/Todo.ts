import { ITodo } from "../interfaces"

export const Todo = (todo: ITodo) => {
	const htmlId = `checkbox-${todo.suuid}`;
	return /*html*/ `
<div class="bg-gray-800 mb-2 p-3 rounded border border-gray-700 flex justify-between">
	<section class="flex gap-2 align-middle">
		<p><input type="checkbox" id="${htmlId}" ${todo.finished ? ' checked' : ''}/></p>
		<label class="select-none cursor-pointer hover:text-gray-50 ${todo.finished ? `line-through` : ''}" for="${htmlId}">${todo.text}</label>
	</section>
	<section class="flex gap-2">
		<button><i class="fa fa-pencil text-green-500 hover:text-green-300" aria-hidden="true"></i></button>
		<button><i class="fa fa-trash text-red-500 hover:text-red-300" aria-hidden="true"></i></button>
	</section>
</div>
	`;
}