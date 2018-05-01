'use strict';

var app = {};

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