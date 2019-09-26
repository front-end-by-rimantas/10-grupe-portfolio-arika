function renderAchievements() {
    return;
}


function headerScroll() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementsByTagName("header")[0].setAttribute("id", "header-bg");
    } else {
        document.getElementsByTagName("header")[0].removeAttribute("id");
    }
}