'use strict';

/**
 * At the end of `Modal.soy.js`, a component was automatically
 * generated and exported. This is being imported here
 * as `ModalBase`.
 */
import ModalBase from './Modal.soy';

/**
 * The `Modal` class is extending from the class exported
 * from its soy file to add more behavior to it. `ModalBase`
 * could be used directly if no customization was needed
 * though.
 */
class Modal extends ModalBase {
	/**
	 * This function is used as a listener by the soy file.
	 * @param  {!Event} event
	 */
	hide() {
		// All Metal.js components already have a `visible`
		// attribute, which sets the main element's `display`
		// to "none" when set to false.
		this.visible = false;
	}
}

export default Modal;
