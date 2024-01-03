const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chatContainer");
const minimizeButton = document.getElementById("minimize-button");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("conversation-group");
const sendButton = document.getElementById("SentButton");

let userMessage = "" ;

if (chatButton) {
    chatButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.add("open");
            chatButton.classList.add("clicked");
        }
    });
}

if (minimizeButton) {
    minimizeButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.remove("open");
            chatButton.classList.remove("clicked");
        }
    });
}

function createMessage(message, isUser = true) {
    const newMessage = document.createElement('div');
    newMessage.classList.add(isUser ? 'sentText' : 'botText');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    return newMessage;
}

function chatbotResponse() {
    const messages = ["Hello!", "How can I assist you?", "Let me know if you have any further questions"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    const botMessage = "";
    if (userMessage.innerText === "")
        botMessage = createMessage("plz send again", false);
    else if (userMessage.innerText === "What are the target students of Sciastra?")
        botMessage = createMessage("IISER, NISER, CEBS, ICAR, CMI, etc", false);
    else if (userMessage.innerText === "What is five learning target?")
        botMessage = createMessage("Learning targets are classified into a framework that identifies five kinds of learning targets: knowledge, reasoning, skill, product, and disposition.", false);
    else if (userMessage.innerText === "What is a targeted skill?")
        botMessage = createMessage("Target Skills are the specific writing-craft skills and techniques that teachers chose and explicitly teach to young writers.", false);
    else if (userMessage.innerText === "What is a success criteria?")
        botMessage = createMessage("The standards/levels by which to judge whether an objective/goal/ target/outcome has been achieved/successful.", false);
    else if (userMessage.innerText === "Is Sciastra free?")
        botMessage = createMessage("YES. SCIASTRA has your back with over 20 free practice tests for exams like the IISER Aptitude Test, NEST , KVPY, ISI, CMI, ICAR and more.", false);
    else if (userMessage.innerText === "How can I use Sciastra?")
        botMessage = createMessage("You can use Sciastra by simply signing up and logging in.", false);
    else if (userMessage.innerText === "How can I contact Sciastra?")
        botMessage = createMessage("You can contact us through our email id: contact@sciastra.com ", false);
    else if (userMessage.innerText === "What is the difference between Sciastra and other online learning platforms?")
        botMessage = createMessage("Sciastra is a platform that provides you with a wide range of practice tests for various exams. It also provides you with a detailed analysis of your performance in the tests.", false);
    else if (userMessage.innerText === "What is the cut off rank for IISER?")
        botMessage = createMessage("Candidates should aim to achieve under 2500 rank in IISER Aptitude Test. What is the cutoff rank for IISER Aptitude Test? The cutoff rank for IISER aptitude test 2023 was 1800-3000 after Round 7 of IAT channel", false);
    botMessage.scrollIntoView() ;
}

chatInput.addEventListener("input", function (event) {
    if (event.target.value) {
        sendButton.classList.add("svgsent");
    } else {
        sendButton.classList.remove("svgsent");
    }
});

chatInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    }
});

if (sendButton) {
    sendButton.addEventListener("click", function () {
        const message = chatInput.value;
        chatInput.value = "";
        userMessage = createMessage(message);
        userMessage.scrollIntoView();
        setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    });
}