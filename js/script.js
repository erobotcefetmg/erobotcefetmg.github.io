// Banco de dados local para contingência caso o fetch falhe (Prevenção de Erros de CORS local)
const BACKUP_EQUIPAMENTOS = [
    {
        "nome": "PCB Router - Fresadora de PCI",
        "foto": "https://images.unsplash.com/photo-1608962714006-2510936ebd01?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Prof. Carlos",
        "status": "Disponível",
        "categoria": "Fabricação",
        "descricao": "Fresadora de alta precisão para isolamento de trilhas em placas de circuito impresso protótipos."
    },
    {
        "nome": "Router CNC 1",
        "foto": "https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Marcos Silva",
        "status": "Disponível",
        "categoria": "Fabricação",
        "descricao": "Corte e usinagem de chapas de madeira, acrílico e metais moles de grande porte."
    },
    {
        "nome": "Router CNC 2",
        "foto": "https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Marcos Silva",
        "status": "Em manutenção",
        "categoria": "Fabricação",
        "descricao": "Equipamento secundário de usinagem cnc para projetos acadêmicos rápidos."
    },
    {
        "nome": "Câmera 360",
        "foto": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Letícia",
        "status": "Disponível",
        "categoria": "Visual/Audiovisual",
        "descricao": "Câmera de captura imersiva para mapeamento de ambientes virtuais e realidade aumentada."
    },
    {
        "nome": "Micro Retífica",
        "foto": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Kiara",
        "status": "Disponível",
        "categoria": "Ferramentas",
        "descricao": "Ferramenta rotativa multifunção para acabamento de peças plásticas, cortes finos e polimentos."
    },
    {
        "nome": "Plotter de Recorte",
        "foto": "https://images.unsplash.com/photo-1619120238346-978e07731e77?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Fernanda",
        "status": "Disponível",
        "categoria": "Fabricação",
        "descricao": "Corte preciso de vinil adesivo, máscaras de solda e papéis de alta gramatura."
    },
    {
        "nome": "CNC H3N",
        "foto": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Prof. Carlos",
        "status": "Restrito",
        "categoria": "Fabricação",
        "descricao": "Usinagem industrial de precisão avançada. Exige treinamento presencial nível III."
    },
    {
        "nome": "Scanner 3D",
        "foto": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Letícia",
        "status": "Disponível",
        "categoria": "Visual/Audiovisual",
        "descricao": "Digitalização tridimensional de objetos reais para posterior engenharia reversa."
    },
    {
        "nome": "Termoformadora",
        "foto": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Kiara",
        "status": "Disponível",
        "categoria": "Fabricação",
        "descricao": "Moldagem de chapas plásticas aquecidas por sucção a vácuo sobre moldes rígidos."
    },
    {
        "nome": "Impressora 3D Bambu Lab A1",
        "foto": "https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Kiara",
        "status": "Disponível",
        "categoria": "Fabricação",
        "descricao": "Impressora FDM de altíssima velocidade e sistema multimateriais (AMS lite)."
    },
    {
        "nome": "Osciloscópio Digital",
        "foto": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Gabriel",
        "status": "Disponível",
        "categoria": "Eletrônica",
        "descricao": "Análise de sinais de ondas de frequência, diagnóstico e debug de circuitos lógicos."
    },
    {
        "nome": "Multímetro de Bancada",
        "foto": "https://images.unsplash.com/photo-1517420162339-f99ff93dfdf9?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Gabriel",
        "status": "Disponível",
        "categoria": "Eletrônica",
        "descricao": "Medições de altíssima precisão para corrente, tensão, resistência e continuidade elétrica."
    },
    {
        "nome": "Balança de Precisão",
        "foto": "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?auto=format&fit=crop&w=500&q=80",
        "manual": "https://drive.google.com",
        "agenda": "https://docs.google.com/spreadsheets",
        "responsavel": "Fernanda",
        "status": "Disponível",
        "categoria": "Ferramentas",
        "descricao": "Pesagem de resinas e conferência de peso final de filamentos consumidos em projetos."
    }
];

let listaEquipamentos = [];
let filtroCategoriaAtual = 'todos';

// Elementos do DOM
const containers = {
    cards: document.getElementById('equipamentos-container'),
    agendamentos: document.getElementById('agendamentos-table-body'),
    manuais: document.getElementById('manuais-table-body'),
    searchMain: document.getElementById('search-input'),
    searchManuais: document.getElementById('manual-search'),
    countTotal: document.getElementById('count-total'),
    countDisp: document.getElementById('count-disponiveis'),
    mobileMenu: document.getElementById('mobile-menu'),
    navMenu: document.querySelector('.nav-menu'),
    modal: document.getElementById('equipamento-modal'),
    closeModal: document.getElementById('close-modal')
};

// Inicialização da Aplicação
document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
    configurarMenuResponsivo();
    configurarEventosFiltroEBusca();
    configurarModalFechamento();
    configurarScrollEActiveNav();
});

// Busca dados de `data/equipamentos.json`
async function carregarDados() {
    try {
        const response = await fetch('data/equipamentos.json');
        if (!response.ok) throw new Error('Não foi possível obter dados do JSON externo.');
        listaEquipamentos = await response.json();
    } catch (error) {
        console.warn("Utilizando array local (Fallback):", error.message);
        listaEquipamentos = BACKUP_EQUIPAMENTOS;
    }
    
    renderizarInterface(listaEquipamentos);
    atualizarContadores();
}

function renderizarInterface(dados) {
    renderizarCards(dados);
    renderizarTabelaAgendamentos(dados);
    renderizarTabelaManuais(dados);
}

// 1. Renderização dos Cards (Módulo Equipamentos)
function renderizarCards(dados) {
    containers.cards.innerHTML = "";
    if(dados.length === 0) {
        containers.cards.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted);">Nenhum equipamento correspondente encontrado.</p>`;
        return;
    }

    dados.forEach((eq, index) => {
        const statusClass = normalizarStatus(eq.status);
        const card = document.createElement('div');
        card.className = 'equip-card';
        card.innerHTML = `
            <div class="equip-img-wrapper">
                <img src="${eq.foto}" alt="${eq.nome}" onerror="this.src='https://via.placeholder.com/400x250?text=E-Robot'">
                <span class="status-tag ${statusClass}">${eq.status}</span>
            </div>
            <div class="equip-content">
                <h3>${eq.nome}</h3>
                <p>${eq.descricao || 'Sem descrição cadastrada.'}</p>
                <div class="equip-actions">
                    <button class="btn btn-secondary btn-small btn-detalhes" data-idx="${eq.nome}">Ver Detalhes</button>
                    <a href="${eq.manual}" target="_blank" class="btn btn-primary btn-small"><i class="fa-solid fa-file-pdf"></i> Manual</a>
                </div>
            </div>
        `;
        containers.cards.appendChild(card);
    });

    // Eventos nos botões recém-criados de "Ver Detalhes"
    document.querySelectorAll('.btn-detalhes').forEach(botao => {
        botao.addEventListener('click', (e) => {
            const nomeEq = e.currentTarget.getAttribute('data-idx');
            const eqSelecionado = listaEquipamentos.find(item => item.nome === nomeEq);
            abrirModal(eqSelecionado);
        });
    });
}

// 2. Renderização de Tabelas de Agendamento
function renderizarTabelaAgendamentos(dados) {
    containers.agendamentos.innerHTML = "";
    dados.forEach(eq => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${eq.nome}</strong></td>
            <td><span class="status-badge ${normalizarStatus(eq.status)}"><span class="dot"></span> ${eq.status}</span></td>
            <td>
                <a href="${eq.agenda}" target="_blank" class="btn btn-accent btn-small"><i class="fa-solid fa-calendar-check"></i> Agendar Uso</a>
            </td>
        `;
        containers.agendamentos.appendChild(tr);
    });
}

// 3. Renderização da Tabela de Manuais
function renderizarTabelaManuais(dados) {
    containers.manuais.innerHTML = "";
    dados.forEach(eq => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${eq.nome}</strong></td>

            <td>
                <a href="${eq.manual}" target="_blank" style="color:var(--accent-color); font-weight:600; text-decoration:none;">
                    <i class="fa-solid fa-file-pdf"></i> Download Manual
                </a>
            </td>
        `;
        containers.manuais.appendChild(tr);
    });
}

// Gerenciador de Filtros e Busca Textual Combinada
function aplicarFiltros() {
    const termoBusca = containers.searchMain.value.toLowerCase().trim();
    
    const dadosFiltrados = listaEquipamentos.filter(eq => {
        const correspondeCategoria = (filtroCategoriaAtual === 'todos' || eq.categoria === filtroCategoriaAtual);
        
        const correspondeTexto = (
            eq.nome.toLowerCase().includes(termoBusca) || 
            eq.responsavel.toLowerCase().includes(termoBusca) ||
            (eq.categoria && eq.categoria.toLowerCase().includes(termoBusca))
        );
        
        return correspondeCategoria && correspondeTexto;
    });
    
    renderizarCards(dadosFiltrados);
}

function configurarEventosFiltroEBusca() {
    // Busca na barra principal
    containers.searchMain.addEventListener('input', aplicarFiltros);

    // Botões de categorias
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filtroCategoriaAtual = e.currentTarget.getAttribute('data-category');
            aplicarFiltros();
        });
    });

    // Busca rápida da tabela de manuais separada
    containers.searchManuais.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const linhas = containers.manuais.querySelectorAll('tr');
        
        linhas.forEach(linha => {
            const nomeEq = linha.cells[0].textContent.toLowerCase();
            if(nomeEq.includes(termo)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }
        });
    });
}

// Lógica de Controle do Modal Dinâmico
function abrirModal(eq) {
    document.getElementById('modal-title').textContent = eq.nome;
    document.getElementById('modal-img').src = eq.foto;
    document.getElementById('modal-description').textContent = eq.descricao || 'Sem descrição cadastrada.';
    
    const badge = document.getElementById('modal-badge');
    badge.className = `status-badge ${normalizarStatus(eq.status)}`;
    badge.innerHTML = `<span class="dot"></span> ${eq.status}`;
    
    // 1. Renderização Dinâmica das Regras Específicas
    const listaRegras = document.getElementById('modal-rules-list');
    listaRegras.innerHTML = ""; // Limpa regras anteriores
    
    if (eq.regras && eq.regras.length > 0) {
        eq.regras.forEach(regra => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-check text-success"></i> ${regra}`;
            listaRegras.appendChild(li);
        });
    } else {
        // Regra padrão caso esqueçam de preencher o JSON para algum item
        listaRegras.innerHTML = `<li><i class="fa-solid fa-check text-success"></i> Seguir as instruções gerais e zelar pelo equipamento.</li>`;
    }
    
    // 2. Links dos Botões de Ação Fixos
    document.getElementById('modal-btn-manual').href = eq.manual || "#";
    document.getElementById('modal-btn-agenda').href = eq.agenda || "#";
    
    // 3. Controle Inteligente do Botão do YouTube Video
    const btnVideo = document.getElementById('modal-btn-video');
    if (eq.video && eq.video.trim() !== "") {
        btnVideo.href = eq.video;
        btnVideo.style.display = "inline-flex"; // Exibe o botão se houver link
    } else {
        btnVideo.style.display = "none"; // Oculta o botão se estiver vazio
    }
    
    containers.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function configurarModalFechamento() {
    containers.closeModal.addEventListener('click', fecharModal);
    containers.modal.addEventListener('click', (e) => {
        if(e.target === containers.modal) fecharModal();
    });
}

function fecharModal() {
    containers.modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Menu sanduíche responsivo
function configurarMenuResponsivo() {
    containers.mobileMenu.addEventListener('click', () => {
        containers.mobileMenu.classList.toggle('active');
        containers.navMenu.classList.toggle('active');
    });

    // Fecha menu ao clicar em qualquer item
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            containers.mobileMenu.classList.remove('active');
            containers.navMenu.classList.remove('active');
        });
    });
}

// Atualiza os contadores estáticos e dinâmicos baseados no JSON
function atualizarContadores() {
    containers.countTotal.textContent = listaEquipamentos.length;
    const disponiveis = listaEquipamentos.filter(e => e.status === 'Disponível').length;
    containers.countDisp.textContent = disponiveis;
}

// Realce e Monitoramento de links ativos no cabeçalho
function configurarScrollEActiveNav() {
    const links = document.querySelectorAll('.nav-link');
    const secoes = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let atual = "";
        secoes.forEach(secao => {
            const top = secao.offsetTop;
            const height = secao.clientHeight;
            if (window.scrollY >= (top - 150)) {
                atual = secao.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${atual}`) {
                link.classList.add('active');
            }
        });
    });
}

// Conversor auxiliar para classes CSS padronizadas
function normalizarStatus(status) {
    if(!status) return 'disponivel';
    const s = status.toLowerCase();
    if(s.includes('manuten')) return 'manutencao';
    if(s.includes('restrit')) return 'restrito';
    return 'disponivel';
}