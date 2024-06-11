(function(c, d){
	const projectsInformation = d.querySelector("#projects-information"),
		dataForProjects = [
			{
				image: "build/img/project1",
				link: "https://playful-axolotl-ecfa64.netlify.app",
				description: "Landing-Page donde de muestro las habilidades en el maquetado y posicionamiento de elementos en una estructura HTML"
			},
			{
				image: "build/img/project2",
				link: "https://leafy-jalebi-206d23.netlify.app",
				description: "Landing-Page donde de muestro las habilidades en el maquetado y posicionamiento de elementos en una estructura HTML"
			},
			{
				image: "build/img/project3",
				link: "https://cheerful-syrniki-602715.netlify.app",
				description: "Landing-Page donde de muestro las habilidades en el maquetado y posicionamiento de elementos en una estructura HTML"
			},
			{
				image: "build/img/project4",
				link: "https://prismatic-sundae-1122ff.netlify.app",
				description: "Landing-Page donde de muestro las habilidades en el maquetado y posicionamiento de elementos en una estructura HTML"
			},
			{
				image: "build/img/project5",
				link: "https://helpful-kringle-564286.netlify.app",
				description: "Landing-Page donde de muestro las habilidades en el maquetado y posicionamiento de elementos en una estructura HTML"
			},
			{
				image: "build/img/project6",
				link: "https://jazzy-crostata-268595.netlify.app",
				description: "Landing-Page donde de muestro las habilidades en el maquetado y posicionamiento de elementos en una estructura HTML"
			},
			{
				image: "build/img/project7",
				link: "https://66689f3ae7e06529577b7eb5--glittering-lily-4c830d.netlify.app/",
				description: "Sitio donde consumo el API de Marvel con el framework React.js junto con TypeScript, uso zustand para manejar el estado de la aplicación, tambien me ayudo de zod para formatear los datos que vienen por la API."
			}
		];
	let templateItem;
	dataForProjects.forEach(function(project){
		projectsInformation.innerHTML += `
			<div class="information-works__work">
				<picture class="information-works__work-image">
					<source srcset="${project.image}.avif" type="image/avif">
					<source srcset="${project.image}.webp" type="image/webp">
					<img lazy="loadding" width="200" height="300" src="${project.image}.jpg" alt="Imagen de Proyecto 1" type="image/jpeg">
				</picture>
				<div class="information-works__work-content">
					<a href="${project.link}" class="information-works__work-content-link" target="_black">${project.link}</a>
					<p class="information-works__work-content-description">${project.description}</p>
					<p class="information-works__work-content-tags">HTML5, CSS3, Responsive Design</p>
				</div>
			</div>
		`;
	})
})(console.log, document);
