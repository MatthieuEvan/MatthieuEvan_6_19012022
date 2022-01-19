function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const location = `${city}` + ', ' + `${country}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        // Photo profil
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        // Nom
        const h2 = document.createElement('h2');
        h2.textContent = name;
        // Localisation
        const h3 = document.createElement('h3');
        h3.textContent = location;
        // Phrase
        const sentence = document.createElement('p');
        sentence.className = 'sentence';
        sentence.textContent = tagline;
        // Prix
        const salary = document.createElement('p');
        salary.className = 'salary';
        salary.textContent = `${price}€/jour`;
        // Ajout
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(sentence);
        article.appendChild(salary);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}