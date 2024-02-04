export const PageAdmin = () => {

	setTimeout(() => {
		const checkboxDebuggingElem = document.querySelector<HTMLInputElement>('#checkboxDebugging');

		if (checkboxDebuggingElem) {
			checkboxDebuggingElem.addEventListener('click', () => {

			});
		}
	}, 0);

	return /*html*/ `
	<div class="text-slate-300">
		<form>
			<input id="checkboxDebugging" type="checkbox"/> <label for="checkboxDebugging" class="select-none cursor-pointer hover:text-slate-50">show debugging information</label> 
		</form>
	</div>
	`
}