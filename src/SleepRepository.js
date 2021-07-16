class SleepRepository {
  constructor(sleepData) {
    this.data = sleepData;
    this.userSleepDataId = this.getUserSleep();
  }


  averageHoursOfSleepPerDay(userId) {
    const userSleepData = this.data.filter(user => userId === user["userID"]);
    const averageSleepData = userSleepData.reduce((acc,user) => {
      acc += user["hoursSlept"];
      // console.log(acc);
      return acc;
    }, 0) / userSleepData.length;
    // console.log(averageSleepData);
    return averageSleepData;
  }

  averageSleepQualityPerDay(userId) {
    const userSleepQualityData = this.data.filter(user => userId === user["userID"]);
    const averageSleepQuality = userSleepQualityData.reduce((acc, user) => {
      acc += user["sleepQuality"];
      console.log(acc);
      return acc;
    }, 0) / userSleepQualityData.length;
    console.log(averageSleepQuality)
    return averageSleepQuality;
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

    calculateDailySleptHours(date, userId) {
    const hoursByDate = this.userSleepDataId[userId].reduce((acc, sleep) => {
      if (sleep["date"] === date) {
        acc += sleep["hoursSlept"];
      }
      console.log(acc);
      return acc;
    }, 0)
    console.log(hoursByDate);
    return hoursByDate;
    }

    calculateDailySleepQuality(date, userId) {
    const qualityByDate = this.userSleepDataId[userId].reduce((acc, sleep) => {
      if (sleep["date"] === date) {
        acc += sleep["sleepQuality"];
      }
      console.log(acc);
      return acc;
    }, 0)
    console.log(qualityByDate);
    return qualityByDate;
    }

    getHoursSleptForWeek(startDate, userId) {
      let firstDay = this.data.findIndex(day => day.date === startDate);
      let weekData = [];
      for (let i = 0; i < 7; i++) {
        weekData.unshift(this.data[firstDay]["hoursSlept"]);
        firstDay--;
      }
      return weekData;
    }



    getAllUserAverageSleepQuality() {
      const theQualityData = this.data.reduce((acc, sleep) => {
        acc += sleep["sleepQuality"];
        console.log(acc)
        return acc;
      }, 0) / this.data.length;
      console.log(parseFloat(theQualityData.toFixed(2)))
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
