const skillsGrid = document.getElementById("skills-grid");

function createCards(skills) {
    skillsGrid.innerHTML = '';

    skills.forEach(skill => {
        const card = document.createElement("div");
        card.classList.add("card", "bg-gray-700", "p-4", "rounded-lg", "border-0", "relative", "group", "overflow-visible");

        switch (skill.category) {
            case "Langages":
                card.classList.add("border-b-4", "border-b-red-400");
                break;
            case "Web":
                card.classList.add("border-b-4", "border-b-blue-400");
                break;
            case "Data":
                card.classList.add("border-b-4", "border-b-yellow-400");
                break;
            case "DevOps":
                card.classList.add("border-b-4", "border-b-purple-400");
                break;
            case "Others":
                card.classList.add("border-b-4", "border-b-zinc-400");
                break;
        }

        // A AJOUTER EN DESSOUS
        // <div class="absolute top-[-20px] w-1/2 left-3/4 transform -translate-x-1/2 bg-gray-900 text-white text-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        //         ${skill.description || "Description non disponible"}
        // </div>

        const cardContent = `
            <div class="flex items-center">
                <img src="${skill.logo}" alt="Logo ${skill.name}" class="w-8 h-8 mr-4">
                <h3 class="text-xl font-semibold">${skill.name}</h3>
            </div>
        `;

        card.innerHTML = cardContent;

        skillsGrid.appendChild(card);
    });
}

createCards(skillsData);

const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = button.getAttribute('data-category');
        
        // Filtrer les compétences
        if (category === "All") {
            createCards(skillsData);
        } else {
            const filteredSkills = skillsData.filter(skill => skill.category === category);
            createCards(filteredSkills);
        }

        filterButtons.forEach(btn => {
            btn.classList.remove('border-b-4', 'bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400', 'bg-zinc-400', 'bg-red-400/20', 'bg-blue-400/20', 'bg-yellow-400/20', 'bg-purple-400/20', 'bg-zinc-400/20');
            btn.classList.remove('bg-red-400/20', 'bg-blue-400/20', 'bg-yellow-400/20', 'bg-purple-400/20', 'bg-zinc-400/20');
            btn.classList.remove('hover:bg-red-400/20', 'bg-blue-400/20', 'bg-yellow-400/20', 'bg-purple-400/20', 'bg-zinc-400/20');
            btn.classList.remove('hover:bg-gray-600', 'hover:bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400', 'bg-zinc-400');
            btn.classList.add('bg-gray-700');
        });

        button.classList.add(`border-b-4`, `border-${category === "Langages" ? "red" : category === "Web" ? "blue" : category === "Data" ? "yellow" : category === "DevOps" ? "purple" : "zinc"}-400`);
        button.classList.add(`bg-${category === "Langages" ? "red" : category === "Web" ? "blue" : category === "Data" ? "yellow" : category === "DevOps" ? "purple" : "zinc"}-400/20`);
        button.classList.add(`hover:bg-${category === "Langages" ? "red" : category === "Web" ? "blue" : category === "Data" ? "yellow" : category === "DevOps" ? "purple" : "zinc"}-400/20`);
    });
});