/*Mensaje de Confirmacion - Eliminar*/
function msgconfirm(e){
	if(confirm("¿Seguro que desea eliminar este registro?")){
		return true;
	}
	else{
		e.preventDefault();
	}
}	
const enlace = document.querySelectorAll(".eliminar");

for(var i=0; i < enlace.length; i++){
	enlace[i].addEventListener("click", msgconfirm);
}
/*Fin*/