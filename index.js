function updateMap() {
    console.log("Updating map with realtime data");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                casesInfected = element.infected;
                if (casesInfected > 255) {
                    color = "rgb(255, 0, 0)";
                }
                else {
                    color = `rgb(${casesInfected}, 0, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([ longitude, latitude ])
                    .addTo(map);
            });
        })
}

let interval = 20000;
setInterval(updateMap(), interval);
// updateMap();