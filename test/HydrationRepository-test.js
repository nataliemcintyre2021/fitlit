import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';

describe('Hydration Repository', () => {
  let userData;
  let repoData;

  beforeEach(() => {
    userData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numOunces": 47
    },
    {
      "userID": 4,
      "date": "2019/06/18",
      "numOunces": 85
    }]; 

    repoData = new HydrationRepository(userData);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  })

  it('should accept an argument of an array', () => {
    expect(repoData.data).to.deep.equal(userData);
  });

});