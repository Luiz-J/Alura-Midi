function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido.');
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom

const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto = while
//para = for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

//function anônimas só podem ser criadas quando estão incluídas na referência de algo
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
