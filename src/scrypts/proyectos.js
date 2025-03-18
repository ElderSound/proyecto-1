const project_card = document.querySelector("#card_container");

const projects = [
  {
    title: "Proyecto Uno",
    description:
      "Una web simple donde los usuarios pueden buscar y ver recetas fáciles de preparar, con ingredientes y pasos detallados.",
    image: "../images/image1.jpeg",
  },
  {
    title: "Proyecto Dos",
    description:
      "Una aplicación donde los usuarios pueden agregar, marcar como completadas y eliminar tareas pendientes de manera sencilla.",
    image: "../images/image2.jpg",
  },
  {
    title: "Proyecto Tres",
    description:
      "Un sitio web que muestra una colección de imágenes organizadas en una cuadrícula adaptable, con la opción de ver cada imagen en tamaño completo.",
    image: "../images/image4.jpg",
  },
  {
    title: "Proyecto Cuatro",
    description:
      "A simple website to showcase your skills, work, and achievements. Perfect for developers or creatives looking to present their portfolio online.",
    image: "../images/image4.jpg",
  },
  {
    title: "Proyecto Cinco",
    description:
      "A platform where users can share and explore their favorite recipes. Includes options to upload photos, ingredients, and step-by-step instructions.",
    image: "../images/image4.jpg",
  },
  {
    title: "Proyecto Seis",
    description:
      "A user-friendly task manager that helps you organize your day-to-day activities. Users can add, edit, and mark tasks as complete, ensuring productivity is easy to track",
    image: "../images/image4.jpg",
  },
];

function loadProjectCard(items, element) {
  element.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const project = items[i];
    const template = `
        <div class=" overflow-hidden  rounded-md border border-gray-800 
          ring-1 ring-gray-500 cursor-pointer 
          w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 bg-[var(--color-deepBlue)] transition-all duration-300 
          md:hover:translate-y-1  active:translate-y-1 md:mb-7">
          <figure class=" h-30 md:h-auto w-full aspect-square overflow-hidden pt-5 ">
            <img src="${project.image}" alt="${project.title}" class=" h-full w-full object-cover transition-transform duration-300 md:hover:scale-105">
          </figure>
          <div aria-label="card content" class="px-4 pt-2 pb-4  flex flex-col gap-2 border-gray-300 text-gray-400">
            <h3 class="text-xl text-white">${project.title}</h3>
            <p class="text-xs">${project.description}</p>
          </div>
        </div>`;
    element.innerHTML += template;
  }
}

loadProjectCard(projects, project_card);
