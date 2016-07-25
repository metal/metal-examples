/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Todo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Todo.
 * @public
 */

goog.module('Todo.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'component');
    ie_open('section', null, null,
        'class', 'todoapp');
      $header(opt_data, null, opt_ijData);
      ie_open('section', null, null,
          'class', 'main' + (opt_data.todos.length == 0 ? ' hidden' : ''));
        ie_open_start('input');
            iattr('class', 'toggle-all');
            iattr('type', 'checkbox');
            iattr('data-onchange', 'handleToggleAllChange_');
            if (opt_data.allCompletedChecked) {
              iattr('checked', '');
            }
        ie_open_end();
        ie_close('input');
        ie_open('label', null, null,
            'for', 'toggle-all');
          itext('Mark all as complete');
        ie_close('label');
        $list(opt_data, null, opt_ijData);
      ie_close('section');
      $footer(opt_data, null, opt_ijData);
    ie_close('section');
    ie_open('footer', null, null,
        'class', 'info');
      ie_open('p');
        itext('Double-click to edit a todo');
      ie_close('p');
      ie_open('p');
        itext('Created by ');
        ie_open('a', null, null,
            'href', 'http://twitter.com/oscargodson');
          itext('Oscar Godson');
        ie_close('a');
      ie_close('p');
      ie_open('p');
        itext('Refactored by ');
        ie_open('a', null, null,
            'href', 'https://github.com/cburgmer');
          itext('Christoph Burgmer');
        ie_close('a');
      ie_close('p');
      ie_open('p');
        itext('Part of ');
        ie_open('a', null, null,
            'href', 'http://todomvc.com');
          itext('TodoMVC');
        ie_close('a');
      ie_close('p');
    ie_close('footer');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Todo.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $header(opt_data, opt_ignored, opt_ijData) {
  ie_open('header', null, null,
      'class', 'header');
    ie_open('h1');
      itext('todos');
    ie_close('h1');
    ie_open('input', null, null,
        'class', 'new-todo',
        'placeholder', 'What needs to be done?',
        'autofocus', '',
        'data-onkeyup', 'handleInputKeyUp_');
    ie_close('input');
  ie_close('header');
}
exports.header = $header;
if (goog.DEBUG) {
  $header.soyTemplateName = 'Todo.header';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $list(opt_data, opt_ignored, opt_ijData) {
  ie_open('ul', null, null,
      'class', 'todo-list');
    var todoList39 = opt_data.todos;
    var todoListLen39 = todoList39.length;
    for (var todoIndex39 = 0; todoIndex39 < todoListLen39; todoIndex39++) {
      var todoData39 = todoList39[todoIndex39];
      ie_open('li', null, null,
          'class', (todoData39.completed ? 'completed' : '') + (opt_data.visibleItems[todoIndex39] ? '' : ' hidden'),
          'data-index', todoIndex39);
        ie_open('div', null, null,
            'class', 'view');
          ie_open_start('input');
              iattr('class', 'toggle');
              iattr('type', 'checkbox');
              iattr('data-onchange', 'handleCompletedCheckboxChange_');
              if (todoData39.completed) {
                iattr('checked', '');
              }
          ie_open_end();
          ie_close('input');
          ie_open('label', null, null,
              'data-ondblclick', 'handleLabelDoubleClick_');
            itext((goog.asserts.assert((todoData39.text) != null), todoData39.text));
          ie_close('label');
          ie_void('button', null, null,
              'class', 'destroy',
              'data-onclick', 'handleDestroyClick_');
        ie_close('div');
        ie_open('input', null, null,
            'class', 'edit',
            'value', todoData39.text,
            'data-onkeyup', 'handleEditKeyUp_');
        ie_close('input');
      ie_close('li');
    }
  ie_close('ul');
}
exports.list = $list;
if (goog.DEBUG) {
  $list.soyTemplateName = 'Todo.list';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $footer(opt_data, opt_ignored, opt_ijData) {
  ie_open('footer', null, null,
      'class', 'footer' + (opt_data.todos.length == 0 ? ' hidden' : ''));
    ie_open('span', null, null,
        'class', 'todo-count');
      ie_open('strong');
        itext((goog.asserts.assert((opt_data.incompleteCount) != null), opt_data.incompleteCount));
      ie_close('strong');
      itext(' item');
      itext((goog.asserts.assert((opt_data.incompleteCount == 1 ? '' : 's') != null), opt_data.incompleteCount == 1 ? '' : 's'));
      itext(' left');
    ie_close('span');
    ie_open('ul', null, null,
        'class', 'filters');
      ie_open('li');
        ie_open('a', null, null,
            'href', '#/',
            'class', opt_data.selectedFilter == 'all' || ! opt_data.selectedFilter ? 'selected' : '',
            'data-filter', 'all',
            'data-onclick', 'handleFilterClick_');
          itext('All');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        ie_open('a', null, null,
            'href', '#/active',
            'class', opt_data.selectedFilter == 'active' ? 'selected' : '',
            'data-filter', 'active',
            'data-onclick', 'handleFilterClick_');
          itext('Active');
        ie_close('a');
      ie_close('li');
      ie_open('li');
        ie_open('a', null, null,
            'href', '#/completed',
            'class', opt_data.selectedFilter == 'completed' ? 'selected' : '',
            'data-filter', 'completed',
            'data-onclick', 'handleFilterClick_');
          itext('Completed');
        ie_close('a');
      ie_close('li');
    ie_close('ul');
    ie_open('button', null, null,
        'class', 'clear-completed' + (opt_data.incompleteCount == opt_data.todos.length ? ' hidden' : ''),
        'data-onclick', 'handleClearCompletedClick_');
      itext('Clear completed');
    ie_close('button');
  ie_close('footer');
}
exports.footer = $footer;
if (goog.DEBUG) {
  $footer.soyTemplateName = 'Todo.footer';
}

exports.render.params = ["allCompletedChecked","incompleteCount","selectedFilter","todos","visibleItems"];
exports.render.types = {"allCompletedChecked":"any","incompleteCount":"any","selectedFilter":"any","todos":"any","visibleItems":"any"};
exports.header.params = [];
exports.header.types = {};
exports.list.params = ["todos","visibleItems"];
exports.list.types = {"todos":"any","visibleItems":"any"};
exports.footer.params = ["incompleteCount","selectedFilter","todos"];
exports.footer.types = {"incompleteCount":"any","selectedFilter":"any","todos":"any"};
templates = exports;
return exports;

});

class Todo extends Component {}
Soy.register(Todo, templates);
export { Todo, templates };
export default templates;
/* jshint ignore:end */
