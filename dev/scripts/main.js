const app = {};

app.navList = $('.nav__list');

//variables
app.menu = $('.menu');
app.toggleHamburger = false;

app.toggleNav = () => {
    app.menu.on('click', function(){
        $('.nav__list').css('display', 'flex');
        if(app.toggleHamburger){
            app.menu.removeClass('hamburgeranimX');
            app.navList.fadeOut();
            app.toggleHamburger = false;
        }else{
            app.menu.addClass('hamburgeranimX');
            app.navList.fadeIn();
            app.toggleHamburger = true; 
        };
    });
};

app.handleNavPages = () => {
    //grabbing var for pages
    const About = $('#about');
    const Projects = $('#projects');
    const Contact = $('#contact');
    const logo = $('#logo-svg');
    
    app.navList.children().on('click', function(){
        const text = $(this).text();
        if(text === 'About'){
            About.fadeIn();
            Projects.hide();
            Contact.hide();
            logo.hide();
            app.navList.fadeOut();
            app.menu.removeClass('hamburgeranimX');
            app.toggleHamburger = false;
        }else if(text === 'Contact'){
            Contact.fadeIn();
            About.hide();
            Projects.hide();
            logo.hide();
            app.navList.fadeOut();
            app.menu.removeClass('hamburgeranimX');
            app.toggleHamburger = false;
        }else{
            Projects.fadeIn();
            About.hide();
            Contact.hide();
            logo.hide();
            app.navList.fadeOut();
            app.menu.removeClass('hamburgeranimX');
            app.toggleHamburger = false;
        }
    })

}

app.init = () => {
    $('.nav__list').css('display', 'none');
    app.toggleNav();
    app.handleNavPages();
}
//document.ready
$(function(){
    app.init();
    // app.threeScene();
});