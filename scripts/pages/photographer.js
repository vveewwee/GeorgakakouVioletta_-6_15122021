//get Media info
const getData = async () =>{
    const response = await fetch ('data/photographers.json');
    const data = await response.json();
    return (data);
};

const displayMedia = (media) =>{
    media.forEach((photographerMedia) => {
            const photoDisplayDiv = document.querySelector(".photograph-display");
            const photos = document.createElement('img');
            photos.setAttribute("class", "photodisplay");
            const imagePhoto = photographerMedia.image;
            photos.setAttribute("src", imagePhoto);
            photoDisplayDiv.append(photos);
//                console.log(individualPhoto);
//            photographerMediaFactory(individualPhoto);
    });
};

window.onload = async() =>{
    const   u = new URLSearchParams(window.location.search);
    const   id = u.get("id");
    const data = await getData();
    const photographer = data.photographers.find(item => item.id == id);
    const mediaE = data.media.filter(item => item.photographerId == id);
//    console.log(mediaE);
    displayMedia(mediaE);
};