import JSXComponent from 'metal-jsx';

class CloseHeader extends JSXComponent {
	render() {
		return <header>
			<button onClick={this.props.onClick} type="button" class="close">
				<span>×</span>
			</button>
			<h4>{this.props.title}</h4>
		</header>;
	}
}

export default CloseHeader;
