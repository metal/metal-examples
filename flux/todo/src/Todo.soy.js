/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Todo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Todo.
 */

if (typeof Templates.Todo == 'undefined') { Templates.Todo = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component"><section class="todoapp">' + Templates.Todo.header(opt_data, null, opt_ijData) + Templates.Todo.main(opt_data, null, opt_ijData) + Templates.Todo.footer(opt_data, null, opt_ijData) + '</section><footer class="info"><p>Double-click to edit a todo</p><p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p><p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p><p>Part of <a href="http://todomvc.com">TodoMVC</a></p></footer></div>');
};
if (goog.DEBUG) {
  Templates.Todo.render.soyTemplateName = 'Templates.Todo.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="header"><h1>todos</h1><input class="new-todo" placeholder="What needs to be done?" autofocus data-onkeyup="handleInputKeyUp_"></header>');
};
if (goog.DEBUG) {
  Templates.Todo.header.soyTemplateName = 'Templates.Todo.header';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.main = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-main" class="main' + soy.$$escapeHtmlAttribute(opt_data.todos.length == 0 ? ' hidden' : '') + '"><input class="toggle-all" type="checkbox" data-onchange="handleToggleAllChange_"' + soy.$$filterHtmlAttributes(opt_data.allCompletedChecked ? 'checked' : '') + '><label for="toggle-all">Mark all as complete</label>' + Templates.Todo.list({surfaceElementId: opt_data.id + '-list', todos: opt_data.todos, visibleItems: opt_data.visibleItems}, null, opt_ijData) + '</section>');
};
if (goog.DEBUG) {
  Templates.Todo.main.soyTemplateName = 'Templates.Todo.main';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.list = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.surfaceElementId) + '" class="todo-list">';
  var todoList31 = opt_data.todos;
  var todoListLen31 = todoList31.length;
  for (var todoIndex31 = 0; todoIndex31 < todoListLen31; todoIndex31++) {
    var todoData31 = todoList31[todoIndex31];
    output += '<li class="' + soy.$$escapeHtmlAttribute(todoData31.completed ? 'completed' : '') + soy.$$escapeHtmlAttribute(opt_data.visibleItems[todoIndex31] ? '' : ' hidden') + '" data-index="' + soy.$$escapeHtmlAttribute(todoIndex31) + '"><div class="view"><input class="toggle" type="checkbox" data-onchange="handleCompletedCheckboxChange_"' + soy.$$filterHtmlAttributes(todoData31.completed ? 'checked' : '') + '><label data-ondblclick="handleLabelDoubleClick_">' + soy.$$escapeHtml(todoData31.text) + '</label><button class="destroy" data-onclick="handleDestroyClick_"></button></div><input class="edit" value="' + soy.$$escapeHtmlAttribute(todoData31.text) + '" data-onkeyup="handleEditKeyUp_"></li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Todo.list.soyTemplateName = 'Templates.Todo.list';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.footer = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<footer id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="footer' + soy.$$escapeHtmlAttribute(opt_data.todos.length == 0 ? ' hidden' : '') + '"><span class="todo-count"><strong>' + soy.$$escapeHtml(opt_data.incompleteCount) + '</strong> item' + soy.$$escapeHtml(opt_data.incompleteCount == 1 ? '' : 's') + ' left</span><ul class="filters"><li><a href="#/" class="' + soy.$$escapeHtmlAttribute(opt_data.selectedFilter == 'all' || ! opt_data.selectedFilter ? 'selected' : '') + '" data-filter="all" data-onclick="handleFilterClick_">All</a></li><li><a href="#/active" class="' + soy.$$escapeHtmlAttribute(opt_data.selectedFilter == 'active' ? 'selected' : '') + '" data-filter="active" data-onclick="handleFilterClick_">Active</a></li><li><a href="#/completed" class="' + soy.$$escapeHtmlAttribute(opt_data.selectedFilter == 'completed' ? 'selected' : '') + '" data-filter="completed" data-onclick="handleFilterClick_">Completed</a></li></ul><button class="clear-completed' + soy.$$escapeHtmlAttribute(opt_data.incompleteCount == opt_data.todos.length ? ' hidden' : '') + '" data-onclick="handleClearCompletedClick_">Clear completed</button></footer>');
};
if (goog.DEBUG) {
  Templates.Todo.footer.soyTemplateName = 'Templates.Todo.footer';
}

Templates.Todo.render.params = ["id"];
Templates.Todo.header.params = ["id"];
Templates.Todo.main.params = ["allCompletedChecked","id","todos","visibleItems"];
Templates.Todo.list.params = ["surfaceElementId","todos","visibleItems"];
Templates.Todo.footer.params = ["id","incompleteCount","selectedFilter","todos"];

class Todo extends Component {}
Todo.RENDERER = SoyRenderer;
SoyAop.registerTemplates('Todo');
export default Todo;
/* jshint ignore:end */
