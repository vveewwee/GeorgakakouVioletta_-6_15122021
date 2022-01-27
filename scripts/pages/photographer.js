//get Media info
const getData = async () =>{
    const response = await fetch ('data/photographers.json');
    const data = await response.json();
    return (data);
};

const imageArray = [];
const imageTitles = [];

const displayMedia = (photographer, medias) =>{
    const photoDisplayArticle = document.createElement ('article');
            photoDisplayArticle.setAttribute("class", "photograph-display");
            const main = document.querySelector("#main");
            main.appendChild(photoDisplayArticle);           
            let i = 0;

    medias.forEach((photographerMedia) => {
            const photoDisplayDiv = document.createElement('div');
            photoDisplayDiv.setAttribute("class", "photograph-div");
            photoDisplayArticle.appendChild(photoDisplayDiv);
            
            const photos = document.createElement('img');
            photos.setAttribute("class", "photograph-img");
            const imagePhoto = photographerMedia.image;
            const showVideo = document.createElement('video');
            showVideo.setAttribute("class", "photograph-video")
            photos.src ="SamplePhotos/"+ photographer.name +"/" + imagePhoto;
            if (photos.src.endsWith("jpg")){
                photoDisplayDiv.append(photos);
            }
            const videoPhoto = photographerMedia.video;
            showVideo.src = "SamplePhotos/"+ photographer.name +"/" + videoPhoto;
            if (showVideo.src.endsWith("mp4")){
                showVideo.setAttribute("controls","controls");
                photoDisplayDiv.appendChild(showVideo);
            }
            photos.onclick = openLightbox;
            showVideo.onclick = openLightbox;

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

            imageArray[i] = imagePhoto || videoPhoto;
            imageTitles[i] = photographerMedia.title;
            i++;
    });
    //show photographers info
    const   photographerInfoDisp = document.querySelector(".photograph-header");
    const   showNameDiv = document.createElement('div');
    showNameDiv.setAttribute("class", "photograph-header-name");
    photographerInfoDisp.appendChild(showNameDiv);

    const nameShowDiv = document.createElement('h1');
    nameShowDiv.innerText = photographer.name;
    showNameDiv.appendChild(nameShowDiv);

    const locationShow = document.createElement('h4');
    locationShow.innerText = photographer.city + " , " + photographer.country;
    showNameDiv.appendChild(locationShow);
    const taglineShow = document.createElement('h4');
    taglineShow.innerText = photographer.tagline;
    showNameDiv.appendChild(taglineShow);

    //show photographers photo
    const photographerPhoto = document.createElement('div');
    photographerPhoto.setAttribute("class", "photographer-photo-display");
    photographerInfoDisp.appendChild(photographerPhoto);

    const photoPhoto = document.createElement('img');
    photoPhoto.src = "SamplePhotos/Photographers ID Photos/" + photographer.name.replace(/\s+/g, '') + ".jpg";
    photographerPhoto.appendChild(photoPhoto);

    /* -------fix this -------*/
    const modalNameDisplay = document.querySelector('div[class="modal"] h2');
    const nameInfo = document.createElement('h3');
    nameInfo.innerText = photographer.name;
    modalNameDisplay.appendChild(nameInfo);
};

/*----- LightBox ----*/
const lightbox = document.querySelector('.lightbox');

function openLightbox(){
    lightbox.style.display = "block";
}

function closeLightbox(){
    lightbox.style.display = "none";
}
console.log(imageTitles, imageArray);
const createLightbox = async () => {
    const lightboxClose = document.querySelector('.close').addEventListener("onclick", closeLightbox());
    const lightboxNext = document.querySelector('.next');
    const lightboxPrevious = document.querySelector('.previous');
    const lightboxImageHolder = document.querySelector('.previewImage');
    const lightboxVideoHolder = document.querySelector('.previewVideo');

};

/*----- fetch corresponding id -----*/

window.onload = async() =>{
    const   params = new URLSearchParams(window.location.search);
    const   id = params.get("id");
    const data = await getData();
    const photographer = data.photographers.find(item => item.id == id);
    const medias = data.media.filter(item => item.photographerId == id);
//    console.log(medias);
    displayMedia(photographer, medias);
//    createLightbox(medias);
};