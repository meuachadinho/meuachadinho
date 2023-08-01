const achadinhos = [

]

// Se clicar no botão da um alert
$('#btn-achadinho').click(function(){
    // Pega o valor do input
    let achadinho = $('#input-achadinho').val();
    
    // Verifica se o valor do input é um número e se existe um achadinho com esse id
    if(!isNaN(achadinho) && achadinhos.find(achadinho => achadinho.id == $('#input-achadinho').val())){
        // Pega o achadinho
        let achadinho = achadinhos.find(achadinho => achadinho.id == $('#input-achadinho').val());
        // Cria o html
        let html = `<h1>${achadinho.name}</h1><a href="${achadinho.link}" target="_blank">${achadinho.name} =)</a>`;
        // Adiciona o html na div
        $('.result').html(html);
    }else{
        // Cria o html
        let html = `<h2>Achadinho não encontrado =( </h2>`;
        html+= `<p>Verifique se o código está correto</p>`;
        html+= `<p>Se tiver algum problema nos mande uma mensagem no instagram que será um prazer te ajudar =) </p>`;
        // Adiciona o html na div
        $('.result').html(html);
    }
});
