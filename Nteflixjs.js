// constante URL API
const mainUrl = "http://localhost:8000/api/v1/titles/";

// Meilleure film
const besFilmUrl = "http://localhost:8000/api/v1/titles/68646";
const titleMainMovie = document.getElementById("bestMovie_titre");
const descriptionMainMovie = document.getElementById("bestMovie_description");
const imageMainMovie = document.getElementById("bestMovie_image");

// MODAL 
var modal = document.getElementById("myModal");
var btn = document.getElementById("test1");
var span = document.getElementsByClassName("close")[0];



// ouverture modal
btn.onclick = function() {
    modal.style.display = "block";
}

// fermeture modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// fonction info modal
function ouverture_modal_film(movie, alt) {
    console.log("movie = " + movie.title);
    console.log("alt = " + alt);
    document.getElementById("modal-title").innerHTML = movie.title;
    document.getElementById("modal-genre").innerHTML = movie.genres;
    document.getElementById("modal-year").innerHTML = movie.year;
    document.getElementById("modal-duration").innerHTML = movie.duration;
    document.getElementById("modal-rated").innerHTML = movie.rated;
    document.getElementById("modal-score").innerHTML = movie.imdb_score;
    document.getElementById("modal-box-office").innerHTML = movie.avg_vote;
    document.getElementById("modal-description").innerHTML = movie.long_description;
    document.getElementById("modal-actors").innerHTML = movie.actors;
    document.getElementById("modal-img").innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";1
    document.getElementById("modal-countries").innerHTML = movie.countries;
    document.getElementById("modal-director").innerHTML = movie.directors;
}



fds

film








fetch(besFilmUrl)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        let mybutton = document.getElementById("myBtn");
        let alt = "Best1";
        titleMainMovie.innerHTML = value.title;
        descriptionMainMovie.innerHTML = value.description;
        imageMainMovie.innerHTML = "<img src=" + value.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>"
        mybutton.onclick = function () { ouverture_modal_film(value, alt);};
    })
    .catch(function(err) {
        console.log("Une erreur est survenue")
    });















// catégorie 7 meilleures films 
function inject_html_film(url, nb_element = 5){
    fetch(url)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            let i = 0;
            for (let movie of value.results){
                if (i <= nb_element) {
                    let monfilm = document.createElement("p");
                    let alt = "Best";
                    monfilm.setAttribute("id", "films_list_best_" + movie.id);
                    monfilm.innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";
                    monfilm.onclick = function () { ouverture_modal_film(movie, alt);};
                    section_best_film.append(monfilm);
                }
                i += 1;
            }
        })
        .catch(function(err) {
                console.log("Une erreur est survenue")
        });
}

let contenu = document.getElementById("contenu");
// créer la section
let section_best_film = document.createElement("section");  

// ajoute ID a la section + la class
section_best_film.setAttribute("id", "categorie_best")
section_best_film.setAttribute("class", "categorie_best");
contenu.append(section_best_film);

let page1 = "http://localhost:8000/api/v1/titles/?sort_by=-votes,-imdb_score";
inject_html_film(page1);
let page2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-votes%2C-imdb_score";
inject_html_film(page2, 1);




// categorie action (categorie_action_movie)
function catégorie(url, nb_element = 5){
    fetch(url)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            let i = 0;
            for (let movie of value.results){
                if (i <= nb_element) {
                    let monfilm = document.createElement("p");
                    let alt = "Action";
                    monfilm.setAttribute("id", "films_list_best_" + i);
                    monfilm.innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";
                    monfilm.onclick = function () { ouverture_modal_film(movie, alt); };
                    section_categorie1.append(monfilm);
                }
                i += 1;
            }
        })

        .catch(function(err) {
                console.log("Une erreur est survenue")
        });
    }
let contenu1 = document.getElementById("contenu1");
// créer la section
let section_categorie1 = document.createElement("section");  
// ajoute ID a la section + la class
section_categorie1.setAttribute("id", "categorie_best1")
section_categorie1.setAttribute("class", "categorie_best1");
contenu1.append(section_categorie1);

let categorie_action_movie = "http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score";
catégorie(categorie_action_movie);
let categorie_action_movie2= "http://localhost:8000/api/v1/titles/?genre=action&page=2&sort_by=-imdb_score";
catégorie(categorie_action_movie2, 1);




// categorie horreur
function catégorie2(url, nb_element = 5){
    fetch(url)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            let i = 0;
            for (let movie of value.results){
                if (i <= nb_element) {
                    let monfilm = document.createElement("p");
                    let alt = "Horreur";
                    monfilm.setAttribute("id", "films_list_best_" + i);
                    monfilm.innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";
                    monfilm.onclick = function () { ouverture_modal_film(movie, alt); };
                    section_categorie2.append(monfilm);
                }
                i += 1;
            }
        })

        .catch(function(err) {
                console.log("Une erreur est survenue")
        });
    }
let contenu2 = document.getElementById("contenu2");
// créer la section
let section_categorie2 = document.createElement("section");  
// ajoute ID a la section + la class
section_categorie2.setAttribute("id", "categorie_best2")
section_categorie2.setAttribute("class", "categorie_best2");
contenu2.append(section_categorie2);

let categorie_horreur_movie = "http://localhost:8000/api/v1/titles/?genre=horror&sort_by=-imdb_score";
catégorie2(categorie_horreur_movie);
let  categorie_horreur_movie2 = "http://localhost:8000/api/v1/titles/?genre=horror&page=2&sort_by=-imdb_score";
catégorie2(categorie_horreur_movie2, 1);




// categorie drame (categorie_drama_movie)
function catégorie3(url, nb_element = 5){
    fetch(url)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            let i = 0;
            for (let movie of value.results){
                if (i <= nb_element) {
                    let monfilm = document.createElement("p");
                    let alt = "Drame";
                    monfilm.setAttribute("id", "films_list_best_" + i);
                    monfilm.innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";
                    monfilm.onclick = function () { ouverture_modal_film(movie, alt); };
                    section_categorie3.append(monfilm);
                }
                i += 1;
            }
        })

        .catch(function(err) {
                console.log("Une erreur est survenue")
        });
    }
let contenu3 = document.getElementById("contenu3");
// créer la section
let section_categorie3 = document.createElement("section");  
// ajoute ID a la section + la class
section_categorie3.setAttribute("id", "categorie_best3")
section_categorie3.setAttribute("class", "categorie_best3");
contenu3.append(section_categorie3);

let categorie_drama_movie = "http://localhost:8000/api/v1/titles/?genre=drama&sort_by=-imdb_score";
catégorie3(categorie_drama_movie);
let  categorie_drama_movie2 = "http://localhost:8000/api/v1/titles/?genre=drama&page=2&sort_by=-imdb_score";
catégorie3(categorie_drama_movie2, 1);
