"use strict";

const arr = [...document.querySelector('.jump').innerHTML]

let txt = arr.map(letter => `<span>${letter}</span>`).join('');

document.querySelector('.jump').innerHTML=txt;
