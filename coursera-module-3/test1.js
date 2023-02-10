const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const cardText = card.querySelector('.card-text');
    const firstThreeLetters = cardText.innerText.substring(0, 3);

    const link = document.createElement('a');
    link.setAttribute('href', 'https://www.google.com/search?q=' + firstThreeLetters);
    card.parentNode.insertBefore(link, card);
    link.appendChild(card);
});

