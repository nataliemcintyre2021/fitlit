import './css/styles.css';
import './images/PngItem_311075.png';
import './images/user.png';
import './images/moon.png';
import './images/water.png';
import './images/footprints.png';
import './images/flame.png';
import UserRepository from './UserRepository';
import User from './User';
import SleepRepository from './SleepRepository';
import Hydration from './Hydration';
import HydrationRepository from './HydrationRepository';
import {getUserData, getSleepData, 
  getActivityData, getHydrationData} from './apiCalls';
import Chart from 'chart.js/auto';
import dayjs from 'dayjs';

//query selectors
const userWelcome = document.getElementById('user-welcome');
const stepComparison = document.getElementById('step-comparison');
const flameLogo = document.getElementById('flame-logo');
const landingPage = document.getElementById('main-dashboard');
const date = document.getElementById('dashboard-date');

const hydrationBtn = document.getElementById('ounce-btn');
const hydrationBtnDisplay = document.getElementById('daily-ounce');
const hydrationInfoPage = document.getElementById('hydration-info-page');
const hydrationChart = document.getElementById('hydration-chart');

const sleepBtn = document.getElementById('sleep-btn');
const sleepArea = document.getElementById('sleep-today');
const sleepInfoPage = document.getElementById('sleep-info-page');
const sleepChart = document.getElementById('snooze-chart');
const sleepQuality = document.getElementById('sleep-quality-info');
const sleepHours = document.getElementById('sleep-hours-info');

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
let currentDate;
let allUserData = [];
let allHydrationData = [];
let allSleepData = [];
let allActivityData = [];
let currentUserHydration;
let myHydrationChart;
let mySleepChart;
let myActivityChart;

//event listeners
window.addEventListener('load', fetchUserData);
userInfoBtn.addEventListener('click', displayUserInformationPage);
flameLogo.addEventListener('click', displayMainLandingPage);
hydrationBtn.addEventListener('click', displayHydrationInformationPage);
sleepBtn.addEventListener('click', displaySleepInformationPage);
activityBtn.addEventListener('click', displayActivityInformationPage);
date.addEventListener('change', updateCurrentDate);

//functions
function fetchUserData() {
  Promise.all([getUserData(), getSleepData(), 
    getActivityData(), getHydrationData()])
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
  updateCurrentDate();
  displayDaySleepData();
  createSleepChart();
  createHydrationChart();
  createActivityChart();
}

function random() {
  return Math.floor(Math.random() * 50)
}

function displayStepsComparison(repo) {
  stepComparison.innerText =
  `Your step goal is ${currentUser.dailyStepGoal}, compared to your
  fellow users' average goal of ${repo.getAllUserAverageStepGoal()}!`;
}

function updateCurrentDate() {
  currentDate = (dayjs(date.value).format('YYYY/MM/DD'));
  displayDaySleepData();
  createUserHydration();
}

function displayDaySleepData() {
  let theSleepData = new SleepRepository(allSleepData);
  let userId = currentUser.id;
  let currentUserSleepData = 
    theSleepData.calculateDailySleptHours(currentDate, userId);
  sleepArea.innerText = `${currentUserSleepData} hours`;
  let currentUserSleepQuality = theSleepData.averageSleepQualityPerDay(userId);
  let currentUserSleepHours = theSleepData.averageHoursOfSleepPerDay(userId);
  sleepQuality.innerText = `Sleep Quality: ${currentUserSleepQuality}`;
  sleepHours.innerText = `Sleep Hours: ${currentUserSleepHours}`;
}

function createUserHydration() {
  let userHydroRepo = new HydrationRepository(allHydrationData);
  let userHydration = userHydroRepo.getHydroDataById(currentUser.id);
  currentUserHydration = new Hydration(userHydration);
  displayUserHydration();
}

function displayUserHydration() {
  hydrationBtnDisplay.innerText =
  `${currentUserHydration.getDailyOunces(currentDate)} oz`;
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
  removeChartData(myHydrationChart);
  addHydrationData(myHydrationChart);
}

function createHydrationChart() {

  myHydrationChart = new Chart(hydrationChart, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Days of the Week',
        data: [],
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
    }
  });
}

function removeChartData(chart) {
  for (let i = 0; i < 8; i++) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
  }
  chart.update();
}

function addHydrationData(chart) {
  let weekData = 
    currentUserHydration.getDailyOuncesForAWeek(currentDate, 'numOunces');
  let weekLabels = 
    currentUserHydration.getDailyOuncesForAWeek(currentDate, 'date');

  weekLabels.forEach(day => {
    let date = dayjs(day).format('MMM DD')
    chart.data.labels.push(date)
  });
  weekData.forEach(day => {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(day);
    })
  })
  chart.update();
}

function addSleepData(chart) {
  let theSleepData = new SleepRepository(allSleepData);
  let userId = currentUser.id;
  let weekData = theSleepData.getHoursSleptForWeek(currentDate, userId);
  let weekLabels = theSleepData.getDaysSleepForWeek(currentDate, userId);
  let weekQuality = theSleepData.getQualitySleepForWeek(currentDate, userId);

  weekLabels.forEach(day => {
    let date = dayjs(day).format('MMM DD')
    chart.data.labels.push(date)
  });
  weekData.forEach(day => {
    chart.data.datasets[0].data.push(day)
  })
  weekQuality.forEach(day => {
    chart.data.datasets[1].data.push(day)
  }) 
  chart.update();
}

function displaySleepInformationPage() {
  toggleView(sleepInfoPage, landingPage);
  removeChartData(mySleepChart);
  addSleepData(mySleepChart);
}

function createSleepChart() {
  mySleepChart = new Chart(sleepChart, {
    data: {
      datasets: [{
        type: 'bar',
        label: 'Hours of Sleep',
        data: [],
        backgroundColor: [
          '#2DA1FA',
        ],
        borderColor: [
          'black',
        ],
      }, {
        type: 'bar',
        label: 'Quality of Sleep',
        data: [],
        backgroundColor: [
          '#46D4B6',
        ],
        borderColor: [
          'black',
        ],

      }],
      labels: []
    }
  });
}

function displayActivityInformationPage() {
  toggleView(activityInfoPage, landingPage);
  createActivityChart();
}

function createActivityChart() {
  myActivityChart = new Chart(activityChart, {
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
  userFriendsInfo.innerText = `Friends: ${displayFriends()}`;
}

function displayFriends() {
  let result = currentUser.friends.reduce((arr, num) => {
    allUserData.forEach(user => {
      if (user.id === num) {
        arr.push(user.name)
      }
    })
    return arr;
  }, [])
  return result;
}
