import './modal.scss';
import templates from './Modal.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Modal extends Component {
	close() {
	  this.dispose();
	}
}
Soy.register(Modal, templates);

export default Modal;