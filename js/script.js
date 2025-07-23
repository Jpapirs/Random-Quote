const author = document.querySelector("[data-author]");
const tags = document.querySelectorAll("[data-tag]");
const quote = document.querySelector("[data-quote]");
const btn = document.querySelector("[data-btn]");

async function handleClick(event) {
  event.preventDefault();
  const dadosResponse = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
  );
  const data = await dadosResponse.json();
  const randomQuote = data[Math.floor(Math.random() * data.length)];
  author.innerText = randomQuote.author;
  quote.innerText = `"${randomQuote.quote}"`;
  tags.forEach((tagE1, index) => {
    tagE1.innerText = randomQuote.tags[index] || "";
  });
}

btn.addEventListener("click", handleClick);

