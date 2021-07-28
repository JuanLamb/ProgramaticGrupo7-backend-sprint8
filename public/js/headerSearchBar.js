
window.addEventListener("load",() => {

    // Almaceno elementos del DOM 
    const header = document.querySelector(".header-home");
    const headerSearchIcon = document.querySelector(".searchIcon");

    // Creo elementos de la barra de busqueda
    const searchContainer = document.createElement("div");
    searchContainer.setAttribute("class", "searchContainer");

    // creo formulario
    const searchForm = document.createElement("form");
    searchForm.classList.add("searchForm");
    searchForm.setAttribute("action", "/products/search");
    searchForm.setAttribute("method", "GET");

    // creo search input
    const searchInput = document.createElement("input");
    searchInput.classList.add("searchInput");
    searchInput.setAttribute("name", "search");
    searchInput.setAttribute("placeholder", "Busca en nuestra tienda");

    // creo search button
    const searchButton = document.createElement("button");
    searchButton.setAttribute("type", "submit");
    searchButton.classList.add("searchButton");

    // creo anchor tag
    const a = document.createElement("a");
    a.classList.add("searchButtonText");
    const i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-search");
    
    // Ensamblo la barra de busqueda
    a.appendChild(i);
    searchButton.appendChild(a);
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
    searchContainer.appendChild(searchForm);
    header.appendChild(searchContainer);

    // Aplico transiciones a la barra de busqueda
    headerSearchIcon.addEventListener('click', () => {
        searchContainer.classList.toggle("isDisplayed");
    })

    // creo alerta de campo vacio
    searchButton.addEventListener('click', (e) => {
        if (searchInput.value == "") {
            e.preventDefault();
            alert("Debes llenar el campo de búsqueda");
        }
    })

})