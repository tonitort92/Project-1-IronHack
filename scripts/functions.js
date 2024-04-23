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


