import { expect } from 'chai';
import Sleep from '../src/Sleep';
import SleepRepository from '../src/SleepRepository';

describe('Sleep', () => {
  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  })



  // it('should return average fluid ounces consumed per day for all time', function() {
  //
    const sleepData = [
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
  //   let theSleepData = new SleepRepository(sleepData);
  //   let userOneAverage = theSleepData.averageHoursOfSleepPerDay(1);
  //
  //   expect(userOneAverage).to.equal(6.8)
  //   })
    // const theSleepData = new SleepRepository(sleepData);
    // const sleepDataUser2 = new Sleep(theSleepData);
    //
    //
    //
    // let averageOz =
    //
    // expect()

})
