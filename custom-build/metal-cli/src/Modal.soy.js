/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from Modal.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Modal.
 */

if (typeof Templates.Modal == 'undefined') { Templates.Modal = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="modal"><div class="modal-dialog"><div class="modal-content">' + Templates.Modal.header(opt_data, null, opt_ijData) + Templates.Modal.body(opt_data, null, opt_ijData) + Templates.Modal.footer(opt_data, null, opt_ijData) + '</div></div></div>');
};
if (goog.DEBUG) {
  Templates.Modal.content.soyTemplateName = 'Templates.Modal.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.body = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="modal-body">' + soy.$$escapeHtml(opt_data.body) + '</section>');
};
if (goog.DEBUG) {
  Templates.Modal.body.soyTemplateName = 'Templates.Modal.body';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.footer = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<footer id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="modal-footer">';
  if (opt_data.footerButtons) {
    var buttonList22 = opt_data.footerButtons;
    var buttonListLen22 = buttonList22.length;
    for (var buttonIndex22 = 0; buttonIndex22 < buttonListLen22; buttonIndex22++) {
      var buttonData22 = buttonList22[buttonIndex22];
      output += '<button type="button" class="' + soy.$$escapeHtmlAttribute(buttonData22['class']) + '">' + soy.$$escapeHtml(buttonData22.label) + '</button>';
    }
  }
  output += '</footer>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Modal.footer.soyTemplateName = 'Templates.Modal.footer';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Modal.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="modal-header"><button type="button" class="close" data-onclick="hide"><span>\u00D7</span></button><h4>' + soy.$$escapeHtml(opt_data.header) + '</h4></header>');
};
if (goog.DEBUG) {
  Templates.Modal.header.soyTemplateName = 'Templates.Modal.header';
}

Templates.Modal.content.params = ["id"];
Templates.Modal.body.params = ["id","body"];
Templates.Modal.footer.params = ["footerButtons","id"];
Templates.Modal.header.params = ["header","id"];

class Modal extends Component {}
Modal.RENDERER = SoyRenderer;
SoyAop.registerTemplates('Modal');
export default Modal;
/* jshint ignore:end */
