function salvarFilme(name){

    var cadastro = sessionStorage.getItem('nome');

    var indice =  name.substring(2);

    if( name.includes('it')){
        var filme = {
            'nome': 'It - A Coisa',
            'tipoFilme': 'TERROR', 
            'horario': indice + ' HR'
        };
        sessionStorage.setItem('receba', filme.name+" "+filme.tipoFilme+" "+filme.horario);
    } 

    if( name.includes('gd')){
        var filme = {
            'nome': 'A Good Day To Die Hard',
            'tipoFilme': 'Ação', 
            'horario': indice + ' HR'
        };
        sessionStorage.setItem('receba', filme.name+" "+filme.tipoFilme+" "+filme.horario);
    } 

    if( name.includes('al')){
        var filme = {
            'nome': 'Alerta Vermelho',
            'tipoFilme': 'Ação', 
            'horario': indice + ' HR'
        };
        sessionStorage.setItem('receba', filme.name+" "+filme.tipoFilme+" "+filme.horario);
    } 

    if( name.includes('ti')){
        var filme = {
            'nome': 'Titanic',
            'tipoFilme': 'Romance', 
            'horario': indice + ' HR'
        };
        sessionStorage.setItem('receba', filme.name+" "+filme.tipoFilme+" "+filme.horario);
    } 

    if( name.includes('du')){
        var filme = {
            'nome': 'Uma Quase Dupla',
            'tipoFilme': 'Nacional', 
            'horario': indice + ' HR'
        };
        sessionStorage.setItem('receba', filme.name+" "+filme.tipoFilme+" "+filme.horario);
    } 
alert(filme.nome)
    if(!cadastro){
        alert('efetue seu cadastro');
        document.getElementById(', filme').href = 'cadastro.html'

    }else{
        alert('efetue se '+name);
        document.getElementById(', filme').href = 'acento.html'
    }
}
