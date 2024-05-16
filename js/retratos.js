const photoContainer = document.getElementById("photo-container");

let contentRetrato = "";

for(let i = 0; i < 20; i++){
    contentRetrato += getPhotoElemnt(i+1);
       
}

photoContainer.innerHTML = contentRetrato;

// FUNCION PARA OBTENER LAS IMAGENES DE RETRATO
function getPhotoElemnt(retrato_id){
    return `<a href="#" class="photo">
    <img alt="Retrato ${retrato_id}" 
    src="img/retrato_${retrato_id}.jpeg"/></a>`;

}

