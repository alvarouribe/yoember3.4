import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');
      this.set('loading', true);
      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then(response => {
        console.log('Response received', response);
        this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
        this.set('loading', false);
      })

    }
  }

}); 