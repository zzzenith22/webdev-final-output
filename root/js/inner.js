fetch("assets/json/homepage.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("units-container");

    Object.values(data).forEach(unit => {

      container.innerHTML += `
        <div class="unit_one">

            <video loop muted poster="${unit.mainpic}">
                <source src="${unit.video}" type="video/mp4">
            </video>

            <p class="unitone_details">${unit.details}</p>
            <p class="name_of_unit">${unit.nameOfUnit}</p>
            <p class="unitone_description">${unit.unitDescription}</p>

            <div class="unitone_location">
                <img class="location_icon" src="${unit.location}">
                <p class="location_name">${unit["location-name"]}</p>
            </div>

            <div class="unit_details">
                <div class="guests">
                    <img src="assets/picture/cake.png" class="location_icon">
                    <p class="location_name">${unit.guests}</p>
                </div>

                <div class="beds">
                    <img src="assets/picture/single-bed.png" class="location_icon">
                    <p class="location_name">${unit.beds}</p>
                </div>
            </div>
        </div>
      `;

    });
  })
  .catch(err => console.log("Error loading JSON:", err));
