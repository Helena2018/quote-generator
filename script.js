let apiQuotes = []

// New Quote
function newQuote(){
  // Get Random Quote From API Quotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
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
