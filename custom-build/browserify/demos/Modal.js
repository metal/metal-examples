import Modal from '../src/Modal';

window.modal = new Modal({
	header: 'Modal header',
	body: 'Modal body',
	footerButtons: [
		{
			label: 'Ok',
			class: 'btn btn-primary'
		}
	]
});
