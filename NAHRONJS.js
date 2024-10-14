// Elements
const display = document.getElementById('display');
const tempSlider = document.getElementById('temp-slider');
const currentTemp = document.getElementById('current-temp');
const seatHeatToggle = document.getElementById('seat-heat-toggle');
const bluetoothToggle = document.getElementById('bluetooth-toggle');
const nowPlaying = document.getElementById('now-playing');
const climateScreen = document.getElementById('climate-screen');
const settingsScreen = document.getElementById('settings-screen');
const musicScreen = document.getElementById('music-screen');
const menuScreen = document.getElementById('menu-screen');


const climateBtn = document.getElementById('climate-btn');
const settingsBtn = document.getElementById('settings-btn');
const musicBtn = document.getElementById('music-btn');
const navBtn = document.getElementById('nav-btn');


// Hide all screens initially
function hideAllScreens() {
  document.querySelectorAll('.menu-screen').forEach(screen => {
    screen.style.display = 'none'; // Hide all screens
  });
  display.style.display = 'none'; // Hide the default display area when switching screens
}


// Function to show selected screen and update display
function showScreen(screenId) {
  hideAllScreens(); // Hide all screens first
  if (screenId === 'menu-screen') {
    menuScreen.style.display = 'flex'; // Show the main menu
    display.style.display = 'block'; // Show the default display area
    display.innerHTML = 'Select an option from the menu.';
  } else {
    document.getElementById(screenId).style.display = 'block'; // Show the selected screen
  }
}


// Initial screen setup
showScreen('menu-screen');


// Event Listeners for menu buttons
climateBtn.addEventListener('click', () => {
  showScreen('climate-screen');
});


settingsBtn.addEventListener('click', () => {
  showScreen('settings-screen');
});


musicBtn.addEventListener('click', () => {
  showScreen('music-screen');
  nowPlaying.textContent = "Now Playing: Song 1"; // Default song info
});


navBtn.addEventListener('click', () => {
  // Show the navigation screen (assuming it's climate-screen)
  showScreen('climate-screen'); // Fix: Use climate-screen
  initMap();let map;


  function initMap() {
      // Create a new map centered at a specific latitude and longitude
      map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 37.7749, lng: -122.4194 }, // Example coordinates (San Francisco)
          zoom: 12, // Zoom level
      });
  }
 
  // Event Listener for Navigation Button
  navBtn.addEventListener('click', () => {
      showScreen(navScreen); // Show the navigation screen
      initMap(); // Initialize the map when navigation screen is opened
  });
 
});


// Temperature Slider Event
tempSlider.addEventListener('input', () => {
  const tempValue = tempSlider.value;
  currentTemp.textContent = `${tempValue}°F`; // Update temperature display
});


// Seat Heating Toggle
seatHeatToggle.addEventListener('click', () => {
  seatHeatToggle.textContent = seatHeatToggle.textContent === 'OFF' ? 'ON' : 'OFF';
});


// Bluetooth Toggle
bluetoothToggle.addEventListener('click', () => {
  bluetoothToggle.textContent = bluetoothToggle.textContent === 'OFF' ? 'ON' : 'OFF';
});
