// Set the target date (October 10th, 2024)
const targetDate = new Date("2024-10-08T00:00:00");

// Get the current date
const currentDate = new Date();

// Get the message div element
const messageDiv = document.getElementById('message');

// Compare the current date with the target date
if (currentDate >= targetDate) {
    // If the current date is after October 10, 2024, wish "Happy Birthday"
    messageDiv.textContent = "Happy Birthday to my closest and most cherished friend! 🎉💖I can’t put into words how much these 4 years of friendship have meant to me. You’ve been my rock, my confidant, and the light that’s always been there to lift me up, no matter what. Through every high and low, you’ve stood by my side, and I can’t imagine my life without you in it. 🌟Today isn’t just about celebrating your birthday; it’s about celebrating the incredible, kind, and beautiful soul that you are. You bring so much warmth and love into the lives of everyone around you, especially mine, and I am so deeply grateful for that. I don’t know where I’d be without you.You deserve all the joy, love, and happiness in the world, and I hope this year brings you everything your heart desires. Thank you for being the amazing person you are and for being my friend—my forever friend. 💫Here’s to more laughter, more memories, and a bond that will never fade. Love you always. 💖  With all my heart, Nishu/ Ghatnu/ Hodol etc"
} else {
    // If the current date is before or on October 10, 2024, ask the user to wait
    messageDiv.textContent = `Wait! It's not time yet. Wait for ${targetDate} `;
}
