const photoContainer = document.getElementById("photo-container");

let content = "";

for(let i = 0; i < 20; i++){
    content += getPhotoElemnt(i+1);
       
}

photoContainer.innerHTML = content;


//FUNCION PARA OBTENER LAS IMAGENES EN LA SECCION LAS MEJORES
function getPhotoElemnt(urbano_id){
    return `<a href="#" class="photo">
    <img alt="Urbano ${urbano_id}" 
    src="img/urbano_${urbano_id}.jpeg"/></a>`;

}
