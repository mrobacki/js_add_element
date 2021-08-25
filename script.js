const btn = document.createElement('button');

const createBtn = (btnLabel) => {
    btn.innerHTML = btnLabel;
    btn.classList.add('btn');
    document.body.appendChild(btn);
}

i = 1;

const addElement = () => {
    const block = document.createElement('div');
    block.innerHTML = i;
    block.classList.add('block');
    document.body.append(block);
    if(i % 5 == 0) {
        block.classList.add('circle');
    };
    i++
};

createBtn('Click here');

btn.addEventListener('click', addElement);