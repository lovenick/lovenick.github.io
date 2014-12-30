---
layout: post
title: Streaming Tweets with Node.js and Socket.io
description: "Streaming real-time tweets to a WebGL globe using socket.io"
modified: 2014-01-14
tags: [node.js, sockets, socket.io, angular.js, javascript]
---

<img src="/images/tweetGlobe.jpg" alt="Socket.io, WebGL and Streaming Tweets">

After five weeks of intense javascript training, the instructors of HackReactor announce we'd be partaking in a 2 day hackathon sprint. We were given free-reign on our idea and tech stack, as long as we had something to show come demo time.

For my project, I decided to visualize data from the Twitter streaming API. My final tech stack included Angular.js for front-end routing and rendering, Three.js for rending the globe, Node.js and Express.js for the backend and of course Socket.io for the real-time streaming of tweet data.

The app allows users to perform a keyword based tweet search and stream data directly to their browser. Unfortunately only a small percentage of tweets have associated geo location data (2-3% depending on the keyword). So for visualization purposes, it's important to select a high volume keywords.

Overall, I have to say the project was a complete success and am quite proud of the results. The sheer amount of data available via Twitter's API is astounding and I'd love to explore it further in future projects. 

**NOTE:** The project isn't currently deployed. When time permits, I'll be writing some tests and deploying to Heroku.