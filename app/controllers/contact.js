import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',

	isValid: Ember.computed.and('emailIsValid', 'messageIsValid'),

	emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

	messageIsValid: Ember.computed.gte('message.length', 5),

	isDisabled: Ember.computed.not('isValid'),

	actions: {

		sendMessage() {
			alert(`${this.get('emailAddress')}<br>${this.get('message')}`);
			this.set("responseMessage", 'We got your message and will get in touch soon');
			this.set('emailAddress', '');
		}
	}

});
