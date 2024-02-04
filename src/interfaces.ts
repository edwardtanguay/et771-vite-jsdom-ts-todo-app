export interface INewTodo {
	text: string;
	rank: number;
	finished: boolean;
}

export interface ITodo extends INewTodo {
	suuid: string;
	isEditing: boolean;
	isDeleting: boolean;
	isAdding: boolean;
}

export interface IAppState {
	todos: ITodo[],
	showDebuggingInfo: boolean
}

export interface IAppStateChange {
	todos?: ITodo[],
	showDebuggingInfo?: boolean
}