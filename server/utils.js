
const fs = require('fs')

exports.setUser = (users)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile('./mockData/users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        reject(err)
      } else {
        resolve("updated successfully")
      }
    })
  })
}
