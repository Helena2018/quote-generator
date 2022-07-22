let aipQuotes = []

// New Quote
function newQuote(){
  
}

// Get Quotes From API
async function getQuotes() {
  const aipUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(aipUrl)
    aipQuotes = await response.json()
    newQuote()
  } catch(error) {
    // Catch Error Here
  } 
}

getQuotes()
