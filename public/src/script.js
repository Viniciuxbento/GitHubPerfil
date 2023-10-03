var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var result = function pegarNomeDeUsuario() {
    var _this = this;
    var botao = document.getElementById("botao");
    botao.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var nomePesquisa, valor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nomePesquisa = document.getElementById("input");
                    if (!nomePesquisa) return [3 /*break*/, 2];
                    valor = nomePesquisa.value;
                    return [4 /*yield*/, pegarPerfil(valor)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
};
function pegarPerfil(result) {
    return __awaiter(this, void 0, void 0, function () {
        var nome, arquivoPerfil, resposta, final, urlComAspas, urlSemAspas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nome = result;
                    return [4 /*yield*/, fetch("https://api.github.com/users/".concat(nome))];
                case 1:
                    arquivoPerfil = _a.sent();
                    return [4 /*yield*/, arquivoPerfil.json()];
                case 2:
                    resposta = _a.sent();
                    final = {
                        id: resposta.id,
                        html_url: resposta.html_url,
                        avatar_url: resposta.avatar_url,
                        name: resposta.name,
                        public_repos: resposta.public_repos,
                        followers: resposta.followers,
                        following: resposta.following,
                        created_at: resposta.created_at
                    };
                    urlComAspas = final.avatar_url;
                    urlSemAspas = urlComAspas.replace(/^"|"$/g, '');
                    trocarImagem("".concat(urlSemAspas));
                    criarSection(final.id, final.html_url, final.name, final.followers, final.following, final.created_at, final.public_repos);
                    return [2 /*return*/];
            }
        });
    });
}
function trocarImagem(url) {
    var imagem = document.getElementById('imagem');
    var input = document.getElementById('input');
    if (imagem) {
        imagem.src = url;
        input.innerText = '';
    }
    else {
        console.error('Elemento de imagem não encontrado.');
    }
}
function criarSection(_id, _linkPerfil, _nomeUsuario, _seguidores, _seguindo, _criadoEm, _repositorios) {
    var section = document.querySelector('.dadosDoUsuario');
    var id = document.createElement("h2");
    id.classList.add('classeh1id');
    var idTexto = document.createTextNode("ID do Usu\u00E1rio:\n ".concat(_id));
    id.appendChild(idTexto);
    var linkPerfil = document.createElement("link");
    linkPerfil.classList.add('link');
    var urlComAspas = _linkPerfil;
    var urlSemAspas = urlComAspas.replace(/^"|"$/g, '');
    var linkPerfilTexto = document.createTextNode("".concat(urlSemAspas));
    linkPerfil.href = urlSemAspas;
    linkPerfil.appendChild(linkPerfilTexto);
    var nomeUsuario = document.createElement("h1");
    nomeUsuario.classList.add('classeh1nome');
    var nomeUsuarioTexto = document.createTextNode("".concat(_nomeUsuario));
    nomeUsuario.appendChild(nomeUsuarioTexto);
    var seguidoresContainer = document.createElement("div");
    seguidoresContainer.classList.add('containerSeguidores');
    var seguidores = document.createElement("h2");
    seguidores.classList.add('seguidores');
    var seguidoresTexto = document.createTextNode("Seguidores \n".concat(_seguidores));
    seguidores.appendChild(seguidoresTexto);
    var seguindo = document.createElement("h2");
    seguindo.classList.add('seguidores');
    var seguindoTexto = document.createTextNode("Seguindo \n".concat(_seguindo));
    seguindo.appendChild(seguindoTexto);
    var criadoEm = document.createElement("p");
    criadoEm.classList.add('criadoEm');
    var criadoEmTexto = document.createTextNode("Perfil criado em: Dia\n".concat(_criadoEm));
    criadoEm.appendChild(criadoEmTexto);
    var repositorios = document.createElement("h1");
    repositorios.classList.add('repositorios');
    var repositoriosTexto = document.createTextNode("Reposit\u00F3rios p\u00FAblicos:\n".concat(_repositorios));
    repositorios.appendChild(repositoriosTexto);
    section.innerHTML = "";
    section.appendChild(id);
    section.appendChild(linkPerfil);
    section.appendChild(nomeUsuario);
    section.appendChild(seguidoresContainer);
    seguidoresContainer.appendChild(seguidores);
    seguidoresContainer.appendChild(seguindo);
    section.appendChild(repositorios);
    section.appendChild(criadoEm);
}
result();
