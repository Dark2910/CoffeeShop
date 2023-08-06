import HTML from '../app/app.component.html?raw';

/**
 * Esta función genera el código HTML
 * @param {HTMLDivElement} element 
 */
export const App = (element) => {
    //Cuando la funcion app() es llamada
    (()=>{
        const app = document.createElement('div');
        //innerHTML permite acceder al contenido HTML y reemplazarlo
/*         app.innerHTML = `<div>
                            <h1>Hola :D</h1>
                        </div>`; */
        app.innerHTML = HTML;
        //append permite acceder al contenido HTML y agregar nuevos elementos sin reemplazar nada
        document.querySelector(element).append(app);
    })();

}