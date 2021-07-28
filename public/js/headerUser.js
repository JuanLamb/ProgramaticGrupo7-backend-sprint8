
window.addEventListener("load",() => {

    // Almaceno elementos del DOM
    const header = document.querySelector(".header-home");
    const headerUserIcon = document.querySelector(".userIcon");
    const userAnchor1 = document.getElementById("userAnchor1");
    const userAnchor2 = document.getElementById("userAnchor2");
    const userAnchors = document.querySelectorAll(".userButton");
    console.log(userAnchors);

    // Creo elementos de la barra de busqueda
    const userContainer = document.createElement("div");
    userContainer.setAttribute("class", "userContainer");

    // Creo subcontenedores
    const childContainer1 = document.createElement("div");
    childContainer1.classList.add("childContainer");
    const childContainer2 = document.createElement("div");
    childContainer2.classList.add("childContainer");

    // creo boton "nuevo producto" SOLO ADMIN
    if (userAnchors[1].id = "userAnchor3") {
        const childContainer3 = document.createElement("div");
        childContainer3.classList.add("childContainer", "adminContainer");
        childContainer3.appendChild(userAnchors[1]);
        userContainer.appendChild(childContainer3);
    };

    // ensamblo la barra de navegacion de usuario
    childContainer1.appendChild(userAnchor1);
    childContainer2.appendChild(userAnchor2);
    userContainer.appendChild(childContainer1);
    userContainer.appendChild(childContainer2);
    header.appendChild(userContainer);

    // Aplico transiciones a la barra de busqueda
    headerUserIcon.addEventListener('click', () => {
        userContainer.classList.toggle("userDisplayed");
    })
})