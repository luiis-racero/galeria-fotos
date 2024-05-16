const photoContainer = document.getElementById("photo-container");

let content = "";

for(let i = 0; i < 20; i++){
    content += getPhotoElemnt(i+1);
       
}

photoContainer.innerHTML = content;


//FUNCION PARA OBTENER LAS IMAGENES EN LA SECCION LAS MEJORES
function getPhotoElemnt(animales_id){
    return `<a href="#" class="photo">
    <img alt="animales ${animales_id}" 
    src="img/animales_${animales_id}.jpeg"/></a>`;

}


