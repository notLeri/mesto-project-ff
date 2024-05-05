const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-13',
    authoriseHeader: {
        authorization: 'f465fb02-51a8-4242-b3a2-1fc5d06a9ddb',
    },
    headers: {
        authorization: 'f465fb02-51a8-4242-b3a2-1fc5d06a9ddb',
        'Content-Type': 'application/json'
    },
}

function getUser() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.authoriseHeader,
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Ошибка загрузки профиля с сервера');
        }
        return res.json();
    })
}

function getCards (){
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.authoriseHeader,
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Ошибка загрузки карточек с сервера');
        }
        return res.json();
    })
}

function updateProfile(newName, newDescription) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: newName,
            about: newDescription,
        }),
    })
}

function postNewCard(nameValue, linkvValue) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: nameValue,
            link: linkvValue,
        })
    })
}

function deleteCardOnServer(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.authoriseHeader,
    })
}

function likeCardOnServer() {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.authoriseHeader,
    })
};

function deleteLikeOnServer() {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.authoriseHeader,
    })
}

export { getUser, getCards, updateProfile, postNewCard, deleteCardOnServer }