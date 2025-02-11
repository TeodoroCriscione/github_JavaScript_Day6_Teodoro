//  Car models
class Car {
    // properties
    maker;
    model;
    year;
    image;
    isElectric;
    // constructor properties
    constructor(maker, model, year,  image, isElectric){
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.image = image;
        this.isElectric = isElectric;
    }
    // methods
    describe (){
        return `This car is called ${this.model} ${this.maker}. It was commercialised in ${this.year}.`
    }
    checkIfElectric(){
        return this.isElectric ? "Yes" : "No";
    }
    getCarInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.model}, ${this.maker}</h5>
                            <img src="${this.image}" alt="car image">
                            <p class="card-text">Year: ${this.year}</p>
                            <p class="card-text"> Is it electric? ${this.isElectric}</p>
                            <p class="card-text"> ${this.describe()}.</p>
                            <a href="#" class="btn btn-primary details-btn-cars">Details</a>
                        </div>
                    </div>
                </div>`
            }
}
// ElectricCar added
class ElectricCar extends Car {
    // additional properties
    batteryCapacity;
    chargingTime;
    // constructor complete
    constructor(maker, model, year, image, isElectric, batteryCapacity, chargingTime) {
        // properties coming from parent
        super(maker, model, year, image, isElectric);
        // additional properties
        this.batteryCapacity = batteryCapacity;
        this.chargingTime = chargingTime;
    }
    // methods
    describe() {
        return `${super.describe()} This is an electric car.`;
    }
    checkIfElectric() {
        return this.isElectric ? "Yes" : "No";
    }
    checkChargingStatus() {
        return `${this.batteryCapacity} kWh. Fully charged in ${this.chargingTime} hours.`;
    }
    getCarInfo() {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.model}, ${this.maker}</h5>
                            <img src="${this.image}" alt="car image">
                            <p class="card-text">Year: ${this.year}</p>
                            <p class="card-text"> Is it electric? ${this.isElectric}</p>
                            <p class="card-text"> ${this.describe()} </p>
                            <p class="card-text"> ${this.checkChargingStatus()} </p>
                            <a href="#" class="btn btn-primary details-btn-cars">Details</a>
                        </div>
                    </div>
                </div>`;
    }
}

// Load Content
document.addEventListener("DOMContentLoaded", () => {
    let car1 = new Car(
        "Mercedes-Benz",
        "S-Class",
        2021,
        "https://cdn.pixabay.com/photo/2018/05/20/23/36/mercedes-3417100_1280.jpg",
        false
    );

    let car2 = new ElectricCar(
        "Tesla",
        "Model S",
        2023,
        "https://cdn.pixabay.com/photo/2021/01/21/11/09/tesla-5937063_1280.jpg",
        true,
        57.5,
        3.5
    );

    let cars = [car1, car2];

    // Add cars to DOM
    cars.forEach(x => {
        document.getElementById("results").insertAdjacentHTML("beforeend", x.getCarInfo());
    });

    // Delay event listener attachment to ensure elements exist
    setTimeout(() => {
        let btns = document.querySelectorAll(".details-btn-cars");
        btns.forEach((element, i) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                console.log(cars[i]);
                // alert(books[i].describe())
                Swal.fire({
                    title: `${cars[i].maker} by ${cars[i].model}`,
                    text: cars[i].describe(),
                    imageUrl: cars[i].image,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "book image"
                  });
            });
        });
    }, 100);
});

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

//  Books
class Book {
    // properties
    title;
    author;
    yearPublished;
    image;
    genre;
    // constructor properties
    constructor(title, author, yearPublished,  image, genre){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.image = image;
        this.genre = genre;
    }
    // methods
    describe (){
        return `This book is titled ${this.title} by ${this.author}. It was commercialised in ${this.yearPublished}.`
    }
    checkIsClassic(){
        return this.yearPublished < 1950 ? "Yes" : "No";
    }
    getBookInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.title}, ${this.author}</h5>
                            <img src="${this.image}" alt="book image">
                            <p class="card-text">Published in ${this.yearPublished}</p>
                            <p class="card-text">Genre: ${this.genre}</p>
                            <p class="card-text"> Is it classic? ${this.checkIsClassic()}</p>
                            <p class="card-text"> ${this.describe()}</p>
                            <a href="#" class="btn btn-primary details-btn-books">Details</a>
                        </div>
                    </div>
                </div>`
            }
}

// EBook class added
class EBook  extends Book {
    // additional properties
    fileSize;
    format;
    isDownloadable;
    linkForDownload;
    // constructor complete
    constructor(title, author, yearPublished,  image, genre, fileSize, format, isDownloadable, linkForDownload){
        // properties coming from parent
        super(title, author, yearPublished,  image, genre);
        // additional properties
        this.fileSize = fileSize;
        this.format = format;
        this.isDownloadable = isDownloadable;
        this.linkForDownload = linkForDownload;
    }
    // methods
    describe (){
        return `${super.describe()} This is available as eBook.`
    }
    checkIsClassic(){
        return this.yearPublished < 1950 ? "Yes" : "No";
    }
    getDownloadLink() {
        return `${this.linkForDownload}`
    }
    getBookInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.title}, ${this.author}</h5>
                            <img src="${this.image}" alt="book image">
                            <p class="card-text">Published in ${this.yearPublished}</p>
                            <p class="card-text">Genre: ${this.genre}</p>
                            <p class="card-text"> Is it classic? ${this.checkIsClassic()}</p>
                            <p class="card-text"> ${this.describe()}</p>
                            <p class="card-text"> Is it downloadable? ${this.isDownloadable}</p>
                            <p class="card-text"> <a href="${this.getDownloadLink()}">Click To Download</a></p>
                            <a href="#" class="btn btn-primary details-btn-books">Details</a>
                        </div>
                    </div>
                </div>
                `
            }
    }
//  Load Content Event  
document.addEventListener("DOMContentLoaded", () => {

        let book1 = new Book (
            "War and Peace",
            "Leo Tolstoy", 
            1865, 
            "https://upload.wikimedia.org/wikipedia/commons/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg", 
            "historical novel"
        );
        let book2 = new EBook (
            "Harry Potter Series",
            "J. K. Rowling",
            1997,
            "http://i2.wp.com/geekdad.com/wp-content/uploads/2013/02/HP1-Kibuishi.jpg",
            "fantasy",
            "53.6 Mb",
            "pdf",
            true,
            "https://en.wikipedia.org/wiki/Harry_Potter"
        );
    
        let books = [book1, book2];
        // Add books to DOM
        books.forEach(x => {
            document.getElementById("results").innerHTML += x.getBookInfo();
        });
    
        // Select buttons AFTER they are added to the DOM
        let btns = document.querySelectorAll(".details-btn-books");
        btns.forEach((element, i) => {
            element.addEventListener("click", (event) => {
                event.preventDefault(); // Prevents page reload
                console.log(books[i]);
                // alert(books[i].describe())
                Swal.fire({
                    title: `${books[i].title} by ${books[i].author}`,
                    text: books[i].describe(),
                    imageUrl: books[i].image,
                    imageWidth: 200,
                    imageHeight: 400,
                    imageAlt: "book image"
                  });
            });
        });
});

// document.getElementById("results").insertAdjacentHTML("beforeend", x.getCarInfo());
// It does not overwrite existing content (unlike innerHTML += which may cause re-rendering issues).
// It is more efficient since it does not reparse the entire innerHTML every time new content is added.