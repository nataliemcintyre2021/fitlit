// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/PngItem_311075.png';
import './images/user.png';
import './images/moon.png';
import './images/water.png';
import './images/footprints.png';
import './images/flame.png'

// console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import apiCalls from './apiCalls';
console.log(apiCalls.getData())

//query selectors
const userWelcome = document.getElementById('user-welcome');
const stepComparison = document.getElementById('step-comparison');
const flameLogo = document.getElementById('flame-logo');
const landingPage = document.getElementById('main-dashboard');
const hydrationBtn = document.getElementById('ounce-btn');
const hydrationInfoPage = document.getElementById('hydration-info-page');
const sleepBtn = document.getElementById('sleep-btn');
const sleepInfoPage = document.getElementById('sleep-info-page');
//started on assigning the sleep button information to toggle to that page


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


//event listeners
window.addEventListener('load', displayUserWelcome);
userInfoBtn.addEventListener('click', displayUserInformationPage);
flameLogo.addEventListener('click', displayMainLandingPage);
hydrationBtn.addEventListener('click', displayHydrationInformationPage);


//functions
function displayUserWelcome() {
  let newUserData = [{
    "id": 43,
    "name": "Alfonso Sporer",
    "address": "584 Mayert Greens, West Arden SC 97033",
    "email": "Jadon_Borer@gmail.com",
    "strideLength": 4,
    "dailyStepGoal": 5000,
    "friends": [
      2,
      19,
      43,
      33
    ]
  }]
  let userRepo = new UserRepository(newUserData);
  let newUser = userRepo.getDataById(43);
  currentUser = new User(newUser);
  userWelcome.innerText = `Welcome, ${currentUser.returnUserFirstName()} !`;
  displayStepsComparison();
};

function displayStepsComparison() {
  stepComparison.innerText =
  `Your step goal is ${currentUser.dailyStepGoal}, compared to your
  fellow users' average goal of 6667!`;
}

function displayUserInformationPage() {
  toggleView(userInfoPage, landingPage);
  loadUserInformation();
}

function displayMainLandingPage() {
  userInfoPage.classList.add('hidden');
  hydrationInfoPage.classList.add('hidden');
  landingPage.classList.remove('hidden');
}

function displayHydrationInformationPage() {
  toggleView(hydrationInfoPage, landingPage);
//include the other necessary information here
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
