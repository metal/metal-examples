/* jshint ignore:start */
import Component from 'metal-component';
import { SoyAop, SoyRenderer, SoyTemplates } from 'metal-soy';
var Templates = SoyTemplates.get();
// This file was automatically generated from List.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.List.
 */

if (typeof Templates.List == 'undefined') { Templates.List = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.render = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="list-group">';
  var itemList6 = opt_data.items;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += Templates.ListItem.render({id: opt_data.id + '-item' + itemIndex6, text: itemData6}, null, opt_ijData);
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.List.render.soyTemplateName = 'Templates.List.render';
}

Templates.List.render.params = ["id","items"];

class List extends Component {}
List.RENDERER = SoyRenderer;
SoyAop.registerTemplates('List');
export default List;
/* jshint ignore:end */
