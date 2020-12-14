/* IMPORTING DATA */
const ill_filenames = ["ambra_sapuppo_immagine - Ambra Sapuppo","benedetta_stefani_immagine - Benedetta Stefani","carlo_schlatter_immagine - Carlo Andrea Schlatter","claudia_professione_immagine - Claudia Professione","edoardo_fabbri_immagine - Edoardo Fabbri","elena_buttinelli_immagine - Elena Buttinelli","emma_ceccaroni_immagine - Emma Ceccaroni","felipe_minicucci_immagine - Felipe Minicucci","Filippo_Marani_immagine - Filippo Marani","giulia_delzotto_immagine - Giulia Del Zotto","luca_pradella_immagine - Luca Pradella","matteo_de_luca_immagine - Matteo De Luca","nicholas_daniel_immagine - Nicholas Daniel","nico_ardini_immagine - Nico Ardini","selene_torlino_immagine - Selene Torlino","silvia_bonfini_immagine - Silvia Bonfini", "prova_ill - Marco Pagan"];
const txt_filenames = ["ambra_sapuppo_testo - Ambra Sapuppo","benedetta_stefani_testo - Benedetta Stefani","carlo_schlatter_testo - Carlo Andrea Schlatter","claudia_professione_testo - Claudia Professione","edoardo_fabbri_testo - Edoardo Fabbri","elena_buttinelli_testo - elena buttinelli","emma_ceccaroni_testo - Emma Ceccaroni","felipe_minicucci_testo - Felipe Minicucci","Filippo_Marani_testo - Filippo Marani","giulia_delzotto_testo - Giulia Del Zotto","luca_pradella_testo - Luca Pradella","matteo_de_luca_testo - Matteo De Luca","nicholas_daniel_testo - Nicholas Daniel","nico_ardini_testo - Nico Ardini","selene_torlino_testo - Selene Torlino","silvia_bonfini_testo - Silvia Bonfini", "prova_txt - Marco Pagan"];





/* VARIABLES */
const ssc_list = document.getElementById("ssc_list");
const ssc_canvas = document.getElementById("ssc_canvas");
const info_big = document.getElementById("info_big");
const iInfo = document.getElementById("iInfo");
const xInfo = document.getElementById("xInfo");
const sketch_combo = document.getElementById("sketch_combo");
const header_title = document.getElementById("header_title");
const main_content = document.getElementsByClassName("main_content")[0];
const mobileSize = window.matchMedia("(min-width: 992px)");
var wdt = sketch_combo.offsetWidth;
var HalyardDisplay;
var ex;
var myCanvas;

var names = [];
var illImgs = [];
var txtImgs = [];
var selected_name_ill;
var selected_name_txt;
var selected_ill;
var selected_txt;
var loadingIll = true;
var loadingTxt = true;
var loading = true;





/* FUNCTIONS */
function windowResized() {
    if (mobileSize.matches) {
        wdt = sketch_combo.offsetWidth-15;
        header_title.innerHTML = "SECRET SANTA CHIARA <i>2020</i>";
    }else{
        wdt = sketch_combo.offsetWidth-30;
        header_title.innerHTML = "SSC <i>2020</i>";
    }
    resizeCanvas(wdt, wdt);
}


function downloadCanvas(){
    save(ex, 'ssc2020_'+selected_name_ill+'_'+selected_name_txt+'.png');
}


function preload(){
    toggleInfoButton();
    HalyardDisplay = loadFont('assets/css/fonts/HalyardDisplayBook.ttf');
}


function clickOnCartolina(cartolina){
    //Clicking on Illustrazione
    if (cartolina.classList.contains('list_ill')) {
        //Seleziono l'Illustrazione
        for (let i = 0; i < document.getElementsByClassName("list_ill").length; i++) {
            let aCartolina = document.getElementsByClassName("list_ill")[i];
            if (aCartolina.classList.contains('selected')) {
                aCartolina.classList.remove("selected");
            }
        }
        cartolina.classList.add("selected");

        //Updating name and image
        let index = cartolina.className.split(" ")[2];
        selected_ill = illImgs[index];
        selected_name_ill = cartolina.id;


    //Clicking on Testo
    }else if(cartolina.classList.contains('list_txt')){
        //Seleziono l'Illustrazione
        for (let i = 0; i < document.getElementsByClassName("list_txt").length; i++) {
            let aCartolina = document.getElementsByClassName("list_txt")[i];
            if (aCartolina.classList.contains('selected')) {
                aCartolina.classList.remove("selected");
            }
        }
        cartolina.classList.add("selected");

        //Updating name and image
        let index = cartolina.className.split(" ")[2];
        selected_txt = txtImgs[index];
        selected_name_txt = cartolina.id;
    }
}


function randomChoice(){
    let randomIndexIll = (int(Math.random()*document.getElementsByClassName("list_ill").length));
    let randomIndexTxt = (int(Math.random()*document.getElementsByClassName("list_txt").length));

    document.getElementsByClassName("list_ill")[randomIndexIll].click();
    document.getElementsByClassName("list_txt")[randomIndexTxt].click();
}


function randomButton(){
    randomChoice();
    sketch_combo.classList.add("rotation");
    setTimeout(function() {
        sketch_combo.classList.remove("rotation");
    }, 400);
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


function toggleInfoButton() {
    if (window.innerWidth > 1200) {
        iInfo.style.display = 'none';
        if (xInfo.style.display == 'block') {
            xInfo.style.display = 'none';
        }
        if (info_big.style.display == 'block') {
            info_big.style.display = 'none';
            main_content.style.display = "block";
        }
    }else {
        if (xInfo.style.display != 'block') {
            iInfo.style.display = 'block';
        }
    }
}


function loadingImages(image, filename){
    return loadImage(filename, imageLoaded);

    function imageLoaded(cart){
        //console.log(image, loadingIll);
        image = cart;

    }
}







/* LIST INSTRUCTIONS */

//Populating names array
for (person of ill_filenames){
    let name = person.split("-")[1].replace(' ', '').split(".")[0];
    names.push(name);
}

//Iterate between people
for (let i = 0; i < names.length; i++) {
    ssc_list.insertAdjacentHTML('beforeend', '<div id="'+names[i]+'" class="person_wrapper"><h3>'+names[i]+'</h3><img id="'+names[i]+'" class="list_imgs list_ill '+i+'" src="assets/img/thumb/ill/'+ill_filenames[i]+'.jpg"><img id="'+names[i]+'" class="list_imgs list_txt '+i+'" src="assets/img/thumb/txt/'+txt_filenames[i]+'.jpg"></div>');
}

//Adding click event on imgs
for (let i = 0; i < document.getElementsByClassName("list_imgs").length; i++) {
    let cartolina = document.getElementsByClassName("list_imgs")[i];
    cartolina.onclick = function() {clickOnCartolina(cartolina)};
}





/* CANVAS INSTRUCTIONS */

function setup(){
    //Loading all images into array
    for (iFile of ill_filenames) {
        let aIllustrazione = loadingImages(iFile, "assets/img/ill/"+iFile+".png")
        illImgs.push(aIllustrazione);

        if (illImgs.length >= ill_filenames.length) {
            console.log(illImgs.length, ill_filenames.length);
            loadingIll = false;
        }else{
            loadingIll = true;
        }
    }

    for (tFile of txt_filenames) {
        let aTesto = loadingImages(tFile, "assets/img/txt/"+tFile+".png");
        txtImgs.push(aTesto);

        if (txtImgs.length >= txt_filenames.length) {
            loadingTxt = false;
        }else{
            loadingTxt = true;
        }
    }



    ex = createGraphics(1080, 1080);
    ex.pixelDensity(1);

    if (mobileSize.matches) {
        wdt = sketch_combo.offsetWidth-15;
        header_title.innerHTML = "SECRET SANTA CHIARA <i>2020</i>";
    }else{
        wdt = sketch_combo.offsetWidth-30;
        header_title.innerHTML = "SSC <i>2020</i>";
    }
    myCanvas = createCanvas(wdt, wdt);

    
    myCanvas.parent("sketch_combo");



    selected_name_ill = names[0];
    selected_name_txt = names[1];
    selected_ill = illImgs[0];
    selected_txt = txtImgs[1];

    randomChoice();
}



function draw(){

    if (loadingIll || loadingTxt) {
        background(255, 255, 0);
    } else if (loadingIll == false && loadingTxt == false){
        //console.log("All loaded");

        ex.background(255, 255, 255);
        //Drawing images
        ex.image(selected_ill, 0, 0, ex.width, ex.height);
        ex.image(selected_txt, 0, 0, ex.width, ex.height);

        //Drawing texts
        ex.textFont(HalyardDisplay);
        ex.textSize(24);
        ex.textAlign(LEFT);
        ex.text("Secret Santa Chiara 2020", 40, ex.height-15);
        ex.textAlign(RIGHT);
        ex.text("ISIA U", ex.width-40, ex.height-15);
        ex.textAlign(LEFT);
        ex.text(selected_name_ill+" + "+selected_name_txt, 40, 30);
    
        //Rendering
        image(ex, 0, 0, width, height);

    }
}


















