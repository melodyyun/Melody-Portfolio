'use strict';

var app = {};

app.navList = $('.nav__list');

//variables
app.menu = $('.menu');
app.toggleHamburger = false;

app.toggleNav = function () {
    app.menu.on('click', function () {
        $('.nav__list').css('display', 'flex');
        if (app.toggleHamburger) {
            app.menu.removeClass('hamburgeranimX');
            app.navList.fadeOut();
            app.toggleHamburger = false;
        } else {
            app.menu.addClass('hamburgeranimX');
            app.navList.fadeIn();
            app.toggleHamburger = true;
        };
    });
};

app.handleNavPages = function () {
    //grabbing var for pages
    var About = $('#about');
    var Projects = $('#projects');
    var Contact = $('#contact');
    var logo = $('#logo-svg');

    app.navList.children().on('click', function () {
        var text = $(this).text();
        if (text === 'About') {
            About.fadeIn();
            Projects.hide();
            Contact.hide();
            logo.hide();
            app.navList.fadeOut();
            app.menu.removeClass('hamburgeranimX');
            app.toggleHamburger = false;
        } else if (text === 'Contact') {
            Contact.fadeIn();
            About.hide();
            Projects.hide();
            logo.hide();
            app.navList.fadeOut();
            app.menu.removeClass('hamburgeranimX');
            app.toggleHamburger = false;
        } else {
            Projects.fadeIn();
            About.hide();
            Contact.hide();
            logo.hide();
            app.navList.fadeOut();
            app.menu.removeClass('hamburgeranimX');
            app.toggleHamburger = false;
        }
    });
};

app.handleUserJourney = function () {
    var step1 = $('.linkAbout');
    var step2 = $('.linkProjects');
    var step3 = $('.linkContact');
    var About = $('#about');
    var Projects = $('#projects');
    var Contact = $('#contact');
    var logo = $('#logo-svg');

    step1.on('click', function () {
        About.fadeIn();
        Projects.hide();
        Contact.hide();
        logo.hide();
    });

    step2.on('click', function () {
        About.hide();
        Projects.fadeIn();
        Contact.hide();
        logo.hide();
    });

    step3.on('click', function () {
        About.hide();
        Projects.hide();
        Contact.fadeIn();
        logo.hide();
    });
};

// app.nameChange = () => {
//     $('.name').html()
// }

app.init = function () {
    $('.nav__list').css('display', 'none');
    // app.nameChange();
    app.toggleNav();
    app.handleNavPages();
    app.handleUserJourney();
};
//document.ready
$(function () {
    app.init();
    // app.threeScene();
});