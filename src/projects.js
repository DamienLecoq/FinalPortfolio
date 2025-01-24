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

const buttons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('#skills-grid .card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        cards.forEach(card => {
            if (category === 'All' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


const cardsContainer = document.getElementById('cards-container');
secondaryProjects.style.display = 'none';
const showProjectButton = document.getElementById('ShowProjectButton');

function createCard(project, isSecondary = false) {
  const card = document.createElement('div');
  card.classList.add('card', 'bg-gray-700', 'rounded-lg', 'overflow-hidden', 'cursor-pointer');

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
    description.classList.add('text-sm');
    description.textContent = project.shortDescription;
    cardBody.appendChild(description);
  }
  cardBody.appendChild(skillsContainer);
  card.appendChild(img);
  card.appendChild(cardBody);

  card.addEventListener('click', () => openPopup(project)); 

  return card;
}

projects.slice(0, 3).forEach(project => {
  const card = createCard(project);
  cardsContainer.appendChild(card);
});

projects.slice(3).forEach(project => {
  const card = createCard(project, true);
  secondaryProjects.appendChild(card);
});



showProjectButton.addEventListener('click', () => {
    if (secondaryProjects.style.display === 'none' || secondaryProjects.style.display === '') {
      secondaryProjects.style.display = 'grid';
      showProjectButton.textContent = 'Cacher les projets';
    } else {
      secondaryProjects.style.display = 'none';
      showProjectButton.textContent = 'Tous les projets';
    }
});

const mainPage = document.getElementById("Main-Page");

function openPopup(project) {
    const popup = document.createElement('div');
    popup.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'z-50');
    
    const popupContent = document.createElement('div');
    popupContent.classList.add('bg-gray-700', 'rounded-lg', 'shadow-lg', 'max-w-screen-md', 'w-full', 'relative');

    
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;
    img.classList.add('w-full', 'h-64', 'object-cover', 'rounded-t-lg', 'm-0');
    
    const title = document.createElement('h3');
    title.classList.add('text-xl', 'px-8', 'font-semibold', 'mt-4', 'text-center', 'text-white', 'break-words');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.classList.add('mt-2', 'px-8', 'text-center', 'text-white', 'break-words', 'whitespace-normal');
    description.textContent = project.description;
  
    const date = document.createElement('p');
    date.classList.add('absolute', 'bottom-4', 'left-4', 'text-gray-400', 'text-sm');
    date.textContent = `Date: ${project.date}`;
  
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
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('absolute', 'top-2', 'right-2', 'bg-red-700', 'text-zinc-200', 'px-3.5', 'py-2', 'rounded-full', 'hover:bg-red-900');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeButton.addEventListener('click', () => {
      popup.remove();
      mainPage.classList.remove('blurred');
    });
  
    popupContent.appendChild(img);
    popupContent.appendChild(title);
    popupContent.appendChild(description);
    popupContent.appendChild(date);
    popupContent.appendChild(skillsContainer);
    popupContent.appendChild(closeButton);
    
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  
    mainPage.classList.add('blurred');
  }