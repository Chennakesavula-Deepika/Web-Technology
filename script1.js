const personRelates  = document.querySelector('.status');
const Button = document.getElementById('addFriend');

Button.addEventListener('click', function() {
    if (personRelates.innerHTML === 'Stranger') {
        personRelates.innerHTML = 'Best Friend';
        personRelates.style.color = 'green'
        
        addFriend.innerHTML = "Remove Frd"
    } else {
        personRelates.innerHTML = 'Stranger';
        personRelates.style.color = 'red'
    }
});