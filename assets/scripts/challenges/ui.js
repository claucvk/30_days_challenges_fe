'use strict'

const app = require('../app.js')

// Sign Up
const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  const signUp = $('#signUp')
  signUp.html('Sign Up succesful!').css('color', 'green')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}
const signUpFailure = (error) => {
  console.log(error)
  const signUpFail = $('#signUpFail')
  signUpFail.html('Sign Up failed. Verify your email or password!').css('color', 'red')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}

// Sign In
const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  const signIn = $('#signIn')
  signIn.html('Sign In succesful!').css('color', 'green')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  const idUser = $('#idUser')
  idUser.html('Your user ID: ' + data.user.id).css('color', 'blue')
}
const signInFailure = (error) => {
  console.log(error)
  const signInFail = $('#signInFail')
  signInFail.html('Sign In failed. Verify your email or password!').css('color', 'red')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

// Sign Out
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  const signOut = $('#signOut')
  signOut.html('Sign Out succesful!').css('color', 'green')
}

const signOutFailure = (error) => {
  console.log(error)
  const signOutFail = $('#signOutFail')
  signOutFail.html('Sign Out failed. Try again!').css('color', 'red')
}
// Change password
const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
  const changePassword = $('#changePassword')
  changePassword.html('Password Successfully Changed!').css('color', 'green')
  $('#old-password').val('')
  $('#new-password').val('')
}
const changePasswordFailure = (error) => {
  console.log(error)
  const changePasswordFail = $('#changePasswordFail')
  changePasswordFail.html('Original password is incorrect. Try again!').css('color', 'red')
  $('#old-password').val('')
  $('#new-password').val('')
}

// Start a new challenge.
const onCreateSuccess = () => {
  console.log('New challenge created')
  const challengeCreated = $('#challengeCreated')
  challengeCreated.html('New challenge created!').css('color', 'blue')
  $('#name-challenge').val('')
  $('#goal-challenge').val('')
  $('#start-day').val('')
  $('#end-day').val('')
  $('#user-id').val('')
  $('#true').val('')
  $('#false').val('')
}

const onCreateFailure = (error) => {
  console.log(error)
  const challengeCreationFail = $('#challengeCreationFail')
  challengeCreationFail.html('Challenge not created. Try again!').css('color', 'red')
  $('#name-challenge').val('')
  $('#goal-challenge').val('')
  $('#start-day').val('')
  $('#end-day').val('')
  $('#user-id').val('')
  $('#true').val('')
  $('#false').val('')
}

// Update a challenge
const onUpdateSuccess = function () {
  console.log('You successfully updated the challenge!')
  const challengeUpdated = $('#challengeUpdated')
  challengeUpdated.html('You successfully updated the challenge!').css('color', 'black')
  $('#user-idU').val('')
  $('#challenge-idU').val('')
  $('#name-challengeU').val('')
  $('#goal-challengeU').val('')
  $('#start-dayU').val('')
  $('#end-dayU').val('')
  $('#trueU').val('')
  $('#falseU').val('')
}

const onUpdateFailure = (error) => {
  console.log(error)
  const challengeUpdateFail = $('#challengeUpdateFail')
  challengeUpdateFail.html('Challenge not created. Try again!').css('color', 'red')
  $('#user-idU').val('')
  $('#challenge-idU').val('')
  $('#name-challengeU').val('')
  $('#goal-challengeU').val('')
  $('#start-dayU').val('')
  $('#end-dayU').val('')
  $('#trueU').val('')
  $('#falseU').val('')
}
// Get all challenges
const getAllChallengesSuccess = (data) => {
  console.log(data)
  const arrayChallenges = []
  for (const i in data.challenges) {
    const elementos = 'Challenge Id ' + data.challenges[i].id +
      ' ' + 'Challenge Name ' + data.challenges[i].name +
      ' ' + 'Challenge Goal ' + data.challenges[i].goal +
      ' ' + 'Start day ' + data.challenges[i].start_day +
      ' ' + 'End day ' + data.challenges[i].end_day +
      ' ' + 'Challenge Status ' + data.challenges[i].status +
      '<br>'
    arrayChallenges.push(elementos)
  }
  document.getElementById('allChallenges').innerHTML = arrayChallenges.join(' ')
}

const getAllChallengesFailure = (error) => {
  console.log(error)
  const allChallengesFail = $('#allChallengesFail')
  allChallengesFail.html('Challenges not found. Try again!').css('color', 'red')
}

// Get one challenge
const getOneChallengeSuccess = (data) => {
  console.log(data.challenge.id)
  const elementos = 'Challenge Id ' + data.challenge.id +
    ' ' + 'Challenge Name ' + data.challenge.name +
    ' ' + 'Challenge Goal ' + data.challenge.goal +
    ' ' + 'Start day ' + data.challenge.start_day +
    ' ' + 'End day ' + data.challenge.end_day +
    ' ' + 'Challenge Status ' + data.challenge.status +
    '<br>'
  document.getElementById('oneChallenge').innerHTML = elementos
}

const getOneChallengeFailure = (error) => {
  console.log(error)
  const oneChallengeFail = $('#oneChallengeFail')
  oneChallengeFail.html('Challenge not found. Try again!').css('color', 'red')
  $('#challenge-id').val('')
}

// Delete one challenge
const deleteChallengeSuccess = (data) => {
  console.log(data)
  const deleteChallenge = $('#deleteChallenge')
  deleteChallenge.html('Challenged deleted').css('color', 'green')
}

const deleteChallengeFailure = (error) => {
  console.log(error)
  const deleteChallengeFail = $('#deleteChallengeFail')
  deleteChallengeFail.html('Challenges not deleted. Try again!').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  getAllChallengesSuccess,
  getAllChallengesFailure,
  getOneChallengeSuccess,
  getOneChallengeFailure,
  deleteChallengeSuccess,
  deleteChallengeFailure
}
