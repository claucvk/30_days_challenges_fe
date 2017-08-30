'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.success)
    .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const onGetChallenges = function (event) {
  event.preventDefault()
  console.log(api)
  api.index()
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
 console.log($('#name'))
  const challengeName = $('#name').val()
  const challengeGoal = $('#goal').val()
  const startDay = $('#start_day').val()
  const endDay = $('#end_day').val()
  const challengeStatus = $('#userId').val()

  api.create(challengeName, challengeGoal, startDay, endDay, challengeStatus)
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

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetChallenges,
  onGetChallenge,
  onCreateChallenge,
  onDeleteChallenge
}
