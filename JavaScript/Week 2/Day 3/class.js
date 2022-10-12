class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
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
    return (ratingSum / this.ratings.length).toFixed(1);
  }

  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    let album = this._songs.join(", ");
    return album;
  }
}

// Create Book
const historyOfEverything = new Book(
  "A Short History Of Nearly Everything",
  "Bill Bryson",
  554
);
//  Check Book out
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
// Add reviews and the get average
historyOfEverything.addRating(3);
historyOfEverything.addRating(2);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Create Movie
const speed = new Movie("Speed", "Jan de Bont", 116);
// Check Movie out
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
// Add reviews and get the average
speed.addRating(2);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

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
console.log(roomOnThe3rdFloor.isCheckedOut);
// Add reviews and get the average
roomOnThe3rdFloor.addRating(4);
roomOnThe3rdFloor.addRating(4);
roomOnThe3rdFloor.addRating(5);
console.log(roomOnThe3rdFloor.getAverageRating());
// Get the songs on the album
console.log(roomOnThe3rdFloor.songs);
