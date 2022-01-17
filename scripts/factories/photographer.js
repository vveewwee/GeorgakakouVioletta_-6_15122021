function photographerFactory(data) {
    const { name, id, portrait } = data;
//    console.log(data.portrait);

//    const picture = `assets/photographers/${portrait}`;
    const picture = data.portrait;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const link = document.createElement('a');
        link.href= "/photographer.html";
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        link.appendChild(img);
        article.appendChild(link);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}