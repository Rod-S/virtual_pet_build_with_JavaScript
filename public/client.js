$(function() {

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    let pet_info = {
        name: "",
        weight: 1,
        weight_message: "",
        happiness: 0
    }

    pet_info.name = prompt("What's the name of your dog?")

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);


    function petWeight() {
        let pet_weight = 6;
        if (pet_weight > 10) {
            console.log("Your pet is obese.")
        } else {
            console.log("Your pet is in great shape.")
        }
    }
    petWeight();

    function clickedTreatButton() {
        // Increase pet happiness
        pet_info.happiness += 1;
        // Increase pet weight
        pet_info.weight += 1;
        checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
        // Increase pet happiness
        pet_info.happiness +=1;
        // Decrease pet weight
        pet_info.weight -=1;
        checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
        // Decrease pet happiness
        pet_info.happiness -=1;
        // Decrease pet weight
        pet_info.weight -=1;
        checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();
        updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
        // Add conditional so if weight is lower than zero, set it back to zero
        if (pet_info.weight < 1) {
            pet_info.weight = 0;
        }
        // Also add conditional if happiness is lower than zero, set it back to zero
        if (pet_info.happiness < 1) {
            pet_info.happiness = 0;
        }
        if (pet_info.weight > 10) {
            pet_info.weight_message = "Oh, No! Your pet is obese!"
        } else {
            pet_info.weight_message = "Your pet is in great shape!"
        }
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
        $('.name').text(pet_info.name);
        $('.weight').text(pet_info.weight);
        $('div:nth-of-type(3n)').after(`<p>${pet_info.weight_message}</p>`);
        $('.happiness').text(pet_info.happiness);
    }
})