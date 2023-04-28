// const mainUrl = "http://localhost:8000/api/v1/titles/";

// // fonction info modal catégorie
// function fetch_movie(id) {
//     const url = mainUrl + id
//     console.log(url)
//     fetch(url).then(function(res) {
//         if (res.ok) {
//             return res.json();
//         }
//     }).then(function(movie) {
//         document.getElementById("modal-title").innerHTML = movie.title;
//         document.getElementById("modal-genre").innerHTML = movie.genres;
//         document.getElementById("modal-year").innerHTML = movie.year;
//         document.getElementById("modal-duration").innerHTML = movie.duration;
//         document.getElementById("modal-rated").innerHTML = movie.rated;
//         document.getElementById("modal-score").innerHTML = movie.imdb_score;
//         document.getElementById("modal-box-office").innerHTML = movie.avg_vote;
//         document.getElementById("modal-description").innerHTML = movie.long_description;
//         document.getElementById("modal-actors").innerHTML = movie.actors;
//         const alt = "image du film " + movie.title
//         document.getElementById("modal-img").innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";
//         document.getElementById("modal-countries").innerHTML = movie.countries;
//         document.getElementById("modal-director").innerHTML = movie.directors;
//     })
// }













// MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("test1");
var span = document.getElementsByClassName("close")[0];


// fonction info modal BEST film
function ouverture_modal_film(movie, alt) {
//     console.log("movie = " + movie.title);
//     console.log("alt = " + alt);
    document.getElementById("modal-title").innerHTML = movie.title;
    document.getElementById("modal-genre").innerHTML = movie.genres;
    document.getElementById("modal-year").innerHTML = movie.year;
    document.getElementById("modal-duration").innerHTML = movie.duration;
    document.getElementById("modal-rated").innerHTML = movie.rated;
    document.getElementById("modal-score").innerHTML = movie.imdb_score;
    document.getElementById("modal-box-office").innerHTML = movie.avg_vote;
    document.getElementById("modal-description").innerHTML = movie.long_description;
    document.getElementById("modal-actors").innerHTML = movie.actors;
    document.getElementById("modal-img").innerHTML = "<img src=" + movie.image_url + "alt='" + alt + " Film Image' height='400' width='300'/>";
    document.getElementById("modal-countries").innerHTML = movie.countries;
    document.getElementById("modal-director").innerHTML = movie.directors;
}

// Meilleure film
const besFilmUrl = "http://localhost:8000/api/v1/titles/68646";
const titleMainMovie = document.getElementById("bestMovie_titre");
const descriptionMainMovie = document.getElementById("bestMovie_description");
const imageMainMovie = document.getElementById("bestMovie_image");



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
        mybutton.onclick = function () {
            ouverture_modal_film(value, alt);
            modal.style.display = "block";
        };
    })
    .catch(function(err) {
        console.log("Une erreur est survenue")
    });


























const fetch_meilleurs = async () => {
await fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page_size=7")
      .then((resp) => resp.json())
      .then((promise) => {
            genres = promise.results;
            return genres
      });
};


const film_mieux_noté = async () => {
      await fetch_meilleurs();
      section1 = document.querySelectorAll("#section1 img");
      for (var i = 0; i < section1.length; i++) {
            section1[i].src = `${genres[i].image_url}`;
            section1[i].id = `${genres[i].id}`;

      }

      section2 = document.querySelectorAll("#section2 img");
      for (var i = 0; i < section2.length; i++) {
            section2[i].src = `${genres[i + 3].image_url}`;
            section2[i].id = `${genres[i + 3].id}`;
      }

};
film_mieux_noté();


const fetch_action = async () => {
    await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=action&page_size=7")
          .then((resp) => resp.json())
          .then((promise) => {
                genres = promise.results;
                return genres
          });
};

const film_action = async () => {
    await fetch_action();
    section3 = document.querySelectorAll("#section3 img");
    for (var i = 0; i < section3.length; i++) {
          section3[i].src = `${genres[i].image_url}`;
          section3[i].id = `${genres[i].id}`;
    }
    section4 = document.querySelectorAll("#section4 img");
    for (var i = 0; i < section4.length; i++) {
          section4[i].src = `${genres[i + 3].image_url}`;
          section4[i].id = `${genres[i + 3].id}`;
    }
};
film_action();


const fetch_Adventure = async () => {
    await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=Adventure&page_size=7")
          .then((resp) => resp.json())
          .then((promise) => {
                genres = promise.results;
                return genres
          });
};

const film_Adventure = async () => {
    await fetch_Adventure();
    section5 = document.querySelectorAll("#section5 img");
    for (var i = 0; i < section5.length; i++) {
          section5[i].src = `${genres[i].image_url}`;
          section5[i].id = `${genres[i].id}`;
    }
    section6 = document.querySelectorAll("#section6 img");
    for (var i = 0; i < section6.length; i++) {
          section6[i].src = `${genres[i + 3].image_url}`;
          section6[i].id = `${genres[i + 3].id}`;
    }
};
film_Adventure();

const fetch_Drama = async () => {
    await fetch("http://127.0.0.1:8000/api/v1/titles/?genre=Drama&page_size=7")
          .then((resp) => resp.json())
          .then((promise) => {
                genres = promise.results;
                return genres
          });
};

const film_Drama = async () => {
    await fetch_Drama();
    section7 = document.querySelectorAll("#section7 img");
    for (var i = 0; i < section7.length; i++) {
          section7[i].src = `${genres[i].image_url}`;
          section7[i].id = `${genres[i].id}`;
    }
    section8 = document.querySelectorAll("#section8 img");
    for (var i = 0; i < section8.length; i++) {
          section8[i].src = `${genres[i + 3].image_url}`;
          section8[i].id = `${genres[i + 3].id}`;
    }
};
film_Drama();