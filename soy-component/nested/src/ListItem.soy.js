/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from ListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.ListItem.
 */

if (typeof Templates.ListItem == 'undefined') { Templates.ListItem = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.ListItem.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="list-group-item" data-onclick="select">' + soy.$$escapeHtml(opt_data.text) + '</li>');
};
if (goog.DEBUG) {
  Templates.ListItem.content.soyTemplateName = 'Templates.ListItem.content';
}

Templates.ListItem.content.params = ["id","text"];

class ListItem extends Component {}
ListItem.RENDERER = SoyRenderer;
SoyAop.registerTemplates('ListItem');
export default ListItem;
/* jshint ignore:end */
