'use strict';

/**
 * @description
 * Thanks to https://gist.github.com/gordonbrander/2230317
 */

let generateId = () => {
    return Math.random().toString(36).substr(2, 36);
};

let generate = () => {
    let btn = document.querySelector('#m-btn')
        , resp = document.querySelector('#l-resp');

    btn.addEventListener('click', () => {
        let id = generateId();

        resp.innerHTML = id;
    });
};

generate();
