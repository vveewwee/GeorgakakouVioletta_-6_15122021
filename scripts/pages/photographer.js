//Mettre le code JavaScript lié à la page photographer.html
/*
const getMedia = async () =>{
    const response2 = await fetch ('data/photographers.json');
    const data2 = await response2.json();
    return (data2.media);
};

const displayMedia = async (media, id) =>{
    const photographerMedia = photographerMediaFactory(media, id);
};


const getMediaInfo= async(id) =>{
    const  media = await getMedia();
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
        
function photographerMediaFactory(data2, identity) {
    const { id, photographerId, title, image, likes, date, price } = data2;
            
};
*/

function returnHome(){
//    const logoReturn = document.querySelector(".logo").setAttribute("href","/index.html" );
    window.location.href= "../index.html";
}