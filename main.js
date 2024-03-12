// ============== candidates_data is an array of objects which contains information about the candidate's profile ==============
const candidates_data = [
  {
    name: "bella",
    age: 18,
    language: "javascript",
    framework: "reactjs",
    location: "forks washington",
    photo: "images/bella.jpeg",
  },
  {
    name: "edward",
    age: 109,
    language: "php",
    framework: "laravel",
    location: "italy",
    photo: "images/edward.jpeg",
  },
  {
    name: "jassper",
    age: 101,
    language: "python",
    framework: "flask",
    location: "united states",
    photo: "images/jassper.jpg",
  },
  {
    name: "alise",
    age: 118,
    language: "javascript",
    framework: "nodejs",
    location: "forks",
    photo: "images/alise.jpeg",
  },
  {
    name: "carlyle",
    age: 209,
    language: "python",
    framework: "django",
    location: "italian",
    photo: "images/carlyle.jpeg",
  },
  {
    name: "esme",
    age: 210,
    language: "javascript",
    framework: "angularjs",
    location: "forks",
    photo: "images/esme.jpeg",
  },
];

// ======== iterate over each canidate details object until the object isn't finished increment it otherwise close this ========
const nextcvbtn = document.getElementById("nextcv-btn");
const cvscreencontainer = document.querySelector(".cv-screen-container");
const closepopupbtn = document.getElementById("closepopupbtn");
const overlay_container = document.querySelector(".overlay-container");

function cv_iterator(remaining_candidates) {
  let currentindex = 0;
  return {
    next: function () {
      return currentindex < remaining_candidates.length
        ? { value: remaining_candidates[currentindex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cv_iterator(candidates_data);
nextcandidate();
nextcvbtn.addEventListener("click", nextcandidate);

function nextcandidate() {
  const current_candidate = candidates.next().value;
  if (current_candidate != undefined) {
    cvscreencontainer.innerHTML = `<div class="cv-screen-card">
        <div class="photobox">
        <img src="${current_candidate.photo}" alt="user profile pic" />
        </div>
        <div class="contentbox">
        <h3 class="candidate-name">name: ${current_candidate.name}</h3>
        <p class="candidateage-age">age: ${current_candidate.age}</p>
        <p class="candidate-language-skill">working in: ${current_candidate.language}</p>
        <p class="candidate-framework-skill">speciality in: ${current_candidate.framework}</p>
        <p class="candidate-location">lives in: ${current_candidate.location}</p>
        </div>
        </div>`;
  } else {
    overlay_container.style.display = "block";
  }
}

closepopupbtn.addEventListener("click", () => {
  overlay_container.style.display = "none";
  window.location.reload();
});
