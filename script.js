// Banco de dados de produtos
const produtos = [
    // Futebol
    {
        id: 1,
        nome: "Chuteira Campo Nike Mercurial",
        preco: 349.99,
        marca: "Nike",
        categoria: "futebol",
        imagem: "images/produtos/futebol/chuteiranikecampo.avif"
    },
    {
        id: 2,
        nome: "Bola de Futebol Adidas Al Rihla",
        preco: 179.99,
        marca: "Adidas",
        categoria: "futebol",
        imagem: "images/produtos/futebol/bolaadidas.jpg"
    },
    {
        id: 3,
        nome: "Camisa Puma Futsal Pro",
        preco: 129.99,
        marca: "Puma",
        categoria: "futebol",
        imagem: "images/produtos/futebol/camisapuma.avif"
    },
    {
        id: 4,
        nome: "Meião Nike Academy",
        preco: 39.99,
        marca: "Nike",
        categoria: "futebol",
        imagem: "images/produtos/futebol/meiaonike.webp"
    },
    
    // Basquete
    {
        id: 5,
        nome: "Tênis Nike LeBron Witness",
        preco: 599.99,
        marca: "Nike",
        categoria: "basquete",
        imagem: "images/produtos/basquete/tenislebron.avif"
    },
    {
        id: 6,
        nome: "Bola de Basquete Spalding NBA",
        preco: 149.99,
        marca: "Spalding",
        categoria: "basquete",
        imagem: "images/produtos/basquete/bolaspalding.webp"
    },
    {
        id: 7,
        nome: "Regata Adidas NBA Bulls",
        preco: 189.99,
        marca: "Adidas",
        categoria: "basquete",
        imagem: "images/produtos/basquete/regatabulls.webp"
    },
    {
        id: 8,
        nome: "Tabela de Basquete Profissional",
        preco: 1299.99,
        marca: "Kikos",
        categoria: "basquete",
        imagem: "images/produtos/basquete/tabela.avif"
    },
    
    // Corrida
    {
        id: 9,
        nome: "Tênis Adidas Ultraboost",
        preco: 899.99,
        marca: "Adidas",
        categoria: "corrida",
        imagem: "images/produtos/corrida/ultraboost.webp"
    },
    {
        id: 10,
        nome: "Relógio GPS Garmin Forerunner",
        preco: 1499.99,
        marca: "Garmin",
        categoria: "corrida",
        imagem: "images/produtos/corrida/garmin.webp"
    },
    {
        id: 11,
        nome: "Shorts Nike Dri-FIT",
        preco: 119.99,
        marca: "Nike",
        categoria: "corrida",
        imagem: "images/produtos/corrida/shortnike.jpg"
    },
    {
        id: 12,
        nome: "Camiseta Puma Running",
        preco: 89.99,
        marca: "Puma",
        categoria: "corrida",
        imagem: "images/produtos/corrida/camisapuma.jpg"
    },
    
    // Natação
    {
        id: 13,
        nome: "Maiô Speedo Hydrofast",
        preco: 249.99,
        marca: "Speedo",
        categoria: "natacao",
        imagem: "images/produtos/natacao/maio.webp"
    },
    {
        id: 14,
        nome: "Óculos de Natação Arena",
        preco: 119.99,
        marca: "Arena",
        categoria: "natacao",
        imagem: "images/produtos/natacao/oculos.webp"
    },
    {
        id: 15,
        nome: "Sunga Adidas Natação",
        preco: 139.99,
        marca: "Adidas",
        categoria: "natacao",
        imagem: "images/produtos/natacao/sunga.jpg"
    },
    {
        id: 16,
        nome: "Touca de Silicone Speedo",
        preco: 59.99,
        marca: "Speedo",
        categoria: "natacao",
        imagem: "images/produtos/natacao/touca.jpg"
    },
    
    // Tênis
    {
        id: 17,
        nome: "Raquete Wilson Pro Staff",
        preco: 899.99,
        marca: "Wilson",
        categoria: "tenis",
        imagem: "images/produtos/tenis/raquete-wilson.jpg"
    },
    {
        id: 18,
        nome: "Tênis Asics Gel Resolution",
        preco: 649.99,
        marca: "Asics",
        categoria: "tenis",
        imagem: "images/produtos/tenis/tenis-asics.jpg"
    },
    {
        id: 19,
        nome: "Bola de Tênis Wilson US Open",
        preco: 49.99,
        marca: "Wilson",
        categoria: "tenis",
        imagem: "images/produtos/tenis/bola-wilson.jpg"
    },
    {
        id: 20,
        nome: "Camiseta Nike Court Dri-FIT",
        preco: 149.99,
        marca: "Nike",
        categoria: "tenis",
        imagem: "images/produtos/tenis/camiseta-nike.jpg"
    }
];

// Formatar preço em reais
function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Função para exibir produtos
function exibirProdutos(categoria = 'todos') {
    const produtosGrid = document.getElementById('productGrid');
    produtosGrid.innerHTML = '';
    
    let produtosFiltrados = produtos;
    
    if (categoria !== 'todos') {
        produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
    }
    
    produtosFiltrados.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'product-card';
        produtoCard.innerHTML = `
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <div class="product-brand">${produto.marca}</div>
                <h3 class="product-name">${produto.nome}</h3>
                <div class="product-price">${formatarPreco(produto.preco)}</div>
                <button class="add-to-cart" data-id="${produto.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        produtosGrid.appendChild(produtoCard);
    });
    
    // Adicionar eventos aos botões de "Adicionar ao Carrinho"
    const botoesAddCart = document.querySelectorAll('.add-to-cart');
    botoesAddCart.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoId = parseInt(this.getAttribute('data-id'));
            adicionarAoCarrinho(produtoId);
        });
    });
}

// Carrinho de compras
let carrinho = [];

// Função para verificar se o produto já está no carrinho
function encontrarProdutoNoCarrinho(id) {
    return carrinho.findIndex(item => item.id === id);
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    // Encontrar o produto pelo ID
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto) {
        console.error('Produto não encontrado');
        return;
    }
    
    // Verificar se o produto já está no carrinho
    const produtoIndex = encontrarProdutoNoCarrinho(produtoId);
    
    if (produtoIndex >= 0) {
        // Se já existe, aumenta a quantidade
        carrinho[produtoIndex].quantidade += 1;
    } else {
        // Se não existe, adiciona ao carrinho
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            marca: produto.marca,
            imagem: produto.imagem,
            quantidade: 1
        });
    }
    
    // Salvar carrinho no localStorage
    salvarCarrinho();
    
    // Atualizar contador de itens no carrinho
    atualizarContadorCarrinho();
    
    // Mostrar confirmação para o usuário
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Função para mostrar notificação na tela
function mostrarNotificacao(mensagem) {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.textContent = mensagem;
    
    // Adicionar ao corpo da página
    document.body.appendChild(notificacao);
    
    // Mostrar notificação com animação
    setTimeout(() => {
        notificacao.classList.add('mostrar');
    }, 10);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notificacao.classList.remove('mostrar');
        setTimeout(() => {
            document.body.removeChild(notificacao);
        }, 300);
    }, 3000);
}

// Função para salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('rogerSportsCarrinho', JSON.stringify(carrinho));
}

// Função para carregar carrinho do localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('rogerSportsCarrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarContadorCarrinho();
    }
}

// Função para atualizar contador de itens no carrinho
function atualizarContadorCarrinho() {
    const cartIcon = document.querySelector('.cart-icon');
    
    // Calcular total de itens
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    
    // Atualizar ícone do carrinho
    if (totalItens > 0) {
        cartIcon.innerHTML = `🛒 <span class="cart-count">${totalItens}</span>`;
    } else {
        cartIcon.innerHTML = `🛒`;
    }
}

// Eventos para as abas de categorias
function inicializarEventos() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover a classe 'active' de todas as abas
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar a classe 'active' na aba clicada
            this.classList.add('active');
            
            // Exibir produtos da categoria selecionada
            const categoria = this.getAttribute('data-category');
            exibirProdutos(categoria);
            
            // Rolar suavemente até a seção de produtos
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Adicionar funcionalidade ao ícone de carrinho
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            exibirModalCarrinho();
        });
    }
}

// Função para exibir modal do carrinho
function exibirModalCarrinho() {
    // Verificar se já existe um modal aberto e removê-lo
    const modalExistente = document.querySelector('.modal-carrinho');
    if (modalExistente) {
        document.body.removeChild(modalExistente);
        return;
    }
    
    // Criar o modal
    const modal = document.createElement('div');
    modal.className = 'modal-carrinho';
    
    // Conteúdo do modal
    let conteudoModal = `
        <div class="modal-conteudo">
            <div class="modal-cabecalho">
                <h2>Seu Carrinho</h2>
                <button class="fechar-modal">&times;</button>
            </div>
            <div class="modal-corpo">
    `;
    
    // Verificar se o carrinho está vazio
    if (carrinho.length === 0) {
        conteudoModal += `
            <p class="carrinho-vazio">Seu carrinho está vazio.</p>
        `;
    } else {
        // Listar os itens do carrinho
        conteudoModal += `
            <div class="itens-carrinho">
        `;
        
        let total = 0;
        
        carrinho.forEach(item => {
            const subtotal = item.preco * item.quantidade;
            total += subtotal;
            
            conteudoModal += `
                <div class="item-carrinho">
                    <div class="item-imagem">
                        <img src="${item.imagem}" alt="${item.nome}" onerror="this.src='images/placeholder.jpg'">
                    </div>
                    <div class="item-detalhes">
                        <h3>${item.nome}</h3>
                        <p class="item-marca">${item.marca}</p>
                        <p class="item-preco">${formatarPreco(item.preco)}</p>
                    </div>
                    <div class="item-quantidade">
                        <button class="btn-quantidade" data-action="diminuir" data-id="${item.id}">-</button>
                        <span>${item.quantidade}</span>
                        <button class="btn-quantidade" data-action="aumentar" data-id="${item.id}">+</button>
                    </div>
                    <div class="item-subtotal">
                        ${formatarPreco(subtotal)}
                    </div>
                    <button class="remover-item" data-id="${item.id}">&times;</button>
                </div>
            `;
        });
        
        conteudoModal += `
            </div>
            <div class="carrinho-total">
                <h3>Total: <span>${formatarPreco(total)}</span></h3>
            </div>
        `;
    }
    
    conteudoModal += `
            </div>
            <div class="modal-rodape">
                <button class="btn-continuar">Continuar Comprando</button>
                ${carrinho.length > 0 ? '<button class="btn-finalizar">Finalizar Compra</button>' : ''}
            </div>
        </div>
    `;
    
    modal.innerHTML = conteudoModal;
    document.body.appendChild(modal);
    
    // Adicionar evento para fechar o modal
    const btnFechar = modal.querySelector('.fechar-modal');
    const btnContinuar = modal.querySelector('.btn-continuar');
    
    btnFechar.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    btnContinuar.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Adicionar eventos para os botões de quantidade
    const botoesQuantidade = modal.querySelectorAll('.btn-quantidade');
    botoesQuantidade.forEach(botao => {
        botao.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const acao = this.getAttribute('data-action');
            
            atualizarQuantidadeItem(id, acao);
            document.body.removeChild(modal);
            exibirModalCarrinho();
        });
    });
    
    // Adicionar eventos para os botões de remover
    const botoesRemover = modal.querySelectorAll('.remover-item');
    botoesRemover.forEach(botao => {
        botao.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            
            removerItemCarrinho(id);
            document.body.removeChild(modal);
            exibirModalCarrinho();
        });
    });
    
    // Adicionar evento para finalizar compra
    const btnFinalizar = modal.querySelector('.btn-finalizar');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            finalizarCompra();
            document.body.removeChild(modal);
        });
    }
    
    // Mostrar o modal com animação
    setTimeout(() => {
        modal.classList.add('mostrar');
    }, 10);
}

// Função para atualizar a quantidade de um item no carrinho
function atualizarQuantidadeItem(id, acao) {
    const itemIndex = encontrarProdutoNoCarrinho(id);
    
    if (itemIndex === -1) return;
    
    if (acao === 'aumentar') {
        carrinho[itemIndex].quantidade += 1;
    } else if (acao === 'diminuir') {
        if (carrinho[itemIndex].quantidade > 1) {
            carrinho[itemIndex].quantidade -= 1;
        } else {
            // Se a quantidade for 1 e for diminuir, remove o item
            removerItemCarrinho(id);
            return;
        }
    }
    
    salvarCarrinho();
    atualizarContadorCarrinho();
}

// Função para remover um item do carrinho
function removerItemCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho();
    atualizarContadorCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Carregar o carrinho do localStorage
    carregarCarrinho();
    
    // Exibir todos os produtos inicialmente
    exibirProdutos();
    
    // Inicializar eventos
    inicializarEventos();
    
    // Adicionar estilos para o modal e notificações
    const estilos = document.createElement('style');
    estilos.textContent = `
        /* Estilos para o modal do carrinho */
        .modal-carrinho {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .modal-carrinho.mostrar {
            opacity: 1;
        }
        
        .modal-conteudo {
            background-color: #1e1e1e;
            border-radius: 8px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 0 20px rgba(255, 69, 0, 0.3);
        }
        
        .modal-cabecalho {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #333;
        }
        
        .modal-cabecalho h2 {
            color: #ff4500;
            margin: 0;
        }
        
        .fechar-modal {
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .modal-corpo {
            padding: 1rem;
        }
        
        .carrinho-vazio {
            text-align: center;
            font-size: 1.2rem;
            color: #888;
            padding: 2rem 0;
        }
        
        .item-carrinho {
            display: grid;
            grid-template-columns: 80px 1fr auto auto auto;
            gap: 1rem;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #333;
        }
        
        .item-imagem img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 4px;
        }
        
        .item-detalhes h3 {
            margin: 0 0 0.5rem;
            font-size: 1rem;
        }
        
        .item-marca {
            color: #888;
            margin: 0;
            font-size: 0.9rem;
        }
        
        .item-preco {
            color: #ff4500;
            font-weight: bold;
            margin: 0.5rem 0 0;
        }
        
        .item-quantidade {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-quantidade {
            background-color: #333;
            color: white;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .item-subtotal {
            font-weight: bold;
            color: #ff4500;
        }
        
        .remover-item {
            background: none;
            border: none;
            color: #888;
            cursor: pointer;
            font-size: 1.3rem;
        }
        
        .carrinho-total {
            text-align: right;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #333;
        }
        
        .carrinho-total h3 {
            margin: 0;
        }
        
        .carrinho-total span {
            color: #ff4500;
            font-size: 1.2rem;
        }
        
        .modal-rodape {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            border-top: 1px solid #333;
        }
        
        .btn-continuar {
            background-color: #333;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .btn-finalizar {
            background-color: #ff4500;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .btn-continuar:hover {
            background-color: #444;
        }
        
        .btn-finalizar:hover {
            background-color: #e63e00;
        }
        
        /* Estilos para as notificações */
        .notificacao {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #1e1e1e;
            color: white;
            padding: 1rem;
            border-left: 5px solid #ff4500;
            border-radius: 4px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
        }
        
        .notificacao.mostrar {
            transform: translateX(0);
        }
        
        /* Estilos para contador de itens no carrinho */
        .cart-icon {
            position: relative;
        }
        
        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #ff4500;
            color: white;
            font-size: 0.8rem;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* Responsividade para o modal */
        @media (max-width: 768px) {
            .item-carrinho {
                grid-template-columns: 60px 1fr auto;
                gap: 0.5rem;
                padding-bottom: 0.8rem;
            }
            
            .item-imagem img {
                width: 60px;
                height: 60px;
            }
            
            .item-quantidade {
                grid-column: 2;
                margin-top: 0.5rem;
            }
            
            .item-subtotal {
                grid-column: 3;
                grid-row: 1 / span 2;
                text-align: right;
            }
            
            .remover-item {
                grid-column: 3;
                grid-row: 1;
                justify-self: end;
            }
        }
    `;
    document.head.appendChild(estilos);
});