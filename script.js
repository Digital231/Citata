const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const backButton = document.getElementById('back');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let localQuotesIndex = 0;


function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function displayQuote(index) {
  loading();
  const quote = localQuotes[index];
  if (quote) {
    if (!quote.author) {
      authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;
    }
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
  }
  complete();
}

function showPreviousQuote() {
  if (localQuotesIndex > 0) {
    localQuotesIndex--;
    displayQuote(localQuotesIndex);
  }
}

function showNextQuote() {
  if (localQuotesIndex < localQuotes.length - 1) {
    localQuotesIndex++;
    displayQuote(localQuotesIndex);
  }
}

// Event Listeners
backButton.addEventListener('click', showPreviousQuote);
newQuoteBtn.addEventListener('click', showNextQuote);

// Display the first quote when the page loads
displayQuote(localQuotesIndex);
