const skill_card = document.querySelector("#skills_container");
const AddSkill_card = document.querySelector("#add_skills");
const menuToggle = document.querySelector("#menu-toggle");
const menuMobile = document.querySelector("#menu-mobile");

const skills = [
  {
    title: "HTML",
    image: "./src/icons/html.png",
  },
  {
    title: "CSS",
    image: "./src/icons/css.png",
  },
  {
    title: "Java Script",
    image: "./src/icons/js1.png",
  },
  {
    title: "Python",
    image: "./src/icons/Python.png",
  },
  {
    title: "C SharpL",
    image: "./src/icons/Csharp_Logo.png",
  },
  {
    title: "Sass",
    image: "./src/icons/Sass_Logo.png",
  },
  {
    title: "Bootstrap",
    image: "./src/icons/Bootstrap_logo.png",
  },
  {
    title: "TailWind",
    image: "./src/icons/Tailwind_CSS_Logo.png",
  },
  {
    title: "Node JS",
    image: "./src/icons/node.png",
  },
  {
    title: "React",
    image: "./src/icons/React.svg.png",
  },
];

const addSkills = [
  {
    title: "Google",
    image: "./src/icons/google.png",
  },
  {
    title: "AWS",
    image: "./src/icons/aws-w.png",
  },
  {
    title: "Ilustrador",
    image: "./src/icons/Illustrator-Logo.png",
  },
  {
    title: "Photo Shop",
    image: "./src/icons/ps.png",
  },
  {
    title: "WordPress",
    image: "./src/icons/wp.png",
  },
  {
    title: "Logic",
    image: "./src/icons/logic.png",
  },
];
function loadSkillCard(items, element) {
  element.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const skill = items[i];
    const template = `
          <div class="w-24 h-30 mb-4 lg:mb-0 bg-[var(--color-deepBlue)] 
          shadow-[6px_6px_10px_rgba(180,180,180,0.1)] border border-gray-800 
          ring-1 ring-gray-500 rounded-md flex items-center justify-center 
          transition-all duration-300 lg:hover:translate-y-1 lg:hover:shadow-md 
          active:translate-y-1 active:shadow-md px-5"><img src="${skill.image}" alt="html logo"></div>`;
    element.innerHTML += template;
  }
}

loadSkillCard(skills, skill_card);

function loadAddSkillCard(items, element) {
  element.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const aSkill = items[i];
    const template = `
          <li><img src="${aSkill.image}" alt="google logo"
            class=" w-12 h-12 transition-transform duration-300 ease-out md:hover:scale-120 active:scale-115"></li>`;
    element.innerHTML += template;
  }
}

loadAddSkillCard(addSkills, AddSkill_card);

function toggleMenu() {
  menuMobile.classList.toggle("hidden");
}

menuToggle.addEventListener("click", toggleMenu);
