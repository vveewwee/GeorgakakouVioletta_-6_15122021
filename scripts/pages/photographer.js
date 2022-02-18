//get Media info
const getData = async () => {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return (data);
};
//create empty sum of likes
let sumLikes = 0;
const photoDisplayArticle = document.createElement('article');
const displayMedia = () => {
 
    photoDisplayArticle.setAttribute("class", "photograph-display");
    const main = document.querySelector("#main");
    main.appendChild(photoDisplayArticle);

    let dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("change", () => getOption());

    function getOption() {
        const optionValue = dropdown.value;
        photoDisplayArticle.innerHTML = "";
        console.log(optionValue);
        switch (optionValue){
        case  "Titre": {
            console.log("option value = Titre: " + optionValue);
            sortByTitle();
            displayMedia();
            break;
        }
        case "Popularite" : {
            console.log("option value = pop: "+ optionValue);
            sortByPop();
            displayMedia();
            break;
        }
        case "Date" : {
            console.log("option value = date: "+ optionValue);
            sortByDate();
            displayMedia();
            break;
        }}
    }
    
    medias.forEach((photographerMedia, index) => {
        const photoDisplayDiv = document.createElement('div');
        photoDisplayDiv.setAttribute("class", "photograph-div");
        photoDisplayDiv.setAttribute('aria-labelledby', 'photograph div');
        photoDisplayArticle.appendChild(photoDisplayDiv);

        if (photographerMedia.image) {
            const imagePhoto = photographerMedia.image;
            const photos = document.createElement('img');
            photos.className = "photograph-img";
            photos.setAttribute("alt", photographerMedia.title);
            photos.src = "SamplePhotos/" + photographer.name + "/" + imagePhoto;
            photoDisplayDiv.append(photos);
            photos.onclick = function () {
                openLightbox(photographer, medias, index);
            }
        } else {
            const showVideo = document.createElement('video');
            showVideo.className = "photograph-img";
            const videoPhoto = photographerMedia.video;
            showVideo.src = "SamplePhotos/" + photographer.name + "/" + videoPhoto;
            photoDisplayDiv.appendChild(showVideo);
            showVideo.onclick = function () {
                openLightbox(photographer, medias, index);
            }
        }
        const legende = document.createElement('div');
        legende.setAttribute("class", "photographe-legende");
        legende.setAttribute('aria-labelledby', 'legende');
        photoDisplayDiv.appendChild(legende);

        const titlePhoto = document.createElement('h5');
        titlePhoto.innerText = photographerMedia.title + "," + photographerMedia.date;
        titlePhoto.setAttribute('aria-labelledby', 'title');
        legende.appendChild(titlePhoto);

        const likes = document.createElement('p');
        likes.setAttribute("class", "pLikes");
        likes.innerText = photographerMedia.likes;
        likes.setAttribute('aria-labelledby', 'likes');
        legende.appendChild(likes);

        const iconHeart = document.createElement('button');
        iconHeart.setAttribute('aria-labelledby', 'like button');
        iconHeart.onclick = function () {
            likes.innerText = "";
            photographerMedia.likes += 1;
            sumLikes += 1;
            likes.innerText = photographerMedia.likes;
            likesP.innerText = sumLikes; 
        }
        iconHeart.classList.add('fas', 'fa-heart', 'heartIcon');
        legende.appendChild(iconHeart);
        sumLikes += photographerMedia.likes;
    });
};
    //show photographers info
const photographerFactoryMedia = () =>{
    const photographerInfoDisp = document.querySelector(".photograph-header");
    const showNameDiv = document.createElement('div');
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
    photoPhoto.setAttribute("alt", photographer.name);
    photoPhoto.src = "SamplePhotos/Photographers ID Photos/" + photographer.portrait;
    photographerPhoto.appendChild(photoPhoto);

    /* -------fix this -------*/
    const modalNameDisplay = document.querySelector('div[class="modal"] h2');
    const nameInfo = document.createElement('h3');
    nameInfo.innerText = photographer.name;
    modalNameDisplay.appendChild(nameInfo);
};

/*------ Filters ------*/

function sortByPop() {
    medias.sort((a, b) => {
       // console.log("sortByPop");
        return b.likes - a.likes;
    });
}

function sortByDate() {
    medias.sort((a, b) => {
       // console.log(Date.parse(a.date) - Date.parse(b.date));
        return Date.parse(a.date) - Date.parse(b.date);
    });
}

function sortByTitle() {
    medias.sort((a, b) => {
     //   console.log("sortByTitle");
        if (a.title > b.title)
            return 1;
        if (a.title < b.title)
            return -1;
        return 0;
    });
}

/*----------- LightBox -----------*/

const lightbox = document.querySelector('.lightbox');

function openLightbox(photographer, medias, index) {
    lightboxIndex = index;
    const media = medias[index];
    console.log(media.image);
    console.log(photographer.name);
    let m = null;
    let p = document.createElement('p');
    p.innerText = media.title;
    //  console.log(p);
    if (media.image) {
        m = document.createElement("img");
        m.setAttribute("alt", media.title);
        m.className = "mediaMedia";
        m.src = "SamplePhotos/" + photographer.name + "/" + media.image;

    }
    else {
        m = document.createElement("video");
        m.setAttribute("controls", "controls");
        m.className = "mediaMedia";
        m.src = "SamplePhotos/" + photographer.name + "/" + media.video;

    }
    const lbm = document.getElementById("lbMedia");
    lbm.appendChild(p);
    lbm.appendChild(m);
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
    const lbm = document.getElementById("lbMedia");
    while (lbm.childNodes.length > 0) {
        lbm.removeChild(lbm.childNodes[0]);
    }
}

// keyboard control of lightbox <- esc ->
lightbox.addEventListener("keydown", function (e) {
    console.log(e.key);
    switch (e.key) {
        case 'ArrowLeft': lbLeft();
            break;
        case 'ArrowRight': lbRight();
            break;
        case 'Escape': closeLightbox();
            break;
    }
});

function lbLeft() {
    lightboxIndex = (lightboxIndex + medias.length - 1) % medias.length;
    updateLB();
}

function lbRight() {
    lightboxIndex = (lightboxIndex + 1) % medias.length;
    updateLB();
}

function updateLB() {
    const c = document.getElementById("lbMedia");
    while (c.childNodes.length > 0) {
        c.removeChild(c.childNodes[0]);
    }
    const media = medias[lightboxIndex];
    console.log(medias[lightboxIndex]);
    let p = document.createElement('p');
    p.innerText = media.title;
    let m = null;
    if (media.video) {
        m = document.createElement("video");
        m.setAttribute("controls", "controls");
        m.className = "mediaMedia";
        m.src = m.src = "SamplePhotos/" + photographer.name + "/" + media.video;
    } else {
        m = document.createElement("img");
        m.className = "mediaMedia";
        m.setAttribute("alt", media.title);
        m.src = "SamplePhotos/" + photographer.name + "/" + media.image;
    }
    c.appendChild(p);
    c.appendChild(m);
}

/*-------- Likes/Price sticky div -----*/
let likesP = null;
function createLikesDiv() {
    const likesDiv = document.createElement("div");
    likesDiv.className = "likesDiv";

    likesP = document.createElement("p");
    likesP.className = "likesP";
    likesP.setAttribute('aria-labelledby', sumLikes + " likes");
    likesP.innerHTML = sumLikes;

    const priceP = document.createElement("p");
    priceP.className = "priceP";
    priceP.setAttribute('aria-labelledby', photographer.price + "€/hour");
    priceP.innerHTML = photographer.price + "€/hour";

    const heartLikes = document.createElement("i");
    heartLikes.className = "fas fa-heart heartI";


    likesDiv.appendChild(likesP);
    likesDiv.appendChild(heartLikes);
    likesDiv.appendChild(priceP);

    const main = document.getElementById("main");
    document.body.appendChild(likesDiv);
}

/*----- fetch corresponding id / create data arrays -----*/

let medias = [];
let photographer = null;
let lightboxIndex = 0;

window.onload = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const data = await getData();
    photographer = data.photographers.find(item => item.id == id);
    medias = data.media.filter(item => item.photographerId == id);
    //  debugger;
    displayMedia(medias);
    photographerFactoryMedia();
    createLikesDiv();
};