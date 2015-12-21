'use strict';

import TodoDispatcher from './TodoDispatcher';

class TodoActions {
	static addTodo(text) {
		TodoDispatcher.dispatch({
			type: TodoActions.ADD_TODO,
			text: text
		});
	}

	static editTodo(index, text) {
		TodoDispatcher.dispatch({
			type: TodoActions.EDIT_TODO,
			index: index,
			text: text
		});
	}

	static markAllCompleted() {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_ALL_COMPLETED
		});
	}

	static markAllIncompleted() {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_ALL_INCOMPLETED
		});
	}

	static markCompleted(index) {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_COMPLETED,
			index: index
		});
	}

	static markIncompleted(index) {
		TodoDispatcher.dispatch({
			type: TodoActions.MARK_INCOMPLETED,
			index: index
		});
	}

	static removeCompleted() {
		TodoDispatcher.dispatch({
			type: TodoActions.REMOVE_COMPLETED
		});
	}

	static removeTodo(index) {
		TodoDispatcher.dispatch({
			type: TodoActions.REMOVE_TODO,
			index: index
		});
	}
}

TodoActions.ADD_TODO = 'add-todo';
TodoActions.EDIT_TODO = 'edit-todo';
TodoActions.MARK_ALL_COMPLETED = 'mark-all-completed';
TodoActions.MARK_ALL_INCOMPLETED = 'mark-all-incompleted';
TodoActions.MARK_COMPLETED = 'mark-completed';
TodoActions.MARK_INCOMPLETED = 'mark-incompleted';
TodoActions.REMOVE_COMPLETED = 'remove-completed';
TodoActions.REMOVE_TODO = 'remove-todo';

export default TodoActions;
