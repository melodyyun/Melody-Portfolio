'use strict';

var app = {};

app.navList = $('.nav__list');

app.toggleNav = function () {
    var menu = $('.menu');
    var toggleHamburger = false;
    menu.on('click', function () {
        $('.nav__list').css('display', 'flex');
        if (toggleHamburger) {
            console.log('toggleHamburger is true');
            menu.removeClass('hamburgeranimX');
            app.navList.fadeOut();
            toggleHamburger = false;
        } else {
            console.log('toggleHamburger is false');
            menu.addClass('hamburgeranimX');
            app.navList.fadeIn();
            toggleHamburger = true;
            $('.hamburger').off('hover');
            $('.hamburger').unbind('mouseenter mouseleave');
        };
    });
};

app.handleNavPages = function () {
    //grabbing var for pages
    var about = $('#about');
    var projects = $('#projects');
    var contact = $('#contact');
    var logo = $('#logo-svg');

    app.navList.children().on('click', function () {
        var text = $(this).text();
        if (text === 'About') {
            about.fadeIn();
            projects.hide();
            contact.hide();
            logo.hide();
        } else if (text === 'Contact') {
            contact.fadeIn();
            about.hide();
            projects.hide();
            logo.hide();
        } else {
            projects.fadeIn();
            about.hide();
            contact.hide();
            logo.hide();
        }
    });
};

app.threeScene = function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
};

app.init = function () {
    $('.nav__list').css('display', 'none');
    app.toggleNav();
    app.handleNavPages();
};
//document.ready
$(function () {
    app.init();
    // app.threeScene();
});