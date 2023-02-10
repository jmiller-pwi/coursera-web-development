const cards = document.querySelectorAll('.react-grid-item');

cards.forEach(card => {
    const cardText = card.querySelector('.label');
    const searchTerm = cardText.innerText.substring(0, 1);

    const link = document.createElement('a');
    link.setAttribute('href', 'https://portal.pwiworks.com/shippinglog-1/open-requests?search=' + searchTerm);
    link.style.textDecoration = "none";
    link.style.color = "inherit";
    card.parentNode.insertBefore(link, card);
    link.appendChild(card);
});
