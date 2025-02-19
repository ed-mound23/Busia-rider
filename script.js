document.addEventListener("DOMContentLoaded", function() {
    let map;
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 0.4647, lng: 34.1116 }, // Centered in Busia
            zoom: 13
        });
    }
    window.initMap = initMap;
});
