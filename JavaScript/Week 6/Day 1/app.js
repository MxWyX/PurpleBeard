// Promise exercise

const randomGame = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Winner!");
    } else {
      reject("Loooooser!");
    }
  });
};

randomGame()
  .then((winner) => {
    console.log(winner);
  })
  .catch((loser) => {
    console.log(loser);
  })
  .finally(() => {
    console.log("Thank you for playing!");
  });

//////////////////////////////////////////////////////////////////////////////

// Fetch exercise

const fetched = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

let prices = [];
fetched.then((response) => {
  const JsonPromise = response.json();
  JsonPromise.then((json) => {
    prices = json;
    prices.forEach((e) => {
      if (e.price > 1) {
        let price = document.createElement("li");
        price.textContent = e.price;
        document.querySelector("#prices").appendChild(price);
      }
    });
  });
});

// API calls
// 0e38315cd5912c12807ec256fec8451a

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  let url = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e38315cd5912c12807ec256fec8451a`
  );
  document.querySelector("#city").value = "";
  console.log(url);
  getWeather(url);
});

const getWeather = (url) => {
  url.then((resp) => {
    let jsonResp = resp.json();
    console.log(jsonResp);
    jsonResp
      .then((json) => {
        document.querySelector("#weather").textContent = `The weather in ${
          json.name
        } is ${(json.main.temp - 273.15).toFixed(2)} degrees celcius.`;
      })
      .catch((err) => {
        document.querySelector(
          "#weather"
        ).textContent = `We couldn't find that location to get the weather...`;
      });
  });
};

// k_u1tyqxj0

const funcLocalData = (movies) => {
  localStorage.setItem("MoviedataStored", JSON.stringify(movies));
};

const funcCreateCards = () => {
  let tempMovieData = JSON.parse(localStorage.getItem("MoviedataStored"));
  tempMovieData.slice(0, 10).map((movies) => {
    let tempCard = document.createElement("div");
    tempCard.classList.add("movieCard");
    let movIMG = document.createElement("img");
    movIMG.src = movies.image;
    let movInfo = document.createElement("p");
    movInfo.textContent = `${movies.title}\nRated: ${movies.imDbRating}`;
    tempCard.appendChild(movIMG);
    tempCard.appendChild(movInfo);
    document.querySelector("#movie-sect").appendChild(tempCard);
  });
};

if (!localStorage.getItem("MoviedataStored")) {
  fetch("https://imdb-api.com/en/API/Top250Movies/k_u1tyqxj0").then((res) => {
    resJson = res.json();
    resJson.then((json) => {
      funcLocalData(json.items);
      funcCreateCards();
    });
  });
} else {
  funcCreateCards();
}
