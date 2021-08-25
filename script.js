const btn = document.createElement('button');

const createBtn = (btnLabel) => {
    btn.innerHTML = btnLabel;
    btn.classList.add('btn');
    document.body.appendChild(btn);
}

let number = 1;

const addElement = () => {
    const block = document.createElement('div');
    block.innerHTML = number;
    block.classList.add('block');
    if(number % 5 == 0) {
        block.classList.add('circle');
    };
    document.body.append(block);
    number++;
};

createBtn('Click on button');

btn.addEventListener('click', addElement);