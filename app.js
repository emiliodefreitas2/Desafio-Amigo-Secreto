
let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNome = amigoInput.value.trim();

    if (amigoNome === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (amigos.includes(amigoNome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(amigoNome);
    amigoInput.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio!');
        return;
    }

    let listaSorteada = [...amigos];
    embaralharArray(listaSorteada);

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let doador = amigos[i];
        let recebedor = listaSorteada[(i + 1) % listaSorteada.length];

        if (doador === recebedor) {
            // Se o sorteio resultar em alguém tirando a si mesmo, tenta novamente.
            // Em um cenário mais robusto, seria necessário um algoritmo de sorteio mais complexo
            // para garantir que ninguém tire a si mesmo, especialmente com poucos participantes.
            // Para este exemplo básico, vamos apenas alertar e pedir para tentar novamente.
            alert('O sorteio resultou em alguém tirando a si mesmo. Por favor, tente novamente!');
            resultadoDiv.innerHTML = ''; // Limpa resultados parciais
            return;
        }

        let p = document.createElement('p');
        p.textContent = `${doador} tirou ${recebedor}`;
        resultadoDiv.appendChild(p);
    }
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para reiniciar o sorteio (opcional, mas útil)
function reiniciar() {
    amigos = [];
    atualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
}


