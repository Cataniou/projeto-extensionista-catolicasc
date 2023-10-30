function loadPage(page) {
    var pageLocal = document.querySelector('#page')
    var request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200)
            pageLocal.innerHTML = request.response
    }

    var navBar = document.querySelector('.navbar-collapse');
        if (navBar.classList.contains('show')) 
            navBar.classList.remove('show');
        
    request.open('GET', `${page}.html`)
    request.send()
}

function validateForm() {
    var name = document.getElementById('form-name').value;
    var company = document.getElementById('form-company').value;
    var email = document.getElementById('form-email').value;
    var phone = document.getElementById('form-phone').value;
    var message = document.getElementById('form-message').value;

    if (name === '' || company === '' || email === '' || phone === '' || message === '') {
        alert('Por favor, preencha todos os campos');
        return false;
    }

    var phonePattern = /^\d+$/;
    if (!phone.match(phonePattern) || (phone.length != 10 && phone.length != 11)) {
        alert('Por favor, insira um número de telefone válido.');
        return false;
    }

    document.getElementById('form-name').value = '';
        document.getElementById('form-company').value = '';
        document.getElementById('form-email').value = '';
        document.getElementById('form-phone').value = '';
        document.getElementById('form-message').value = '';
        alert('O formulário foi enviado com sucesso!');

        return true;
}