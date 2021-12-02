# Quitter
The app for breaking bad habits.

[Live link](https://quittr.herokuapp.com/#/)

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

Users on the app can create and join groups based around a particular habit. The creator of the group is the default admin, which holds the authority to delete the group. Within a group show page, all the users and their stats are visible. Logging sessions are possible within the group show page as well, and users can only update their own stats.

<img width="580" alt="Screen Shot 2021-12-01 at 2 29 56 PM" src="https://user-images.githubusercontent.com/8636103/144301007-f3d0c21c-349a-4000-81e9-a63dd7a18253.png">


<img width="1157" alt="Screen Shot 2021-12-01 at 2 24 35 PM" src="https://user-images.githubusercontent.com/8636103/144301043-f2864e80-039a-4068-916c-89b40fca913e.png">

The app has two preloaded habits, Drinking and Smoking. Additionally, users can create their own custom habits. These habits are only visible to that user and any users affilated with a group based around the created habit.

<img width="377" alt="Screen Shot 2021-12-01 at 7 52 39 PM" src="https://user-images.githubusercontent.com/8636103/144338065-94f1a9dd-fdcf-4c05-a773-0b053f198dee.png">

## Bonus

  - Adding the functionality to reinforce good habits
  - Add a 'request to join group' button, the admin of the group will then approve members to join.
  - Add functionality to switch the admin of a group
  - Add a game aspect to app, with the implementation of a points system associated with streaks for bad or good habits. 


## Contributors

<img src="https://user-images.githubusercontent.com/8636103/144338581-4e871223-5a37-4104-aa42-344c506184fb.jpeg" width="200" height="200" />  <img src="https://user-images.githubusercontent.com/8636103/144338609-6f23041d-2495-4ead-9a48-9b7e49043fce.jpeg" width="200" height="200" />  <img src="https://user-images.githubusercontent.com/8636103/144338636-3dbc2011-98cc-4026-889e-49a1053ea09d.jpg" width="200" height="200" />  <img src="https://user-images.githubusercontent.com/8636103/144338767-9b735cce-cd58-40a8-a525-442ce464e5ca.png" width="200" height="200" />

<pre> 
    George Tsimis           Matteo Rossant           Jonathan Ortiz            Neil Pandya    
</pre>     
