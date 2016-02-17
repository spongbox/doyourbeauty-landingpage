var form = document.getElementById('email-registration');

var FirebaseRef = new Firebase("https://doyourbeauty.firebaseio.com/");
var emailsRef = FirebaseRef.child('emails');


form.querySelector("button").addEventListener('click', function () {
  if (form.querySelector('input').checkValidity()) {
    emailsRef.push({
      email: form.querySelector('input').value,
      timestamp: Firebase.ServerValue.TIMESTAMP
    }, function (error) {
      if (error != null) {
        console.log('error');
      } else {
        console.log('success');
      }
    });
  }
});
