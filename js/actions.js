renderAchievements( achievements );

document.querySelector('.bars').innerHTML = renderSkills( skills );

window.onscroll = barAnimation;