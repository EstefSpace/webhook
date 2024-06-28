//Navbar responsive

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function() {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
}

function message() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    const webhook = document.getElementById("webhook_url").value;


    let embed = {
        "title": title,
        "description": description
        
       
        
    }


    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');


    const params = {
        
        embeds: [embed]
    }

    request.send(JSON.stringify(params));  
}

