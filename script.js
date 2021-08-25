const button = document.createElement('button');
button.innerHTML = 'klikaj';
document.body.appendChild(button);
button.style.display = 'block';

i = 1;

button.addEventListener('click', function dodawanie() {
    const block = document.createElement('div');
    block.innerHTML = i;
    block.classList.add('block');
    document.body.append(block);
    if(i % 5 == 0) {
        block.classList.add('circle');
    }
    i++;
});