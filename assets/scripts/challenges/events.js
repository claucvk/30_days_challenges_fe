'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

// SIGN UP
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure)
}

// SIGN IN
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure)
}

// SIGN OUT
const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure)
}

// CHANGE PASSWORD
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}

// INDEX CHALLENGES
const onGetChallenges = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log(api)
  api.index()
    .then(ui.getAllChallengesSuccess)
    .catch(ui.getAllChallengesFailure)
}

// SHOW CHALLENGE
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

// CREATE CHALLENGE
const onCreateChallenge = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // event.target

  api.create(data)
    .done(ui.onCreateSuccess)
    .fail(ui.onCreateFailure)
}
// DELETE CHALLENGE
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

// UPDATE CHALLENGE
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

// CREATE DIARY
const onCreateDiary = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // event.target

  api.createDiary(data)
    .done(ui.onCreateDiarySuccess)
    .fail(ui.onCreateDiaryFailure)
}

// INDEX DIARIES
const onGetDiaries = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log(api)
  api.indexDiaries()
    .then(ui.getAllDiariesSuccess)
    .catch(ui.getAllDiariesFailure)
}

// SHOW DIARY
const onGetDiary = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const diary = data.diary
  if (diary.id.length !== 0) {
    api.showDiary(diary.id)
      .then(ui.getOneDiarySuccess)
      .catch(ui.getOneDiaryFailure)
  } else {
    console.log('Please provide a challenge id!')
  }
}

// DELETE DIARY
const onDeleteDiary = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const diary = data.diary

  if (diary.id.length !== 0) {
    api.destroyDiary(diary.id)
      .then(ui.deleteDiarySuccess)
      .catch(ui.deleteDiaryFailure)
  } else {
    console.log('Please provide a diary id!')
  }
}

// UPDATE DIARY
const onUpdateDiary = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.challenge.id.length !== 0) {
    api.updateDiary(data)
      .then(ui.onUpdateDiarySuccess)
      .catch(ui.onUpdateDiaryFailure)
  } else {
    console.log('diary updated!')
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
  onUpdateChallenge,
  onCreateDiary,
  onGetDiaries,
  onGetDiary,
  onDeleteDiary,
  onUpdateDiary
}
