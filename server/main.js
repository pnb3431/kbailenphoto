import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.settings.contactForm = {
  emailTo: 'pete.bailen@gmail.com'
};
