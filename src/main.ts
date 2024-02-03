import { Todos } from './components/Todos';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-2xl text-yellow-300">Todo App</h1>
${Todos()}
`

