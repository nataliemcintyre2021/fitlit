class UserRepository {
  constructor(theData) {
    this.data = theData
  }

  getDataById() {

  }

  getAllUserAverageStepGoal() {
    this.data.reduce((acc, user) => {
      return acc + user["dailyStepGoal"]
    }, 0)/this.data.length;
  }
}

export default UserRepository;
