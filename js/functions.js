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
