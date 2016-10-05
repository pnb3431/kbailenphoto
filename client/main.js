




Router.route('/', function () {
  this.render('Home');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/pricing', function () {
  this.render('pricing');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/contact', function () {
  this.render('contact');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/families', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/children', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/babies', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/maternity', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});
Router.route('/seniors', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
});
Router.route('/couples', function () {
  this.render('families');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
});
Router.route('/referrals', function () {
  this.render('referrals');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Router.route('/admin', function () {
  this.render('upload');
  this.render('navbar', {to: 'navbar'});
  this.render('footer', {to: 'footer'});
  this.render('title', {to: 'title'});
  this.layout('ApplicationLayout');
  

});

Template.ApplicationLayout.onRendered(function(){
	$('.parallax').parallax();
	$('.dropdown-button').dropdown();
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
  $('#textarea1').trigger('autoresize')
});

Template.Home.onRendered(function(){
	$('.parallax').parallax();
});

Template.families.onRendered(function(){
	$('.carousel').carousel();
	$('.materialboxed').materialbox();
});
Template.contact.onRendered(function(){
	$('#textarea1').trigger('autoresize')
});

Template.upload.events({
  'change input[type="file"]' ( event, template ) {
    let _getFileFromInput = ( event ) => event.target.files[0];

  let _setPlaceholderText = ( string = "Click or Drag a File Here to Upload" ) => {
    template.find( ".alert span" ).innerText = string;
  };

  let _addUrlToDatabase = ( url ) => {
    Meteor.call( "storeUrlInDatabase", url, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, "warning" );
        _setPlaceholderText();
      } else {
        Bert.alert( "File uploaded to Amazon S3!", "success" );
        _setPlaceholderText();
      }
    });
  };

  let _uploadFileToAmazon = ( file ) => {
    const uploader = new Slingshot.Upload( "uploadToAmazonS3" );

    uploader.send( file, ( error, url ) => {
      if ( error ) {
        Bert.alert( error.message, "warning" );
        _setPlaceholderText();
      } else {
        _addUrlToDatabase( url );
      }
    });
  };

    
  }
});

Template.upload.helpers({
  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  }
});

Template.upload.onCreated( () => Template.instance().subscribe( 'upload' ) );

Template.upload.helpers({
  files() {
    var files = Files.find( {}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  }
});

let _fileExistsInDatabase = ( url ) => {
  return Files.findOne( { "url": url, "userId": Meteor.userId() }, { fields: { "_id": 1 } } );
};

let _isNotAmazonUrl = ( url ) => {
  return ( url.indexOf( 's3.amazonaws.com' ) < 0 );
};

let _validateUrl = ( url ) => {
  if ( _fileExistsInDatabase( url ) ) {
    return { valid: false, error: "Sorry, this file already exists!" };
  }

  if ( _isNotAmazonUrl( url ) ) {
    return { valid: false, error: "Sorry, this isn't a valid URL!" };
  }

  return { valid: true };
};

let validate = ( url ) => {
  let test = _validateUrl( url );

  if ( !test.valid ) {
    throw new Meteor.Error( "file-error", test.error );
  }
};







Meteor.methods({
  storeUrlInDatabase: function( url ) {
    check( url, String );
    Modules.both.checkUrlValidity( url );

    try {
      Files.insert({
        url: url,
        userId: Meteor.userId(),
        added: new Date() 
      });
    } catch( exception ) {
      return exception;
    }
  }
});

Modules      = {};
Modules.client = {};

