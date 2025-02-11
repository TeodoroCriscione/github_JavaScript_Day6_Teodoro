class Animal {
    // properties
    nameAnimal;
    species;
    age;
    image;
    isWild;
    // constructor properties
    constructor(nameAnimal, species, age, image, isWild){
        this.nameAnimal = nameAnimal;
        this.species = species;
        this.age = age;
        this.image = image;
        this.isWild = isWild;
    }
    // methods
    describe (){
        return `This animal is called ${this.nameAnimal} and is a ${this.species}. It is ${this.age} years old`
    }
    checkIfWild(){
        return isWild ? "Yes" : "No";
    }
    getAnimalInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.nameAnimal}, ${this.species}</h5>
                            <img src="${this.image}" alt="animal image">
                            <p class="card-text">Age: ${this.age}</p>
                            <p class="card-text"> Is it wild? ${this.isWild}</p>
                            <p class="card-text"> ${this.describe()}.</p>
                            <a href="#" class="btn btn-primary details-btn">Details</a>
                        </div>
                    </div>
                </div>`
            }
}

// Fish class added

class Fish extends Animal {
    // additional properties
    waterType;
    // constructor complete
    constructor(nameAnimal, species, age, image, isWild, waterType){
        // properties coming from parent
        super(nameAnimal, species, age, image, isWild);
        // additional properties
        this.waterType = waterType;
    }
    // methods
    describe (){
        return `${super.describe()} This is a fish living in ${this.waterType} water.`
    }
    checkIfWild(){
        return isWild ? "Yes" : "No";
    }
    getAnimalInfo () {
        return `<div>
                    <div class="mt-5"><div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.nameAnimal}, ${this.species}</h5>
                            <img src="${this.image}" alt="animal image">
                            <p class="card-text">Age: ${this.age}</p>
                            <p class="card-text"> Is it wild? ${this.isWild}</p>
                            <p class="card-text">${this.describe()}</p>
                            <a href="#" class="btn btn-primary details-btn">Details</a>
                        </div>
                    </div>
                </div>`
            }
    }

document.addEventListener("DOMContentLoaded", () => {

        let animal1 = new Animal (
            "Dog",
            "Canis Familiaris", 
            21, 
            "https://cdn.pixabay.com/photo/2016/11/19/15/20/dog-1839808_1280.jpg", 
            false
        );
    
        let animal2 = new Animal (
            "Cat",
            "Felix Catus", 
            25, 
            "https://cdn.pixabay.com/photo/2017/06/04/20/21/kitten-2372126_1280.jpg", 
            true
        );
    
        let animal3 = new Fish (
            "Salmon",
            "Salmonidae",
            10,
            "https://cdn.pixabay.com/photo/2019/10/14/08/26/food-4548170_1280.jpg",
            true,
            "salty"
        );

        let animal4 = new Fish (
            "Goldfish",
            "Carassius auratus",
            15,
            "https://cdn.pixabay.com/photo/2019/09/26/22/02/fish-4507145_1280.jpg",
            false,
            "fresh"
        )
    
    
        let animals = [animal1, animal2, animal3, animal4];
    
        // Add phones to DOM
        animals.forEach(x => {
            document.getElementById("results").innerHTML += x.getAnimalInfo();
        });
    
        // Select buttons AFTER they are added to the DOM
        let btns = document.querySelectorAll(".details-btn");
        btns.forEach((element, i) => {
            element.addEventListener("click", (event) => {
                event.preventDefault(); // Prevents page reload
                console.log(animals[i]);
            });
        });
    });