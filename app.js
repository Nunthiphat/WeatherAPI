document.getElementById('city-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '4d543cd724cf3d0bfb40b745ad66cf50'; // ใช้ API Key ของคุณที่นี่
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=th`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherResult = `
                    <h2>สภาพอากาศใน ${data.name}</h2>
                    <p>อุณหภูมิ: ${data.main.temp}°C</p>
                    <p>ความชื้น: ${data.main.humidity}%</p>
                    <p>ความเร็วลม: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherResult;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>ไม่พบข้อมูลสภาพอากาศของเมือง ${city}</p>`;
            }
        })
        .catch(error => console.error('Error:', error));
});
