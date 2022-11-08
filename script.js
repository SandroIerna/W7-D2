let primaryImages = document.getElementById("primary-images");
let secondaryImages = document.getElementById("secondary-images");
let svgs = document.querySelectorAll(".card > svg");
let row = document.getElementById("row");
let searchField = document.getElementById("search-field");
let carousel = document.getElementById("inner-carousel");

const options = {
  headers: {
    Authorization:
      "Bearer 563492ad6f91700001000001376f4a3a8a844098bd70d036b84817d4",
  },
};

// let loadImages = function () {
//   fetch("https://api.pexels.com/v1/search?query=dogs", options)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response.photos);
//       let arrayOfPhotos = response.photos;
//       let j = 0;
//       for (let i = 0; i < svgs.length; i++) {
//         let img = document.createElement("img");
//         svgs[i].replaceWith(img);
//         if (j < arrayOfPhotos.length) {
//           img.src = arrayOfPhotos[j].src.medium;
//           j++;
//         } else {
//           img.src = arrayOfPhotos[j].src.medium;
//           j = 0;
//         }
//       }
//     })
//     .catch((err) => console.error(err));
// };

let loadImages = function () {
  fetch("https://api.pexels.com/v1/search?query=dogs", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.photos);
      let arrayOfPhotos = response.photos;
      row.innerHTML = "";
      for (photo of arrayOfPhotos) {
        row.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${photo.src.medium}
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="hideImg()"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .catch((err) => console.error(err));
};

let loadSecondayImages = function () {
  fetch("https://api.pexels.com/v1/search?query=cats", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.photos);
      let arrayOfPhotos = response.photos;
      row.innerHTML = "";
      for (photo of arrayOfPhotos) {
        row.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${photo.src.medium}
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="hideImg()"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .catch((err) => console.error(err));
};

let search = function () {
  fetch(`https://api.pexels.com/v1/search?query=${searchField.value}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.photos);
      let arrayOfPhotos = response.photos;
      row.innerHTML = "";
      for (photo of arrayOfPhotos) {
        row.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${photo.src.medium}
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="hideImg()"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
          </div>
        </div>
      </div>`;
      }
      searchField.value = "";
    })
    .catch((err) => console.error(err));
};

let keyDown = function (event) {
  if (event.key === "Enter") {
    search();
  }
};

hideImg = () => {
  let parent1 = event.target.parentNode;
  let parent2 = parent1.parentNode;
  let parent3 = parent2.parentNode;
  parent3.parentNode.removeChild(parent3);
};

primaryImages.addEventListener("click", loadImages);
secondaryImages.addEventListener("click", loadSecondayImages);

// carousel

displayCarouselImg = () => {
  fetch("https://api.pexels.com/v1/search?query=forest", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.photos);
      let arrayOfPhotos = response.photos;
      for (photo of arrayOfPhotos) {
        carousel.innerHTML = `
        <div class="carousel-item active">
        <img src="${photo.src.medium}" class="d-block w-100" alt="..." />
      </div>`;
      }
    })
    .catch((err) => console.error(err));
};

displayCarouselImg();
