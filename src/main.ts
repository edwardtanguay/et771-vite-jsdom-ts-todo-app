import { getCurrentPage, getMenu } from './Router';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-2xl text-yellow-300">Todo App</h1>
${getMenu()}
${getCurrentPage()}
`

