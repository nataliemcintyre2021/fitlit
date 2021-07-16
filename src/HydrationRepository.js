class HydrationRepository {
  constructor(allUserHydrationInformation) {
    this.data = allUserHydrationInformation;
  }
  getHydroDataById(id) {
    let specificUserData = this.data.filter(data => data.userID === id);
    return specificUserData;
  }
}

export default HydrationRepository;