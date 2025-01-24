const skillsGrid = document.getElementById("skills-grid");

function createCards(skills) {
    skillsGrid.innerHTML = '';

    skills.forEach(skill => {
        const card = document.createElement("div");
        card.classList.add("card", "bg-gray-700", "p-4", "rounded-lg", "border-0");

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
        
        if (category === "All") {
            createCards(skillsData);
        } else {
            const filteredSkills = skillsData.filter(skill => skill.category === category);
            createCards(filteredSkills);
        }

        filterButtons.forEach(btn => btn.classList.remove('border-b-4', 'border-blue-400', 'border-red-400', 'border-yellow-400', 'border-purple-400', 'border-zinc-400'));
        button.classList.add(`border-b-4`, `border-${category === "Langages" ? "red" : category === "Web" ? "blue" : category === "Data" ? "yellow" : category === "DevOps" ? "purple" : "zinc"}-400`);
    });
});