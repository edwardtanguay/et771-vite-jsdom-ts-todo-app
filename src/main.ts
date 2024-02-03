import { getCurrentPage, getMenu } from './Router';
import { Todos } from './components/Todos';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
${getMenu()}
<hr>
<h1 class="text-2xl text-yellow-300">Todo App</h1>
${getCurrentPage()}
<hr>
${Todos()}
`

