const button = document.querySelector('button');
button.addEventListener('click', clicked);
let i = 'none';
function clicked() {
    if (i === 'none') {
        document.querySelector('.clear').style.display = 'block';
        i = 'block';
    } else {
        document.querySelector('.clear').style.display = 'none';
        i = 'none';
    }
}
