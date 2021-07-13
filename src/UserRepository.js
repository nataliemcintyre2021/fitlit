class UserRepository {
  constructor(theData) {
    this.data = theData
  }

  getDataById() {

  }

  getAllUserAverageStepGoal() {
    this.data.reduce((acc, user) => {
      console.log(user["dailyStepGoal"])
      console.log(this.data.length)
      console.log(acc)
      acc += user["dailyStepGoal"]
      return acc;
    }, 0) / this.data.length;
  }
}

export default UserRepository;
