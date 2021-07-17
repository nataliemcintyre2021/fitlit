import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';

describe('Sleep Repository', () => {
  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  })


  it('should take in sleep data', function() {

    let sleepData = [
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
      }
    ];

    let theSleepData = new SleepRepository(sleepData);
    console.log(theSleepData.userSleepDataId);
    expect(theSleepData).to.be.an.instanceof(SleepRepository)
  })

  // it('should return user data', function() {
  //   let sleepData = [
  //     {
  //       "userID": 1,
  //       "date": "2019/06/15",
  //       "hoursSlept": 6.1,
  //       "sleepQuality": 2.2
  //     },
  //     {
  //       "userID": 2,
  //       "date": "2019/06/15",
  //       "hoursSlept": 7,
  //       "sleepQuality": 4.7
  //     },
  //     {
  //       "userID": 3,
  //       "date": "2019/06/15",
  //       "hoursSlept": 10.8,
  //       "sleepQuality": 4.7
  //     },
  //       {
  //       "userID": 1,
  //       "date": "2019/06/16",
  //       "hoursSlept": 4.1,
  //       "sleepQuality": 3.8
  //     },
  //     {
  //       "userID": 2,
  //       "date": "2019/06/16",
  //       "hoursSlept": 7.5,
  //       "sleepQuality": 3.8
  //     }
  //   ];
  //
  //   let userTwoInfo = [
  //     {
  //       "userID": 2,
  //       "date": "2019/06/15",
  //       "hoursSlept": 7,
  //       "sleepQuality": 4.7
  //     },
  //     {
  //       "userID": 2,
  //       "date": "2019/06/16",
  //       "hoursSlept": 7.5,
  //       "sleepQuality": 3.8
  //     }
  //   ];
  // let theSleepData = new SleepRepository(sleepData);
  // let userSleepInfo = theSleepData.getSleepDataById(2)
  //
  // expect(userSleepInfo).to.deep.equal(userTwoInfo)
  // })

  it('should return average number of hours slept per day', function() {
    let sleepData = [
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
      }
    ];

  let theSleepData = new SleepRepository(sleepData);
  let userTwoAverage = theSleepData.averageHoursOfSleepPerDay(2);

  expect(userTwoAverage).to.equal(7.25)
  })

  it('should return average sleep quality per day', function() {
    let sleepData = [
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
      }
    ];

  let theSleepData = new SleepRepository(sleepData);
  let userAverage = theSleepData.averageSleepQualityPerDay(2);

  expect(userAverage).to.equal(4.25)
  })

  it('should return hours slept for specific day', function() {
    let sleepData = [
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
        "date": "2019/06/15",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      }
    ];

  let theSleepData = new SleepRepository(sleepData);
  let dailyHours = theSleepData.calculateDailySleptHours("2019/06/15", 3);
  console.log(theSleepData);
  expect(dailyHours).to.equal(18.3)
  })

  it('should return sleep quality for specific day', function() {
    let sleepData = [
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
        "date": "2019/06/15",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      }
    ];

  let theSleepData = new SleepRepository(sleepData);
  let dailyQuality = theSleepData.calculateDailySleepQuality("2019/06/15", 3);
  console.log(theSleepData);
  expect(dailyQuality).to.equal(8.5)
  })

  it('should return all users average sleep quality', function() {
    let sleepData = [
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
        "date": "2019/06/15",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      }
    ];

  let theSleepData = new SleepRepository(sleepData);
  let allQuality = theSleepData.getAllUserAverageSleepQuality();
  console.log(theSleepData);
  expect(allQuality).to.equal(3.83)
  })

  it('should return hours slept for week', function() {
    let sleepData = [
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

  let theSleepData = new SleepRepository(sleepData);
  let weekSleep = theSleepData.getHoursSleptForWeek("2019/06/21", 3);
  console.log(weekSleep);
  expect(weekSleep).to.deep.equal([10.8, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5])
  })

  it('should return sleep quality for week', function() {
    let sleepData = [
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

  let theSleepData = new SleepRepository(sleepData);
  let weekSleep = theSleepData.getQualitySleepForWeek("2019/06/21", 3);
  console.log(weekSleep);
  expect(weekSleep).to.deep.equal([4.7, 3.8, 3.8, 3.8, 3.8, 3.8, 3.8])
  })

  it('should return sleep quality for week', function() {
    let sleepData = [
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

  let theSleepData = new SleepRepository(sleepData);
  let weekSleep = theSleepData.getDaysOfWeek("2019/06/21", 3);
  console.log(weekSleep);
  expect(weekSleep).to.deep.equal([4.7, 3.8, 3.8, 3.8, 3.8, 3.8, 3.8])
  })
})
