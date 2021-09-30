 document.body.scrollTop=0;
// document.documentElement.scrollTop=0;
window.onscroll = function () {
    scrollFunction();

};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".left-bar-box").css("position", "fixed");
        $(".left-bar-box").css("position", "fixed");
    }
}

