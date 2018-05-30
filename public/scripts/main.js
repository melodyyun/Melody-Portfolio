'use strict';

var app = {};

app.toggleNav = function () {
    var menu = $('.menu');
    var navList = $('.nav__list');
    var toggleHamburger = false;
    menu.on('click', function () {
        // if(navList.is(':hidden')){
        //     hamburger.addClass('hamburgeranimX');
        //     navList.fadeIn();
        // }else{
        //     hamburger.removeClass('hamburgeranimX');
        //     navList.fadeOut();
        // }
        console.log('clicked');

        if (toggleHamburger) {
            console.log('toggleHamburger is true');
            menu.removeClass('hamburgeranimX');
            navList.fadeOut();
            toggleHamburger = false;
        } else {
            console.log('toggleHamburger is false');
            menu.addClass('hamburgeranimX');
            navList.fadeIn();
            toggleHamburger = true;
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

//document.ready
$(function () {
    app.toggleNav();
    // app.threeScene();
});