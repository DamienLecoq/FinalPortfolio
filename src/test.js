// Header scroll effect
let lastTopScroll = 0;
const navbar = document.getElementById("NavBar");
console.log(navbar);
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastTopScroll){
    navbar.style.top="-60px";
    } else {
    navbar.style.top="0";
    }
    lastTopScroll = scrollTop;
})

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 5000);
});

// Toggle secondary projects
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('ShowProjectButton');
    const secondaryProjects = document.getElementById('secondary-projects');

    toggleButton.addEventListener('click', () => {
        if (secondaryProjects.classList.contains('hidden')) {
            secondaryProjects.classList.remove('hidden');
            toggleButton.textContent = 'Tous les projets';
        } else {
            secondaryProjects.classList.add('hidden');
            toggleButton.textContent = 'Cacher les projets';
        }
    });
});

const buttons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('#skills-grid .card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        cards.forEach(card => {
            if (category === 'All' || card.getAttribute('data-category') === category) {
                card.style.display = 'block'; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });
    });
});


const cardsContainer = document.getElementById('cards-container');
const secondaryProjects = document.getElementById('secondary-projects');
secondaryProjects.style.display = 'none';
const showProjectButton = document.getElementById('ShowProjectButton');

// Fonction pour générer une carte
function createCard(project, isSecondary = false) {
  const card = document.createElement('div');
  card.classList.add('card', 'bg-gray-700', 'rounded-lg', 'overflow-hidden');

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  img.classList.add('card-banner');

  const cardBody = document.createElement('div');
  cardBody.classList.add('p-4');

  const title = document.createElement('h3');
  title.classList.add('text-lg', 'font-semibold');
  title.textContent = project.title;

  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('mt-4', 'flex', 'flex-wrap', 'gap-2');
  project.skills.forEach(skill => {
    const skillTag = document.createElement('span');
    skillTag.classList.add('bg-gray-600', 'px-2', 'py-1', 'rounded', 'flex', 'items-center');
    
    const skillLogo = document.createElement('img');
    skillLogo.src = skill.logo;
    skillLogo.alt = `Logo ${skill.name}`;
    skillLogo.classList.add('w-4', 'h-4', 'mr-2');
    
    skillTag.appendChild(skillLogo);
    skillTag.appendChild(document.createTextNode(skill.name));
    skillsContainer.appendChild(skillTag);
  });

  cardBody.appendChild(title);
  if (!isSecondary){
    const description = document.createElement('p');
    description.classList.add('mt-2');
    description.textContent = project.littleDescription;
    cardBody.appendChild(description);
  }
  cardBody.appendChild(skillsContainer);
  card.appendChild(img);
  card.appendChild(cardBody);

  // Ajoute un event listener pour ouvrir le pop-up au clic
  card.addEventListener('click', () => openPopup(project)); 

  return card;
}

// Affichage des projets principaux dans le container principal
projects.slice(0, 3).forEach(project => {
  const card = createCard(project);
  cardsContainer.appendChild(card);
});

// Affichage des projets secondaires dans secondary-projects
projects.slice(3).forEach(project => {
  const card = createCard(project, true);  // Passe 'true' pour les cartes secondaires
  secondaryProjects.appendChild(card);
});



showProjectButton.addEventListener('click', () => {
    if (secondaryProjects.style.display === 'none' || secondaryProjects.style.display === '') {
      secondaryProjects.style.display = 'grid';
      showProjectButton.textContent = 'Tous les projets';
    } else {
      secondaryProjects.style.display = 'none';
      showProjectButton.textContent = 'Cacher les projets';
    }
});

const mainPage = document.getElementById("Main-Page");

// Fonction pour ouvrir le pop-up
function openPopup(project) {
    // Création du pop-up
    const popup = document.createElement('div');
    popup.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'z-50');
    
    // Création du contenu du pop-up
    const popupContent = document.createElement('div');
    popupContent.classList.add('bg-gray-700', 'rounded-lg', 'shadow-lg', 'max-w-screen-md', 'w-full', 'relative');

    
    // Image en bannière
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    img.classList.add('w-full', 'h-64', 'object-cover', 'rounded-t-lg', 'm-0');
    
    // Titre du projet
    const title = document.createElement('h3');
    title.classList.add('text-xl', 'px-8', 'font-semibold', 'mt-4', 'text-center', 'text-white', 'break-words');
    title.textContent = project.title;
    
    // Description du projet
    const description = document.createElement('p');
    description.classList.add('mt-2', 'px-8', 'text-center', 'text-white', 'break-words', 'whitespace-normal');
    description.textContent = project.description;
  
    // Date en bas à gauche
    const date = document.createElement('p');
    date.classList.add('absolute', 'bottom-4', 'left-4', 'text-gray-400', 'text-sm');
    date.textContent = `Date: ${project.date}`;
  
    // Compétences
    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('mt-4', 'flex', 'justify-center', 'gap-4');
    project.skills.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.classList.add('bg-gray-600', 'px-2', 'py-1', 'mb-8', 'rounded', 'flex', 'items-center');
      
      const skillLogo = document.createElement('img');
      skillLogo.src = skill.logo;
      skillLogo.alt = `Logo ${skill.name}`;
      skillLogo.classList.add('w-4', 'h-4', 'mr-2');
      
      skillTag.appendChild(skillLogo);
      skillTag.appendChild(document.createTextNode(skill.name));
      skillsContainer.appendChild(skillTag);
    });
  
    // Bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.classList.add('absolute', 'top-2', 'right-2', 'bg-red-700', 'text-zinc-200', 'px-3.5', 'py-2', 'rounded-full', 'hover:bg-red-900');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeButton.addEventListener('click', () => {
      popup.remove();
      mainPage.classList.remove('blurred');
    });
  
    // Assemblage du contenu dans le pop-up
    popupContent.appendChild(img);
    popupContent.appendChild(title);
    popupContent.appendChild(description);
    popupContent.appendChild(date);
    popupContent.appendChild(skillsContainer);
    popupContent.appendChild(closeButton);
    
    // Ajouter le pop-up au body
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  
    // Appliquer le flou à la page principale
    mainPage.classList.add('blurred');
  }