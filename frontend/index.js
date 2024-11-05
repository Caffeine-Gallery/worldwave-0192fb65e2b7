import { backend } from "declarations/backend";

const greetButton = document.getElementById("greetButton");
const message = document.getElementById("message");
const buttonText = document.getElementById("buttonText");
const loadingSpinner = document.getElementById("loadingSpinner");

greetButton.addEventListener("click", async () => {
    // Show loading state
    buttonText.classList.add("d-none");
    loadingSpinner.classList.remove("d-none");
    greetButton.disabled = true;

    try {
        const greeting = await backend.greet();
        message.textContent = greeting;
    } catch (error) {
        message.textContent = "Error fetching greeting";
        console.error(error);
    } finally {
        // Reset button state
        buttonText.classList.remove("d-none");
        loadingSpinner.classList.add("d-none");
        greetButton.disabled = false;
    }
});
