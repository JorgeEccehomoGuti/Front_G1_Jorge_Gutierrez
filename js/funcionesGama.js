//GET, POST , PUT Y DELETE

function getGama(){
    $.ajax({
        url:"http://192.9.158.199:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });
}

function postGama(){
    if ($("#name").val().length==0 || $("#description").val().length==0){
        alert("Todos los campos son obligatorios");
    }else{

    let cajas = {
        name:$("#name").val(),
        description:$("#description").val()
    };
    
    $.ajax({
        url:"http://192.9.158.199:8080/api/Gama/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la gama");
            window.location.reload();
        }
    });
}
}

function putGama(idBotonActualizar){
    console.log(idBotonActualizar);
    
    if ($("#name").val().length==0 || $("#description").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los datos");
    }else{

    let cajas = {
        idGama:idBotonActualizar,
        name:$("#name").val(),
        description:$("#description").val()
    };
    
    $.ajax({
        url:"http://192.9.158.199:8080/api/Gama/update",
        type:"PUT",
        datatype:"JSON",
        contentType: "application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la gama");
            window.location.reload();
        }
    });
}


}



function deleteGama(idBoton){
    
    Swal.fire({
        title: 'Esta seguro de borrar la gama? con el id:'+idBoton,
        text: "Estas seguro, se borrara definitivamente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#30d63b',
        cancelButtonColor: '#d65f30',
        confirmButtonText: 'Si, por Favor Borre Esto!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Su Archivo ha Sido Eliminado.',
            'Éxito'
            
          )
          let myData={
            id:idBoton
        };
        $.ajax({
            url:"http://192.9.158.199:8080/api/Gama/"+idBoton,
            type:"DELETE",
            datatype:"JSON",
            data:JSON.stringify(myData),
            contentType: "application/json",
            success:function(respuesta){
                //alert("se ha borrado correctamente la gama")
                window.location.reload();
            }
    
        });
        }
      }) 

}

////////////////////////////////////////
function pintarRespuesta(items){
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
    for(i=0;i<items.length;i++){
        myTable+="<tr class='bg-gray-900'>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].idGama+" </td>" ;
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].name+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='putGama("+items[i].idGama+")' class='flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'> Actualizar </button> " ;
        myTable+="<td> <button onclick='deleteGama("+items[i].idGama+")' class='flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}
