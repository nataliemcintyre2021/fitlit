// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import './images/PngItem_311075.png';
import './images/user.png';
import './images/moon.png';
import './images/water.png';
import './images/footprints.png';
import './images/flame.png';
import UserRepository from './UserRepository';
import User from './User';
import {getUserData, getSleepData, getActivityData, getHydrationData} from './apiCalls';
import Chart from 'chart.js/auto';


//query selectors
const userWelcome = document.getElementById('user-welcome');
const stepComparison = document.getElementById('step-comparison');
const flameLogo = document.getElementById('flame-logo');
const landingPage = document.getElementById('main-dashboard');

const hydrationBtn = document.getElementById('ounce-btn');
const hydrationInfoPage = document.getElementById('hydration-info-page');
const hydrationChart = document.getElementById('hydration-chart');

const sleepBtn = document.getElementById('sleep-btn');
const sleepInfoPage = document.getElementById('sleep-info-page');
const sleepChart = document.getElementById('snooze-chart');

const activityBtn = document.getElementById('activity-btn');
const activityInfoPage = document.getElementById('activity-info-page');
const activityChart = document.getElementById('activity-chart');

const userInfoBtn = document.getElementById('user-info-btn');
const userInfoPage = document.getElementById('user-info-page');
const userNameInfo = document.getElementById('name');
const userAddressInfo = document.getElementById('address');
const userEmailInfo = document.getElementById('email');
const userStrideLengthInfo = document.getElementById('stride-length');
const userStepGoalInfo = document.getElementById('step-goal');
const userFriendsInfo = document.getElementById('your-friends');


//global variable
let currentUser;
let allUserData = [];
let allHydrationData = [];
let allSleepData = [];
let allActivityData = [];


//event listeners
window.addEventListener('load', fetchUserData);
userInfoBtn.addEventListener('click', displayUserInformationPage);
flameLogo.addEventListener('click', displayMainLandingPage);
hydrationBtn.addEventListener('click', displayHydrationInformationPage);
sleepBtn.addEventListener('click', displaySleepInformationPage);
activityBtn.addEventListener('click', displayActivityInformationPage);


//functions
function fetchUserData() {
  Promise.all([getUserData(), getSleepData(), getActivityData(), getHydrationData()])
    .then(values => parseValues(values)) 
}

function parseValues(data) {
  data[0].userData.forEach(user => allUserData.push(user));
  data[1].sleepData.forEach(user => allSleepData.push(user));
  data[2].activityData.forEach(user => allActivityData.push(user));
  data[3].hydrationData.forEach(user => allHydrationData.push(user));
  createNewUser();
}

function createNewUser() {
  let userRepo = new UserRepository(allUserData);
  let newUser = userRepo.getDataById(random());
  currentUser = new User(newUser);
  userWelcome.innerText = `Welcome, ${currentUser.returnUserFirstName()} !`;
  displayStepsComparison(userRepo);
}

function random() {
  return Math.floor(Math.random() * 50)
}

function displayStepsComparison(repo) {
  stepComparison.innerText =
  `Your step goal is ${currentUser.dailyStepGoal}, compared to your
  fellow users' average goal of ${repo.getAllUserAverageStepGoal()}!`;
}

function displayUserInformationPage() {
  toggleView(userInfoPage, landingPage);
  loadUserInformation();
}

function displayMainLandingPage() {
  userInfoPage.classList.add('hidden');
  hydrationInfoPage.classList.add('hidden');
  sleepInfoPage.classList.add('hidden');
  activityInfoPage.classList.add('hidden');
  landingPage.classList.remove('hidden');
}

function displayHydrationInformationPage() {
  toggleView(hydrationInfoPage, landingPage);
  displayHydrationChart();
}

function displayHydrationChart() {
  var myHydrationChart = new Chart(hydrationChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Pumpkin', 'Ocean'],
      datasets: [{
        label: 'Number of Ounces',
        data: [48, 50, 35, 65, 90, 54, 36, 24],
        backgroundColor: [
          '#2DA1FA',
        ],
        borderColor: [
          'black',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function displaySleepInformationPage() {
  toggleView(sleepInfoPage, landingPage);
  displaySleepChart();
}

function displaySleepChart() {
  var mySleepChart = new Chart(sleepChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',         
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function displayActivityInformationPage() {
  toggleView(activityInfoPage, landingPage);
  displayActivityChart();
}

function displayActivityChart() {
  var myStepsChart = new Chart(activityChart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function toggleView(show, hide) {
  show.classList.remove('hidden');
  hide.classList.add('hidden');
}

function loadUserInformation() {
  userNameInfo.innerText = `Name: ${currentUser.name}`;
  userAddressInfo.innerText = `Address: ${currentUser.address}`;
  userEmailInfo.innerText = `Email: ${currentUser.email}`;
  userStrideLengthInfo.innerText = `Stride Length: ${currentUser.strideLength}`;
  userStepGoalInfo.innerText = `Step Goal: ${currentUser.dailyStepGoal}`;
  userFriendsInfo.innerText = 'Friends: will display here!';
}
