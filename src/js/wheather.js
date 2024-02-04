// bbea4906c7e69f7bfe1494f989efe8d9

//GEnwI-RTJLRrIRQdmdmxaqWS4mxdL1vHfoJTrzvPAVI


const tiempo = () => {
    // variables y selección de elementos
    const apiKeyWeather = 'bbea4906c7e69f7bfe1494f989efe8d9';
    const apiKeyPhoto = 'GEnwI-RTJLRrIRQdmdmxaqWS4mxdL1vHfoJTrzvPAVI';

    const cityInput = document.querySelector('#city-input');


    const cityElement = document.querySelector('#city');
    const tempElement = document.querySelector('#temperature span');
    const descElement = document.querySelector('#description');
    const weatherIconElement = document.querySelector('#wheather-icon');
    const countryElement = document.querySelector('#country');
    const humidityElement = document.querySelector('#umidity span');
    const windElement = document.querySelector('#wind span');

    const photoElement = document.querySelector('#cityPhoto');

    const weatherIconNavElement = document.getElementById('wheather-icon-nav');
    const tempNavElement = document.getElementById('temperature-nav');
    const descNavElement = document.getElementById('description-nav');

    // funciones
    const getWeatherData = async (city) => {
        try {
            const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeyWeather}&lang=es`;
            const res = await fetch(apiWeatherURL);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error al obtener datos del clima:', error);
            return null;
        }
    };

    const showWeatherData = async (city) => {
        const data = await getWeatherData(city);

        if (data) {
            cityElement.innerText = data.name;
            tempElement.innerText = `${parseInt(data.main.temp)}ºC`;
            descElement.innerText = data.weather[0].description;
            weatherIconElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            countryElement.setAttribute('src', `https://flagcdn.com/16x12/${data.sys.country.toLowerCase()}.png`);
            humidityElement.innerText = `${data.main.humidity}%`;
            windElement.innerText = `${data.wind.speed}km/h`;

            weatherIconNavElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            descNavElement.innerText = data.weather[0].description;
            tempNavElement.innerText = `${parseInt(data.main.temp)}ºC`;

            await showCityPhoto(city);
        }
    };

    const getCityPhoto = async (city) => {
        try {
            const apiPhotoURL = `https://api.unsplash.com/search/photos?query=${city}&client_id=${apiKeyPhoto}`;
            const res = await fetch(apiPhotoURL);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error al obtener datos de la foto:', error);
            return null;
        }
    };

    const showCityPhoto = async (city) => {
        const data = await getCityPhoto(city);

        if (data && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const imageUrl = data.results[randomIndex].urls.full;
            photoElement.style.backgroundImage = `url(${imageUrl})`;
        } else {
            console.error('No se encontraron imágenes para la ciudad.');
        }
    };

    const performSearch = () => {
        const city = cityInput.value.trim();
        showWeatherData(city);
    };



    cityInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    const loadInitialWeather = () => {
        const initialCity = 'Buenos Aires';
        showWeatherData(initialCity);
    };

    window.addEventListener('load', loadInitialWeather);
};

export { tiempo };
