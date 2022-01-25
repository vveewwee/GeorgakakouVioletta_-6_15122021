//get Media info
const getData = async () =>{
    const response = await fetch ('data/photographers.json');
    const data = await response.json();
    return (data);
};

const displayMedia = (photographer, mediaE) =>{
    const photoDisplayArticle = document.createElement ('article');
            photoDisplayArticle.setAttribute("class", "photograph-display");
            const main = document.querySelector("#main");
            main.appendChild(photoDisplayArticle);

    mediaE.forEach((photographerMedia) => {
            const photoDisplayDiv = document.createElement('div');
            photoDisplayDiv.setAttribute("class", "photograph-div");
            photoDisplayArticle.appendChild(photoDisplayDiv);
            
            const photos = document.createElement('img');
            photos.setAttribute("class", "photograph-img");
            const imagePhoto = photographerMedia.image;
            photos.src ="SamplePhotos/"+ photographer.name +"/" + imagePhoto;
            photoDisplayDiv.append(photos);

            const legende = document.createElement('div');
            legende.setAttribute("class", "photographe-legende");
            photoDisplayDiv.appendChild(legende);

            const titlePhoto = document.createElement('h5');
            titlePhoto.innerText = photographerMedia.title;
            legende.appendChild(titlePhoto);

            const likes = document.createElement('p');
            likes.innerText = photographerMedia.likes;
            legende.appendChild(likes);

            const iconHeart = document.createElement('i');
            iconHeart.classList.add('fas','fa-heart', 'heartIcon');
            likes.appendChild(iconHeart);

    });
};

window.onload = async() =>{
    const   u = new URLSearchParams(window.location.search);
    const   id = u.get("id");
    const data = await getData();
    const photographer = data.photographers.find(item => item.id == id);
    const mediaE = data.media.filter(item => item.photographerId == id);
//    console.log(mediaE);
    displayMedia(photographer, mediaE);
};