for (let i = 1; i <= 800; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(function (respo) {
      return respo.json();
    })
    .then(function (data) {
      const container = document.querySelector(".container");

      let pkmn = document.createElement("div");
      pkmn.classList.add("pokemon");
      let image = document.createElement("div");
      image.classList.add("img");

      let img = document.createElement("img");
      pkmn.appendChild(image);
      image.appendChild(img);

      let norm = document.createElement("div");
      norm.classList.add("norm");
      let shiny = document.createElement("div");
      shiny.classList.add("shiny");

      image.appendChild(norm);
      image.appendChild(shiny);

      let id = document.createElement("p");
      id.classList.add("id");
      let name = document.createElement("p");
      name.classList.add("name");
      let height = document.createElement("p");
      height.classList.add("height");
      let weight = document.createElement("p");
      weight.classList.add("weight");

      pkmn.appendChild(id);
      pkmn.appendChild(name);
      pkmn.appendChild(height);
      pkmn.appendChild(weight);

      container.appendChild(pkmn);

      // Calling Values from the api

      img.src = data.sprites.front_default;
      id.textContent = `Id: ${data.id}`;
      name.textContent = `Name: ${data.name.toUpperCase()}`;
      height.textContent = `Height: ${data.height}`;
      weight.textContent = `Width: ${data.weight}`;

      norm.addEventListener("click", function () {
        img.src = data.sprites.front_default;

        img.addEventListener("mouseover", function () {
          img.src = data.sprites.back_default;
        });

        img.addEventListener("mouseout", function () {
          img.src = data.sprites.front_default;
        });
      });

      shiny.addEventListener("click", function () {
        img.src = data.sprites.front_shiny;

        img.addEventListener("mouseover", function () {
          img.src = data.sprites.back_shiny;
        });

        img.addEventListener("mouseout", function () {
          img.src = data.sprites.front_shiny;
        });
      });

      img.addEventListener("mouseover", function () {
        img.src = data.sprites.back_default;
      });

      img.addEventListener("mouseout", function () {
        img.src = data.sprites.front_default;
      });


      // Search function

      let search = document.getElementById("search")
      let pokemons = document.querySelectorAll(".pokemon")

      search.addEventListener("input", function () {
        pokemons.forEach(pokemon => {
          let input = search.value.toLowerCase();
          let name = pokemon.querySelector(".name").textContent
          if (name.toLowerCase().includes(input)) {
            console.log(pokemon.querySelector(".name").textContent)
            pokemon.style.display = "block"
            pokemon.style.height = "fit-content"
          } else {
            pokemon.style.display = "none"

          }


        })



      })




    })
    .catch((error) => {
      console.log("error", error);
    });


}


