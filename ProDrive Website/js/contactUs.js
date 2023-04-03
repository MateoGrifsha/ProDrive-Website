function printing(){
let contactName = document.getElementById("contactName").value;
let contactLastName = document.getElementById("contactLastName").value;
let contactEmail = document.getElementById("contactEmail").value;
let contactSubject = document.getElementById("contactSubject").value;
let contactMessage = document.getElementById("contactMessage").value;

let button = document.getElementById("contactButton");

// https://mail.google.com/mail/?view=cm&fs=1&to=info.dentalapp@gmail.com&su=Perparim+is+interested+in+purchasing+Trip%20to%20Valbon%C3%AB&body=Price:6990.%0D%0ADuration:10%20days.%0D%0ADistance:267%20km

let hrefText = `https://mail.google.com/mail/?view=cm&fs=1&to=prodrivegame@gmail.com&su=${contactSubject}&body=${contactMessage}`;
button.setAttribute("href", hrefText);
}