import { ITodo } from "../interfaces"

export const Todo = (todo: ITodo) => {
	return /*html*/ `
<div class="bg-gray-800 mb-2 p-3 rounded border border-gray-700 flex justify-between">
	<section class="flex gap-2 align-middle">
		<p><input type="checkbox"/></p>
		<p>${todo.text}</p>
	</section>
	<section>
		<button>edit</button>
		<button>delete</button>
	</section>
</div>
	`;
}