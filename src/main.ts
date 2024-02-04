import { getCurrentPage, getMenu } from './Router';
import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<main class="bg-slate-700 p-4 md:rounded-lg w-full md:w-[25rem] md:min-h-[40rem]">
	<h1 class="text-2xl text-yellow-300">Todo App</h1>
	${getMenu()}
	${getCurrentPage()}
</main>
`

