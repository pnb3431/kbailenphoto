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

  key: function (file, metaContext) {
    var currentUserId = Meteor.user().emails[0].address;
    
    return currentUserId + "/" + metaContext.albumId + "/" + file.name;

  }

});
Meteor.publish( 'files', function(currentPage){
  
  console.log({currentPage});
  if (currentPage != undefined){
  return Files.find( { "albumId": currentPage } );
  //if ( data ) {
    //return data;
  //}
  }
  //return this.ready();
});

Meteor.methods({
  'removePhotoData': function (selectedPhoto){
    check( selectedPhoto, String );

    // Current User
    var currentUserId = Meteor.userId();

    // Get the URL of the photo they are trying to remove.
    var currentPhoto = Files.findOne( { '_id': selectedPhoto, 'userId': currentUserId }, { fields: { 'url': 1 } } );

    // Our photo bucket, e.g. 'mybucket'
    var bucket =  Meteor.settings.private.AWSBucket;

    // URL string: e.g. https://mybucket.s3.amazonaws.com/images/myimage.jpg is saved in DB,
    // I only want: 'images/myimage.jpg'
    var currentPhotoURL = currentPhoto.url.replace('https://' + bucket + '.s3.amazonaws.com/', '');

    AWS.config.update({
       accessKeyId: Meteor.settings.private.AWSAccessKeyId,
       secretAccessKey: Meteor.settings.private.AWSSecretAccessKey
    });


    var s3 = new AWS.S3();
    var params = {
      Bucket: Meteor.settings.private.AWSBucket, // 'mybucket'
      Key: currentPhotoURL // 'images/myimage.jpg'
    };

    var deleteObject = Meteor.wrapAsync(
      s3.deleteObject(params, function (error, data) {
        if (error) {
          console.log(error);
        }
        else {
          console.log(data);
        }
      })
    );
    // Remove the entry in the database. (Want to only trigger this if there is no error from Amazon).
    Files.remove({_id: selectedPhoto, userId: currentUserId});
  }
});