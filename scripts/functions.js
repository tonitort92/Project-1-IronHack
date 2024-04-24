async function retrieveBackData() {
    try {
        console.log("Fetching data...");
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const backData = await response.json(); // Convertir la respuesta a JSON aquí
        console.log(backData);
        if (backData) {
            let vectorifyProject = backData[1];
            let dashcoinProject = backData[2];
            let simplifyProject = backData[3];

            document.querySelector('#recent-projects h3').textContent = simplifyProject.name;
            document.querySelector('#recent-projects p').textContent = simplifyProject.description;
            document.querySelector('.project-card div:nth-of-type(1)').style.backgroundImage = 'url(' + simplifyProject.image + ')';
        
            document.querySelectorAll('#recent-projects h3')[1].textContent = dashcoinProject.name;
            document.querySelectorAll('#recent-projects p')[1].textContent = dashcoinProject.description;
            document.querySelectorAll('.project-card div:nth-of-type(1)')[1].style.backgroundImage = 'url(' + dashcoinProject.image + ')';
        
            document.querySelectorAll('#recent-projects h3')[2].textContent = vectorifyProject.name;
            document.querySelectorAll('#recent-projects p')[2].textContent = vectorifyProject.description;
            document.querySelectorAll('.project-card div:nth-of-type(1)')[2].style.backgroundImage = 'url(' + vectorifyProject.image + ')';
        
            document.querySelector("#main-project h1").textContent = backData[1].name;
            document.querySelector("#main-project .date p").textContent = backData[1].description;
            document.querySelector("#main-project .date span").textContent = backData[1].completed_on;
            document.querySelector("#main-project .img-project").setAttribute("src", backData[0].image);
            document.querySelector("#main-project .text-project p").textContent = backData[1].content;

        }
    } catch (error) {
        console.log("Something went wrong!", error.message);
    }
}

retrieveBackData();

/*function projectsSubstitution (a, b, c, d){

    document.querySelectorAll('#recent-projects-grid .project-card div h3')[0].textContent = b.

}

projectsSubstitution( mainProject, vectorifyProject, dashcoinProject, simplifyProject);*/


window.addEventListener('load', () => {

    //We want to fix a bug with the mobile menu, as it keeps open in desktop if we open it in mobile //

    //Firstly, we will set up our main queries for the mobile and desktop sizes //

    var dekstopSize = window.matchMedia("(min-width:860px)");
    var mobileSize = window.matchMedia("(max-width:859px)");

    //Here we implement the toogle functionality ONLY if we are in mobile //

    document.getElementById('hamburguer-menu-closed').addEventListener('click', () => {

        if(mobileSize.matches){

            document.getElementById('hamburguer-menu-closed').style.display = 'none';
            document.getElementById('hamburguer-menu-open').style.display = 'flex';
        }
    });

    document.getElementById('hamburguer-menu-open').addEventListener('click', () => {

        if(mobileSize.matches){

            document.getElementById('hamburguer-menu-closed').style.display = 'flex';
            document.getElementById('hamburguer-menu-open').style.display = 'none';
        }
    });

    //Validating the form//

    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Esto evita que el formulario se envíe automáticamente.
    
        let mainName = document.querySelector('input[type=text]').value;
        let mail = document.querySelector('input[type=email]').value;
        let phone = document.querySelector('input[type=tel]').value;
        let message = document.querySelector('textarea').value; 
    
        if(mainName.length == 0 || mail.length == 0 || phone.length == 0 || message.length == 0){
            alert('Formulario incompleto, vacío o incorrecto');
        }
        else{
            alert('Se ha mandado tu mensaje :D');
            // Aquí puedes agregar código para enviar los datos del formulario de manera programática si así lo deseas.
        }
    });


    //Now, if you open the toogle, but you resize to desktop, we hide it. If you go back to mobile, we show it again //

    window.addEventListener('resize', () => {

        if(dekstopSize.matches){

            document.getElementById('hamburguer-menu-closed').style.display = 'none';
            document.getElementById('hamburguer-menu-open').style.display = 'none';

        }

        if(mobileSize.matches && document.getElementById('hamburguer-menu-open').style.display == 'none'  ){

            document.getElementById('hamburguer-menu-closed').style.display = 'flex';

        }

    })

})


