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
    
    app.changePage = (page) => {
        About.hide();
        Projects.hide();
        Contact.hide();
        logo.hide();
        page.fadeIn();
        app.navList.fadeOut();
        app.menu.removeClass('hamburgeranimX');
        app.toggleHamburger = false;
    }

    app.navList.children().on('click', function(){
        const text = $(this).text();
        if(text === 'About'){
            app.changePage(About);
        }else if(text === 'Contact'){
            app.changePage(Contact);
        }else{
            app.changePage(Projects);
        }
    })
}

app.handleUserJourney = () => {
    const step1 = $('.linkAbout');
    const step2 = $('.linkProjects');
    const step3 = $('.linkContact')
    const About = $('#about');
    const Projects = $('#projects');
    const Contact = $('#contact');
    const logo = $('#logo-svg');

    step1.on('click', function(){
        About.fadeIn();
        Projects.hide();
        Contact.hide();
        logo.hide();
    })

    step2.on('click', function () {
        About.hide();
        Projects.fadeIn();
        Contact.hide();
        logo.hide();
    })

    step3.on('click', function () {
        About.hide();
        Projects.hide();
        Contact.fadeIn();
        logo.hide();
    })
}

app.init = () => {
    $('.nav__list').css('display', 'none');
    // app.nameChange();
    app.toggleNav();
    app.handleNavPages();
    app.handleUserJourney();
}
//document.ready
$(function(){
    app.init();
});