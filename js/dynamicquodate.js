
    // Function to format the current date
    function getFormattedDate() {
        const today = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" }; // Example: "January 27, 2025"
        return today.toLocaleDateString("en-US", options);
    }

    // Add the current date to all elements with the class 'dynamic-date'
    function updateDates() {
        const dateElements = document.querySelectorAll(".dynamic-date");
        const currentDate = getFormattedDate();

        dateElements.forEach((element) => {
            element.textContent = currentDate;
        });
    }

    // Run the script when the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", updateDates);
