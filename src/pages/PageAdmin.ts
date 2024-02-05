import * as StateManager from '../StateManager';
import { IAppState } from '../interfaces';
import * as tools from '../tools';
import { todos as mockTodos } from '../data';

export const PageAdmin = () => {

	setTimeout(() => {
		StateManager.render({});
	}, 0);

	return /*html*/ `
	<section id="pageAdmin"></section>
	`
}

export const render = (appState: IAppState) => {
	let html = '';

	html += `
		<div class="text-slate-300">
			<form>
				<div class="mb-4">
					<input id="checkboxDebugging" type="checkbox" ${appState.showDebuggingInfo ? 'checked' : ''}/> <label for="checkboxDebugging" class="select-none cursor-pointer hover:text-slate-50">show debugging info</label> 
				</div>
				${appState.todos.length > 0 ? /*html*/ `
				<div class="mb-4">
					<button class="btnDeleteTodos formButton" type="button">Delete all todos</button>
				</div>
				`:''}
				<div class="mb-4">
					<button class="btnResetTodos formButton" type="button">Reset to 3 mock todos</button>
				</div>
			</form>
			${appState.showDebuggingInfo ? `
		<section>
			${tools.displayDebuggingInfo(appState)}
		</section>
			` : ''}
		</div>
	`;

	const pageAdminElem = document.querySelector<HTMLDivElement>('#pageAdmin');
	if (pageAdminElem) {
		pageAdminElem.innerHTML = html;

		const checkboxDebuggingElem = document.querySelector<HTMLInputElement>('#checkboxDebugging');
		const btnDeleteTodosElem = document.querySelector<HTMLButtonElement>('.btnDeleteTodos');
		const btnResetTodos = document.querySelector<HTMLButtonElement>('.btnResetTodos');

		if (checkboxDebuggingElem) {
			checkboxDebuggingElem.addEventListener('click', () => {
				StateManager.render({ showDebuggingInfo: checkboxDebuggingElem.checked })
			});
		}

		if (btnDeleteTodosElem) {
			btnDeleteTodosElem.addEventListener('click', () => {
				StateManager.render({ todos: [], showDebuggingInfo: true });
			})
		}

		if (btnResetTodos) {
			btnResetTodos.addEventListener('click', () => {
				StateManager.render({ todos: tools.getMockTodos(), showDebuggingInfo: true });
			})
		}
	}
}