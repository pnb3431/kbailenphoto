Meteor.methods({
  storeUrlInDatabase: function( url ) {
    //  check( url, String );
    

    try {
      Files.insert({
        url: url,
        userId: Meteor.userId(),
        added: new Date(), 
        albumId: selectValue
      });
    } catch( exception ) {
      return exception;
    }
  }
});
Files = new Meteor.Collection( 'files' );