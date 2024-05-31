document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'insert.php', false);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('response').innerHTML = this.responseText;
        } else if (this.readyState == 4 && this.status == 404) {
            document.getElementById('response').innerHTML = 'Error 404: Not Found';
        }
    }

    xhttp.send(`email=${email}&password=${password}`);
});
