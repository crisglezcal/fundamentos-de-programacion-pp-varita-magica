// ### Eventos ###

// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const links = document.querySelectorAll("a"); 

for (let link of links) { 
    link.addEventListener("click", (evento) => { 
        evento.preventDefault();
        }
    );
}
// 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//     2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
const imagenes = document.querySelectorAll("img");

for (let imagen of imagenes) {
    imagen.addEventListener("click", (evento) => { 
        evento.target.src = "./assets/magic-1.gif";
    });
}

//     2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const parrafos = document.querySelectorAll("p");

for (let parrafo of parrafos) {
    parrafo.addEventListener("click", () => { 
        parrafo.style.color = "#78207dff";
        parrafo.style.backgroundColor = "#0add1fff";
        }
    );
}

//     2.3 Bloques de `article` o `section`: Cambia el color de fondo.
const articles = document.querySelectorAll("article");
for (let article of articles) {
    article.addEventListener("click", () => {
        article.style.backgroundColor = "#2f1ec4ff";
    })
}

const sections = document.querySelectorAll("section");
for (let section of sections) {
    section.addEventListener("click", () => {
        section.style.backgroundColor = "#baca10ff";
    })
}


// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//     3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
for (let imagen of imagenes) {
    const imagenOriginal = imagen.src;
    
    imagen.addEventListener("mouseover", () => { 
        imagen.src = "./assets/abracadabra.gif";
        }
    );

    imagen.addEventListener("mouseout", () => { 
        imagen.src = imagenOriginal;  
        }
    );
}

//     3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let parrafo of parrafos) {
    const colorOriginal = parrafo.style.color;
    const fondoOriginal = parrafo.style.backgroundColor;
    
    parrafo.addEventListener("mouseover", () => { 
        parrafo.style.color = "#287d20ff";
        parrafo.style.backgroundColor = "#dd0ad3ff";
    });

    parrafo.addEventListener("mouseout", () => { 
        parrafo.style.color = colorOriginal;
        parrafo.style.backgroundColor = fondoOriginal;
    });
}

//     3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.
for (let article of articles) {
    const articleOriginal = article.style.color;
    
    article.addEventListener("mouseover", () => { 
        article.style.color = "#d28425ff";
    });

    article.addEventListener("mouseout", () => { 
        article.style.color = colorOriginal;
    });
}

for (let section of sections) {
    const sectionOriginal = section.style.color;
    
    section.addEventListener("mouseover", () => { 
        section.style.color = "#3d370cff";
    });

    section.addEventListener("mouseout", () => { 
        section.style.color = colorOriginal;
    });
}
// _**Premium**_

// ![](https://media.giphy.com/media/tpTOw6sljB2U/giphy.gif)

// 4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

//     ```javascript
//     const colors = ['red', 'blue', 'green']

//     const getRandom = (array) => {
//         /* código misterioso */
//     }

//     console.log(getRandom(colors))
//     // imprime 'red', 'blue' o 'green'
//     ```
// 5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

// 6. Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.
