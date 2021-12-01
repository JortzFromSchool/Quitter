# [Quitter](https://quittr.herokuapp.com/#/)

The app for breaking bad habits.

## Overview

Quitter helps you keep track of your unhealthy habits and facilitates in quitting those habits.
The app allows the user to log sessions each time they commit that habit updating the page in real time with a graph representing their logs and a display of their most recent ones.
The app lets the user know if they are on pace to quit their habit based on an algorithm written under the hood involving how often they commit the habit. The app even informs the user of how long they should hold off on particpating in their bad habit such that the user quits the habit steadily.
The app also contains a social component in which users may create or join groups based around a common habit. This feature induces accountability and provides a support system for each member that makes quitting the habit an easier experience.

See the [bonus section](#bonus) for upcoming features.

## Technologies

### Frontend
- React
- Redux
- JavaScript
- HTML5
- CSS3

### Backend
- MongoDB
- Mongoose
- Express.js
- Node.js

### Additional Libraries / APIs
- Plotly
- Moment
- Font Awesome
- Google Fonts

## Features

The component that shows a user's logs has many key features in of itself. Upon logging a session of an unhealthy habit, the log is plotted and displayed alongside the graph.
Moreover, the page updates with a definitive time and date for when the user should next partake in the habit such that the user will be on course to gradually dropping the habit. 
If the user holds out until that recommended time, the average time in between log sessions increases and a green arrow appears reflecting that increase. 
If the user does not hold out, and commits the habit, their average will most likely decrease and that decrease is indicated by a red arrrow. 
The algorithm was designed in such a way that the user is on a proper course to quitting the habit to avoid a saturation effect in their rate of sessions per day.

![logging gif](https://user-images.githubusercontent.com/59269773/144298082-56562460-33e0-4390-9ba6-fd0d2d65e2b1.gif)

<img width="293" alt="avg decreased" src="https://user-images.githubusercontent.com/59269773/144298591-2d38cb1a-4992-41d7-9140-f0b50f9003f9.png">

Another feature 

## Bonus
