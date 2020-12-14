/* IMPORTING DATA */
const ill_filenames = ["ambra_sapuppo_immagine - Ambra Sapuppo","benedetta_stefani_immagine - Benedetta Stefani","carlo_schlatter_immagine - Carlo Andrea Schlatter","claudia_professione_immagine - Claudia Professione","edoardo_fabbri_immagine - Edoardo Fabbri","elena_buttinelli_immagine - Elena Buttinelli","emma_ceccaroni_immagine - Emma Ceccaroni","felipe_minicucci_immagine - Felipe Minicucci","Filippo_Marani_immagine - Filippo Marani","giulia_delzotto_immagine - Giulia Del Zotto","luca_pradella_immagine - Luca Pradella","matteo_de_luca_immagine - Matteo De Luca","nicholas_daniel_immagine - Nicholas Daniel","nico_ardini_immagine - Nico Ardini","selene_torlino_immagine - Selene Torlino","silvia_bonfini_immagine - Silvia Bonfini", "prova_ill - Marco Pagan"];
const txt_filenames = ["ambra_sapuppo_testo - Ambra Sapuppo","benedetta_stefani_testo - Benedetta Stefani","carlo_schlatter_testo - Carlo Andrea Schlatter","claudia_professione_testo - Claudia Professione","edoardo_fabbri_testo - Edoardo Fabbri","elena_buttinelli_testo - elena buttinelli","emma_ceccaroni_testo - Emma Ceccaroni","felipe_minicucci_testo - Felipe Minicucci","Filippo_Marani_testo - Filippo Marani","giulia_delzotto_testo - Giulia Del Zotto","luca_pradella_testo - Luca Pradella","matteo_de_luca_testo - Matteo De Luca","nicholas_daniel_testo - Nicholas Daniel","nico_ardini_testo - Nico Ardini","selene_torlino_testo - Selene Torlino","silvia_bonfini_testo - Silvia Bonfini", "prova_txt - Marco Pagan"];





/* VARIABLES */
const info_big = document.getElementById("info_big");
const iInfo = document.getElementById("iInfo");
const xInfo = document.getElementById("xInfo");
const header_title = document.getElementById("header_title");
const lightbox = document.getElementById("lightbox");
const lightbox_ill = document.getElementById("lightbox_ill");
const lightbox_txt = document.getElementById("lightbox_txt");
const lightbox_name = document.getElementById("lightbox_name");
const main_content = document.getElementsByClassName("main_content")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const mobileSize = window.matchMedia("(min-width: 992px)");

var names = [];
var illImgs = [];
var txtImgs = [];





/* FUNCTIONS */
function windowResized() {
    if (mobileSize.matches) {
        header_title.innerHTML = "SECRET SANTA CHIARA <i>2020</i>";
    }else{
        header_title.innerHTML = "SSC <i>2020</i>";
    }
}


function showInfo(){
    info_big.style.display = "block";
    iInfo.style.display = "none";
    xInfo.style.display = "block";
    main_content.style.display = "none";
}


function hideInfo(){
    info_big.style.display = "none";
    iInfo.style.display = "block";
    xInfo.style.display = "none";
    main_content.style.display = "block";
}


function clickOnCartolina(cartolina) {
    if (mobileSize.matches) {
        $(document).ready(function(){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        lightbox_ill.src = "../assets/img/ill/"+ill_filenames[cartolina.id]+".png";
        lightbox_txt.src = "../assets/img/txt/"+txt_filenames[cartolina.id]+".png";
        lightbox_name.innerHTML = names[cartolina.id];
        lightbox.style.display = "block";
        main_content.style.filter = "blur(4px)";
        navbar.style.filter = "blur(4px)";
    }
}


function hideLightbox(){
    lightbox.style.display = "none";
    main_content.style.filter = "blur(0px)";
    navbar.style.filter = "blur(0px)";

}





/* LIST INSTRUCTIONS */

//Populating names array
for (person of ill_filenames){
    let name = person.split("-")[1].replace(' ', '').split(".")[0];
    names.push(name);
}

//Iterate between people
for (let i = 0; i < names.length; i++) {
    document.getElementsByClassName("gallery_wrapper")[0].insertAdjacentHTML('beforeend', '<div class="gallery_element col-xl-3 col-lg-4 col-md-6 col-sm-6"><div id="'+i+'" class="flip_card"><div class="flip_card_inner"><div class="flip_card_front"><img src="../assets/img/thumb/ill/'+ill_filenames[i]+'.jpg"></div><div class="flip_card_back"><img src="../assets/img/thumb/txt/'+txt_filenames[i]+'.jpg"></div></div><h3 class="gallery_name">'+names[i]+'</h3></div></div>');
    
}

//Adding click event on imgs
for (let i = 0; i < document.getElementsByClassName("flip_card").length; i++) {
    let cartolina = document.getElementsByClassName("flip_card")[i];
    cartolina.onclick = function() {clickOnCartolina(cartolina)};
}




















