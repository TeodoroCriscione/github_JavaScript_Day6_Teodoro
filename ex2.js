class Person {
    // properties
    firstName;
    lastName;
    age;
    image;
    // constructor properties
    constructor(firstName, lastName, age, image){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.image = image;
    }
    // methods
    getPersonInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
                            <img src="${this.image}" alt="person image">
                            <p class="card-text">Age: ${this.age}</p>
                            <a href="#" class="btn btn-primary details-btn">Details</a>
                        </div>
                    </div>
                </div>`
            }
}

document.addEventListener("DOMContentLoaded", () => {
    let person1 = new Person (
        "Erika",
        "Dust", 
        21, 
        "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
    );

    let person2 = new Person (
        "John",
        "Doe", 
        25, 
        "https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg"
    );

    let people = [person1, person2];

    // Add phones to DOM
    people.forEach(x => {
        document.getElementById("results").innerHTML += x.getPersonInfo();
    });

    // Select buttons AFTER they are added to the DOM
    let btns = document.querySelectorAll(".details-btn");
    btns.forEach((element, i) => {
        element.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents page reload
            console.log(people[i]);
        });
    });
});
