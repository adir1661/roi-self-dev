//form goes here....
$(function () {
    // Get the form.
    var form = $('#contactForm');

    // Get the messages div.
    var message = $('#message');
    var last = $('#last');
    var email = $('#email');
    var name = $('#name');
    $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        var emailData = email.val();
        var lastData = last.val();
        var messageData = message.val();
        var nameData = name.val();
        if (formValidate(email,last,name)) {
            db.collection("signs").add({
                created: firebase.firestore.FieldValue.serverTimestamp(),
                email: emailData,
                name: nameData,
                last: lastData,
                message: messageData
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }
    });


});
function formValidate(email,last,name) {
    let flag = true;
    if(!name.val()) {
        informUser("נא למלא שם")
        flag = false;
    }
    if(!last.val()){
        informUser("נא למלא שם משפחה");
        flag =false;
    }
    if(!validateEmail(email.val())){
        informUser("נא למלא אימיל אמיתי")
        flag = false;
    }
    return flag;
}
function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function informUser(stringFill) {
    // $("#errors").append("<p>"+stringFill+"</p>")


}