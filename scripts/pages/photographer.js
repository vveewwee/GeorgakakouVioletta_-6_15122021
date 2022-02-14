//get Media info
const getData = async () =>{
    const response = await fetch ('data/photographers.json');
    const data = await response.json();
    return (data);
};

const displayMedia = () =>{
    const photoDisplayArticle = document.createElement ('article');
            photoDisplayArticle.setAttribute("class", "photograph-display");
            const main = document.querySelector("#main");
            main.appendChild(photoDisplayArticle);           

    medias.forEach((photographerMedia, index) => {
            const photoDisplayDiv = document.createElement('div');
            photoDisplayDiv.setAttribute("class", "photograph-div");
            photoDisplayArticle.appendChild(photoDisplayDiv);
            
            
            if(photographerMedia.image){
                const imagePhoto = photographerMedia.image;
                const photos = document.createElement('img');
                photos.className ="photograph-img";
                photos.src ="SamplePhotos/"+ photographer.name +"/" + imagePhoto;
                photoDisplayDiv.append(photos);
                photos.onclick = function() {
                    openLightbox(photographer,medias,index);
                }
            }else{
                const showVideo = document.createElement('video');
                showVideo.className = "photograph-img";
                const videoPhoto = photographerMedia.video;
                showVideo.src = "SamplePhotos/"+ photographer.name +"/" + videoPhoto;
                photoDisplayDiv.appendChild(showVideo);
                showVideo.onclick = function(){
                    openLightbox(photographer,medias, index);
                }
            }
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

        //    imageArray[i] = "SamplePhotos/"+ photographer.name +"/" + imagePhoto;
        //    imageTitles[i] = photographerMedia.title;
        //    i++
    });
    //createLightbox(imageArray, imageTitles);
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
    photoPhoto.src = "SamplePhotos/Photographers ID Photos/" + photographer.portrait;
    photographerPhoto.appendChild(photoPhoto);

    /* -------fix this -------*/
    const modalNameDisplay = document.querySelector('div[class="modal"] h2');
    const nameInfo = document.createElement('h3');
    nameInfo.innerText = photographer.name;
    modalNameDisplay.appendChild(nameInfo);
};

/*----- LightBox ----*/
const lightbox = document.querySelector('.lightbox');

function openLightbox(photographer,medias,index){
    lightboxIndex=index;
    const media = medias[index];
    console.log(media.image);
    console.log(photographer.name);
    let m = null;
    let p = document.createElement('p');
    p.innerText = media.title;
    console.log(p);
    if(media.image){
        m = document.createElement("img");
        m.className = "mediaMedia";
        m.src = "SamplePhotos/"+ photographer.name + "/" + media.image;
        
    }
    else{
        m = document.createElement("video");
        m.setAttribute("controls", "controls");
        m.className="mediaMedia";
        m.src = "SamplePhotos/"+ photographer.name + "/" + media.video;
       
    }
    const lbm = document.getElementById("lbMedia");
    lbm.appendChild(p);
    lbm.appendChild(m);
    lightbox.style.display="flex";
}

function closeLightbox(){
    lightbox.style.display = "none";
    const lbm = document.getElementById("lbMedia");
    while(lbm.childNodes.length > 0){
        lbm.removeChild(lbm.childNodes[0]);
    }
}

function lbLeft(){
    lightboxIndex = (lightboxIndex + medias.length - 1) % medias.length;
    updateLB();
}

function lbRight(){
    lightboxIndex = (lightboxIndex + 1) % medias.length;
    updateLB();
}

function updateLB(){
    const c = document.getElementById("lbMedia");
    while(c.childNodes.length > 0){
        c.removeChild(c.childNodes[0]);
    }
    const media = medias[lightboxIndex];
    console.log(medias[lightboxIndex]);
    let p = document.createElement('p');
    p.innerText = media.title;
    let m = null;
    if(media.video){
        m = document.createElement("video");
        m.setAttribute("controls", "controls");
        m. className = "mediaMedia";
        m.src = m.src = "SamplePhotos/"+ photographer.name + "/" + media.video;
    }else{
        m = document.createElement("img");
        m.className = "mediaMedia";
        m.src = "SamplePhotos/"+ photographer.name + "/" + media.image;
    }
    c.appendChild(p);
    c.appendChild(m);
}
/*----- fetch corresponding id -----*/
let medias = [];
let photographer = null;
let lightboxIndex = 0;
window.onload = async() =>{
    const   params = new URLSearchParams(window.location.search);
    const   id = params.get("id");
    const data = await getData();
    photographer = data.photographers.find(item => item.id == id);
    medias = data.media.filter(item => item.photographerId == id);
//    console.log(medias);
//    debugger;
    displayMedia();
};