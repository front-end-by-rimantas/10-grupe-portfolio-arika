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

function menuClick() {
    var doc = document.getElementById('nav');
    if(doc.classList[0] == 'nav-show'){        
        doc.classList.replace('nav-show','nav'); 
        return;   
    }
    doc.classList.replace('nav', 'nav-show');
}

function pagesClick() {
    var doc = document.getElementById('pages-dropdown');
    if(doc.classList[0] == 'p-m-dropdown'){
        doc.classList.replace('p-m-dropdown', 'pages-dropdown');
        return;
    }
    doc.classList.replace('pages-dropdown', 'p-m-dropdown');
}