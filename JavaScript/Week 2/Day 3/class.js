class Media {
  constructor(title, creator) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    this._creator = creator;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  get creator() {
    return this._creator;
  }

  checkedOutStatus() {
    if (this.isCheckedOut === true) {
      return `${this.title} is currently checked out.`;
    } else {
      return `${this.title} is currently checked in.`;
    }
  }

  toggleCheckedOutStatus() {
    if (this.isCheckedOut === true) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    let ratingSum = this.ratings.reduce(
      (rating, current) => rating + current,
      0
    );
    let avg = (ratingSum / this.ratings.length).toFixed(1);
    return `The average reviews for ${this._title} come to ${avg}.`;
  }

  getRatings() {
    return `The reviews for ${this.title} are:\n${this.ratings.join(", ")}.`;
  }

  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, creator, pages) {
    super(title, creator);
    this._pages = pages;
  }

  get author() {
    return this._creator;
  }

  get pages() {
    return this._pages;
  }

  getAuthor() {
    return `${this.title} was writen by ${this.author}.`;
  }

  getPageNum() {
    return `${this.title} has ${this.pages} many pages`;
  }

  getInfo() {
    let avg = this.getAverageRating();
    let inOut = this.checkedOutStatus();
    let auth = this.getAuthor();
    let pageNum = this.getPageNum();
    return `${inOut}\n${avg}\n${auth}\n${pageNum}`;
  }
}

class Movie extends Media {
  constructor(title, creator, runTime) {
    super(title, creator);
    this._runTime = runTime;
  }

  get director() {
    return this._creator;
  }

  get runTime() {
    return this._runTime;
  }

  getRunTime() {
    return `${this.title} runs for ${this.runTime}.`;
  }

  getDirector() {
    return `${this.director} is the director.`;
  }

  getInfo() {
    let avg = this.getAverageRating();
    let inOut = this.checkedOutStatus();
    let RT = this.getRunTime();
    let direct = this.getDirector();
    return `${inOut}\n${avg}\n${RT}\n${direct}`;
  }
}

class CD extends Media {
  constructor(title, creator, songs) {
    super(title, creator);
    this._songs = songs;
  }

  get artist() {
    return this._creator;
  }

  get songs() {
    let album = this._songs.join(", ");
    return album;
  }

  getArtist() {
    return `${this.title} was created by ${this.artist}.`;
  }

  getAlbum() {
    return `The songs on the album are:\n${this.songs}`;
  }

  getInfo() {
    let avg = this.getAverageRating();
    let inOut = this.checkedOutStatus();
    let art = this.getArtist();
    let album = this.getAlbum();
    return `${inOut}\n${avg}\n${art}\n${album}`;
  }
}

// Create small function to add a random amount of ratings to an object
const addRandomRatings = (title) => {
  let amount = Math.floor(Math.random() * 20) + 5;
  for (let i = 0; i < amount; i++) {
    title.addRating(Math.floor(Math.random() * 5) + 1);
  }
};

// Create Book
const historyOfEverything = new Book(
  "A Short History Of Nearly Everything",
  "Bill Bryson",
  554
);
//  Check Book out
historyOfEverything.toggleCheckedOutStatus();
// Add reviews and the get average
addRandomRatings(historyOfEverything);
console.log(historyOfEverything.getInfo());

// Create Movie
const speed = new Movie("Speed", "Jan de Bont", 116);
// Check Movie out
speed.toggleCheckedOutStatus();
// Add reviews and get the average
addRandomRatings(speed);
// Retrieve all the info we have on the film
console.log(speed.getInfo());

// Create CD
const roomOnThe3rdFloor = new CD("Room on the 3rd floor", "McFly", [
  "Five Colors In Her Hair",
  "Room on The 3rd Floor",
  "Hypnotised",
  "Met This Girl",
  "Obviously",
  "That Girl",
  "Saturday Night",
  "She Left Me",
]);
// Check CD out
roomOnThe3rdFloor.toggleCheckedOutStatus();
// Add reviews and get the average
addRandomRatings(roomOnThe3rdFloor);
// Get all the info and songs on the album
console.log(roomOnThe3rdFloor.getInfo());
