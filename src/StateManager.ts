import { IAppState, IAppStateChange, ITodo } from "./interfaces";
import * as stateManager from './StateManager';
import { todos as _todos } from './data';
import * as config from './config';
import * as Todos from "./components/Todos";

// build todos with extra fields
const todos: ITodo[] = [];
for (const _todo of _todos) {
	const __todo: any = _todo;
	const todo: ITodo = {
		...__todo,
		isEditing: false,
		isDeleting: false,
		isAdding: false
	}
	todos.push(todo);
}

export const getInitialAppState = (): IAppState => {
	return {
		todos,
		showDebuggingInfo: config.showDebuggingInfo()
	}
}

export const render = (appStateChange: IAppStateChange): void => {
	const localStorageAppState = localStorage.getItem('appState');
	const appState: IAppState = localStorageAppState ? JSON.parse(localStorageAppState) : stateManager.getInitialAppState();
	if (appStateChange.todos) {
		appState.todos = appStateChange.todos;
	}
	if (appStateChange.showDebuggingInfo) {
		appState.showDebuggingInfo = appStateChange.showDebuggingInfo;
	}
	Todos.render(appState.todos);
}