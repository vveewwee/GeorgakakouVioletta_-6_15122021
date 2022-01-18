//logo return home
function returnHome(){
    window.location.href= "../index.html";
}

//Mettre le code JavaScript lié à la page photographer.html
const getMedia = async () =>{
    const response2 = await fetch ('data/photographers.json');
    const data2 = await response2.json();
    return (data2.media);
};

const displayMedia = async (media, iden) =>{
//    const photographerMedia = photographerMediaFactory(media);
    media.forEach((photographerMedia) => {
        console.log(photographerMedia.id);
        if (photographerMedia.photographerId === iden){
            console.log("photographerMedia IFF");            
        }
    });
};

const getMediaInfo= async(id) =>{
    const  media = await getMedia();
    // console.log(id);
    displayMedia(media, id);
};


//header
    //img .logo
//main #main
    //div .photograph-header
        //btn .contact_button (display modal());
//div #contact_modal
    //div .modal
        //header
            //h2
            //img (closeModal());
        //form
            //div
                //label
                //input ...
            //btn .contact_button 