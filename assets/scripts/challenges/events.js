'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure)
}

const onGetChallenges = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(api)
  api.index(data)
    .then(ui.success)
    .catch(ui.failure)
}

const onGetChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const challenge = data.challenge

  if (challenge.id.length !== 0) {
    api.show(challenge.id)
      .then(ui.success)
      .catch(ui.failure)
  } else {
    console.log('Please provide a challenge id!')
  }
}

const onCreateChallenge = function (event) {
  console.log('test')
  event.preventDefault()
  const data = getFormFields(event.target) // event.target

  api.create(data)
    .done(ui.success)
    .fail(ui.failure)
}

const onDeleteChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const challenge = data.challenge

  if (challenge.id.length !== 0) {
    api.destroy(challenge.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a challenge id!')
  }
}

const onUpdateChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.challenge.id.length !== 0) {
    api.update(data)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('challenge update!')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetChallenges,
  onGetChallenge,
  onCreateChallenge,
  onDeleteChallenge,
  onUpdateChallenge
}
