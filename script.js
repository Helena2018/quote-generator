let aipQuotes = []

// Get Quotes From API
async function getQuotes() {
  const aipUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(aipUrl)
    aipQuotes = await response.json()
    console.log(aipQuotes)
  } catch(error) {
    // Catch Error Here
  } 
}

getQuotes()
