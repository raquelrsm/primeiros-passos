function saoDiferentes(){
    let input1 = document.querySelector('#input1').value;
    let input2 = document.querySelector('#input2').value;

    if (input1 !== input2){
        let div = document.createElement('div');
        div.innerText = 'Os números são diferentes!';
        document.body.append(div);
        div.style.color = 'green';
        div.style.marginTop = '30px';
        div.style.fontSize = '24px';        
    } else{
        let div = document.createElement('div');
        div.innerText = 'Os números não são diferentes!';
        document.body.append(div);
        div.style.color = 'red';
        div.style.marginTop = '30px';
        div.style.fontSize = '24px'; 
    }
}

function resetar(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementsByTagName('div').remove();
}

document.getElementById('botaoChecar').onclick = saoDiferentes;
document.getElementById('botaoResetar').onclick = resetar