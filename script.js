const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {

let mainTbody = document.getElementById("main");
mainTbody.innerHTML = `
        <tr>
            <td>${response.squadName}</td>
            <td>${response.homeTown}</td>
            <td>${response.formed}</td>
            <td>${response.secretBase}</td>
            <td>${response.active}</td>
        </tr>
    `

//    heroes table
let heroesTablebody = document.getElementById("helden");
response.members.forEach(function (hero) {
    heroesTablebody.innerHTML += `
        <tr>
            <td>${hero.name}</td>
            <td>${hero.age}</td>
            <td>${hero.secretIdentity}</td>
             ${arrayToTD(hero.powers)}
        </tr>
        `;
})
}

//  array to td function
function arrayToTD(array) {
    let result = "";

    array.forEach(function (element) {
        result += '<td>' + element + '</td>';
    });

    return result;
}

// var obj = {
//     "Naam": "Zara",
//     "Score": 36,
//     "Begin datum": "21 Januari 2016",
//     "Vrienden": [
//         "Mika",
//         "Josef",
//         "Maria",
//         "Sumail",
//         "Lotte"
//     ],
//     "Gekwalificeerd": true
//
// };
//
// console.log(JSON.stringify(obj));