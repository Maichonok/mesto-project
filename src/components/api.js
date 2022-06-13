const config = {
  url:'https://nomoreparties.co/v1/plus-cohort-10/',
  headers: {
    authorization: '364cb9b7-1bf6-49d7-b364-1aee592e0a41',
    'Content-Type': 'application/json'
  }
}

function response(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status} - ${res.statusText}`);
};

export function getEditProfile(name, text) {
  return fetch (`${config.url}/users/me`,{
    method: 'PATCH',
    headers: config.headers,
    body:JSON.stringify({
      name: name,
      about: text
    })
  })
  .then(response)
}

export function getEditAvatar(url) {
  return fetch (`${config.url}/users/me/avatar`,{
    method: 'PATCH',
    headers: config.headers,
    body:JSON.stringify({
      avatar: url
    })
  })
  .then(response)
}

export function getNewCard(cardName, cardLink) {
  return fetch(`${config.url}/cards`, {
    method:'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
  .then(response)
}

export function getPutLikes(id) {
  return fetch(`${config.url}/cards/likes/${id}`,{
    method: "PUT",
    headers: config.headers
  })
  .then(response)
}

export function getDelLike(id) {
  return fetch(`${config.url}/cards/likes/${id}`,{
    method: "DELETE",
    headers: config.headers
  })
  .then(response)
}

export function getUser() {
  return fetch (`${config.url}/users/me`,{
    headers: config.headers
  })
  .then(response)
}

export function getInitialCards() {
  return fetch (`${config.url}/cards`,{
    headers: config.headers
  })
  .then(response)
}

export function getDeleteCard(id) {
  return fetch (`${config.url}/cards/${id}`,{
    method: 'DELETE',
    headers: config.headers
  })
  .then(response)
}

