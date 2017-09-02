'use strict'
const app = require('../app')

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

const signIn = function(data) {
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

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

const index = function (data) {
  return $.ajax({
    url: app.host + '/challenges',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/challenges/' + id,
    method: 'GET'
  })
}

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

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/challenges/' + id,
    method: 'DELETE'
  })
}
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

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  show,
  create,
  destroy,
  update
}
