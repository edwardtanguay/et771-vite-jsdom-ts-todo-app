export interface INewTodo {
	text: string;
	rank: number;
	finished: boolean;
}

export interface ITodo extends INewTodo {
	suuid: string;
	isEditing: boolean;
	isDeleting: boolean;
}