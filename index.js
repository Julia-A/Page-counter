let count = 0;

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');


function increment()
{
    count = count + 1;
    countEl.textContent = count;
}

function save()
{
    let saves = count + " - ";
    saveEl.textContent += saves;
    count = 0;
    countEl.textContent = 0;
}