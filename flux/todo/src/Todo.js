'use strict';

import dom from 'metal/src/dom/dom';
import TodoActions from './TodoActions';
import TodoBase from './Todo.soy';
import TodoStore from './TodoStore';

class Todo extends TodoBase {
	constructor(opt_config) {
		super(opt_config);
		this.updateState_();
	}

	attached() {
		TodoStore.on('change', () => this.updateState_());
		dom.on(this.element, 'blur', this.handleBlur_.bind(this), true);
	}

	editTodo_(input) {
		var listElement = input.parentNode;
		var index = parseInt(listElement.getAttribute('data-index'), 10);
		var text = input.value.trim();
		if (text) {
			TodoActions.editTodo(index, text);
		} else {
			TodoActions.removeTodo(index);
		}
		this.editing_ = false;
	}

	filter_() {
		var visible = {};
		this.todos.forEach((todo, index) => {
			visible[index] = !(this.selectedFilter === 'active' && todo.completed) &&
				!(this.selectedFilter === 'completed' && !todo.completed);
		});
		this.visibleItems = visible;
	}

	handleBlur_(event) {
		if (dom.hasClass(event.target.parentNode, 'editing') && this.editing_) {
			this.editTodo_(event.target);
		}
	}

	handleDestroyClick_(event) {
		var index = parseInt(event.delegateTarget.parentNode.parentNode.getAttribute('data-index'), 10);
		TodoActions.removeTodo(index);
	}

	handleCompletedCheckboxChange_(event) {
		var index = parseInt(event.delegateTarget.parentNode.parentNode.getAttribute('data-index'), 10);
		if (event.delegateTarget.checked) {
			TodoActions.markCompleted(index);
		} else {
			TodoActions.markIncompleted(index);
		}
	}

	handleClearCompletedClick_() {
		TodoActions.removeCompleted();
	}

	handleEditKeyUp_(event) {
		if (event.keyCode === 13) {
			this.editTodo_(event.delegateTarget);
		} else if (event.keyCode === 27) {
			var listElement = event.delegateTarget.parentNode;
			dom.removeClasses(listElement, 'editing');
			this.editing_ = false;
		}
	}

	handleFilterClick_(event) {
		this.selectedFilter = event.delegateTarget.getAttribute('data-filter');
		this.filter_();
	}

	handleInputKeyUp_(event) {
		if (event.keyCode === 13) {
			var text = event.delegateTarget.value.trim();
			if (text) {
				TodoActions.addTodo(text);
				event.delegateTarget.value = '';
			}
		}
	}

	handleLabelDoubleClick_(event) {
		var listElement = event.delegateTarget.parentNode.parentNode;
		dom.addClasses(listElement, 'editing');

		this.editing_ = true;
		var index = parseInt(listElement.getAttribute('data-index'), 10);
		var editInput = listElement.querySelector('.edit');
		editInput.focus();
		editInput.value = this.todos[index].text;
	}

	handleToggleAllChange_(event) {
		this.allCompleteChecked = event.delegateTarget.checked;
		if (event.delegateTarget.checked) {
			TodoActions.markAllCompleted();
		} else {
			TodoActions.markAllIncompleted();
		}
	}

	updateState_() {
		this.todos = TodoStore.getAll();
		this.allCompletedChecked = TodoStore.areAllCompleted();
		this.incompleteCount = this.todos.reduce((count, todo) => {
			return count + (todo.completed ? 0 : 1);
		}, 0);
		this.filter_();
	}
}

export default Todo;
