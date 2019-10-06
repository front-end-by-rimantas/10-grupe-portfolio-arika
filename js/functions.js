function renderAchievements() {
    return;
}

//back to top
let button = document.getElementById("btn");
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//progress bar
function renderSkills (data) {
    let HTML = '';

    data.forEach(skill => {
        if(!skill.title ||
        typeof(skill.title) !== 'string' ||
        skill.title.length === 0 ||
        skill.title.length > 20 ||
        !skill.value ||
        typeof(skill.value) !== 'number' ||
        skill.value > 100 ||
        skill.value < 0) {
            return;
        }
        let value = skill.value;
        if ( value % 1 !== 0 ) {
            value = Math.round(value * 100) / 100;
        }

        HTML += `<div class="progress-bar">
                    <span>${skill.title}</span>
                    <div class="progress-number">${value}%</div>
                    <div class="bar">
                        <div class="bar-width" style="width: ${value}%"></div>    
                    </div>
                </div>`;
    });

    return HTML;
}

function isInView(el) {
    let elBottom = el.getBoundingClientRect().bottom - window.innerHeight;
    if(elBottom < 0) {
        return true;
    } else {
        return false;
    }
}

function barAnimation() {
    let arr = document.getElementsByClassName('bar-width');
    for(let i=0; i<arr.length; i++) {
        if(isInView(arr[i])) {
            arr[i].style.visibility = 'visible';
            arr[i].classList.add('bar-animation');
        }
    }
}


//My Services
function renderServices(target, data) {
    let HTML = '';
    let quantity = 0;

    for (i=0; i<data.length; i++) {
        const obj = data[i];

        if (!obj.icon ||
            !obj.title ||
            !obj.p) {
                continue;
            }
        if (quantity === 6) {
            break;
        }
        if (obj.p) {
            HTML += `<div class="service">
                        <img src="./img/icons/${obj.icon}.png">
                        <h4>${obj.title}</h4>
                        <p>${obj.p}</p>
                    </div>`
            quantity++;
        }
    }
    return document.getElementById(target).innerHTML = HTML;
}


//Testimonials
function renderTestimonials( target, data ) {
    let HTML = '';
    let slides = 0;

    for ( i=0; i<data.length; i++ ) {
        const obj = data[i];

        if ( !obj.img ||
            !obj.text ||
            !obj.author ||
            !obj.position ) {
                continue;
            }
        if ( slides === 4 ) {
            break;
        }
        if ( obj.position ) {
        HTML += `<div class="testimonial-slide">
                    <img src="./img/team/${obj.img}.jpg">
                    <p>${obj.text}</p>
                    <h5>${obj.author}</h5>
                    <p>${obj.position}</p>
                </div>`
        slides++;
        }
    }

    return document.getElementById(target).innerHTML = HTML;
}


//Latest blogs//

function renderBlogs(target, data) {
    let HTML = '';

    for (i=0; i<data.length; i++) {
        const obj = data[i];

        if (!obj.pic ||
            !obj.date ||
            !obj.section) {
                continue;
        }
        else {
            HTML += `<div class="block">
                        <div class="img">
                            <img src="./img/blog/${obj.pic}.jpg">
                        </div>
                        <span>${obj.date}</span>
                        <span>${obj.section}</span>
                        <a href="#" class="section">${obj.title}</a>
                        <p>${obj.p}</p>
                        <a href="#" class="read">${obj.read}</a>
                    </div>`
            
        }
    }
    return document.getElementById(target).innerHTML = HTML;
}

//Latest blogs//

//Contact part//

function renderContacts(target, data) {
    let HTML = '';

    for(i=0; i<data.length; i++) {
        const obj = data[i];

        if(!obj.icon ||
            !obj.title ||
            !obj.contact){
              continue;  
        }
        if(obj.contact) {
            HTML += `<div class="info">
                        <div class="img">
                            <img src="./img/icons/${obj.icon}.png">
                        </div>    
                        <div class="details">
                            <h4>${obj.title}</h4>
                            <p>${obj.contact}</p>
                        </div>
                    </div>`
        }
    } 
    return document.getElementById(target).innerHTML = HTML;
}

//Latest Works//

function renderWorks(target, data) {
    let HTML = '';

    for(i=0; i<data.length; i++) {
        const obj = data[i];

        if(!obj.image) {
            continue;
        }
        if(obj.image) {
            HTML+= `<div class="unit">
                        <div class="photo" style="background-image: url(./img/portfolio/${obj.image}.jpg)">
                            <div class="link">
                                <a href="#"></a>
                            </div>
                            <h5>Our Photography</h5> 
                        </div>
                    </div>`
        }
    }
    return document.getElementById(target).innerHTML = HTML;
}

// instagram icons
function renderFooter( target, data ) {
    let HTML = '';
    let amount = 0;

    for( i=0; i<data.length-3; i++ ) {
        const obj = data[i];

        if ( !obj.image ) {
            continue;
        }

        if ( amount.length === 6 ) {
            break;
        }

        if ( obj.image ) {
            HTML +=`<div class="instagram-icons">
                        <img src="./img/portfolio/${obj.image}.jpg">
                    </div>`
        }
    }
    return document.getElementById(target).innerHTML = HTML;
}
