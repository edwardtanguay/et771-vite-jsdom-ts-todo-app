import * as tools from './tools';
import { PageMain } from './pages/PageMain';
import { Page404 } from './pages/Page404';
import { PageAbout } from './pages/PageAbout';
import { PageAdmin } from './pages/PageAdmin';

const pageNames = ['Main', 'Admin', 'About'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'main':
			return PageMain();
		case 'about':
			return PageAbout();
		case 'admin':
			return PageAdmin();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul class="flex gap-2 mb-4">
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}