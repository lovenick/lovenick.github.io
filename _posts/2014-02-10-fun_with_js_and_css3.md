---
layout: post
title: Fun with Javascript &amp; CSS3 Transitions
description: "Animating DOM elements using Javascript and CSS3 transitions"
tags: [html, css, javascript, css3, animation]
---

Since my recent exposure to CSS3 animations at Famo.us, I've been experimenting
with different techniques to animate DOM elements. CSS3 introduced a bunch of
new properties that allow you to manipulate DOM elements with ease. 

Below is a quick and simple example of what is possible with a little JS and the
CSS3 transform property.

<style>
  #boxDemo { 
    min-height: 220px;
    margin: 20px auto;
    padding: 20px;
    position: relative;
  }

  .card {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: #DEDEDE;
    box-shadow: 0px 1px 0px rgba(255,255,255,1), 0px 1px 0px rgba(0,0,0,0.1) inset;
  }
</style>

<div id="boxDemo"></div>

<script>
  (function(){
    var num = 25;
    var demo = document.getElementById('boxDemo');

    for(var i = 0; i < num; i++) {
      var card = document.createElement("div");
      card.className = "card";
      demo.appendChild(card);
    }

    var cards = document.getElementsByClassName('card');

    var move = function(el, options, callback) {
      callback = callback || function(){ return this; };

      options = {
        x: options.x || 0,
        y: options.y || 0,
        duration: options.duration || 0.25,
        delay: options.delay || 0,
        easing: options.easing || "ease-in-out"
      };

      el.style['-webkit-transition-property'] = "-webkit-transform";
      el.style['-webkit-transition-duration'] = options.duration + "s";
      el.style['-webkit-transition-delay'] = options.delay + "s";
      el.style['-webkit-transition-timing-function'] = options.easing;
      el.style['-webkit-transform'] = "translate(" + options.x + "px, " + options.y + "px)";

      var that = el;
      el.addEventListener('webkitTransitionEnd', 
        function( event ) {
          callback(that);
        }, false );
      return el;
    }

    var moveCards = function(arr, callback, x, y, i) {
      callback = callback || function(){};
      if(i > arr.length - 1) {
        callback();
        return;
      }

      var margin = 20;
      var numInRow = 5;
      var i = i || 0;
      var x = (x != undefined) ? x : 0;
      var y = (y != undefined) ? y : -Math.floor((arr[i].offsetWidth + margin) * Math.floor(((arr.length / numInRow) / 2)));
      var arr = arr || [];

      if(i % numInRow) {
        x += arr[i].offsetWidth + margin;
      } else {
        x = -Math.floor((arr[i].offsetWidth + margin) * Math.floor((numInRow / 2)));
        if(i != 0) {
          y += arr[i].offsetHeight + margin;
        }
      }

      move(arr[i], { x: x, y: y }, function(el) {
        moveCards(arr, callback, x, y, i + 1);
      });

    };

    moveCards(cards, function(){
      console.log('Animation complete');
    });
  })();

</script>