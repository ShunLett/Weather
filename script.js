$(document).ready(function() {
    const apiKey = 'b0122570a932298272f8b884d14b1cd8'; 

    $('#city').on('change', function() {
        const city = $(this).val();
        if (city !== "ChooseCity") {
            getWeather(city);
        }
    });

    function getWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        $.getJSON(url, function(data) {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherMain = data.weather[0].main.toLowerCase();
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            $('.temperature').html(`${Math.round(temperature)}<span>°C</span>`);
            $('.description').text(capitalizeFirstLetter(weatherDescription));
            $('.humidity span').text(`${humidity}%`);
            $('.wind span').text(`${windSpeed} Km/h`);

            changeBackground(weatherMain);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        });
    }

    function changeBackground(weather) {
        let imageUrl = '';

        switch (weather) {
            case 'clear':
                imageUrl = 'images/clear.jpg';
                break;
            case 'clouds':
                imageUrl = 'images/cloud.jpg';
                break;
            case 'rain':
                imageUrl = 'images/rain.jpg';
                break;
            case 'snow':
                imageUrl = 'images/snow.jpg';
                break;
            case 'thunderstorm':
                imageUrl = 'images/thunderstorm.jpg';
                break;
            default:
                imageUrl = 'images/sky.jpg'; 
                break;
        }

        $('body').css('background-image', `url(${imageUrl})`);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
$(document).ready(function() {
    console.log("jquery is connected.");
});