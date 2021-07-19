class SleepRepository {
  constructor(sleepData) {
    this.data = sleepData;
    this.userSleepDataId = this.getUserSleep();
  }

  getUserSleep() {
    return this.data.reduce((acc, sleep) => {
      if (!acc[sleep["userID"]]) {
        acc[sleep["userID"]] = [];
      }
      acc[sleep["userID"]].push(sleep);
      return acc;
    }, {})
  }

  averageHoursOfSleepPerDay(userId) {
    const userSleepData = this.data.filter(user => userId === user["userID"]);
    const averageSleepData = userSleepData.reduce((acc, user) => {
      acc += user["hoursSlept"];
      return acc;
    }, 0) / userSleepData.length;
    return parseFloat(averageSleepData.toFixed(2));
  }

  averageSleepQualityPerDay(userId) {
    const userSleepQualityData = this.data.filter(user => userId === user["userID"]);
    const averageSleepQuality = userSleepQualityData.reduce((acc, user) => {
      acc += user["sleepQuality"];
      return acc;
    }, 0) / userSleepQualityData.length;
    return parseFloat(averageSleepQuality.toFixed(2));
  }

  calculateDailySleptHours(date, userId) {
    const hoursByDate = this.userSleepDataId[userId].reduce((acc, sleep) => {
      if (sleep["date"] === date) {
        acc += sleep["hoursSlept"];
      }
      return acc;
    }, 0)
    return hoursByDate;
  }

  calculateDailySleepQuality(date, userId) {
    const qualityByDate = this.userSleepDataId[userId].reduce((acc, sleep) => {
      if (sleep["date"] === date) {
        acc += sleep["sleepQuality"];
      }
      return acc;
    }, 0)
    return qualityByDate;
  }

  getWeekData(startDate, userId, info) {
    const userSleepData = this.data.filter(user => userId === user["userID"]);
    let firstDay = (userSleepData.findIndex(day => day["date"] === startDate)) + 1;
    let lastDay = (firstDay - 7);
    let weekData = userSleepData.slice(lastDay, firstDay).map(day => day[info]);
    return weekData;
  }

  getAllUserAverageSleepQuality() {
    const theQualityData = this.data.reduce((acc, sleep) => {
      acc += sleep["sleepQuality"];
      return acc;
    }, 0) / this.data.length;
    return parseFloat(theQualityData.toFixed(2));
  }
}




export default SleepRepository;
