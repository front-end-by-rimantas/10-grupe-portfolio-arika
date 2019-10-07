
//renderAchievements( achievements );


window.onscroll = window.headerScroll;

window.onload = window.headerScroll;

window.onresize = changeWidth;

renderAchievements( achievements );

renderServices( 'services', services );

renderFooter( 'insta-icons', works );

//progress bar
document.querySelector('.bars').innerHTML = renderSkills( skills );

window.onscroll = barAnimation;


//testimonials
renderTestimonials ( 'testimonials', testimonials );

renderBlogs ('blogs', blogs);

renderContacts ('contacts', contacts);

renderWorks ('works', works);


