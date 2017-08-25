import './modal.scss';
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
					<header class="modal-header">
						<button onClick={this.close.bind(this)} type="button" class="close">
							<span>×</span>
						</button>
						<h4>{this.props.header}</h4>
					</header>
					<section class="modal-body">
						{this.props.body}
					</section>
					<footer class="modal-footer">
						<button type="button" class="btn btn-primary">OK</button>
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
