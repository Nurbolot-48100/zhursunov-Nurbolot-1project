// const container = document.getElementById('characters-container');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const pageNumber = document.getElementById('page-number');

// let currentPage = 1;
// let totalPages = 1;

// function fetchCharacters(page = 1) {
//   fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
//     .then(res => res.json())
//     .then(data => {
//       totalPages = data.info.pages;
//       renderCharacters(data.results);
//       updatePagination();
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//       container.innerHTML = '<p>Failed to load characters.</p>';
//     });
// }

// function renderCharacters(characters) {
//   container.innerHTML = ''; 
//   characters.forEach(character => {
//     const card = document.createElement('div');
//     card.classList.add('character-card');
//     card.innerHTML = `
//       <h3>${character.name}</h3>
//       <img src="${character.image}" alt="${character.name}" />
//       <p>Status: ${character.status}</p>
//       <p>Species: ${character.species}</p>
//     `;
//     container.appendChild(card);
//   });
// }

// function updatePagination() {
//   pageNumber.textContent = currentPage;
//   prevBtn.disabled = currentPage === 1;
//   nextBtn.disabled = currentPage === totalPages;
// }

// prevBtn.addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     fetchCharacters(currentPage);
//   }
// });

// nextBtn.addEventListener('click', () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     fetchCharacters(currentPage);
//   }
// });

// fetchCharacters(currentPage);

// https://rickandmortyapi.com/api/character?page=${page}



 
const container = document.getElementById('characters-container');
let currentPage = 1; 
let totalPages = 1; 

function fetchCharacters(page) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => res.json())
        .then(data => {
            container.innerHTML = ''; 
            data.results.forEach(character => {
                const card = document.createElement('div');
                card.classList.add('character-card');
                card.innerHTML = `
                    <h3>${character.name}</h3>
                    <img src="${character.image}" alt="${character.name}" />
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                `;
                container.appendChild(card);
            });
            totalPages = data.info.pages;
            updatePagination(); 
        });
}

function updatePagination() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageNumber = document.getElementById('page-number');

    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;

    prevButton.disabled = currentPage === 1;

    nextButton.disabled = currentPage === totalPages;
}

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchCharacters(currentPage);
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage);
    }
});

fetchCharacters(currentPage);
