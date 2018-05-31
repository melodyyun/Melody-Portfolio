'use strict';

var app = {};

<<<<<<< HEAD
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
            $('.hamburger').off('hover');
            $('.hamburger').unbind('mouseenter mouseleave');
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
=======
app.toggleNav = function () {
    var hamburger = $('.hamburger');
    var navList = $('.nav__list');
    hamburger.on('click', function () {
        if (navList.is(':hidden')) {
            hamburger.addClass('menuChange');
            navList.fadeIn();
        } else {
            hamburger.removeClass('menuChange');
            navList.fadeOut();
>>>>>>> ebd0f49b611b5c5eecb2aa7a68858732d7bebd36
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

<<<<<<< HEAD
app.init = function () {
    $('.nav__list').css('display', 'none');
    app.toggleNav();
    app.handleNavPages();
};
//document.ready
$(function () {
    app.init();
=======
//document.ready
$(function () {
    app.toggleNav();
>>>>>>> ebd0f49b611b5c5eecb2aa7a68858732d7bebd36
    // app.threeScene();
});