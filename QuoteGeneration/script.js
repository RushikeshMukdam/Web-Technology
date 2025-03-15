const quoteText = document.querySelector("blockquote");
const quoteAuthor = document.querySelector("span");
const newQuoteBtn = document.querySelector("button");

let quotes = [];

// Fetch JSON file
async function fetchQuotes() {
    try {
        const response = await fetch("quotes.json"); // Fetch local JSON
        quotes = await response.json();
        getRandomQuote(); // Display an initial random quote
    } catch (error) {
        quoteText.textContent = "Failed to load quotes.";
        quoteAuthor.textContent = "";
    }
}

// Get a random quote
function getRandomQuote() {
    if (quotes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.textContent = quote.q;
    quoteAuthor.textContent = `${quote.a}`;
}

// Event Listener for New Quote Button
newQuoteBtn.addEventListener("click", getRandomQuote);

// Fetch quotes on page load
fetchQuotes();
