const photoContainer = document.getElementById("photo-container");

let content = "";

for(let i = 0; i < 20; i++){
    content += getPhotoElemnt(i+1);
       
}

photoContainer.innerHTML = content;


//FUNCION PARA OBTENER LAS IMAGENES EN LA SECCION LAS MEJORES
function getPhotoElemnt(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" 
    src="img/photo_${photo_id}.jpeg"/></a>`;

}





