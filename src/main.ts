import { getCurrentPage, getMenu } from './Router';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<main class="bg-slate-700 p-4 rounded-lg w-[20rem] min-h-[30rem]">
	<h1 class="text-2xl text-yellow-300">Todo App</h1>
	${getMenu()}
	${getCurrentPage()}
</main>
`

