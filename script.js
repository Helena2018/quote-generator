const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-button')

let apiQuotes = []

// New Quote
function newQuote(){
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

  console.log(quote.text)
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

getQuotes()
