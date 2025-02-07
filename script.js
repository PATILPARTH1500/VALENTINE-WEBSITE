const messages = [
    "Wait, are you REALLY sure? 🤨",
    "Like... 100% sure?? 🧐",
    "Think about it... what if I'm your soulmate? 😏",
    "Pookie, don't break my heart like this... 🥺",
    "C’mon, just one little ‘Yes’ won’t hurt! 😘",
    "If you say no, I might cry... ugly cry. 😭",
    "You wouldn’t want me to be a sad burrito, right? 🌯😢",
    "This is emotional damage! 💔😩",
    "Fine, I’ll stop asking... but my heart will never recover. 😔",
    "Just kidding! SAY YES OR ELSE! 😈❤️"
];


let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}