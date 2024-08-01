document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '4d543cd724cf3d0bfb40b745ad66cf50';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('cityName').innerText = data.name;
          document.getElementById('temperature').innerText = data.main.temp;
          document.getElementById('humidity').innerText = data.main.humidity;
          document.getElementById('windSpeed').innerText = data.wind.speed;
  
          document.getElementById('weatherResult').classList.remove('d-none');
        } else {
          alert('City not found. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again.');
      });
  });
  