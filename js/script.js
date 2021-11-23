$(document).ready(() => {
    $('#design').click(() => {
        $('.p-1').show();
    })
})

function getData() {
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const txtMessage = document.getElementById('message').value;

    if (userName == '') {
        alert('fill all fields')
    } else if (userEmail == '') {
        alert('empty email fields')
    } else if (txtMessage == '') {
        alert('empy message')
    } else {
        alert(`${userName} we have received your message. Thank you for reaching out to us!`);
    }

}