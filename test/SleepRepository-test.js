import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';

describe('Sleep Repository', () => {
  let sleepData;
  let theSleepData;
  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
        {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/20",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      }
    ];

    theSleepData = new SleepRepository(sleepData);
  })

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  })

  it('should take in sleep data', function() {
    expect(theSleepData).to.be.an.instanceof(SleepRepository)
  })

  it('should return average number of hours slept per day', function() {
    let userTwoAverage = theSleepData.averageHoursOfSleepPerDay(2);
    expect(userTwoAverage).to.equal(7.25)
  })

  it('should return average sleep quality per day', function() {
    let userAverage = theSleepData.averageSleepQualityPerDay(2);
    expect(userAverage).to.equal(4.25)
  })

  it('should return hours slept for specific day', function() {
    let dailyHours = theSleepData.calculateDailySleptHours("2019/06/15", 3);
    expect(dailyHours).to.equal(10.8)
  })

  it('should return sleep quality for specific day', function() {
    let dailyQuality = theSleepData.calculateDailySleepQuality("2019/06/15", 3);
    expect(dailyQuality).to.equal(4.7)
  })

  it('should return all users average sleep quality', function() {
    let allQuality = theSleepData.getAllUserAverageSleepQuality();
    expect(allQuality).to.equal(3.82)
  })

  it('should return hours slept for week', function() {
    let weekSleep = theSleepData.getWeekData("2019/06/21", 3, "hoursSlept");
    expect(weekSleep).to.deep.equal([10.8, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5])
  })

  it('should return sleep quality for week', function() {
    let weekSleep = theSleepData.getWeekData("2019/06/21", 3, "sleepQuality");
    expect(weekSleep).to.deep.equal([4.7, 3.8, 3.8, 3.8, 3.8, 3.8, 3.8])
  })

  it('should return days of week', function() {
    let weekSleep = theSleepData.getWeekData("2019/06/21", 3, "date");
    expect(weekSleep).to.deep.equal(["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"])
  })
})
