class UserRepository {
  constructor(theData) {
    this.data = theData
  }

  getDataById(userId) {
    const user = this.data.find(user => userId === user["id"])
    return user;
  }

  getAllUserAverageStepGoal() {
    const averageSteps = this.data.reduce((acc, user) => {
      acc += user["dailyStepGoal"]
      return acc;
    }, 0) / this.data.length;
    return Math.round(averageSteps);
  }
}

export default UserRepository;
