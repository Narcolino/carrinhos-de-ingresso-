function comprar() {
    let opcoes = document.getElementById('tipo-ingresso').value;
    let pista = document.getElementById('qtd-pista').innerHTML;
    let inferior = document.getElementById('qtd-inferior').innerHTML;
    let superior = document.getElementById('qtd-superior').innerHTML;
    let quantidade = document.getElementById('qtd').value;

    if (opcoes == 'superior'){
        if(superior == 0){
            alert('Ingressos esgotados para a categoria cadeira superior! ')
        }else{
            document.getElementById('qtd-superior').innerHTML = superior - quantidade;
        }
    }else{
        if (opcoes == 'inferior') {
            if(inferior == 0){
                alert('Ingressos esgotados para a categoria cadeira Inferior! ')
            }else{
                document.getElementById('qtd-inferior').innerHTML = inferior - quantidade;
            }
        }else{
            if (opcoes == 'pista') {
                if(pista == 0){
                    alert('Ingressos esgotados para a categoria Pista! ')
                }else{
                 document.getElementById('qtd-pista').innerHTML = pista - quantidade;
                }
            }
        }
    }

    document.getElementById('qtd').value = '';
}
