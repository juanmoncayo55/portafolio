import portfolioProjects from "./projects.js";
const projects = document.getElementById("projects");
const projectsSelect = document.querySelector("#projects_slc");
const modalContainer = document.getElementById("modalContainer");
const menuButton = document.getElementById("menuButton");
const headerNavigation = document.querySelector(".Header-navigation");
const headerNavLinks = document.querySelectorAll(".Header-navigation__link");
const upButton = document.getElementById("upButton");

/* upButton */
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    upButton.classList.add('visible');
  } else {
    upButton.classList.remove('visible');
  }
});

upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* Eliminando hash al refrescar el sitio web */
window.addEventListener('load', () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, window.location.pathname);
  }
});

/* Menu Mobile */
menuButton.addEventListener("click", () => {
  headerNavigation.classList.toggle("activeMenu");
});

window.addEventListener("click", (e) => {
  const menuOpen = headerNavigation.classList.contains("activeMenu");

  if (menuOpen && !headerNavigation.contains(e.target) && !menuButton.contains(e.target)){
    headerNavigation.classList.remove("activeMenu");
  }
});

headerNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    headerNavigation.classList.remove("activeMenu");
  });
});


/* Codigo para filtro de proyectos */
const templateCard = (project) => {
  return `
    <div class="portfolio-card" data-category="web" data-aos="fade-up">
      <img src="${project.image}" alt="Proyecto Web">
      <div class="portfolio-overlay">
        <h3>${project.title}</h3>
        <button id="btnShowPopup" data-id="${project.modalId}">Ver más</button>
      </div>
    </div>
  `;
}

function allProjects (){
  projects.innerHTML = "";
  portfolioProjects.map(project => {
    projects.innerHTML += templateCard(project);
  });

}
allProjects();

projects.addEventListener("click", (e) => {
  if(e.target.id === "btnShowPopup"){
    portfolioProjects.map(project => {
      if(e.target.dataset.id == project.modalId){
        console.log(project);
        modalContainer.innerHTML = `
          <div id="modal1" class="modal">
            <div class="modal-content">
              <button class="close" id="btnCloseModal">&times;</button>
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              <div class="modal-content__icons">
                ${project.icons.map(icon => icon.includes("fa-") ? `<i class="${icon}"></i>` : `<img src="./images/${icon}" />`).join("")}
              </div>
              ${project.links.video ? `<a href="${project.links.video}" target="_blank" class="btn">Ver Demo</a>` : ""}
              ${project.links.code ? `<a href="${project.links.code}" target="_blank" class="btn btn-outline">Ver Código</a>` : ""}
              ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="btn btn-outline">Ver Demo</a>` : ""}
              
            </div>
          </div>
        `;

        const btnCloseModal = document.getElementById("btnCloseModal");
        btnCloseModal.addEventListener("click", () => {
          modalContainer.innerHTML = "";
        });
        
        window.addEventListener("click", (e) => {
          if(e.target.classList.contains("modal")){
            modalContainer.innerHTML = "";
          }
        });

        window.addEventListener("keydown", (e) => {
          if(e.key === "Escape"){
            modalContainer.innerHTML = "";
          }
        });
        
      }
    })
  }
})

projectsSelect.addEventListener("change", (e) => {
  projects.innerHTML = "";
  portfolioProjects.filter(project => {
    if(project.category === e.target.value){
      projects.innerHTML += templateCard(project);
    } else if(e.target.value === "todos"){
      allProjects();
    }
  });
});