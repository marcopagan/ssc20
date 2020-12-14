// Importing data
ill = ["Filippo_Marani_immagine - Filippo Marani.png","giulia_delzotto_immagine - Giulia Del Zotto.png","luca_pradella_immagine - Luca Pradella.png","nico_ardini_immagine - nico ardini.png"];
txt = ["Filippo_Marani_testo - Filippo Marani.png","giulia_delzotto_testo - Giulia Del Zotto.png","luca_pradella_testo - Luca Pradella.png","nico_ardini_testo - nico ardini.png"];
names = [];

// Catching div elements
var ssc_list = document.getElementById("ssc_list");
var ssc_canvas = document.getElementById("ssc_canvas");

// Populating names array
for (person of ill){
    let name = person.split("-")[1].replace(' ', '').split(".")[0];
    names.push(name);
}

// Iterate between people
for (var i = 0; i < names.length; i++) {
    ssc_list.insertAdjacentHTML('beforeend', '<div class="person_wrapper"><h3>'+names[i]+'</h3><img class="list_imgs" src="assets/img/ill/'+ill[i]+'"><img class="list_imgs" src="assets/img/txt/'+txt[i]+'"></div>');
}

