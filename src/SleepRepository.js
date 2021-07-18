class SleepRepository {
  constructor(sleepData) {
    this.data = sleepData;
    this.userSleepDataId = this.getUserSleep();
  }

  getUserSleep() {
    return this.data.reduce((acc, sleep) => {
      if(!acc[sleep["userID"]]) {
        acc[sleep["userID"]] = [];
      }
      acc[sleep["userID"]].push(sleep);
      return acc;
    }, {})
  }

  averageHoursOfSleepPerDay(userId) {
    const userSleepData = this.data.filter(user => userId === user["userID"]);
    const averageSleepData = userSleepData.reduce((acc,user) => {
      acc += user["hoursSlept"];
      // console.log(acc);
      return acc;
    }, 0) / userSleepData.length;
    // console.log(averageSleepData);
    return averageSleepData.toFixed(2);
  }

  averageSleepQualityPerDay(userId) {
    const userSleepQualityData = this.data.filter(user => userId === user["userID"]);
    const averageSleepQuality = userSleepQualityData.reduce((acc, user) => {
      acc += user["sleepQuality"];
      // console.log(acc);
      return acc;
    }, 0) / userSleepQualityData.length;
    return averageSleepQuality.toFixed(2);
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

    getHoursSleptForWeek(startDate, userId) {
      const userSleepData = this.data.filter(user => userId === user["userID"]);
      // console.log("user sleep data", userSleepData);
      let firstDay = (userSleepData.findIndex(day => day["date"] === startDate)) + 1;
      let lastDay = (firstDay - 7);
      let weekData = userSleepData.slice(lastDay, firstDay).map(day => day["hoursSlept"]);
      // console.log("user week data", weekData)
      return weekData;
    }

    getQualitySleepForWeek(startDate, userId) {
      const userSleepData = this.data.filter(user => userId === user["userID"]);
      // console.log("user sleep quality data", userSleepData);
      let firstDay = (userSleepData.findIndex(day => day["date"] === startDate)) + 1;
      let lastDay = (firstDay - 7);
      let weekData = userSleepData.slice(lastDay, firstDay).map(day => day["sleepQuality"]);
      // console.log(weekData)
      return weekData;
    }

    getDaysSleepForWeek(startDate, userId) {
      const userSleepData = this.data.filter(user => userId === user["userID"]);
      let firstDay = (userSleepData.findIndex(day => day["date"] === startDate)) + 1;
      let lastDay = (firstDay - 7);
      let weekData = userSleepData.slice(lastDay, firstDay).map(day => day["date"]);
      return weekData;
    }
    // getHoursSleptForWeek(startDate, userId) {
    //   let firstDay = this.userSleepDataId.findIndex(day => day.date === startDate);
    //   let weekData = [];
    //   for (let i = 0; i < 7; i++) {
    //     weekData.unshift(this.userSleepDataId[firstDay]["hoursSlept"]);
    //     firstDay--;
    //   }
    //   console.log(weekData)
    //   return weekData;
    // }


    // let firstDay = (this.data.findIndex(day => day.date === startDate)) - 6;
        // let weekData = this.data.slice(firstDay, 7).map(day => day.numOunces);
        // return weekData;

    getAllUserAverageSleepQuality() {
      const theQualityData = this.data.reduce((acc, sleep) => {
        acc += sleep["sleepQuality"];
        return acc;
      }, 0) / this.data.length;
      return parseFloat(theQualityData.toFixed(2));
    }



  //if matches id, return,

  // averageHoursOfSleepPerDay(userId) {
  //   const userData = getSleepDataById(userId);
  //   const hoursSlept = userData.reduce((acc, user) => {
  //     acc += user["hoursSlept"];
  //     console.log(acc)
  //     return acc;
  //   }, 0) / userData.length;
  // }

}




export default SleepRepository;
