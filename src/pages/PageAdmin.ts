import * as StateManager from '../StateManager';
import { IAppState } from '../interfaces';

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
test admin page	
	`;

	const pageAdminElem = document.querySelector<HTMLDivElement>('#pageAdmin');
	if (pageAdminElem) {
		pageAdminElem.innerHTML = html;
	}
	/*
		const checkboxDebuggingElem = document.querySelector<HTMLInputElement>('#checkboxDebugging');

		if (checkboxDebuggingElem) {
			checkboxDebuggingElem.addEventListener('click', () => {
				StateManager.render({ showDebuggingInfo: checkboxDebuggingElem.checked, todos: [] })
			});
		}
	
		<div class="text-slate-300">
			<form>
				<input id="checkboxDebugging" type="checkbox"/> <label for="checkboxDebugging" class="select-none cursor-pointer hover:text-slate-50">show debugging information</label> 
			</form>
		</div>
	
	*/
}