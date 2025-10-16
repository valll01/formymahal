// Set the correct anniversary date (change this to your actual anniversary)
const CORRECT_ANNIVERSARY = '2021-11-16'; // Format: YYYY-MM-DD

// Typewriter animation function
function typeWriter(element, text, speed = 30, callback) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            // Add characters one by one
            if (text.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            
            // Scroll to keep text in view
            element.scrollTop = element.scrollHeight;
            
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

// Initialize typewriter animations for about text
function initTypewriterAnimations() {
    const aboutTextSection = document.querySelector('.about-text');
    const paragraphs = aboutTextSection.querySelectorAll('p');
    const heading = aboutTextSection.querySelector('h3');
    
    // Store original text
    const originalTexts = [];
    paragraphs.forEach(p => originalTexts.push(p.innerHTML));
    
    // Clear all text initially
    heading.innerHTML = '';
    paragraphs.forEach(p => p.innerHTML = '');
    
    // Start typing animations with delays
    setTimeout(() => {
        typeWriter(heading, 'Happy Birthday Mahal', 50, () => {
            setTimeout(() => {
                typeWriter(paragraphs[0], originalTexts[0], 20, () => {
                    setTimeout(() => {
                        typeWriter(paragraphs[1], originalTexts[1], 20, () => {
                            setTimeout(() => {
                                typeWriter(paragraphs[2], originalTexts[2], 20);
                            }, 500);
                        });
                    }, 500);
                });
            }, 1000);
        });
    }, 1000);
}

// Game functionality
document.addEventListener('DOMContentLoaded', function() {
    const anniversaryInput = document.getElementById('anniversary-input');
    const submitBtn = document.getElementById('submit-btn');
    const gameFeedback = document.getElementById('game-feedback');
    const messengerSection = document.getElementById('messenger-section');
    const modal = document.getElementById('modal');
    const startButton = document.getElementById('startButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    // Initially hide only the messenger section
    messengerSection.style.display = 'none';
    
    // Start the experience when button is clicked
    startButton.addEventListener('click', () => {
        // Hide modal
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.5s ease';
        
        // Show main content after a short delay
        setTimeout(() => {
            modal.style.display = 'none';
            
            // Start the background music
            backgroundMusic.volume = 0.5;
            backgroundMusic.play().catch(e => {
                console.log("Autoplay prevented. User interaction required.");
            });
            
            // Start typewriter animations
            setTimeout(initTypewriterAnimations, 500);
        }, 500);
    });
    
    // Submit button click handler
    submitBtn.addEventListener('click', function() {
        const userInput = anniversaryInput.value;
        
        if (!userInput) {
            gameFeedback.textContent = 'Please select a date first.';
            gameFeedback.className = 'game-feedback error-message';
            return;
        }
        
        if (userInput === CORRECT_ANNIVERSARY) {
            gameFeedback.textContent = 'Correct! Our cosmic journey continues...';
            gameFeedback.className = 'game-feedback success-message';
            
            // Show the messenger section after correct answer
            setTimeout(function() {
                messengerSection.style.display = 'block';
                startMessengerConversation();
                setTimeout(function() {
                    messengerSection.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }, 2000);
        } else {
            gameFeedback.textContent = 'Not quite right. Try again!';
            gameFeedback.className = 'game-feedback error-message';
            
            // Shake animation for wrong answer
            anniversaryInput.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                anniversaryInput.style.animation = '';
            }, 500);
        }
    });
});

// Messenger functionality
function startMessengerConversation() {
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageDescription = document.getElementById('imageDescription');
    const closeModal = document.getElementById('closeModal');
    
    // Clear any existing messages
    chatMessages.innerHTML = '';
    
    // Your conversation
    const conversation = [
        { 
            text: "", 
            sender: "sent", 
            time: "5:42 PM",
            type: "image",
            caption: "Image",
            imageUrl: "assets/t.jpg"
        },
        { 
            text: "halaaa", 
            sender: "received", 
            time: "5:43 PM" 
        },
        { 
            text: "wtf kilig aquu", 
            sender: "received", 
            time: "5:44 PM" 
        },
        { 
            text: "ui gus2 din ktaa", 
            sender: "received", 
            time: "5:44 PM" 
        },
        { 
            text: "🥺🥺🥺🥺🥺🥺", 
            sender: "received", 
            time: "5:45 PM" 
        },
        { 
            text: "muahmuah", 
            sender: "received", 
            time: "5:45 PM" 
        },
        { 
            text: "UI WTF", 
            sender: "sent", 
            time: "5:47 PM" 
        },
        {
            type: "date",
            date: "11/16/21 3:58am"
        },
        { 
            text: "okok", 
            sender: "sent", 
            time: "3:58 AM" 
        },
        { 
            text: "goodnight", 
            sender: "sent", 
            time: "3:58 AM" 
        },
        { 
            text: "mwamwawmsmsmammsm<br>smwmsmwammwmamwm<br>smwmsmwmsmwmsmw<br>mwmsmsmsmsmwmsm<br>smwmsmsmsmsmsms<br>msmsmsmsmammsmsm", 
            sender: "sent", 
            time: "3:58 AM" 
        },
        { 
            text: "ily", 
            sender: "sent", 
            time: "3:58 AM" 
        },
        { 
            text: "halaaaaa ilysm", 
            sender: "received", 
            time: "3:59 AM" 
        },
        { 
            text: "goodnight bbq", 
            sender: "received", 
            time: "3:59 AM" 
        },
        { 
            text: "muahmuah", 
            sender: "received", 
            time: "3:59 AM" 
        }
    ];
    
    // Display conversation with typing effects
    let messageIndex = 0;
    let delay = 0;
    
    function displayNextMessage() {
        if (messageIndex >= conversation.length) return;
        
        const msg = conversation[messageIndex];
        
        if (msg.type === "image") {
            setTimeout(() => {
                addImageMessage(msg.caption, msg.sender, msg.time, msg.imageUrl);
                messageIndex++;
                displayNextMessage();
            }, delay);
        } else if (msg.type === "date") {
            setTimeout(() => {
                addDateSeparator(msg.date);
                messageIndex++;
                displayNextMessage();
            }, delay);
        } else {
            setTimeout(() => {
                showTypingIndicator(msg.sender, () => {
                    addMessage(msg.text, msg.sender, msg.time);
                    messageIndex++;
                    displayNextMessage();
                });
            }, delay);
        }
        
        // Set delay for next message
        delay = 10000;
    }
    
    // Start displaying messages
    displayNextMessage();
    
    // Add date separator
    function addDateSeparator(date) {
        const separatorDiv = document.createElement('div');
        separatorDiv.className = 'date-separator';
        separatorDiv.innerHTML = `<span>${date}</span>`;
        chatMessages.appendChild(separatorDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Show typing indicator
    function showTypingIndicator(sender, callback) {
        const typingDiv = document.createElement('div');
        typingDiv.className = `message ${sender}`;
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Calculate typing time based on message length
        const typingTime = 1000 + Math.random() * 1500;
        
        // Remove typing indicator and call callback
        setTimeout(() => {
            if (typingDiv.parentNode) {
                typingDiv.parentNode.removeChild(typingDiv);
            }
            callback();
        }, typingTime);
    }
    
    // Add message to chat
    function addMessage(text, sender, time = null) {
        if (!time) {
            const now = new Date();
            time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `
            <div class="message-bubble">
                ${text}
                <div class="message-time">${time}</div>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Add image message
    function addImageMessage(caption, sender, time = null, imageUrl) {
        if (!time) {
            const now = new Date();
            time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `
            <div class="image-message" data-image="${imageUrl}" data-caption="${caption}">
                <div style="width:200px;height:150px;background:linear-gradient(135deg,#6e48aa,#9d50bb);display:flex;align-items:center;justify-content:center;color:white;font-size:14px;position:relative;">
                    <div style="width:100%;height:100%;background:#333;display:flex;align-items:center;justify-content:center;">
                        <i class="fas fa-image" style="font-size:24px;"></i>
                    </div>
                    <div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.7);color:white;padding:2px 6px;border-radius:10px;font-size:10px;">
                        <i class="fas fa-expand"></i>
                    </div>
                </div>
                <div class="image-caption">${caption}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add click event to image message
        const imageMessage = messageDiv.querySelector('.image-message');
        imageMessage.addEventListener('click', function() {
            openImageModal(this.dataset.image, this.dataset.caption);
        });
    }
    
    // Open image modal
    function openImageModal(imageUrl, caption) {
        modalImage.src = imageUrl;
        imageDescription.textContent = caption;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close image modal
    function closeImageModal() {
        imageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners for modal
    closeModal.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeImageModal();
        }
    });
    
    // Send message function
    function sendMessage() {
        const text = messageInput.value.trim();
        if (text === '') return;
        
        // Add user message
        addMessage(text, 'sent');
        messageInput.value = '';
        
        // Show typing indicator
        setTimeout(() => {
            showTypingIndicator('received', () => {
                const responses = [
                    "Hala seryoso ba yan? 😳",
                    "Grabe naman! 😍",
                    "Hahaha ang landi mo! 😂",
                    "Sige na, usap tayo! 💬",
                    "Kilig much! 🥰",
                    "Ayieeeee! 🤭"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, 'received');
            });
        }, 500);
    }
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

