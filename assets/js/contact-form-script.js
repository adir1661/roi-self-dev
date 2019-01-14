//form goes here....
$(function () {
    // Get the form.
    var form = $('#contactForm');

    // Get the messages div.
    var message = $('#message');
    var last = $('#last');
    var email = $('#email');
    var phone = $('#phone');
    var name = $('#name');
    $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        var emailData = email.val();
        var phoneData = phone.val();
        var lastData = last.val();
        var messageData = message.val();
        var nameData = name.val();
        if (formValidate(email,last,name)) {

            db.collection("signs").add({
                created: firebase.firestore.FieldValue.serverTimestamp(),
                email: emailData,
                name: nameData,
                last: lastData,
                message: messageData,
                phone:phoneData
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    $(".inform-subscribe").removeClass("hidden-sub");
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }
    });


});
function formValidate(email,last,name,phone) {
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
    if(!validPhone(phone)){
        console.log("phone incorrect")
        flag = false;
    }
    return flag;
}
function validateEmail(email){
    if(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    else return true;
}
function validPhone(phone){
    // var re =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // return re.test(phone)
    return true;
}
function informUser(stringFill) {
    // $("#errors").append("<p>"+stringFill+"</p>")


}


//TODO: rmove links :instagram etc. , add whatsapp link and fb link, fix form to inform user when he signed in , change content accurding to roi