export const getUserData = () => {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err, 'User data'))
}

export const getSleepData = () => {
  return fetch('http://localhost:3001/api/v1/sleep')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err, 'Sleep data'))
}

export const getActivityData = () => {
  return fetch('http://localhost:3001/api/v1/activity')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err, 'Activity data'))
}

export const getHydrationData = () => {
  return fetch('http://localhost:3001/api/v1/hydration')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err, 'Hydration data'))
}
