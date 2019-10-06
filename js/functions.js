function renderAchievements() {
    return;
}

//back to top
let button = document.getElementById("btn");
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
                        <div class="photo">
                            <img src="./img/portfolio/${obj.image}.jpg">
                        </div>
                        <div class="link">
                            <div class="background">
                            </div>
                            <h3></h3>
                        </div>
                    </div>`
        }
    }
    return document.getElementById(target).innerHTML = HTML;
}

