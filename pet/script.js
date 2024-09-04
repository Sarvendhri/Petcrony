document.addEventListener('DOMContentLoaded', function() {
    const petList = document.getElementById('pet-list');

    const pets = [
        { name: 'Buddy', type: 'Dog', age: 3, description: 'A friendly dog who loves to play.' },
        { name: 'Mittens', type: 'Cat', age: 2, description: 'A sweet cat who loves to cuddle.' },
        { name: 'Goldie', type: 'Fish', age: 1, description: 'A beautiful fish that enjoys swimming.' }
    ];

    pets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.classList.add('pet');

        const petName = document.createElement('h3');
        petName.textContent = pet.name;

        const petType = document.createElement('p');
        petType.textContent = `Type: ${pet.type}`;

        const petAge = document.createElement('p');
        petAge.textContent = `Age: ${pet.age}`;

        const petDescription = document.createElement('p');
        petDescription.textContent = pet.description;

        petDiv.appendChild(petName);
        petDiv.appendChild(petType);
        petDiv.appendChild(petAge);
        petDiv.appendChild(petDescription);

        petList.appendChild(petDiv);
    });
});
