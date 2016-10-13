import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	//set up mailgun to send email
  	process.env.MAIL_URL = Meteor.settings.private.mailgun;
  	
});

//email the contact form is sent to
Meteor.settings.contactForm = {
  emailTo: 'pete.bailen@gmail.com'
};

