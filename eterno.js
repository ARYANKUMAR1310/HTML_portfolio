var impact = document.querySelector("#top-bar-left-two");
var about = document.querySelector("#top-bar-left-one");
var impact_section = document.querySelector(".impact");
var about_section = document.querySelector(".middle-1");
var heading = document.querySelector("#top-bar-middle-heading");

impact.addEventListener("click", () => {
    impact_section.scrollIntoView({behavior: "smooth", block: "start"});
});

about.addEventListener("click", () => {
    about_section.scrollIntoView({behaviour: "smooth", block: "start"});
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY); // Logs the vertical scroll position
  });