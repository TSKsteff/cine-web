
function setAcento(acent, id){
    var visor = document.getElementById("acento");
    
    if(visor.value.includes(acent)){
        visor.value = visor.value.replace(acent+',', '');
        var input = document.getElementById(id);
        input.style.backgroundColor = "green";
    }else{
        visor.value+=acent+',';
        var input = document.getElementById(id);
        input.style.backgroundColor = 'lightblue';
    }
    alert(visor.value)
}

function verificaAcento(){
    var visor = document.getElementById("acento");
    if(!visor.value){
        alert('nenhuma poutrona selecionada');
        document.getElementById("continua").href = 'acento.html'

    }else{
        document.getElementById("continua").href = 'alimento.html'
    }
    sessionStorage.setItem('acento', visor.value);
}

