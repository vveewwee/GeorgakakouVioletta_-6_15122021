//logo return home
function returnHome(){
    window.location.href= "../index.html";
}
/*
class mediaArray{
    constructor(id, photographerId, title, image, likes, date, price){
        this.id = id,
        this.photographerId = photographerId,
        this.title = title,
        this.image = image,
        this.likes = likes,
        this.date = date,
        this.price = price
    }
};

const individualPhoto = new mediaArray(photographerMedia.id,photographerMedia.photographerId,
                photographerMedia.title, photographerMedia.image, photographerMedia.likes,
                photographerMedia.date, photographerMedia.price);*/

//get Media info
const getMedia = async () =>{
    const response2 = await fetch ('data/photographers.json');
    const data2 = await response2.json();
    return (data2.media);
};

const displayMedia = async (media, iden) =>{
    media.forEach((photographerMedia) => {
        if (photographerMedia.photographerId === iden){
            const photoDisplayDiv = document.querySelector(".photograph-display");
            const photos = document.createElement('img');
            photos.setAttribute("class", "photodisplay");
            const imagePhoto = photographerMedia.image;
            photos.setAttribute("src", imagePhoto);
            photoDisplayDiv.append(photos);
//                console.log(individualPhoto);
//            photographerMediaFactory(individualPhoto);            
        }
    });
};

const getMediaInfo= async(id) =>{
    const  media = await getMedia();
    // console.log(id);
    displayMedia(media, id);
};
