class Phone {
    // properties
    brand;
    model;
    year;
    image;
    specifications;
    // constructor properties
    constructor(brand, model, year, image, specifications){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.image = image;
        this.specifications = specifications;
    }
    // methods
    getSmartphoneInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.brand} ${this.model}</h5>
                            <img src="${this.image}" alt="phone image">
                            <p class="card-text">Year: ${this.year}</p>
                            <a href="#" class="btn btn-primary details-btn">Details</a>
                        </div>
                    </div>
                </div>`
            }
}

document.addEventListener("DOMContentLoaded", () => {
    let phone1 = new Phone(
        "Nokia",
        "3310", 
        2001, 
        "https://cdn.pixabay.com/photo/2021/09/03/18/32/cellphone-6596299_1280.png", 
        ['durable', 'reliable', 'do not steal your data']
    );

    let phone2 = new Phone(
        "iPhone",
        "Any", 
        2005, 
        "https://cdn.pixabay.com/photo/2016/07/22/08/26/iphone-6s-plus-1534380_1280.png", 
        ['amazing', 'steal your data']
    );

    let phones = [phone1, phone2];

    // Add phones to DOM
    phones.forEach(x => {
        document.getElementById("results").innerHTML += x.getSmartphoneInfo();
    });

    // Select buttons AFTER they are added to the DOM
    let btns = document.querySelectorAll(".details-btn");
    btns.forEach((element, i) => {
        element.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents page reload
            console.log(phones[i]);
        });
    });
});
