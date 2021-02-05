import { apiAgileEngine } from "./apiConfig";

export const auth = () => {
    return fetch(apiAgileEngine.url+ "auth", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "apiKey": apiAgileEngine.apiKey }) 
    }).then((response) => response.json())
    .then((responseData) => {
        return responseData
    })
    .catch(error => {
        return error
    })
}

export const getImages = (token, page=1) => {
    return fetch(apiAgileEngine.url+ "images?page="+page, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
    .then((responseData) => {
        return responseData
    })
    .catch(error => {
        return error
    })
}

export const getImage = (token, id) => {
    return fetch(apiAgileEngine.url+ "images/"+id, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
    .then((responseData) => {
        return responseData
    })
    .catch(error => {
        return error
    })
}