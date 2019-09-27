function renderAchievements() {
    return;
}


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