'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./challenges/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const challengeEvents = require('./challenges/events')

const addHandlers = () => {
  $('#sign-up').on('submit', challengeEvents.onSignUp)
  $('#sign-in').on('submit', challengeEvents.onSignIn)
  $('#sign-out').on('submit', challengeEvents.onSignOut)
  $('#change-password').on('submit', challengeEvents.onChangePassword)
  $('#challenges-search').on('submit', challengeEvents.onGetChallenges)
  $('#challenge-search').on('submit', challengeEvents.onGetChallenge)
  $('#create-challenge').on('submit', challengeEvents.onCreateChallenge)
  $('#challenge-delete').on('submit', challengeEvents.onDeleteChallenge)
  $('#challenge-update').on('submit', challengeEvents.onUpdateChallenge)
}

module.exports = {
  addHandlers
}
