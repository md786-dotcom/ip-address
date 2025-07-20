const API_KEY = 'at_5AALHhDKt45dT8MtPosR2kLwjN6oa';
let map;
let marker;

async function initApp() {
    initMap();
    
    await trackCurrentIP();
    
    document.getElementById('search-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = document.getElementById('search-input').value.trim();
        if (input) {
            await searchIPOrDomain(input);
        }
    });
}

function initMap() {
    map = L.map('map', {
        zoomControl: false
    }).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
}

async function trackCurrentIP() {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
        const data = await response.json();
        updateUI(data);
        updateMap(data.location.lat, data.location.lng);
    } catch (error) {
        console.error('Error fetching current IP data:', error);
        alert('Failed to fetch your IP information. Please check your API key.');
    }
}

async function searchIPOrDomain(query) {
    try {
        const isIP = /^(\d{1,3}\.){3}\d{1,3}$/.test(query);
        const url = isIP 
            ? `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
            : `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${query}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Invalid IP address or domain');
        }
        
        const data = await response.json();
        updateUI(data);
        updateMap(data.location.lat, data.location.lng);
    } catch (error) {
        console.error('Error searching:', error);
        alert('Invalid IP address or domain. Please try again.');
    }
}

function updateUI(data) {
    document.getElementById('ip-address').textContent = data.ip;
    document.getElementById('location').textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    document.getElementById('timezone').textContent = `UTC ${data.location.timezone}`;
    document.getElementById('isp').textContent = data.isp;
}

function updateMap(lat, lng) {
    const customIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [46, 56],
        iconAnchor: [23, 56]
    });

    if (marker) {
        map.removeLayer(marker);
    }

    marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    map.setView([lat, lng], 13);
}

document.addEventListener('DOMContentLoaded', initApp);