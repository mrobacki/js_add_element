let i;
const btn = document.createElement('button');

const addButton = (btnLabel) => {
    btn.innerHTML = btnLabel;
    btn.classList.add('btn');
    document.body.appendChild(btn);
}

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

addButton('Click on button');

btn.addEventListener('click', addElement);