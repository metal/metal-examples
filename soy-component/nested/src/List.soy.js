/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from List.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace List.
 * @public
 */

goog.module('List.incrementaldom');

var soy = goog.require('soy');
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

var $templateAlias1 = Soy.getTemplate('ListItem.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('ul', null, null,
      'class', 'list-group');
    var itemList7 = opt_data.items;
    var itemListLen7 = itemList7.length;
    for (var itemIndex7 = 0; itemIndex7 < itemListLen7; itemIndex7++) {
      var itemData7 = itemList7[itemIndex7];
      $templateAlias1({key: 'item' + itemIndex7, text: itemData7}, null, opt_ijData);
    }
  ie_close('ul');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'List.render';
}

exports.render.params = ["items"];
templates = exports;
return exports;

});

class List extends Component {}
Soy.register(List, templates);
export default templates;
export { List, templates };
/* jshint ignore:end */
