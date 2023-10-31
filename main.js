// navbar
hamburger = document.querySelector(".hamburger"); // querySelector hwa bach katwsal ll3nser
        hamburger.onclick = function(){
            navBar = document.querySelector(".nav-bar");
            navBar.classList.toggle("active"); // toggle katmakni fach nklicki 3la xhi 3nser tla3 navbar wclick  tani t7ayd
        }

// scroll up
let btn = document.getElementById('btn');
window.onscroll = function(){
    if(scrollY >= 400)
    {
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
btn.onclick = function(){
    scroll ({
        left : 0,
        top :0,
        behavior:"smooth"
    })
}
}