window.onscroll = function() {navScroll()};

const navScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("#navbar").style.padding = "20px 5px";
        document.querySelector("#navbar").style.boxShadow = "0px 8px 5px -2px darkgrey";
        document.querySelectorAll(".s").forEach(x => x.style.fontSize = ".5rem")
        document.getElementById("navbar").style.position = "fixed";
    }else{
        document.querySelector("#navbar").style.padding = "40px 10px";
        document.querySelector("#navbar").style.borderBottom = "none";
        document.querySelector("#navbar").style.boxShadow = "none";
        document.querySelectorAll(".s").forEach(x => x.style.fontSize = "1.2rem")
        document.getElementById("navbar").style.position = "relative";

    }
}