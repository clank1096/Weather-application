function vaihdaKaupunki(KaupunginNimi) { 
    
    let apiUrl = '';
    let taustaKuvat = './Images/sunny.jpg';
    
    switch (KaupunginNimi) {
      case 'Helsinki':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=60.1695&longitude=24.9354&hourly=temperature_2m';
        taustaKuvat = "./Images/helsinki.png";
        break;
      case 'Vaasa':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=63.096&longitude=21.6158&hourly=temperature_2m';
        taustaKuvat = "./Images/Vaasa.png";
        break;
      case 'Laihia':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=62.9761&longitude=22.0114&hourly=temperature_2m';
        taustaKuvat = "./Images/Laihia.png"; //Olisipa parempia kuvia....
        break;
        case 'Seinäjoki':
        apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=62.7945&longitude=22.8282&hourly=temperature_2m';
        taustaKuvat = "./Images/Seinäjoki.png";
        break; 
    }
  

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        const locationElement = document.getElementById('kaupunki'); 
        const temperatureElement = document.getElementById('celcius'); 
        
        
        locationElement.textContent = KaupunginNimi; 
        temperatureElement.textContent = 'Kaupungin nykyinen sää on: ' + data.hourly.temperature_2m[0]+ '°C'; 
        
        //tausta kuva
        document.body.style.backgroundImage = `url(${taustaKuvat})`; // <---- hakkasin päätä ton kanssa kuulemma ei saa käyttää ' vaan joutuu käyttää jotai ` -.-
        
      });
  }


  