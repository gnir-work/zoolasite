function login() {
    $.post('/admin/login', {username: $("#username").val(), password: $("#password").val()}, function (data) {
        console.log('success');
        window.location.href = "/admin/"
    }).fail(function (data) {
        messageContainer = $("#bad-login-message");
        messageContainer.find(".message").text(data.responseText);
        messageContainer.show();
        setTimeout(function () {
            $("#bad-login-message").hide();
        }, 5000);
    })

}

function showPassword() {
    var $password = $('#password');
    var key_attr = $password.attr('type');

    if (key_attr != 'text') {

        $('.checkbox').addClass('show');
        $password.attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $password.attr('type', 'password');

    }

}