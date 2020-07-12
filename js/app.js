
window.addEventListener( 'DOMContentLoaded', async (event) => {

    const header = document.querySelector( '.my-header' ),
        ereBtn = document.querySelector( '.erebtn' ),
        navMenu = document.querySelector( '.nav-menu' );
    const navigator = document.querySelector( '.nav-menu ul' );
    const navLinks = document.querySelectorAll( '.nav-menu ul li a' );

    ereBtn.addEventListener( 'click', event => {
        ereBtn.classList.toggle("change")
        if ( !navMenu.classList.contains('showNav'))
        {
           
            navMenu.style.height = `${ navMenu.scrollHeight }px`;
        } else
        {
            navMenu.style.height = '0px';
        }
        navMenu.classList.toggle( "showNav" );
    } )


    //Change navigation style on scroll
    /*window.addEventListener( 'scroll', event => {
        const nav = document.querySelector( '.nav-container' );

        if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
        {
            header.style.background = 'white';
        } else
        {
            header.style.background = 'none';
        }
        
    } ); */

    //Active navigation on scroll
   /* window.addEventListener( 'scroll', event => {

        const fromTop = window.scrollY;

        navLinks.forEach( link => {
            //let section = document.querySelector( link.hash );
            let section = document.querySelector( `#${ link.textContent.toLowerCase() }` );
           
            if (
                (section.offsetTop <= fromTop) &&
                ((section.offsetTop + section.offsetHeight) > fromTop)
            )
            {
                link.classList.add( 'active' );
                
            } else
            {
                link.classList.remove( 'active' );
            }
        } );
    } ); */

} );


