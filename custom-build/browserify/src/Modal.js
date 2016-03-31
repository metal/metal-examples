'use strict';

/**
 * The soy template functions are automatically exported by `Modal.soy.js`.
 */
import templates from './Modal.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Modal extends Component {
	/**
	 * This function is used as a listener by the soy file.
	 * @param  {!Event} event
	 */
	hide() {
		// All Metal.js components already have a `visible` state which sets the
		// main element's `display` to "none" when set to false.
		this.visible = false;
	}
}
// This line is declaring that `Modal` will be using the given soy templates for
// rendering itself.
Soy.register(Modal, templates);

export default Modal;
