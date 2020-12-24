/* IMPORTING DATA */
const ill_filenames = ["adriana_deluca_immagine - Adriana De Luca","alberto_buratto_immagine - Alberto Buratto","Alec_Trenta_Immagine - Alec Trenta","alessandra_comparetto_immagine - Alessandra Comparetto","alessandro_bettini_immagine - Alessandro Bettini","alessandro_broni_immagine - Alessandro Broni","alessandro_lanfrancotti_immagine - Alessandro Lanfrancotti","alessandro_palombini_immagine - Alessandro Palombini","alessandro_truffa_immagine - Alessandro Truffa","alessia_priori_immagine - Alessia Priori","alessio_carboni_immagine - Alessio Carboni","Alex_Dilio_immagine - Alex Dilio","alice_dealmeidamachado_immagine - Alice Machado","Alice_Nascimben_immagine - Alice Nascimben","ambra_sapuppo_immagine - Ambra Sapuppo","andrea_cattaruzza_immagine - Andrea Cattaruzza","andrea_granato_immagine - Andrea Granato","anita_bortolotti_immagine - Anita Bortolotti","Anita_Cariolaro_Immagine - Anita Cariolaro","annagiulia_pricoco_immagine - Annagiulia Pricoco","annalisa_dalpozzo_immagine - Annalisa Dalpozzo","annalisa_marchetti_immagine - Annalisa Marchetti","annaluna_astolfi_immagine - Anna Luna Astolfi","antonio_calandra_immagine - Antonio Calandra","arianna_taretto_immagine - Arianna Taretto","balsa_pejovic_immagine - Pejovic Balsa","benedetta_stefani_immagine - Benedetta Stefani","Bianca_Toni_immagine - Bianca Toni","bru_belen_immagine - Belen Bru","carlo_bramanti_immagine - Carlo Bramanti","carlo_schlatter_immagine - Carlo Andrea Schlatter","carola_gatto_immagine - Carola Gatto","caterina_rossi_immagine - Caterina Rossi","Celeste_Quercia_immagine - Celeste Quercia","chiara_belpassi_immagine - Chiara Belpassi","chiara_cecchetto_immagine - Chiara Cecchetto","chiara_di_luca_cartolina - Chiara Di Luca","Chiara_Gennari_immagine - Chiara Gennari","chiara_manuguerra_immagine - Chiara Manuguerra","chiara_netto_immagine - Chiara Netto","chiara_solimene_immagine - Chiara Solimene","claudia_bumbica_immagine - Claudia Bumbica","claudia_petrangeli_immagine - Claudia Petrangeli","claudia_professione_immagine - Claudia Professione","clelia_cadamuro_immagine - Clelia Cadamuro","costanza_berardi_immagine - Costanza Berardi","Costanza_Sacher_immagine - Costanza Sacher","daniel_malaj - Daniel Malaj","Daniela_Huqi_immagine - Daniela Huqi","daniela_malagoli_immagine - Daniela Malagoli","daniele_pala_immagine - Daniele Pala","davide_catena_immagine - Davide Catena","davide_dallapieta_immagine - Davide Dalla Pieta","diletta_comini_immagine - Diletta Comini","edoardo_fabbri_immagine - Edoardo Fabbri","elena_buttinelli_immagine - Elena Buttinelli","elena_micheli_immagine_2 - Elena Micheli","eleonora_gelli_immagine - Eleonora Gelli","elisa_turrin - Elisa Turrin","elisabetta_laviano_immagine - Elisabetta Laviano","elisabetta_silveri_immagine - Elisabetta Silveri","emma_ceccaroni_immagine - Emma Ceccaroni","emma_cusinato_immagine - Emma Cusinato","Emma_Gabrielli_Immagine - Emma Gabrielli","enrico_ercolani_immagine - Enrico Ercolani","enrico_solfrini_immagine - Enrico Solfrini","erica_rossi_immagine - Erica Rossi","fabio_maragno_immagine - Fabio Maragno","federico_attardo_immagine - Federico Attardo","federico_trevisan_immagine - Federico Trevisan","felipe_minicucci_immagine - Felipe Minicucci","filippo_anceschi_immagine - Filippo Anceschi","Filippo_Marani_immagine - Filippo Marani","filippo_toscani_immagine - Filippo Toscani","filomena_galvani_immagine - Filomena Galvani","Floyd_Mustafai_immagine - Floyd Mustafai","francesca_albergo_immagine - Francesca Albergo","francesca_cugno_immagine - Francesca Cugno","francesca_magrini_cartolina - Francesca Magrini","francesca_narcisi_immagine - Francesca Narcisi","francesca_ribuoli_immagine - Francesca Ribuoli","francesca_scarpa_immagine - Francesca Scarpa","francesco_bellagamba_immagine - Francesco Bellagamba","francesco_imberti_immagine - Francesco Imberti","francesco_puppo_immagine - Francesco Puppo","Gaia_Maggio_immagine - Gaia Maggio","gazmend_zeneli_immagine - Gazmend Zeneli","Giacomo_Ponasso_Immagine - Giacomo Ponasso","GIACOMO_ZECCHI_immagine_ - Giacomo Zecchi","ginevra_scipioni_immagine - Ginevra Scipioni","giovanni_difronzo_immagine - Giovanni Difronzo","giulia_delzotto_immagine - Giulia Del Zotto","giulia_longo_immagine - Julie Longo","Giuseppe_Avarello_immagine - Giuseppe Avarello","Greta_Valotto_immagine - Greta Valotto","greta_zanetti_immagine - Greta Zanetti","jacopo_riccardi_immagine - Jacopo Riccardi","Jacopo_Ronchese_immagine - Jacopo Ronchese","jan_angelini_immagine - Jan Angelini","jana_radovic_immagine - Jana Radovic","laura_lupini_immagine - Laura Lupini","laura_riccobono_immagine - Laura Riccobono","Laura_Sisti_immagine - Laura Sisti","leonardo_meloni_immagine - Leonardo Meloni","lia_d_alessandri_immagine - Lia D_Alessandri","lisa_buttaroni_immagine - Lisa Buttaroni","lorenzo_mauro_immagine - Lorenzo Mauro","luca_gabrieli_immagine - Luca Gabrieli","Luca_Galvani_immagine - Luca Galvani","Luca_Marini_immagine - Luca Marini","luca_pradella_immagine - Luca Pradella","Lucia_MalagoScanelli_Immagine - Lucia Malago Scanelli","Lucia_zaccagnini_immagine - Lucia Zaccagnini","lucrezia_caon_immagine - Lucrezia Caon","ludovica_dalla_immagine - Ludovica Dalla","ludovico_mossa_immagine - Ludovico Mossa","maddalena_bellin_immagine - Maddalena Bellin","marco_caverni_immagine - Marco Caverni","Marco_Checchin_immagine - Marco Checchin","marco_pagan_immagine - Marco Pagan","margherita_dolfi_immagine - Margherita Dolfi","margherita_tofanelli_immagine - Margherita Tofanelli","Maria_Antonietta_D_amora_immagine - Maria Antonietta D_ Amora","maria_tortorella_immagine - Maria Tortorella","marina_reitano_immagine - Marina Reitano","marketa_brecherova_immagine - Marketa Brecherova","martina_andalo_immagine - Martina Andalo","martina_lepore_immagine - Martina Lepore","Martina_Proverbio_immagine - Martina Proverbio","matilde_morri_immagine - Matilde Morri","matteo_brasili_immagine - Matteo Brasili","matteo_de_luca_immagine - Matteo De Luca","matteo_montorfano_immagine - Matteo Montorfano","Matteo_Pirolo_immagine - Matteo Pirolo","Matteo_Savioli_immagine - Matteo Savioli","mauro_mangione_immagine - Mauro Mangione","michela_colorito_immagine - Michela Colorito","Michelangelo_Greco_Immagine - Michelangelo Greco","michele_biondi_immagine - Michele Biondi","micol_ganzerli_immagine - Micol Ganzerli","mirko_micheli_immagine - Mirko Micheli","nadine_curanz_immagine_correzione - Nadine Curanz","nicholas_daniel_immagine - Nicholas Daniel","nico_ardini_immagine - Nico Ardini","nicola_narbone_immagine - Nicola Narbone","Nicolamarcello Cirrottola immagine - Nicolamarcello Cirrottola","nicolo_barbieri - Nicolo Barbieri","noemi_civiero_immagine - Noemi Civiero","Oleksandra_Horobets_immagine - Oleksandra Horobets","Pablo_Panebianco_immagine - Pablo Panebianco","paola_carta_immagine - Paola Carta","paolo_barbieri_immagine - Paolo Barbieri","Paolo_Gentili_Immagine - Paolo Gentili","rachele_bozzato_immagine - Rachele Bozzato","rachele_stagni_immagine - Rachele Stagni","riccardo_ambrosi_immagine - Riccardo Ambrosi","roberto_capozucca_immagine - Roberto Capozucca","roberto_hajdari_immagine - Roberto Hajdari","Salvatore_Saitta_immagine - Salvatore Saitta","samantha_bertulli_immagine - Samantha Bertulli","samuele_recchia_immagine - Samuele Recchia","samuele_valeriu_cucuietu_immagine - Samuele Valeriu Cucuietu","sara_bartoccini_immagine - Sara Bartoccini","sara_gueli_immagine - Sara Gueli","sara_papa_immagine - Sara Papa","Sara_Zollo_immagine - Sara Zollo","selene_torlino_immagine - Selene Torlino","silvia_bonfini_immagine - Silvia Bonfini","silvia_cannella_immagine - Silvia Cannella","simone_bucci_immagine - Simone Bucci","simone_foglia_immagine - Simone Foglia","sofia_campagna_immagine - Sofia Campagna","sofia_salvatori_immagine - Sofia Salvatori","Sofia_Semilia_immagine - Sofia Semilia","stefano_simoncelli_immagine - Stefano Simoncelli","susanna_lupi_immagine - Susanna Lupi","susanna_milani_immgine - Susanna Milani","Susanna_Tomassini_immagine - Susanna Tomassini","teresa_pettini_immagine - Teresa Pettini","tobia_faiman_immagine - Tobia Faiman","valentina_scalzo_immagine - Valentina Scalzo","Valeria_biasin_immagine - Valeria Biasin","veronica_giannella_immagine - Veronica Giannella","veronica_naccari_immagine - Veronica Naccari","veronica_paoli_immagine - Veronica Paoli","veronica_vidal_immagine - Veronica Vidal","Viktoria_Petrova_immagine - Viktoria Petrova","Vincenzo_Chiappa_immagine - Vincenzo Chiappa"];
const txt_filenames = ["adriana_deluca_testo - Adriana De Luca","alberto_buratto_testo - Alberto Buratto","Alec_Trenta_Testo - Alec Trenta","alessandra_comparetto_testo - Alessandra Comparetto","alessandro_bettini_testo - Alessandro Bettini","alessandro_broni_testo - Alessandro Broni","alessandro_lanfrancotti_testo - Alessandro Lanfrancotti","alessandro_palombini_testo - Alessandro Palombini","alessandro_truffa_testo - Alessandro Truffa","alessia_priori_testo - Alessia Priori","alessio_carboni_testo - Alessio Carboni","Alex_Dilio_testo - Alex Dilio","alice_dealmeidamachado_testo - Alice Machado","Alice_Nascimben_testo - Alice Nascimben","ambra_sapuppo_testo - Ambra Sapuppo","andrea_cattaruzza_testo - Andrea Cattaruzza","andrea_granato_testo - Andrea Granato","anita_bortolotti_testo. - Anita Bortolotti","Anita_Cariolaro_Testo - Anita Cariolaro","annagiulia_pricoco_testo - Annagiulia Pricoco","annalisa_dalpozzo_testo - Annalisa Dalpozzo","annalisa_marchetti_testo - Annalisa Marchetti","annaluna_astolfi_testo - Anna Luna Astolfi","antonio_calandra_testo - Antonio Calandra","arianna_taretto_testo - Arianna Taretto","balsa_pejovic_testo - Pejovic Balsa","benedetta_stefani_testo - Benedetta Stefani","Bianca_Toni_testo - Bianca Toni","bru_belen_testo - Belen Bru","carlo_bramanti_testo - Carlo Bramanti","carlo_schlatter_testo - Carlo Andrea Schlatter","carola_gatto_testo - Carola Gatto","caterina_rossi_testo - Caterina Rossi","Celeste_Quercia_testo - Celeste Quercia","chiara_belpassi_testo - Chiara Belpassi","chiara_cecchetto_testo - Chiara Cecchetto","chiara_di_luca_font - Chiara Di Luca","Chiara_Gennari_testo - Chiara Gennari","chiara_manuguerra_testo - Chiara Manuguerra","chiara_netto_testo - Chiara Netto","chiara_solimene_testo - Chiara Solimene","claudia_bumbica_testo - Claudia Bumbica","claudia_petrangeli_testo - Claudia Petrangeli","claudia_professione_testo - Claudia Professione","clelia_cadamuro_testo - Clelia Cadamuro","costanza_berardi_testo - Costanza Berardi","Costanza_Sacher_testo - Costanza Sacher","daniel_malaj - Daniel Malaj","Daniela_Huqi_testo - Daniela Huqi","daniela_malagoli_testo - Daniela Malagoli","daniele_pala_testo - Daniele Pala","davide_catena_testo - Davide Catena","davide_dallapieta_testo - Davide Dalla Pieta","diletta_comini_testo - Diletta Comini","edoardo_fabbri_testo - Edoardo Fabbri","elena_buttinelli_testo - Elena Buttinelli","elena_micheli_testo - Elena Micheli","eleonora_gelli_testo - Eleonora Gelli","elisa_turrin - Elisa Turrin","elisabetta_laviano_testo - Elisabetta Laviano","elisabetta_silveri_testo - Elisabetta Silveri","emma_ceccaroni_testo - Emma Ceccaroni","emma_cusinato_testo - Emma Cusinato","Emma_Gabrielli_Testo - Emma Gabrielli","enrico_ercolani_testo - Enrico Ercolani","enrico_solfrini_testo - Enrico Solfrini","erica_rossi_testo - Erica Rossi","fabio_maragno_testo - Fabio Maragno","federico_attardo_testo - Federico Attardo","federico_trevisan_testo - Federico Trevisan","felipe_minicucci_testo - Felipe Minicucci","filippo_anceschi_testo - Filippo Anceschi","Filippo_Marani_testo - Filippo Marani","filippo_toscani_testo - Filippo Toscani","filomena_galvani_testo - Filomena Galvani","Floyd_Mustafai_testo - Floyd Mustafai","francesca_albergo_testo - Francesca Albergo","francesca_cugno_testo - Francesca Cugno","francesca_magrini_testo - Francesca Magrini","francesca_narcisi_testo - Francesca Narcisi","francesca_ribuoli_testo - Francesca Ribuoli","francesca_scarpa_testo - Francesca Scarpa","francesco_bellagamba_testo - Francesco Bellagamba","francesco_imberti_testo - Francesco Imberti","francesco_puppo_testo - Francesco Puppo","Gaia_Maggio_testo - Gaia Maggio","gazmend_zeneli_testo - Gazmend Zeneli","Giacomo_Ponasso_Testo - Giacomo Ponasso","GIACOMO_ZECCHI_testo - Giacomo Zecchi","ginevra_scipioni_testo - Ginevra Scipioni","giovanni_difronzo_testo - Giovanni Difronzo","giulia_delzotto_testo - Giulia Del Zotto","giulia_longo_testo - Julie Longo","Giuseppe_Avarello_testo - Giuseppe Avarello","Greta_Valotto_testo - Greta Valotto","greta_zanetti_testo - Greta Zanetti","jacopo_riccardi_testo - Jacopo Riccardi","Jacopo_Ronchese_testo - Jacopo Ronchese","jan_angelini_testo - Jan Angelini","jana_radovic_testo - Jana Radovic","laura_lupini_testo - Laura Lupini","laura_riccobono_testo - Laura Riccobono","Laura_Sisti_testo - Laura Sisti","leonardo_meloni_testo - Leonardo Meloni","lia_dalessandri_testo - Lia D_Alessandri","lisa_buttaroni_testo - Lisa Buttaroni","lorenzo_mauro_testo - Lorenzo Mauro","luca_gabrieli_testo - Luca Gabrieli","Luca_Galvani_testo - Luca Galvani","Luca_Marini_testo - Luca Marini","luca_pradella_testo - Luca Pradella","Lucia_MalagoScanelli_Testo - Lucia Malago Scanelli","lucia_zaccagnini_testo - Lucia Zaccagnini","lucrezia_caon_testo - Lucrezia Caon","ludovica_dalla_testo - Ludovica Dalla","ludovico_mossa_testo - Ludovico Mossa","maddalena_bellin_testo - Maddalena Bellin","marco_caverni_testo - Marco Caverni","Marco_Checchin_testo - Marco Checchin","marco_pagan_testo - Marco Pagan","margherita_dolfi_testo - Margherita Dolfi","margherita_tofanelli_testo - Margherita Tofanelli","Maria Antonietta_D_Amora_testo - Maria Antonietta D_ Amora","maria_tortorella_testo - Maria Tortorella","marina_reitano_testo - Marina Reitano","marketa_brecherova_testo - Marketa Brecherova","martina_andalo_testo - Martina Andalo","martina_lepore_testo - Martina Lepore","Martina_Proverbio_testo - Martina Proverbio","matilde_morri_testo - Matilde Morri","matteo_brasili_testo - Matteo Brasili","matteo_de_luca_testo - Matteo De Luca","matteo_montorfano_testo - Matteo Montorfano","Matteo_Pirolo_testo - Matteo Pirolo","Matteo_Savioli_testo - Matteo Savioli","mauro_mangione_testo - Mauro Mangione","michela_colorito_testo - Michela Colorito","Michelangelo_Greco_Testo - Michelangelo Greco","michele_biondi_testo - Michele Biondi","micol_ganzerli_testo - Micol Ganzerli","mirko_micheli_testo - Mirko Micheli","nadine_curanz_testo - Nadine Curanz","nicholas_daniel_testo - Nicholas Daniel","nico_ardini_testo - Nico Ardini","nicola_nabone_testo - Nicola Narbone","Nicolamarcello Cirrottola testo - Nicolamarcello Cirrottola","nicolo_barbieri - Nicolo Barbieri","noemi_civiero_testo - Noemi Civiero","Oleksandra_Horobets_testo - Oleksandra Horobets","Pablo_Panebianco_testo - Pablo Panebianco","paola_carta_testo - Paola Carta","paolo_barbieri_testo - Paolo Barbieri","Paolo_Gentili_Testo (2) - Paolo Gentili","rachele_bozzato_testo - Rachele Bozzato","rachele_stagni_testo - Rachele Stagni","riccardo_ambrosi_testo - Riccardo Ambrosi","roberto_capozucca_testo - Roberto Capozucca","roberto_hajdari_testo - Roberto Hajdari","Salvatore_Saitta_testo - Salvatore Saitta","samantha_bertulli_testo - Samantha Bertulli","samuele_recchia_testo - Samuele Recchia","samuele_valeriu_cucuietu_testo - Samuele Valeriu Cucuietu","sara_bartoccini_testo - Sara Bartoccini","sara_gueli_testo - Sara Gueli","sara_papa_testo - Sara Papa","Sara_Zollo_testo - Sara Zollo","selene_torlino_testo - Selene Torlino","silvia_bonfini_testo - Silvia Bonfini","silvia_cannella_testo - Silvia Cannella","simone_bucci_testo - Simone Bucci","simone_foglia_testo - Simone Foglia","sofia_campagna_testo - Sofia Campagna","sofia_salvatori_testo - Sofia Salvatori","Sofia_Semilia_testo - Sofia Semilia","stefano_simoncelli_testo - Stefano Simoncelli","susanna_lupi_testo - Susanna Lupi","susanna_milani_testo - Susanna Milani","Susanna_Tomassini_testo - Susanna Tomassini","teresa_pettini_testo - Teresa Pettini","tobia_faiman_testo - Tobia Faiman","valentina_scalzo_testo - Valentina Scalzo","Valeria_biasin_testo - Valeria Biasin","veronica_giannella_testo - Veronica Giannella","veronica_naccari_testo - Veronica Naccari","veronica_paoli_testo - Veronica Paoli","veronica_vidal_testo - Veronica Vidal","Viktoria_Petrova_testo - Viktoria Petrova","Vincenzo_Chiappa_testo - Vincenzo Chiappa"];

p5.disableFriendlyErrors = true; // disables FES

/* VARIABLES */
const ssc_list = document.getElementById("ssc_list");
const ssc_canvas = document.getElementById("ssc_canvas");
const info_big = document.getElementById("info_big");
const iInfo = document.getElementById("iInfo");
const xInfo = document.getElementById("xInfo");
const sketch_combo = document.getElementById("sketch_combo");
const header_title = document.getElementById("header_title");
const info_playlist_col = document.getElementById("info_playlist_col");
const main_content = document.getElementsByClassName("main_content")[0];
const list_loading = document.getElementsByClassName("list_loading");
const loading_text = document.getElementsByClassName("loading_text")[0];
const mobileSize = window.matchMedia("(min-width: 992px)");
var wdt = sketch_combo.offsetWidth;
var HalyardDisplay;
var ex;
var myCanvas;

var illImgs = [];
var txtImgs = [];
var selected_name_ill;
var selected_name_txt;
var selected_ill;
var selected_txt;
var loadingIll = true;
var loadingTxt = true;

var letters = [];
var letter_img;
var preprogress = 0;
var numbers_of_cartoline = ill_filenames.length;




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
        selected_ill = illImgs[index].img;
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
        selected_txt = txtImgs[index].img;
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
    windowResized();
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

function createList(){
    // Disable loading divs
    list_loading[0].style.display = "none";
    list_loading[1].style.display = "none";
    info_playlist_col.style.display = "block";
    loading_text.classList.remove("isLoading");

    //Iterate between people
    for (let i = 0; i < illImgs.length; i++) {
        let inputIll = illImgs[i];
        let inputTxt = txtImgs[i];
        ssc_list.insertAdjacentHTML('beforeend', '<div id="'+inputIll.name+'" class="person_wrapper"><h3>'+inputIll.name+'</h3><img id="'+inputIll.name+'" class="list_imgs list_ill '+i+'" src="'+inputIll.thumb+'"><img id="'+inputIll.name+'" class="list_imgs list_txt '+i+'" src="'+inputTxt.thumb+'"></div>');
    }
    
    //Adding click event on imgs
    for (let i = 0; i < document.getElementsByClassName("list_imgs").length; i++) {
        let cartolina = document.getElementsByClassName("list_imgs")[i];
        cartolina.onclick = function() {clickOnCartolina(cartolina)};
    }
}

function checkNameAccent(name){
    if (name == "Nicolo Barbieri") {
        name = "Nicolò Barbieri";
    } else if (name == "Belen Bru"){
        name = "Belén Bru";
    } else if (name == "Davide Dalla Pieta"){
        name = "Davide Dalla Pietà";
    } else if (name == "Jana Radovic"){
        name = "Jana Radović";
    } else if (name == "Lucia Malago Scanelli"){
        name = "Lucia Malagò Scanelli";
    } else if (name == "Marketa Brecherova"){
        name = "Markéta Brecherová";
    } else if (name == "Martina Andalo"){
        name = "Martina Andalò";
    } else if (name == "Lia D_Alessandri") {
        name = "Lia D'Alessandri";
    } else if (name == "Maria Antonietta D_ Amora") {
        name = "Maria Antonietta D'Amora";
    }
    return name;
}


function loadingImages(image, filename, thumbPath, type, index){
    let name = filename.split("-")[1].replace(' ', '').split(".")[0];
    name = checkNameAccent(name);
    let cart = loadImage(filename, imageLoaded);
    let obj = {
        index : index,
        thumb: thumbPath,
        name: name,
        img: cart
    }

    function imageLoaded(){

        if (type == "ill") {
            illImgs.push(obj);
            //console.log("Ill: " + illImgs.length + "/" + ill_filenames.length);

            if (illImgs.length >= ill_filenames.length) {
                loadingIll = false;
                if (loadingTxt == false) {
                    areReady();
                }
            }else{
                loadingIll = true;
            }


        } else if (type == "txt") {
            txtImgs.push(obj);
            //console.log("Txt: " + txtImgs.length + "/" + txt_filenames.length);

            if (txtImgs.length >= txt_filenames.length) {
                loadingTxt = false;
                if (loadingIll == false) {
                    areReady();
                }
            }else{
                loadingTxt = true;
            }
        }



    }
}


function sortLists(){
    illImgs.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
    txtImgs.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
}


function areReady(){
    sortLists();
    createList();
    randomChoice();
}





/* CANVAS INSTRUCTIONS */

function setup(){
    toggleInfoButton();
    frameRate(1);

    HalyardDisplay = loadFont('assets/css/fonts/HalyardDisplayBook.ttf');
    letter_img = loadImage('assets/img/letter_icon.png');

    ex = createGraphics(1080, 1080);
    ex.pixelDensity(1);
    myCanvas = createCanvas(wdt, wdt);
    myCanvas.parent("sketch_combo");

    //Loading all images into array
    let iIndex = 0;
    for (iFile of ill_filenames) {
        loadingImages(iFile, "assets/img/ill/"+iFile+".jpg", "assets/img/thumb/ill/"+iFile+".jpg", "ill", iIndex);
        iIndex++;
    }

    let tIndex = 0;
    for (tFile of txt_filenames) {
        loadingImages(tFile, "assets/img/txt/"+tFile+".png", "assets/img/thumb/txt/"+tFile+".jpg", "txt", tIndex);
        tIndex++;
    }


    if (mobileSize.matches) {
        wdt = sketch_combo.offsetWidth-15;
        header_title.innerHTML = "SECRET SANTA CHIARA <i>2020</i>";
    }else{
        wdt = sketch_combo.offsetWidth-30;
        header_title.innerHTML = "SSC <i>2020</i>";
    }

}



function draw(){

    if (loadingIll || loadingTxt) {
        background(241, 242, 245);
        noStroke();
        textFont(HalyardDisplay);
        let progress = int((illImgs.length + txtImgs.length)/2);


        // Snowflakes text
        /*if (progress > 1) {
            if (progress > preprogress) {
                let aLetter = {
                    x: random(40, width-40),
                    y: random(40, height-40),
                    r: random(0, TWO_PI)
                };
            letters.push(aLetter);
            }
        }
        
        for (letter of letters){
            textSize(38);
            push();
            translate(letter.x, letter.y)
            rotate(letter.r);
            image(letter_img, 0, 0, 40, 40);
            pop();
        }*/

        // Progress bar

        fill(255);
        push();
        translate(width/2, height/2);
        rotate(HALF_PI);
        arc(0, 0, width/2, height/2, 0, map(progress, 0, numbers_of_cartoline, 0, TWO_PI), PIE);
        pop();

        //fill(141, 142, 145);
        //rect(width/4, height/2 + progressHgt, width-(width/2), progressHgt);
        //fill(255);
        //rect(width/4, height/2 + progressHgt, ((illImgs.length + txtImgs.length)/(numbers_of_cartoline*2))*(width-(width/2)), progressHgt);


        // Caption text
        fill(0);
        textSize(16);
        textAlign(CENTER);
        text( "Caricamento in corso "+progress+ " cartoline di "+numbers_of_cartoline, width/2, height/2);

        preprogress = progress;
        

    } else {

        ex.blendMode(BLEND);
        ex.background(255, 255, 255);
        //Drawing images

        ex.image(selected_ill, 0, 0, ex.width, ex.height);
        ex.blendMode(MULTIPLY);
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


















