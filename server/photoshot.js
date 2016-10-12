var imageDetails = new Mongo.Collection('images');

Slingshot.fileRestrictions("myImageUploads", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 5 * 1024 * 1024,
});

Slingshot.createDirective("myImageUploads", Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.private.AWSAccessKeyId,
  AWSSecretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
  acl: "public-read",
  bucket: Meteor.settings.private.AWSBucket, 
  

  authorize: function () {
    let userFileCount = Files.find( { "userId": this.userId } ).count();
    if (!this.userId) {
      var message = "Please login before posting images";
      throw new Meteor.Error("Login Required", message);
    }

    
    return true;
  },

  key: function (file) {
    var currentUserId = Meteor.user().emails[0].address;
    return currentUserId + "/" + file.name;
  }

});
Meteor.publish( 'files', function(){
  var data = Files.find( { "userId": this.userId } );

  if ( data ) {
    return data;
  }

  return this.ready();
});