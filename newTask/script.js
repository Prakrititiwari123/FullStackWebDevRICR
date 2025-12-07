// ---------------- LOCATION DATABASE --------------------
const locations = {
    "delhi": { x: 47, y: 32, type: "Capital" },
    "new delhi": { x: 47, y: 32, type: "Capital" },
    "mumbai": { x: 31, y: 72, type: "City" },
    "pune": { x: 33, y: 74, type: "City" },
    "nagpur": { x: 41, y: 65, type: "City" },
    "kolkata": { x: 78, y: 45, type: "City" },
    "chennai": { x: 57, y: 87, type: "City" },
    "bangalore": { x: 49, y: 82, type: "City" },
    "hyderabad": { x: 45, y: 70, type: "City" },
    "ahmedabad": { x: 25, y: 55, type: "City" },
    "jaipur": { x: 38, y: 40, type: "City" },
    "lucknow": { x: 55, y: 38, type: "City" },
    "patna": { x: 68, y: 39, type: "City" },

    // STATES (centre points)
    "rajasthan": { x: 35, y: 40, type: "State" },
    "gujarat": { x: 26, y: 56, type: "State" },
    "maharashtra": { x: 35, y: 65, type: "State" },
    "kerala": { x: 45, y: 93, type: "State" },
    "tamil nadu": { x: 57, y: 92, type: "State" },
    "karnataka": { x: 48, y: 78, type: "State" },
    "andhra pradesh": { x: 60, y: 75, type: "State" },
    "telangana": { x: 47, y: 68, type: "State" },
    "uttar pradesh": { x: 55, y: 35, type: "State" },
    "bihar": { x: 68, y: 37, type: "State" },
    "west bengal": { x: 76, y: 48, type: "State" },
    "punjab": { x: 40, y: 27, type: "State" },
    "haryana": { x: 45, y: 30, type: "State" },
    "mp": { x: 45, y: 55, type: "State" },
    "madhya pradesh": { x: 45, y: 55, type: "State" },
    "jharkhand": { x: 65, y: 45, type: "State" },
    "odisha": { x: 70, y: 60, type: "State" },
    "chhattisgarh": { x: 55, y: 55, type: "State" },
    "assam": { x: 85, y: 32, type: "State" },
    "meghalaya": { x: 83, y: 40, type: "State" },
    "tripura": { x: 88, y: 48, type: "State" },
    "manipur": { x: 90, y: 36, type: "State" },
    "mizoram": { x: 88, y: 45, type: "State" },
    "nagaland": { x: 92, y: 32, type: "State" },
    "arunachal pradesh": { x: 90, y: 28, type: "State" }
};


// ---------------- ELEMENTS --------------------
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const flagContainer = document.getElementById("flagContainer");
const locationInfo = document.getElementById("locationInfo");
const recentSearches = document.getElementById("recentSearches");

let scale = 1;
const mapImage = document.getElementById("mapImage");
const indiaMap = document.getElementById("indiaMap");


// ---------------- PLACE FLAG FUNCTION --------------------
function placeFlag(name, x, y, type) {
    const flag = document.createElement("div");
    flag.className = "flag-marker";
    flag.innerHTML = `<i class="fas fa-location-pin"></i>`;
    flag.style.left = x + "%";
    flag.style.top = y + "%";
    flag.setAttribute("data-location", name);

    flagContainer.appendChild(flag);

    updateInfoPanel(name, type, x, y);
    addRecentSearch(name);
}


// ---------------- SEARCH HANDLER --------------------
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    if (locations[query]) {
        const loc = locations[query];
        placeFlag(capitalize(query), loc.x, loc.y, loc.type);
    } else {
        alert("Location not found! Please try a known Indian state or city.");
    }
}

searchBtn.addEventListener("click", handleSearch);

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleSearch();
});


// ---------------- CLEAR FLAG BUTTON --------------------
clearBtn.addEventListener("click", () => {
    flagContainer.innerHTML = "";
    locationInfo.innerHTML = `<p class="no-location">No flag placed yet. Search for a location!</p>`;
});


// ---------------- INFO PANEL --------------------
function updateInfoPanel(name, type, x, y) {
    locationInfo.innerHTML = `
        <div class="location-details">
            <div class="location-name">${name}</div>
            <div class="location-type">${type}</div>
            <div class="location-coordinates">X: ${x}%, Y: ${y}%</div>
        </div>
    `;
}


// ---------------- RECENT SEARCHES --------------------
function addRecentSearch(name) {
    if (recentSearches.querySelector(".no-recent")) {
        recentSearches.innerHTML = "";
    }

    const item = document.createElement("div");
    item.className = "recent-item";
    item.innerHTML = `
        <span class="recent-name">${name}</span>
        <span class="recent-time">${new Date().toLocaleTimeString()}</span>
    `;

    item.addEventListener("click", () => {
        const q = name.toLowerCase();
        const loc = locations[q];
        placeFlag(name, loc.x, loc.y, loc.type);
    });

    recentSearches.prepend(item);
}


// ---------------- QUICK STATE BUTTONS --------------------
const stateButtons = document.getElementById("stateButtons");
Object.keys(locations).forEach(name => {
    const btn = document.createElement("button");
    btn.className = "state-btn";
    btn.textContent = capitalize(name);
    btn.addEventListener("click", () => {
        const loc = locations[name];
        placeFlag(capitalize(name), loc.x, loc.y, loc.type);
    });
    stateButtons.appendChild(btn);
});


// ---------------- ZOOM CONTROLS --------------------
document.getElementById("zoomIn").addEventListener("click", () => {
    scale += 0.2;
    updateZoom();
});
document.getElementById("zoomOut").addEventListener("click", () => {
    if (scale > 0.4) scale -= 0.2;
    updateZoom();
});
document.getElementById("resetZoom").addEventListener("click", () => {
    scale = 1;
    updateZoom();
});

function updateZoom() {
    mapImage.style.transform = `scale(${scale})`;
    flagContainer.style.transform = `scale(${scale})`;
}


// ---------------- HELPER --------------------
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
