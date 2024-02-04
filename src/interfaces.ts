export interface INewTodo {
	text: string;
	rank: number;
	finished: boolean;
	isEditing: boolean;
}

export interface ITodo extends INewTodo {
	suuid: string;
}