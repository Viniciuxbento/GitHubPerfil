

interface PerfilGitHub {
    id:string,
    html_url:string,
    avatar_url:string,
    name:string,
    public_repos:number,
    followers:number,
    following:number,
    created_at:string    

}

let result = function pegarNomeDeUsuario() {
    let botao = document.getElementById("botao")

    botao.addEventListener('click', async () => {
        
        let nomePesquisa = document.getElementById("input") as HTMLInputElement;

        if (nomePesquisa) {
            let valor = nomePesquisa.value;
            await pegarPerfil(valor);
            
        }
    })
   
}

async function pegarPerfil(result){

    let nome = result
    let arquivoPerfil =await fetch(`https://api.github.com/users/${nome}`)
    let resposta:PerfilGitHub =await arquivoPerfil.json()
    let final: PerfilGitHub = {
        id: resposta.id,
        html_url: resposta.html_url,
        avatar_url: resposta.avatar_url,
        name: resposta.name,
        public_repos: resposta.public_repos,
        followers: resposta.followers,
        following: resposta.following,
        created_at: resposta.created_at
    };
    let urlComAspas = final.avatar_url;
    let urlSemAspas = urlComAspas.replace(/^"|"$/g, '')
    trocarImagem(`${urlSemAspas}`)
    criarSection(final.id,final.html_url, final.name, final.followers, final.following,final.created_at,final.public_repos)
    
    

}

function trocarImagem(url:string){
    let imagem = document.getElementById('imagem') as HTMLImageElement;
    let input = document.getElementById('input') as HTMLInputElement;
    if (imagem) {
        imagem.src = url;
        input.innerText= ''
    } else {
        console.error('Elemento de imagem não encontrado.');
    }
}

function criarSection(_id:string, _linkPerfil:string,_nomeUsuario:string, _seguidores:number, _seguindo:number, _criadoEm:string,_repositorios:number){
    let section = document.querySelector('.dadosDoUsuario')

    let id = document.createElement("h2")
    id.classList.add('classeh1id')
    let idTexto = document.createTextNode(`ID do Usuário:\n ${_id}`)
    id.appendChild(idTexto)


    let linkPerfil = document.createElement("link")
    linkPerfil.classList.add('link')
    let urlComAspas = _linkPerfil;
    let urlSemAspas = urlComAspas.replace(/^"|"$/g, '')
    let linkPerfilTexto = document.createTextNode(`${urlSemAspas}`)
    linkPerfil.href = urlSemAspas
    linkPerfil.appendChild(linkPerfilTexto)

    let nomeUsuario = document.createElement("h1")
    nomeUsuario.classList.add('classeh1nome')
    let nomeUsuarioTexto = document.createTextNode(`${_nomeUsuario}`)
    nomeUsuario.appendChild(nomeUsuarioTexto)

    let seguidoresContainer = document.createElement("div")
    seguidoresContainer.classList.add('containerSeguidores')


    let seguidores = document.createElement("h2")
    seguidores.classList.add('seguidores')
    let seguidoresTexto = document.createTextNode(`Seguidores \n${_seguidores}`)
    seguidores.appendChild(seguidoresTexto)


    let seguindo = document.createElement("h2")
    seguindo.classList.add('seguidores')
    let seguindoTexto = document.createTextNode(`Seguindo \n${_seguindo}`)
    seguindo.appendChild(seguindoTexto)


    let criadoEm = document.createElement("p")
    criadoEm.classList.add('criadoEm')
    let criadoEmTexto = document.createTextNode(`Perfil criado em: Dia\n${_criadoEm}`)
    criadoEm.appendChild(criadoEmTexto)


    let repositorios = document.createElement("h1")
    repositorios.classList.add('repositorios')
    let repositoriosTexto = document.createTextNode(`Repositórios públicos:\n${_repositorios}`)
    repositorios.appendChild(repositoriosTexto)


    section.innerHTML = ""
    section.appendChild(id)
    section.appendChild(linkPerfil)
    section.appendChild(nomeUsuario)
    section.appendChild(seguidoresContainer)
    seguidoresContainer.appendChild(seguidores)
    seguidoresContainer.appendChild(seguindo)
    section.appendChild(repositorios)
    section.appendChild(criadoEm)
    
}


result()

