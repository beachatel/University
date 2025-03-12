function createWeatherDivs() {
    const properties = ['Temperature', 'Humidity', 'Pressure', 'Description'];
    const container = document.getElementById("weather-container");
    
    properties.forEach(prop => {
        let div = document.createElement("div");
        div.id = prop.toLowerCase();
        div.className = "weather-item";
        let label = document.createElement("h3");
        label.textContent = prop;
        div.appendChild(label);
        
        container.appendChild(div);
    });
}

async function getWeather(lat, lon) {
    const apiKey = "f3197b3f38232df23ab06ee431134ced";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById("temperature").innerHTML += `<p>${data.main.temp}°C</p>`;
        document.getElementById("humidity").innerHTML += `<p>${data.main.humidity}%</p>`;
        document.getElementById("pressure").innerHTML += `<p>${data.main.pressure} hPa</p>`;
        document.getElementById("description").innerHTML += `<p>${data.weather[0].description}</p>`;
        
        new p5(TemperatureSketch, 'temperature');
        new p5(HumiditySketch, 'humidity');
        new p5(PressureSketch, 'pressure');
        new p5(DescriptionSketch, 'description');
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

let TemperatureSketch = function(p) {
    p.setup = function() {
        p.createCanvas(200, 140);
    };
    p.draw = function() {
        p.background(255, 0, 0);
        p.fill(255);
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Temp", p.width / 2, p.height / 2);
    };
};

let HumiditySketch = function(p) {
    p.setup = function() {
        p.createCanvas(200, 140);
    };
    p.draw = function() {
        p.background(0, 0, 255);
        p.fill(255);
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Humidity", p.width / 2, p.height / 2);
    };
};

let PressureSketch = function(p) {
    p.setup = function() {
        p.createCanvas(200, 140);
    };
    p.draw = function() {
        p.background(0, 255, 0);
        p.fill(0);
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Pressure", p.width / 2, p.height / 2);
    };
};

let DescriptionSketch = function(p) {
    p.setup = function() {
        p.createCanvas(200, 140);
    };
    p.draw = function() {
        p.background(200, 100, 255);
        p.fill(255);
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Desc", p.width / 2, p.height / 2);
    };
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            createWeatherDivs();
            getWeather(latitude, longitude);
        },
        (error) => console.error("Geolocation error:", error)
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}

