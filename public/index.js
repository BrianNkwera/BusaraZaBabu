const text = '<%-message%>'
document.querySelector(".mockup-msg3").addEventListener("animationend", function(){
    document.querySelector(".babu").innerHTML=`<p></p>${text}<span class="time">Just now</span>`;
});
