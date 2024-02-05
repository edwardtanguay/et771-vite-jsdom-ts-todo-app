import { IAppState, IAppStateChange } from "./interfaces";
import * as stateManager from './StateManager';
import * as config from './config';
import * as Todos from "./components/Todos";
import * as PageAdmin from "./pages/PageAdmin";
import * as tools from './tools';

export const getInitialAppState = (): IAppState => {
	return {
		todos:tools.getMockTodos(), 
		showDebuggingInfo: config.showDebuggingInfo()
	}
}

export const render = (appStateChange: IAppStateChange): void => {
	const localStorageAppState = localStorage.getItem('appState');
	const appState: IAppState = localStorageAppState ? JSON.parse(localStorageAppState) : stateManager.getInitialAppState();
	if (appStateChange.todos !== undefined) {
		appState.todos = appStateChange.todos;
	}
	if (appStateChange.showDebuggingInfo !== undefined) {
		appState.showDebuggingInfo = appStateChange.showDebuggingInfo;
	}
	localStorage.setItem('appState', JSON.stringify(appState));
	Todos.render(appState);
	PageAdmin.render(appState);
}