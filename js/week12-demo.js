async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.activity);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://www.boredapi.com/api/activity'

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

function setBg(color) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}
genNew.addEventListener("click", setBg);
setBg();
