function encriptarTexto (){
    let texto = document.getElementById('textarea1').value;
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        document.getElementById('texto_resultado').innerHTML = textoCifrado;
        repeatedConditions();
}

function desencriptarTexto (){
    let texto = document.getElementById('textarea1').value;
    let textoDecifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        document.getElementById('texto_resultado').innerHTML = textoDecifrado;
        repeatedConditions();
}

function repeatedConditions (){
    document.getElementById('textarea1').value = '';
    document.getElementById('text1').setAttribute('hidden', true);
    document.getElementById('text2').setAttribute('hidden', true);
    document.getElementById('muñeco1').setAttribute('hidden', true);
}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.getElementById('texto_resultado').textContent;
    navigator.clipboard.writeText(contenido);
});