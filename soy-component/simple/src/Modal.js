'use strict';

import ModalBase from './Modal.soy';

class Modal extends ModalBase {
	hide() {
		this.visible = false;
	}
}

export default Modal;
