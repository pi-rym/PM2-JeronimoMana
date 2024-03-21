const renderSection = (id, containerId, genre) => {
    const main = document.getElementById("main")
    const section = document.createElement("section")
    section.className = "container-xl"
    section.innerHTML = `<h2 class="mt-5"> ${genre}</h2> 
        <div class="d-flex flex-row align-items-stretch justify-content-between mt-3">
            <button id="btn_left${id}" class="col arrow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                fill="#020412" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
            </svg></button>
            <div id="container_carrusel" class=" overflow-hidden">
                <div id=${containerId}>
                </div>

            </div>
            <button id="btn_right${id}" class="col ms-3 arrow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                fill="#020412" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
            </svg></button>
        </div>`
    main.appendChild(section)
}



module.exports = {
    renderSection
}
