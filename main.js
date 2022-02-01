// Show Banner
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2000);
}
function showPage() {
    document.getElementById("header").style.display = "block";
}

// Banner
const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
for(var i = 1; i < 400; i++) {
    banner.innerHTML += '<div class="blocks"></div>';
    blocks[i].style.animationDelay = `${i * 0.03}s`;
}

// typewriter    
// function autoType(elementClass, typingSpeed){
//     var thhis = $(elementClass);
//     thhis.css({
//       "position": "relative",
//       "display": "block"
//     });
//     thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
//     thhis = thhis.find(".text-js");
//     var text = thhis.text().trim().split('');
//     var amntOfChars = text.length;
//     var newString = "";
//     thhis.text("|");
//     setTimeout(function(){
//       thhis.css("opacity",1);
//       thhis.prev().removeAttr("style");
//       thhis.text("");
//       for(var i = 0; i < amntOfChars; i++){
//         (function(i,char){
//           setTimeout(function() {        
//             newString += char;
//             thhis.text(newString);
//           },i*typingSpeed);
//         })(i+1,text[i]);
//       }
//     },1500);
// }
  
// Modal
function openModal() {
    document.getElementById("Modal").style.display = "block";
}

