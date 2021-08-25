const btn = document.createElement('button');

const createBtn = (btnLabel) => {
    btn.innerHTML = btnLabel;
    btn.classList.add('btn');
    document.body.appendChild(btn);
}

let i;

const addElement = () => {
    if(!i) {
        i = 1;
    };
    const block = document.createElement('div');
    block.innerHTML = i;
    block.classList.add('block');
    if(i % 5 == 0) {
        block.classList.add('circle');
    };
    document.body.append(block);
    i++;
};

createBtn('Click on button');

btn.addEventListener('click', addElement);