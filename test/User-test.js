import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should have a parameter to take in a userData object', function () {
    const user1 = new User(
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
      });
      expect(user1).to.be.an.instanceof(User);
  })

  it('should return a user first name only', function () {

    const user1 = new User(
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
      });

    const firstName = user1.returnUserFirstName();

    expect(firstName).to.equal("Luisa");

  })

})
