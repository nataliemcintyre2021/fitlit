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

  getDailyOuncesForAWeek(startDate) {
    let firstDay = (this.data.findIndex(day => day.date === startDate)) - 6;
    let weekData = this.data.slice(firstDay, 7).map(day => day.numOunces);
    return weekData;
  }
}
export default Hydration;