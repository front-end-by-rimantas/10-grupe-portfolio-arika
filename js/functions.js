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
            HTML += `<div class="block">
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