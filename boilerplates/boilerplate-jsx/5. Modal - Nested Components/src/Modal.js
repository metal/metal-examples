import './modal.scss';
import CloseHeader from './CloseHeader';
import JSXComponent from 'metal-jsx';

class Modal extends JSXComponent {
	close() {
	  this.state.shown = false;
	}

	render() {
		var cssClass = 'modal';
		if (this.state.shown) {
			cssClass += 'show';
		}
		return <div class={cssClass}>
			<div class="modal-dialog">
				<div class="modal-content">
					<CloseHeader
						elementClasses="modal-header"
						onClick={this.close.bind(this)}
						title={this.props.header}
					/>
					<section class="modal-body">
						{this.props.body}
					</section>
					<footer class="modal-footer">
						<button type="button" class="btn bt5n-primary">OK</button>
					</footer>
				</div>
			</div>
		</div>;
	}
}

Modal.STATE = {
	shown: {
		// The default value will be: `true`.
		value: true
	}
};

Modal.PROPS = {
	body: {
		value: 'Default body'
	},
	header: {
		value: 'Default header'
	}
};

export default Modal;