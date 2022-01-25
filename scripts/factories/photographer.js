function photographerFactory(data) {
    const { name, id, city, country ,tagline, price, portrait } = data;
//    console.log(data.portrait);

//    const picture = `assets/photographers/${portrait}`;
    const picture = data.portrait;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.src ="SamplePhotos/Photographers ID Photos/" + picture;
        
        const link = document.createElement('a');
        link.href= "/photographer.html?id=" + id;
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const legend = document.createElement( 'div' );
        legend.setAttribute("class","legend");
        
        const countryDisplay = document.createElement( 'h5' );
        countryDisplay.innerHTML = country + ', ' + city ;
        
        const taglineDisplay= document.createElement('h6');
        taglineDisplay.innerHTML = tagline ;
        
        const priceDisplay = document.createElement( 'h6' );
        priceDisplay.innerHTML= price + '€/jour';
        
        legend.append(countryDisplay, taglineDisplay, priceDisplay);
        link.appendChild(img);
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(legend);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}