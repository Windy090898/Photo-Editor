var img = document.querySelector('.img')
var submitBtn = document.querySelector('.submit-btn');


submitBtn.onclick = function() {
    var imgUrl = document.querySelector('.form-control').value;
    img.src = imgUrl;
}

var brightRange = document.querySelector('.input-brightness')
console.log([brightRange])
brightRange.oninput = function(e) {
    var brightValue = e.target.valueAsNumber;
    img.style.filter = `brightness(${brightValue}%)`
    console.log(brightValue)
}