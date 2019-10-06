function renderAchievements() {
    return;
}

//back to top
let button = document.getElementById("btn");
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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

// instagram icons
function renderWorks( target, data ) {
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
