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

exports.setCart = (carts)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile('./mockData/carts.json', JSON.stringify(carts, null, 2), (err) => {
      if (err) {
        reject(err)
      } else {
        resolve("product added into cart")
      }
    })
  }) 
}

exports.removeProduct = (fillCarts)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile('./mockData/carts.json', JSON.stringify(fillCarts, null, 2), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve("product has been removed from the cart")
        }
      })
  }) 
}