window.onscroll = function() {navScroll()};

const navScroll = () => {
    var navbar = document.querySelector("#navbar").style;
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {//when scrolled
        navbar.padding = "5px 5px";
        navbar.boxShadow = "0px 8px 5px -2px darkgrey";
        navbar.position = "fixed";
        navbar.left = "11.5%";
        navbar.transition = "none";
        document.querySelectorAll(".s").forEach(x => x.style.fontSize = "0.8rem");
    }else{//when at top
        navbar.padding = "40px 10px";
        navbar.borderBottom = "none";
        navbar.boxShadow = "none";
        navbar.position = "relative";
        navbar.left = "11.5%";
        navbar.transition = "0.2s ease-in";
        document.querySelectorAll(".s").forEach(x => x.style.fontSize = "1.2rem");
    }
}