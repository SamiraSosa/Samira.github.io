const CALCULAR = document.getElementById('calcular');
console.log(CALCULAR)
const INDICE = document.getElementById('indice');
const MENSAJE = document.getElementById('mensaje');
const ERROR= document.getElementById('error');
const BORRAR=document.getElementById('borrar');


BORRAR.addEventListener('click',()=>{
 MENSAJE.style.display='none';
 INDICE.style.display='none';
 const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
 altura.value='';
 peso.value='';   


})
CALCULAR.addEventListener('click',() =>{
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    altura= altura/100;
    let resultado = (peso)/(altura*altura);
    resultado = (resultado);
    resultado= resultado.toFixed(1);
    INDICE.innerHTML= 'IMC = '+ resultado;
    if(altura*peso<=0){
        ERROR.style.display='block';
        INDICE.style.display= 'none';
        MENSAJE.style.display='none';
        
    }
    
    
    if((peso>0)&&(altura>0)){
    if((resultado>0)&&(resultado<18.5)){
    MENSAJE.innerHTML = "Bajo peso";
    INDICE.style.display= 'block';
        MENSAJE.style.display='block';
        ERROR.style.display='none';

    }
    else{if(resultado<=24.9){
        MENSAJE.innerHTML = "Peso Normal";
        INDICE.style.display= 'block';
        MENSAJE.style.display='block';
        ERROR.style.display='none';
    }
    else{ if(resultado<=29.9){
        MENSAJE.innerHTML = "Sobrepeso";
        INDICE.style.display= 'block';
        MENSAJE.style.display='block';
        ERROR.style.display='none';
    }
    else{if(resultado>=30){
        MENSAJE.innerHTML= "Obesidad";
        INDICE.style.display= 'block';
        MENSAJE.style.display='block';
        ERROR.style.display='none';
    }
}
    }
    }
    }
})