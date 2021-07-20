# Title
Module 2 Paired Project - Fitlit

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Install + Setup](#set-up)
  - [Contributors](#contributors)
	- [Wins](#wins)
	- [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract
	This project emphasized a variety of learning goals and new technologies that have been introduced in module 2, including the implementation of TDD, array prototype methods, responsive design, best practices for UX/UI, and utilizing network requests to name a few. The overall goal was to use these new concepts to design and build a useful fitness tracker dashboard.

## Technologies
  - Javascript
  - HTML
  - CSS
  - eslint
  - node
  - Atom
	- WebPack
	- API
  - Mocha
  - Chai
  - Chart.js
  - Day.js

## How to Use Application
  This application provides the user with immediate data into their fitness journey from the first view in the dashboard. On main dashboard, keeping the user experience in mind, user will find a straight-forward, easy-to-read breakdown of their fitness for a specific day. Here they will see, in widgets, their hydration (number of ounces drank), sleep (number of hours slept), and activity (steps taken - this will be displayed in future extensions of application). Below the widgets, they will see how their step goal compares to all users' goals for that particular day.

  Upon selection of a widget, the user will be able to see their full weeks' information for that category. For the hydration category, user can see an easy to read chart that includes the number of ounces they have drank each day of that week. For the sleep category, user can see an easy to read chart displaying both hours slept and quality of sleep for any given day that week. They can also see their all-time averages for both sleep quality and sleep hours. To view all the user's personal information, including their step goal and friends, they can click the user information button. It is by clicking on the Fitlit icon in the upper right corner that the user can navigate back to the main dashboard from each view. The date the user would like to see can be selected from the main dashboard. By clicking on the date drop-down menu, user can select a date, which will update the information seen on the main dashboard widgets and information seen on each view of the application.

## Illustrations

![Fitlit](https://user-images.githubusercontent.com/78229679/126386692-bd8340df-84e1-426a-810e-49cabbc27d25.gif)

## Install + Setup
- Clone down this 3rd party repository git clone https://github.com/turingschool-examples/fitlit-api
This API holds the data our project will fetch in order to populate the browser with info
- CD into your local directory and clone cd fitlit-api
- Install project dependencies npm install
- Run npm start
- Clone down this repository git clone https://github.com/nataliemcintyre2021/fitlit
- CD into your local directory and clone cd fitlit
- Install project dependencies npm install
- Run npm start and open localhost:8080 in your preferred browser

## Contributors
  - [Megan McBride](https://github.com/Meggs625)
  - [Natalie McIntyre](https://github.com/nataliemcintyre2021)

## Wins
	- Wiring framing and planning stage provided nice design plan to guide final project
	- Revisited learning goals for each iteration and focused on prioritizing those in project network
  - Functionality is as expected

## Challenges + Improvements
	- Method for fetching API data could be improved on
    - Because of use of Promise.all, if all data is not successfully fetched and returned then functionality is lost but will be reprocessed upon refresh
  - Seeking to do more research in utilizing different packages, such as Chart.js, Date.js, and others that would benefit user experience
	- Continuing to improve on learning goals such as more understanding of class to class interaction, fetching data, and writing more modular code that follows SRP
	- Future iterations include building out activity classes and functionality

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/fitlit.html)
