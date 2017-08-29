'use strict'

const app = require('../app.js')

// This is onSignUp (events)
const success = (data) => {
  console.log(data)
  alert('Sign Out succesful')
}

const failure = (error) => {
  console.error(error)
}

//SignIn
const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  alert('Sign In succesful')
  // Mostrar un mensaje al usuario de que fue un signin succesful.
}

//Sign Out
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  alert('Sign Out succesful')
}

// Change password
const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.")
  alert('Password Successfully Changed.')
}

const onUpdateSuccess = function (data) {
  console.log(data)
}
