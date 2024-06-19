function setRecibo() {
    
    document.getElementById('filme').textContent = sessionStorage.getItem('receba');
    document.getElementById('acentor').textContent = sessionStorage.getItem('acento');
    document.getElementById('alimento').textContent = 'R$' + sessionStorage.getItem('comida');

    alert(alimento +'\n'+filme +'\n'+acento +'\n'+cadastro);
}


