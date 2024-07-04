const socket = io('http://localhost:5000');

        socket.on('chat message', function(msg) {
            var chatBox = document.getElementById('chat-box');
            var messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = msg;
            chatBox.appendChild(messageElement);

            // Optionally, scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        });

        function sendMessage() {
            var messageInput = document.getElementById('message-input');
            var message = messageInput.value.trim();

            if (message !== '') {
                var chatBox = document.getElementById('chat-box');
                var messageElement = document.createElement('div');
                messageElement.className = 'message';
                messageElement.textContent = message;
                chatBox.appendChild(messageElement);

                // Clear input
                messageInput.value = '';
                messageInput.focus();

                // Optionally, scroll to the bottom of the chat box
                chatBox.scrollTop = chatBox.scrollHeight;

                // Emit the message to the server
                socket.emit('chat message', message);
            }
        }