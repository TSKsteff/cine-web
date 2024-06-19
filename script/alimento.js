function setbomboniere(valor,id){
    
    var visor = document.getElementById('comida');


    if(valor === '-'){
        if(document.getElementById(id).id === 'coca-'){
            visor.value = visor.value.replace("coca, ","");
        }
        
        if(document.getElementById(id).id === 'pipoca-'){
            visor.value = visor.value.replace("pipoca, ","");
        }
        
        if(document.getElementById(id).id === 'nachos-'){
            visor.value = visor.value.replace("nachos, ","");
        }
    }else if(valor === '+'){
        if(document.getElementById(id).id === 'coca+'){
            visor.value += "coca, ";
        }
        
        if(document.getElementById(id).id === 'pipoca+'){
            visor.value += "pipoca, ";
        }
        
        if(document.getElementById(id).id === 'nachos+'){
            visor.value += "nachos, ";
        }
    }

 
    if(visor.value.includes('coca')){
        var input = document.getElementById('coca+');
        input.style.backgroundColor = "white";
        var input = document.getElementById('coca-');
        input.style.backgroundColor = "white";
            
    }else if(!visor.value.includes('coca')){
        var input = document.getElementById('coca+');
        input.style.backgroundColor = "aqua";
        var input = document.getElementById('coca-');
        input.style.backgroundColor = "aqua";
    }


    if(visor.value.includes('pipoca')){
        var input = document.getElementById('pipoca+');
        input.style.backgroundColor = "white";
        var input = document.getElementById('pipoca-');
        input.style.backgroundColor = "white";
            
    }else if(!visor.value.includes('pipoca')){
        var input = document.getElementById('pipoca+');
        input.style.backgroundColor = "aqua";
        var input = document.getElementById('pipoca-');
        input.style.backgroundColor = "aqua";
    }
    
    if(visor.value.includes('nachos')){
        var input = document.getElementById('nachos+');
        input.style.backgroundColor = "white";
        var input = document.getElementById('nachos-');
        input.style.backgroundColor = "white";
            
    }else if(!visor.value.includes('nachos')){
        var input = document.getElementById('nachos+');
        input.style.backgroundColor = "aqua";
        var input = document.getElementById('nachos-');
        input.style.backgroundColor = "aqua";
    }
    sessionStorage.setItem('comida', visor);
}
