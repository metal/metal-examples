'use strict';

import FluxStore from 'bower:metal-flux/src/FluxStore';
import TodoActions from './TodoActions';
import TodoDispatcher from './TodoDispatcher';

var todos = [];

class TodoStore extends FluxStore {
	areAllCompleted() {
		return todos.reduce((allCompleted, todo) => {
			return allCompleted && !!todo.completed;
		}, true);
	}

	getAll() {
		return todos;
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case TodoActions.ADD_TODO:
				todos.push({
					text: payload.text
				});
				this.emit(FluxStore.EVENT_CHANGE);
				break;
			case TodoActions.EDIT_TODO:
				if (todos[payload.index].text !== payload.text) {
					todos[payload.index].text = payload.text;
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.MARK_ALL_COMPLETED:
				if (changeAllCompleted(true)) {
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.MARK_ALL_INCOMPLETED:
				if (changeAllCompleted(false)) {
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.MARK_COMPLETED:
				if (!todos[payload.index].completed) {
					todos[payload.index].completed = true;
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.MARK_INCOMPLETED:
				if (todos[payload.index].completed) {
					todos[payload.index].completed = false;
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.REMOVE_COMPLETED:
				if (removeCompleted()) {
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.REMOVE_TODO:
				if (todos[payload.index]) {
					todos.splice(payload.index, 1);
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
		}
	}
}

function changeAllCompleted(newValue) {
	var changed = false;
	todos.forEach((todo) => {
		changed = changed || (!todo.completed === newValue);
		todo.completed = newValue;
	});
	return changed;
}

function removeCompleted() {
	var newTodos = todos.filter(todo => !todo.completed);
	var changed = newTodos.length !== todos.length;
	todos = newTodos;
	return changed;
}

export default new TodoStore(TodoDispatcher);
