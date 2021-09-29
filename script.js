$(function() {
    debugger
    let url = window.location.href;
    let extraUrl = url.split('?')[1];

    const fNameEl = $('#firstNameElement');
    const lNameEl = $('#lastNameElement')

    if(extraUrl){
        let firstName = extraUrl.split('.')[0].toUpperCase();
        let lastName = extraUrl.split('.')[1].toUpperCase();

        if(firstName && lastName){
            fNameEl.html(firstName);
            lNameEl.html(lastName);
        }
    }
});
