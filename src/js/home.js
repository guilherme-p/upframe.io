import { handleErrors } from './utils.js'

var apiURL = ''

export function init (api) {
  apiURL = api

  document.querySelector('#newsletter form').addEventListener('submit', newsletter)
  randomizePhotos(JSON.parse(document.getElementById('mentors-data').innerHTML))
}

function randomizePhotos (mentors) {
  let max = mentors.length - 1
  let s = new Set()
  let a = 0
  let num = 0

  for (; s.size < 4;) {
    a = Math.floor(Math.random() * (max + 1))
    s.add(a)
  }

  for (let i of document.querySelectorAll('#our-mentors div img')) {
    num = s.keys().next().value
    i.src = `/img/mentors/${mentors[num].Slug}.jpg`
    s.delete(num)
  }
}

function newsletter (event) {
  event.preventDefault()

  fetch(`${apiURL}/newsletter`, {
    method: 'POST',
    mode: 'cors',
    body: new window.FormData(event.currentTarget)
  }).then(handleErrors)
    .then(function (response) {
      window.location.reload()
    })
    .catch(function (err) {
      console.log(err)
    })
}