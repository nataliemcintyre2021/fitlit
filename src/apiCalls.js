const getData = () => {
  return fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json())
  .then(data => data)
}


export default {getData}
