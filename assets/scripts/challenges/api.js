'use strict'
const app = require('../app')

// SIGN UP
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

// SIGN IN
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

// SIGN OUT
const signOut = function (data) {
  console.log(data)
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// CHANGE PASSWORD
const changePassword = function (data) {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },

    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

// INDEX CHALLENGES
const index = function (data) {
  if (!app.user) {
    console.log('not log in')
    return
  }

  return $.ajax({
    url: app.host + '/challenges/',
    method: 'GET',
    data: {'user_id': app.user.id}
  })
}

// SHOW CHALLENGE
const show = function (id) {
  return $.ajax({
    url: app.host + '/challenges/' + id,
    method: 'GET'
  })
}

// CREATE CHALLENGE
const create = function (data) {
  let status
  if (data.status === 'on') {
    status = true
  } else {
    status = false
  }
  console.log(app)
  return $.ajax({
    method: 'POST',
    url: app.host + '/challenges/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'challenge': {
        'name': data.name,
        'goal': data.goal,
        'start_day': data.start_day,
        'end_day': data.end_day,
        'status': status,
        'user_id': data.userId
      }
    }
  })
}

// DELETE CHALLENGE
const destroy = function (id) {
  return $.ajax({
    url: app.host + '/challenges/' + id,
    method: 'DELETE'
  })
}

// UPDATE CHALLENGE
const update = function (data) {
  return $.ajax({
    url: app.host + '/challenges/' + data.challenge.id,
    method: 'PATCH',
    data: {
      'challenge': {
        'name': data.name,
        'goal': data.goal,
        'start_day': data.start_day,
        'end_day': data.end_day,
        'status': status,
        'user_id': data.userId
      }
    }
  })
}
// CREATE DIARY
const createDiary = function (data) {
  let status
  if (data.status === 'on') {
    status = true
  } else {
    status = false
  }
  console.log(app)
  return $.ajax({
    method: 'POST',
    url: app.host + '/diaries/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'diary': {
        'day': data.day,
        'description': data.description,
        'start_day': data.start_day,
        'status': status,
        'challenge_id': data.challengeId
      }
    }
  })
}

// INDEX DIARIES
const indexDiaries = function (data) {
  if (!app.user) {
    console.log('not log in')
    return
  }

  return $.ajax({
    url: app.host + '/challenges/',
    method: 'GET',
    data: {'challenge_id': app.challenge.id}
  })
}

// SHOW DIARY
const showDiary = function (id) {
  return $.ajax({
    url: app.host + '/diaries/' + id,
    method: 'GET'
  })
}

// DELETE DIARY
const destroyDiary = function (id) {
  return $.ajax({
    url: app.host + '/diaries/' + id,
    method: 'DELETE'
  })
}

// UPDATE DIARY
const updateDiary = function (data) {
  return $.ajax({
    url: app.host + '/diaries/' + data.diary.id,
    method: 'PATCH',
    data: {
      'diary': {
        'day': data.day,
        'description': data.description,
        'start_day': data.start_day,
        'status': status,
        'challenge_id': data.challengeId
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  show,
  create,
  destroy,
  update,
  createDiary,
  indexDiaries,
  showDiary,
  destroyDiary,
  updateDiary
}
