function vaihdaKaupunki(KaupunginNimi) { 
    
    let apiUrl = '';
    
    
    switch (KaupunginNimi) {
      case 'Helsinki':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=60.1695&longitude=24.9354&hourly=temperature_2m';
        break;
      case 'Vaasa':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=63.096&longitude=21.6158&hourly=temperature_2m';
        break;
      case 'Laihia':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=62.9761&longitude=22.0114&hourly=temperature_2m';
        break;
        case 'Seinäjoki':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=62.7945&longitude=22.8282&hourly=temperature_2m';
        break; 
        
        
    
      
    }
  

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        const locationElement = document.getElementById('kaupunki'); //Parse api ja Vie datan html
        const temperatureElement = document.getElementById('celcius'); //parse api datan ja vie data html
        
        
        locationElement.textContent = KaupunginNimi; 
        temperatureElement.textContent = data.hourly.temperature_2m[0]+ '°C'; //Hakee lämpötilan ja vie sen html//
     
      });
  }
