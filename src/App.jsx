import React from 'react';

const sub = document.querySelector('.sub-btn');

function test(e) {
    console.log(e);
}

sub.addEventListener('click', test);