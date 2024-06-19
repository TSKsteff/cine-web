function salvarCadastro(){
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    
    sessionStorage.setItem('nome', document.getElementById('nome').value);
    sessionStorage.setItem('cpf', document.getElementById('cpf').value);
    sessionStorage.setItem('email', document.getElementById('email').value);
    
    if(!nome || !cpf || !email){
        alert('tem dados faltando');
        document.getElementById("url").href = 'cadastro.html'
    }else {document.getElementById("url").href = 'ingressos.html'}

}
