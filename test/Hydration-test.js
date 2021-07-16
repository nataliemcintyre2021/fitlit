import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let userData;
  let repoData;
  beforeEach(() => {
    userData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 75
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 47
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 85
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 42
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 87
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 94
    }];
    
    repoData = new Hydration(userData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should accept an argument of an array', () => {
    expect(repoData.data).to.deep.equal(userData);
  });

  it('should calculate the average ounces per day', () => {
    let sumOunces = repoData.getAverageDailyOunces();
    expect(sumOunces).to.equal(67);
  })

  it('should return the total ounces for a provided day', () => {
    let dailyOunces = repoData.getDailyOunces('2019/06/17');
    expect(dailyOunces).to.equal(47)
  });

  it('should return the number of ounces per day for a week', () => {
    let weeklyOunces = repoData.getDailyOuncesForAWeek('2019/06/21');
    let allDailyOunces = [37, 75, 47, 85, 42, 87, 94];
    expect(weeklyOunces).to.deep.equal(allDailyOunces);
  });
})