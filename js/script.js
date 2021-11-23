$(document).ready(() => {
    $('#design').click(() => {
        $('#p-1').toggle();
    })
    $('#dev').click(() => {
        $('#p-2').toggle();
    })
    $('#prod').click(() => {
        $('#p-3').toggle();
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