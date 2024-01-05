const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // preventDefault will stop the immediate function after filling the form

      const height = parseInt(document.querySelector("#height").value);

      const weight = parseInt(document.querySelector("#weight").value);

      const results = document.querySelector("#results");

      if (height === " " || height < 0 || isNaN(height)) {
        results.innerHTML = `${height} is not right`;
      } else if (weight === " " || weight < 0 || isNaN(weight)) {
        results.innerHTML = `${weight} is not right`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi > 24.9){
            results.innerHTML = `<span>${bmi} is overweight</span>`
        }
        else if(bmi < 18.6){
            results.innerHTML = `<span>${bmi} is underweight</span>`
        }
        else if(bmi > 18.6 && bmi <24.9){
            results.innerHTML = `<span>${bmi} is normal</span>`
        }
      }
    });