function alternarTrimestre(trimestreId) {
    const conteudos = document.querySelectorAll('.conteudo-trimestre');
    conteudos.forEach(conteudo => conteudo.classList.remove('ativo'));

    const botoes = document.querySelectorAll('.btn-trimestre');
    botoes.forEach(botao => botao.classList.remove('ativo'));

    const trimestreAlvo = document.getElementById(trimestreId);
    if (trimestreAlvo) {
        trimestreAlvo.classList.add('ativo');
    }

    const botaoAlvo = document.querySelector(`.btn-trimestre[data-trim="${trimestreId}"]`);
    if (botaoAlvo) {
        botaoAlvo.classList.add('ativo');
    }

    if (history.pushState) {
        history.pushState(null, null, `#${trimestreId}`);
    } else {
        location.hash = `#${trimestreId}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        alternarTrimestre(hash);
    }

    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.replace('#', '');
        if (newHash && document.getElementById(newHash)) {
            alternarTrimestre(newHash);
        }
    });
});
