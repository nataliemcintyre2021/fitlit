class Hydration {
  constructor(userHydrationData) {
    this.data = userHydrationData;
  }

  getAverageDailyOunces() {
    const result = this.data.reduce((acc, day) => {  
      return acc += day.numOunces
    }, 0) / this.data.length;
    return Math.round(result);
  }

  getDailyOunces(dateNeeded) {
    const dayInfo = this.data.find(day => day.date === dateNeeded);
    return dayInfo.numOunces;
  }

  getDailyOuncesForAWeek(startDate, info) {
    let today = (this.data.findIndex(day => day.date === startDate)) + 1;
    let weekAgo = (today - 7);
    let weekData = this.data.slice(weekAgo, today).map(day => day[info]);  
    return weekData;
  }
}
export default Hydration;