var uploader = new ReactiveVar();
var imageDetails = new Mongo.Collection('images'); 
var currentUserId = Meteor.userId();

Template.imageUploader.events({'change .uploadFile': function(event, template) {

  event.preventDefault();
  var metaContext = {albumId: selectValue}
  var upload = new Slingshot.Upload("myImageUploads", metaContext);
  var timeStamp = Math.floor(Date.now());                 
         
  upload.send(document.getElementById('uploadFile').files[0], function (error, Url) {
  uploader.set();
  if (error) {
    Materialize.toast('Error uploading', 4000);
    alert (error);
  }
  else{
    Materialize.toast("Success!",4000);
    Materialize.toast('uploaded file available here: '+Url,4000);
    _addUrlToDatabase( Url, selectValue );
    imageDetails.insert({
      imageurl: Url,
      time: timeStamp,
      uploadedBy: currentUserId,
      albumId: selectValue
    });

  }
  });
  uploader.set(upload);
  }
});

Template.imageUploader.helpers({

  isUploading: function () {
    return Boolean(uploader.get());
  },

  progress: function () {
  var upload = uploader.get();
  if (upload)
    return Math.round(upload.progress() * 100);
  },

  url: function () {

  return imageDetails.findOne({uploadedBy: currentUserId},{sort:{ time : -1 } });


  },

});



let _addUrlToDatabase = ( url, selectValue ) => {
  Meteor.call( "storeUrlInDatabase", url, selectValue, ( error ) => {
    if ( error ) {
      Materialize.toast( error.reason, "warning" );
      
    } else {
      Materialize.toast( "File uploaded to Amazon S3!", 4000 );
      
    }
  });
};

//Template.files.onCreated( () => Template.instance().subscribe( 'files' ) );

Template.files.helpers({
  files() {
    var files = Files.find( {}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  }
});

Template.file.helpers({
  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  }
});

Template.imageUploader.events({
  'change select': function(event){
    event.preventDefault();
      selectValue = event.target.value;
      console.log(selectValue);
      
  }
});

