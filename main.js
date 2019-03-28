var timer = setInterval(() => {
    document.querySelector(".loading").style.transition = "1s";
    document.querySelector(".loading").style.opacity = "0"; 
}, 2000);

window.onscroll = function() {navScroll()};

const navScroll = () => {
    var navbar = document.querySelector("#navbar").style;
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {//when scrolled
        navbar.padding = "10px 5px";
        navbar.boxShadow = "0px 8px 5px -2px darkgrey";
        navbar.position = "fixed";
        document.querySelectorAll(".s").forEach(x => x.style.fontSize = "0.8rem");
        
        
    }else{//when at top
        navbar.padding = "25px 10px";
        navbar.boxShadow = "none";
        navbar.position = "fixed";
        navbar.transition = "0.05s ease-in";
        document.querySelectorAll(".s").forEach(x => {x.style.fontSize = "1.2rem"});
        if (document.querySelector(".loading").style.opacity == "0"){
            document.querySelector(".loading").style.display = "none";
        }
    }
}