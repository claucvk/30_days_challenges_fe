'use strict'

const app = require('../app.js')

// Sign Up
const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  $('#sign-up input').not('.submit-btn').val('')
  const signUpGood = $('#signUpGood')
  signUpGood.html('Sign Up sucessful!').css('color', 'green')
  setTimeout(function () {
    $('#signUpGood').html('')
  }, 7000)
}
const signUpFailure = (error) => {
  console.log(error)
  $('#sign-up input').not('.submit-btn').val('')
  const signUpFail = $('#signUpFail')
  signUpFail.html('Sign Up failed. Verify your email or password!').css('color', 'red')
  setTimeout(function () {
    $('#signUpFail').html('')
  }, 7000)
}

// Sign In
const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  $('#login').addClass('hidden')
  $('#show-challenge').removeClass('hidden')
  $('#show-diary').removeClass('hidden')
  $('#show-profile').removeClass('hidden')
  $('.socialLinks').removeClass('hidden')
  $('#challenges_list').removeClass('hidden')
  $('#challenge-content1').removeClass('hidden')
  $('#challenge-content2').removeClass('hidden')
  $('#diary-content3').removeClass('hidden')
  $('#diary-content4').removeClass('hidden')
  $('#show-footer').removeClass('hidden')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}
const signInFailure = (error) => {
  console.log(error)
  const signInFail = $('#signInFail')
  signInFail.html('Sign In failed. Verify your email or password!').css('color', 'red')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  setTimeout(function () {
    $('#signInFail').html('')
  }, 7000)
}

// Sign Out
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  $('#login').removeClass('hidden')
  $('#show-challenge').addClass('hidden')
  $('#show-diary').addClass('hidden')
  $('#show-profile').addClass('hidden')
  $('.socialLinks').addClass('hidden')
  $('#challenges_list').addClass('hidden')
  $('#challenge-content1').addClass('hidden')
  $('#challenge-content2').addClass('hidden')
  $('#diary-content3').addClass('hidden')
  $('#diary-content4').addClass('hidden')
  $('#show-footer').addClass('hidden')
}

const signOutFailure = (error) => {
  console.log(error)
  const signOutFail = $('#signOutFail')
  signOutFail.html('Sign Out failed. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#signOutFail').html('')
  }, 7000)
}
// Change password
const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
  const changePassword = $('#changePassword')
  changePassword.html('Password Successfully Changed!').css('color', 'green')
  setTimeout(function () {
    $('#changePassword').html('')
  }, 2000)
  $('#old-password').val('')
  $('#new-password').val('')
}
const changePasswordFailure = (error) => {
  console.log(error)
  const changePasswordFail = $('#changePasswordFail')
  changePasswordFail.html('Original password or email is incorrect. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#changePasswordFail').html('')
  }, 2000)
  $('#old-password').val('')
  $('#new-password').val('')
}

// Start a new challenge.
const onCreateSuccess = () => {
  console.log('New challenge created')
  $('#name-challenge').val('')
  $('#goal-challenge').val('')
  $('#start-day').val('')
  $('#end-day').val('')
  $('#user-id').val('')
  $('#true').val('')
  $('#false').val('')
  const challengeCreated = $('#challengeCreated')
  challengeCreated.html('New challenge created!').css('color', 'blue')
  setTimeout(function () {
    $('#challengeCreated').html('')
  }, 3000)
}

const onCreateFailure = (error) => {
  console.log(error)
  $('#name-challenge').val('')
  $('#goal-challenge').val('')
  $('#start-day').val('')
  $('#end-day').val('')
  $('#user-id').val('')
  $('#true').val('')
  $('#false').val('')
  const challengeCreated = $('#challengeCreated')
  challengeCreated.html('Challenge not created. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#challengeCreated').html('')
  }, 3000)
}

// Update a challenge
const onUpdateSuccess = function () {
  console.log('You successfully updated the challenge!')
  $('#user-idU').val('')
  $('#challenge-idU').val('')
  $('#name-challengeU').val('')
  $('#goal-challengeU').val('')
  $('#start-dayU').val('')
  $('#end-dayU').val('')
  $('#trueU').val('')
  $('#falseU').val('')
  const challengeUpdated = $('#challengeUpdated')
  challengeUpdated.html('You successfully updated the challenge!').css('color', 'blue')
  setTimeout(function () {
    $('#challengeUpdated').html('')
  }, 3000)
}

const onUpdateFailure = (error) => {
  console.log(error)
  const challengeUpdateFail = $('#challengeUpdateFail')
  challengeUpdateFail.html('Challenge not updated. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#challengeUpdateFail').html('')
  }, 3000)
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
  console.log('show all challenges')
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
  setTimeout(function () {
    $('#allChallengesFail').html('')
  }, 3000)
  $('#allChallenges').html('')
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
  $('#challenge-id-yo').val('')
}

const getOneChallengeFailure = (error) => {
  console.log(error)
  const oneChallengeFail = $('#oneChallengeFail')
  oneChallengeFail.html('Challenge not found. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#oneChallengeFail').html('')
  }, 3000)
  $('#challenge-id-yo').val('')
  $('#oneChallenge').html('')
}

// Delete one challenge
const deleteChallengeSuccess = (data) => {
  console.log(data)
  const deleteChallenge = $('#deleteChallenge')
  deleteChallenge.html('Challenge deleted').css('color', 'green')
  $('#challenge-id-delete').val('')
  setTimeout(function () {
    $('#deleteChallenge').html('')
  }, 3000)
}

const deleteChallengeFailure = (error) => {
  console.log(error)
  const deleteChallengeFail = $('#deleteChallengeFail')
  deleteChallengeFail.html('Challenge not deleted. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#deleteChallengeFail').html('')
  }, 3000)
  $('#challenge-id-delete').val('')
}

// CREATE DIARY
const onCreateDiarySuccess = () => {
  console.log('New diary created')
  $('#challenge-id').val('')
  $('#date').val('')
  $('#description').val('')
  const diaryCreated = $('#diaryCreated')
  diaryCreated.html('New diary created!').css('color', 'blue')
  setTimeout(function () {
    $('#diaryCreated').html('')
  }, 3000)
}

const onCreateDiaryFailure = (error) => {
  console.log(error)
  $('#challenge-id').val('')
  $('#date').val('')
  $('#description').val('')
  const diaryCreated = $('#diaryCreated')
  diaryCreated.html('Diary not created. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#diaryCreated').html('')
  }, 3000)
}

// INDEX DIARY
const getAllDiariesSuccess = (data) => {
  console.log('ui')
  console.log(data)
  const arrayDiaries = []
  for (const i in data.diaries) {
    const elementos = 'Diary ID ' + data.diaries[i].id +
      ' ' + 'Challenge ID ' + data.diaries[i].challenge.id +
      ' ' + 'Date ' + data.diaries[i].day +
      ' ' + 'Description ' + data.diaries[i].description +
      ' ' + 'Diary Status ' + data.diaries[i].status +
      '<br>'
    arrayDiaries.push(elementos)
  }
  document.getElementById('allDiaries').innerHTML = arrayDiaries.join(' ')
  $('#diary-id-all').val('')
}

const getAllDiariesFailure = (error) => {
  console.log(error)
  const allDiariesFail = $('#allDiariesFail')
  allDiariesFail.html('Diaries not found. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#allDiariesFail').html('')
  }, 3000)
  $('#allDiaries').html('')
  $('#diary-id-all').val('')
}

// SHOW DIARY
const getOneDiarySuccess = (data) => {
  $('#diary-id').val('')
  const elementos = 'Diary ID ' + data.diary.id +
    ' ' + 'Challenge ID ' + data.diary.challenge.id +
    ' ' + 'Date ' + data.diary.day +
    ' ' + 'Description ' + data.diary.description +
    ' ' + 'Diary Status ' + data.diary.status +
    '<br>'
  document.getElementById('oneDiary').innerHTML = elementos
  console.log(data.diary.id)
}

const getOneDiaryFailure = (error) => {
  console.log(error)
  const oneDiaryFail = $('#oneDiaryFail')
  oneDiaryFail.html('Diary not found. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#oneDiaryFail').html('')
  }, 3000)
  $('#diary-id').val('')
  $('#oneDiary').html('')
}

// DELETE DIARY
const deleteDiarySuccess = (data) => {
  console.log('se borró? ', data)
  const deleteDiary = $('#deleteDiary')
  deleteDiary.html('Diary deleted').css('color', 'green')
  $('#diary-id-delete').val('')
  setTimeout(function () {
    $('#deleteDiary').html('')
  }, 3000)
}

const deleteDiaryFailure = (error) => {
  console.log(error)
  const deleteDiaryFail = $('#deleteDiaryFail')
  deleteDiaryFail.html('Diary not deleted. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#deleteDiaryFail').html('')
  }, 3000)
  $('#diary-id-delete').val('')
}

// UPDATE DIARY
const onUpdateDiarySuccess = function () {
  console.log('You successfully updated the diary!')
  $('#diary-idU').val('')
  $('#diary-dateU').val('')
  $('#description-diaryU').val('')
  const diaryUpdated = $('#diaryUpdated')
  diaryUpdated.html('Diary updated!').css('color', 'blue')
  setTimeout(function () {
    $('#diaryUpdated').html('')
  }, 3000)
}

const onUpdateDiaryFailure = (error) => {
  console.log(error)
  $('#diary-idU').val('')
  $('#diary-dateU').val('')
  $('#description-diaryU').val('')
  const diaryUpdatedFail = $('#diaryUpdatedFail')
  diaryUpdatedFail.html('Diary not updated. Try again!').css('color', 'red')
  setTimeout(function () {
    $('#diaryUpdatedFail').html('')
  }, 3000)
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
  deleteChallengeFailure,
  onCreateDiarySuccess,
  onCreateDiaryFailure,
  getAllDiariesSuccess,
  getAllDiariesFailure,
  getOneDiarySuccess,
  getOneDiaryFailure,
  deleteDiarySuccess,
  deleteDiaryFailure,
  onUpdateDiarySuccess,
  onUpdateDiaryFailure
}
