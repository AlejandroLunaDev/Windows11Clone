const iconsearch = () => {
    const inputsearch = document.getElementById('inputSearch');
    const suggestionsDiv = document.getElementById('suggestions');
    const clearButton = document.getElementById('clearButton');

    const saveKeyword = (keyword) => {
        let keywords = JSON.parse(localStorage.getItem('keywords')) || [];
        if (!keywords.includes(keyword)) {
            keywords.unshift(keyword);
            localStorage.setItem('keywords', JSON.stringify(keywords));
        }
    };


    const loadSuggestions = () => {
        const keywords = JSON.parse(localStorage.getItem('keywords')) || [];
        suggestionsDiv.innerHTML = '';

        keywords.forEach(keyword => {
            const suggestion = document.createElement('div');
            suggestion.textContent = keyword;
            suggestion.classList.add('suggestion');

            suggestion.addEventListener('click', () => {
                inputsearch.value = keyword;
                suggestionsDiv.innerHTML = '';
            });

            
            const clonedClearButton = clearButton.cloneNode(true);
            clonedClearButton.style.display = 'inline-block'; 
            clonedClearButton.addEventListener('click', () => {
                removeKeyword(keyword);
            });

            suggestion.appendChild(clonedClearButton);

            suggestionsDiv.appendChild(suggestion);
        });

    };

    const removeKeyword = (keywordToRemove) => {
        let keywords = JSON.parse(localStorage.getItem('keywords')) || [];
        keywords = keywords.filter(item => item !== keywordToRemove);
        localStorage.setItem('keywords', JSON.stringify(keywords));
        loadSuggestions();
    };

    const showSuggestions = () => {
        loadSuggestions();
        suggestionsDiv.style.display = 'block';
    };

    const hideSuggestions = () => {
        suggestionsDiv.style.display = 'none';
    };

    inputsearch.addEventListener('input', () => {});

    inputsearch.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const query = inputsearch.value.toLowerCase();
            saveKeyword(query);
        }
    });

    inputsearch.addEventListener('focus', showSuggestions);
    document.addEventListener('click', (event) => {
        const isClickInsideSuggestions = suggestionsDiv.contains(event.target);
        const isClickInsideInputSearch = inputsearch.contains(event.target);
        
        if (!isClickInsideSuggestions && !isClickInsideInputSearch) {
            hideSuggestions();
        }
    });
};

export { iconsearch };
