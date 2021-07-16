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

  it('should return user data based on id', () => {
  
    let user3 = repoData.getHydroDataById(3);
    expect(user3).to.deep.equal([userData[2]]);
  });

  it('should return all instances of data for the user based on id', () => {
    userData.push(
      {"userID": 3,
        "date": "2019/06/19",
        "numOunces": 85})
    let user3 = repoData.getHydroDataById(3);
    expect(user3).to.deep.equal([userData[2], userData[4]]);
  });

});