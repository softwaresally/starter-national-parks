
const submitHandler = (event) => {
    event.preventDefault();
    //console.log("The form was submitted.");
//    const formData = new FormData(event.target);
//    const name = formData.get("name");
//    console.log(name)
        const form = event.target;
        const formData = new FormData(form);

        const errors = validateForm(formData);

        //Clear all previous errors
        const errorElements = document.querySelectorAll(".error");
        for (let element of errorElements) {
            element.getElementsByClassName.display = "none";
        }

        //Display any new errors
        Object.keys(errors).forEach((key) => {
            //Find the specific error element
            const errorElement = document.querySelector(`#${key}-form .error`);
            errorElement.innerHTML = errors[key];
            errorElement.style.display = "block";
        });
};

const main = () => {
    //Get the form element
    const form = document.querySelector("#park-form");

    //Attach the submit handler
    form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);

function validateExists(value) {
    return value && value.trim();
};

//Validate the rating is a number 
function validateNumber(value) {
    return !isNaN(value);
}

function validateRange(value, min, max) {
    return value >= min && value <= max;
}

function validateForm(formData) {
    const errors = {};

    //Check if name was entered
    if (!validateExists(formData.get("name"))) {
        errors.name = "Please enter a name";
    }

    //Check if rating was entered
    if(!validateExists(formData.get("rating"))) {
        errors.rating = "Please enter a rating";
    } else {
        //Check if the rating is a number
        if (!validateNumber(formData.get("rating"))) {
            errors.rating = "Rating must be a number";
        } else {
            //Because it is a number, convert it
            const rating = Number.parseFloat(formData.get("rating"));
            //Check that the rating is between 1 and 5, inclusive
            if (!validateRange(rating, 1, 5)) {
                errors.rating = "Rating must be between 1 and 5 inclusive";
            }
        }
    }

    //Check if rating was entered


    //Check if description was entered
    if (!validateExists(formData.get("description"))) {
        errors.description = "Please enter short description";
    }

    //Check if established date was entered
    if (!validateExists(formData.get("established"))) {
        errors.established = "Please enter date";
    }

    //Check if area was entered
    if(!validateExists(formData.get("area"))) {
        errors.area = "Please enter the area of the park";
    }

    //Check if location date was entered
    if (!validateExists(formData.get("location"))) {
        errors.location = "Please enter the location of the park";
    }

    return errors;
}