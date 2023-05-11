function fun() {
    console.log("PROCCESSING")
    window.location = "anotherpage.html"
}

function fun2() {
    console.log("PROCCESSING")
    window.location = "index.html"
}

function hi() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var topic = document.getElementById("topic").value;
    var pages = document.getElementById("pages").value;
    var date = document.getElementById("date").value;
    var img = document.getElementById("img").value;
    var yes = document.getElementById("yes").value;
    var no = document.getElementById("no").value;
    var ac = document.getElementById("ac").value;

    whatsapp_url = "https://wa.me/9980276524?text=" + "Name : " + name + "%0a" + "Phone : " + phone + "%0a" + "Topic : " + topic + "%0a" + "Pages : " + pages + "%0a" + "Date : " + date + "%0a" + "Images : " + img + "%0a" + "Color : " + yes + "%0a" + "Booking Section : " + no + "%0a" + "Comments : " + ac;

    window.open(whatsapp_url,"_blank").focus();
}

function numberonly(input)
{
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");
}