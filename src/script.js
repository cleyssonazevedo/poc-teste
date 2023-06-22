// Estilo CSS
const styles = `
.chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    overflow: hidden;
}

.chat-container.collapsed {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.chat-container .chat-toggle {
    display: none;
 }

.chat-container.collapsed .chat-toggle {
   display: block;
}


.chat-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.chat-header h3 {
    margin: 0;
    font-size: 16px;
}

.chat-body {
    height: calc(100% - 110px);
    overflow-y: auto;
    padding: 10px;
}

.message {
    background-color: #f0f0f0;
    color: #333;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
}

.chat-input input[type="text"] {
    flex-grow: 1;
    padding: 5px;
    border-radius: 5px;
    border: none;
}

.chat-input button {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
}

.chat-toggle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background-color: #333;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
}

.chat-toggle i {
    font-size: 20px;
}

.chat-toggle:hover {
    background-color: #555;
}
.chat-footer {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 8px;
  }
  
  .chat-footer input {
    flex-grow: 1;
    margin-right: 8px;
    padding: 8px;
    border: none;
    border-radius: 4px;
  }
  
  .chat-footer button {
    padding: 8px 16px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .chat-footer button:hover {
    background-color: #333;
  }
  
`;

// Função para criar o chat
function createChat() {
    // Cria o elemento de estilo e adiciona as regras CSS
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);

    // Cria o elemento do chat
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('chat-container', 'collapsed');

    // Cria o cabeçalho do chat
    const chatHeader = document.createElement('div');
    chatHeader.classList.add('chat-header');
    chatHeader.innerHTML = `
    <h3>Chat</h3>
    <div class="close-icon" onclick="toggleChat()">X</div>
  `;

    // Cria o corpo do chat
    const chatBody = document.createElement('div');
    chatBody.classList.add('chat-body');

    // Cria o rodapé do chat
    const chatFooter = document.createElement('div');
    chatFooter.classList.add('chat-footer');
    chatFooter.innerHTML = `
    <input type="text" class="chat-input" placeholder="Digite sua mensagem...">
    <button onclick="sendMessage()">Enviar</button>
  `;

    // Adiciona os elementos ao chat
    chatContainer.appendChild(chatHeader);
    chatContainer.appendChild(chatBody);
    chatContainer.appendChild(chatFooter);

    // Adiciona o chat ao documento
    document.body.appendChild(chatContainer);

    // Cria a div do chat-toggle
    const chatToggle = document.createElement('div');
    chatToggle.classList.add('chat-toggle');
    chatToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment-dots"><circle cx="12" cy="12" r="1" fill="#6563ff"></circle><path fill="#b2b1ff" d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20ZM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"></path><circle cx="8" cy="12" r="1" fill="#6563ff"></circle><circle cx="16" cy="12" r="1" fill="#6563ff"></circle></svg>
  `;

    // Adiciona o chat-toggle ao documento
    chatContainer.appendChild(chatToggle);


    // Adiciona o evento de clique ao chat-toggle
    chatToggle.addEventListener('click', toggleChat);
}

// Função para alternar entre o chat expandido e comprimido
function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.classList.toggle('collapsed');
}

// Função para enviar uma mensagem
function sendMessage() {
    const input = document.querySelector('.chat-input');
    const message = input.value.trim();

    if (message !== '') {
        const chatBody = document.querySelector('.chat-body');
        const messageEl = document.createElement('div');
        messageEl.innerText = message;
        chatBody.appendChild(messageEl);
        input.value = '';
    }
}

// Cria o chat quando a página for carregada
window.onload = function () {
    createChat();
};
