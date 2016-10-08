var imageDetails = new Mongo.Collection('images');

Slingshot.fileRestrictions("myImageUploads", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 5 * 1024 * 1024,
});

Slingshot.createDirective("myImageUploads", Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.private.AWSAccessKeyId,
  AWSSecretAccessKey: Meteor.settings.private.AWSSecretAccessKey,
  bucket: Meteor.settings.private.AWSBucket, 
  

  authorize: function () {
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