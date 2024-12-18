function comprar() {
    let opcoes = document.getElementById('tipo-ingresso').value;
    let pista = parseInt(document.getElementById('qtd-pista').innerHTML);
    let inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
    let superior = parseInt(document.getElementById('qtd-superior').innerHTML);
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (opcoes == 'superior') {
        if(superior < quantidade){
            alert('Ingressos esgotados ou indisponiveis para a categoria cadeira superior! ')
        }else{
            document.getElementById('qtd-superior').innerHTML = superior - quantidade;
            alert('Compra realizada com sucesso');
        }
    } else if (opcoes == 'inferior') {
        if(inferior < quantidade){
            alert('Ingressos esgotados  ou indisponiveis para a categoria cadeira Inferior! ')
        }else{
            document.getElementById('qtd-inferior').innerHTML = inferior - quantidade;
            alert('Compra realizada com sucesso');
        }
    } else {
        if (opcoes == 'pista') {
            if(pista < quantidade){
                alert('Ingressos esgotados  ou indisponiveis para a categoria Pista! ')
            }else{
             document.getElementById('qtd-pista').innerHTML = pista - quantidade;
             alert('Compra realizada com sucesso');
            }
        }
    }

    document.getElementById('qtd').value = '';
}
