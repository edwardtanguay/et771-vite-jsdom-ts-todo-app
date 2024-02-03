import {todos} from '../data.js';
import { Todo } from './Todo.js';

console.log(todos);

export const Todos = () => {
	return /*html*/ `

<div class="mt-4">
${todos.map(todo => {
	return Todo(todo, todos);
}).join('')}
</div>
`
}