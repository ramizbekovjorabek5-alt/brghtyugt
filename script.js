const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const addBtn = document.getElementById("addBtn");
const contactList = document.getElementById("contactList");

function createContact(name, number) {
    const li = document.createElement("li");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("contact-info");

    const img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    const textDiv = document.createElement("div");
    const nameElem = document.createElement("div");
    nameElem.classList.add("contact-name");
    nameElem.textContent = name;

    const numberElem = document.createElement("div");
    numberElem.classList.add("contact-number");
    numberElem.textContent = number;

    textDiv.appendChild(nameElem);
    textDiv.appendChild(numberElem);

    infoDiv.appendChild(img);
    infoDiv.appendChild(textDiv);

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");

    const editIcon = document.createElement("i");
    editIcon.textContent = "✏️";
    editIcon.addEventListener("click", () => {
        nameInput.value = name;
        numberInput.value = number;
        li.remove();
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.textContent = "🗑️";
    deleteIcon.classList.add("delete");
    deleteIcon.addEventListener("click", () => li.remove());

    iconsDiv.appendChild(editIcon);
    iconsDiv.appendChild(deleteIcon);

    li.appendChild(infoDiv);
    li.appendChild(iconsDiv);

    contactList.appendChild(li);
}

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const number = numberInput.value.trim();

    if (name && number) {
        createContact(name, number);
        nameInput.value = "";
        numberInput.value = "";
    }
});