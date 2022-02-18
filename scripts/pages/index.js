const getPhotographers = async () => {
    // Penser à remplacer par les données récupérées dans le json
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    // et bien retourner le tableau photographers seulement une fois
    return (data.photographers);
};

const displayData = async (photographers) => {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
        //       createMediaFactory(identity);
    });

};

const init = async () => {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
};

//onload init
window.onload = () => {
    init();
}