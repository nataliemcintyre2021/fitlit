import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
let userData;
let repoData;
  beforeEach(function() {
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }];

    repoData = new UserRepository(userData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should have a parameter to take in user data', function () {
    // console.log(repoData)
    expect(repoData).to.be.an.instanceof(UserRepository);
  })

  it('should give user data based on user ID', function () {

    const userId = repoData.getDataById(3);
    // console.log("repoData2", repoData.data[2])

    expect(userId).to.deep.equal(repoData.data[2])
  })

  it('should calculate average step goal amongst all users', function() {

      const getSteps = repoData.getAllUserAverageStepGoal();

      expect(getSteps).to.equal(6667);
  })

});
