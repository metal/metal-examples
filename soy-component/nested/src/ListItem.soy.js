/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ListItem.
 * @public
 */

goog.module('ListItem.incrementaldom');

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
  ie_open('li', null, null,
      'class', 'list-group-item',
      'data-onclick', 'select');
    itext((goog.asserts.assert((opt_data.text) != null), opt_data.text));
  ie_close('li');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ListItem.render';
}

exports.render.params = ["text"];
exports.render.types = {"text":"any"};
templates = exports;
return exports;

});

class ListItem extends Component {}
Soy.register(ListItem, templates);
export { ListItem, templates };
export default templates;
/* jshint ignore:end */
