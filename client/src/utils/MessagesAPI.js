import {
  dateFormatter
} from './helpers'
import fetch from 'isomorphic-fetch'


const api = "http://localhost:3000"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const getAll = () =>
  fetch(`${api}/api/messages`)
  .then(res => res.json())
  .then(messages => messages.data)

export const vote = (option, id) =>
  fetch(`${api}/api/messages/${id}`, {
    method: 'PUT',
    headers: {
      ...headers
    },
    body: JSON.stringify({
      options: option
    })
  })
  .then(res => res.json())
  .then(data => data.data)


export const create = (content) => {
  const timestamps = dateFormatter(new Date());
  const score = 0;
  return fetch(`${api}/api/messages`, {
      method: 'POST',
      headers: {
        ...headers
      },
      body: JSON.stringify({
        content,
        timestamps,
        score
      })
    })
    .then(res => res.json())
}
