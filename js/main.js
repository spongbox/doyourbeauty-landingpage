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
        var textElmnt = document.getElementById('formsub-title');
        textElmnt.parentNode.removeChild(textElmnt);
        var sp1 = document.createElement("span");
        sp1.setAttribute("id", "confirm_subs");
        var sp1_content = document.createTextNode("Merci ! Votre adresse à bien été prise en compte.");
        sp1.appendChild(sp1_content);
        var sp2 = document.getElementById("email-registration");
        var parentDiv = sp2.parentNode;
        parentDiv.replaceChild(sp1, sp2);
      }
    });
  }
});
