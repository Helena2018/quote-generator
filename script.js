const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-button')
const loader = document.getElementById('loader')

let apiQuotes = []

// Show Loading
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false
  loader.hidden = true
}

// New Quote
function newQuote(){
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  // Check if Author field is blank and replace it with 'Unknow"
  if(!quote.author) {
    authorText.textContent = 'Unknow'
  } else {
    authorText.textContent = quote.author
  }
  // Check Quote length to determine styling
  if(quote.text.length > 50) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
}

// Get Quotes From API
async function getQuotes() {
  const aipUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(aipUrl)
    apiQuotes = await response.json()
    newQuote()
  } catch(error) {
    // Catch Error Here
  } 
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// on Load
// getQuotes()
loading()