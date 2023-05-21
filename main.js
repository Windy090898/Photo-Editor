var img = document.querySelector('.img')
var submitBtn = document.querySelector('.submit-btn');
var brightRange = document.querySelector('.input-brightness')
var contrastRange = document.querySelector('.input-contrast')
var hueRange = document.querySelector('.input-hue')
var blurRange = document.querySelector('.input-blur')
var saturateRange = document.querySelector('.input-saturate')
var sepiaRange = document.querySelector('.input-sepia')
var urlInput = document.querySelector('.form-control')


/**When click submit button:
 * Change img url
 * Clear img url in input field
 * Set default value for img and editor
 * Change photo value when user adjust
 */

submitBtn.onclick = function() {

    // Change img url
    img.src = urlInput.value;

    // Clear img url in input field
    setTimeout(function() {
        urlInput.value = '';
    }, 10)

    // Set default value for img and editor
    setDefault();   
}


function adjustImg() {
    var filtered = 
    "brightness(" + brightRange.value + "%) " +
    "contrast(" + contrastRange.value + "%) " +
    "hue-rotate(" + hueRange.value + "deg) " +
    "blur(" + blurRange.value + "px) " +
    "saturate(" + saturateRange.value + "%) " +
    "sepia(" + sepiaRange.value + "%)";

    img.style.filter = filtered;
}


brightRange.oninput = contrastRange.oninput = hueRange.oninput = 
blurRange.oninput = saturateRange.oninput = sepiaRange.oninput = adjustImg


function setDefault() {
    // Reset photo editor to default
    brightRange.value = 100;
    contrastRange.value = 100;
    hueRange.value = 0;
    blurRange.value = 0;
    saturateRange.value = 100;
    sepiaRange.value = 0;

    // Clear filter of img
    img.style.filter = 'none'
}