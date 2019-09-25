function renderAchievements() {
    return;
}


function renderSkills (data) {
    let HTML = '';

    data.forEach(skill => {
        if(!skill.title ||
        typeof(skill.title) !== 'string' ||
        skill.title === 0 ||
        skill.title > 50 ||
        !skill.value ||
        typeof(skill.value) !== 'number' ||
        skill.value > 100 ||
        skill.value < 0) {
            return
        }
        let value = skill.value;
        if ( value % 1 !== 0 ) {
            value = Math.round(value * 100) / 100;
        }

        HTML += `<div class="progress-bar">
                    <span>${skill.title}</span>
                    <div class="bar">
                        <div class="bar-width" style="width: ${value}%">
                            <div class="progress-number">${value}%</div>
                        </div>    
                    </div>
                </div>`
    });

    return HTML;
}