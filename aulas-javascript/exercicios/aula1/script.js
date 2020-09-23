/*No arquivo javascript, realizar o seguinte:
- Criar uma função chamada checarSePodeDirigir
- Essa função deverá receber um parâmetro chamado idade
- Se a idade for maior que 18, executar um alert() com o texto "Já pode dirigir!"
- Senão, caso a idade não seja maior que 18, executar um alert() com o texto "Ainda não pode dirigir!"
- No final do arquivo javascript, execute/chame a função passando o parâmetro (idade), que deve ser um número*/

function checarSePodeDirigir(){
    let idade = prompt ('Digite sua idade');
    if (idade > 18){
        alert('Já pode dirigir!');
    } else {
        alert ('Ainda não pode dirigir!');
    }
}

checarSePodeDirigir();
