'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}

const onGetChallenges = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log(api)
  api.index()
    .then(ui.getAllChallengesSuccess)
    .catch(ui.getAllChallengesFailure)
}

const onGetChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const challenge = data.challenge
  if (challenge.id.length !== 0) {
    api.show(challenge.id)
      .then(ui.getOneChallengeSuccess)
      .catch(ui.getOneChallengeFailure)
  } else {
    console.log('Please provide a challenge id!')
  }
}

const onCreateChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // event.target

  api.create(data)
    .done(ui.onCreateSuccess)
    .fail(ui.onCreateFailure)
}

const onDeleteChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const challenge = data.challenge

  if (challenge.id.length !== 0) {
    api.destroy(challenge.id)
      .then(ui.deleteChallengeSuccess)
      .catch(ui.deleteChallengeFailure)
  } else {
    console.log('Please provide a challenge id!')
  }
}

const onUpdateChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.challenge.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
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
