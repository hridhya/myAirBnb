/**
 * Created by hridhya on 3/13/16.
 */
Meteor.publish('userData', function() {
  var currentUser;
  currentUser = this.userId;
  if (currentUser) {
    return Meteor.users.find({
      _id: currentUser
    }, {
      fields: {
        'emails': 1,
        'profile': 1
      }
    });
  } else {
    return this.ready();
  }
});

Accounts.onCreateUser(function(options, user){
  user.profile = options.profile || {};

  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;

  return user;
});

Accounts.config({
  sendVerificationEmail: true
});