const photoContainer = document.getElementById("photo-container");

let content = "";

for(let i = 0; i < 20; i++){
    content += getPhotoElemnt(i+1);
       
}

photoContainer.innerHTML = content;

// FUNCION PARA OBTENER LAS IMAGENES DE RETRATO
function getPhotoElemnt(paisaje_id){
    return `<a href="#" class="photo">
    <img alt="Paisaje ${paisaje_id}" 
    src="img/paisaje_${paisaje_id}.jpeg"/></a>`;

}


