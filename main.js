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

const nextprofilebtn = document.getElementById("nextprofilebtn");
const cv_screener_cards_container = document.querySelector(
  ".cv-screener-cards-container"
);
const close_popup_btn = document.querySelector(".closepopup-btn");
const overlay_notification_container = document.querySelector(
  ".overlay-notification-container"
);

function candidates_iterator(canidates_details_data) {
  let nextindex = 0;
  return {
    next: () => {
      if (nextindex < canidates_details_data.length) {
        return {
          value: canidates_details_data[nextindex++],
          done: false,
          // ======================== data is not over which means has more to show and iterate the data ========================
        };
      } else {
        return {
          done: true,
          // ======================== data is over which means it has nor more data to show and iterate ========================
        };
      }
    },
  };
}

const all_candidates = candidates_iterator(candidates_data);
console.log(all_candidates);
shownextprofile();
nextprofilebtn.addEventListener("click", shownextprofile);
function shownextprofile() {
  const current_candidate = all_candidates.next().value;
  if (current_candidate != undefined) {
    cv_screener_cards_container.innerHTML = `<div class="cv-screener-card">
          <div class="photobox">
          <img
          src="${current_candidate.photo}"
          alt="candidate pic"
          class="candidatepic"
          />
          </div>
          <div class="contentbox">
          <h3 class="candidatename">Name: ${current_candidate.name}</h3>
          <p class="age">Age: ${current_candidate.age}</p>
          <p class="skill-in">Language: ${current_candidate.language}</p>
          <p class="speciality">Technology working in: ${current_candidate.framework}</p>
          <p class="location">Lives in: ${current_candidate.location}</p>
          </div>
          </div>`;
  } else {
    overlay_notification_container.style.display = "block";
  }
}

close_popup_btn.addEventListener("click", () => {
  overlay_notification_container.style.display = "none";
  window.location.reload();
});
