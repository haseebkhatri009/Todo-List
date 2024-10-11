// const form = document.querySelector("#form");
// const output = document.querySelector("#output");
// const error = document.querySelector("#error");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const material = event.target.children[0].value.trim();
//     if (material === "") {
//         error.textContent = "Please enter a value.";
//     } else {
//         error.textContent = "";
//         output.innerHTML += `<li id="out">${material}</li>`;
//         event.target.reset();
//     }
// })

const form = document.querySelector("#form");
const output = document.querySelector("#output");
const error = document.querySelector("#error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const material = event.target.children[0].value.trim();

    if (material === "") {
        error.textContent = "Please enter a value.";
    } else {
        error.textContent = "";
                const li = document.createElement("li");
                li.classList.add("todo-item");
        li.innerHTML = `${material}  <button class="delete-btn">Delete</button>`;

        // Append the new list item to the output
        output.appendChild(li);

        // Reset the form
        event.target.reset();

        // Add event listener to delete button
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove(); // Remove the list item on button click
        });
    }
});
