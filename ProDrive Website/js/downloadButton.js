var computerButton = document.getElementById("computerButton");
var mobileButton = document.getElementById("mobileButton");

function isMobile(){
    return /Android|iPhone/i.test(navigator.userAgent);
}
console.log(isMobile());

if(isMobile()){
    mobileButton.style.display = 'block';
    computerButton.style.display = 'none';
}
else{
    computerButton.style.display = 'block';
    mobileButton.style.display = 'none';
}