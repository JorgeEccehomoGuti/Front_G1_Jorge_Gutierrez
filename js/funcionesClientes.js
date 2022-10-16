//GET, POST , PUT Y DELETE

function getClientes(){
    $.ajax({
        url:"http://192.9.158.199:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postClientes(){
    if ($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0){
        alert("Todos los campos son obligatorios");
    }else{
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://192.9.158.199:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el cliente");
            window.location.reload();
        }
    });

}
}
function putClientes(idBotonActualizar){
    console.log(idBotonActualizar);

    if ($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los Datos");
    }else{

        let cajas = {
            idClient:idBotonActualizar,
            email:$("#email").val(),
            password:$("#password").val(),
            name:$("#name").val(),
            age:$("#age").val(),
        };
    
    $.ajax({
        url:"http://192.9.158.199:8080/api/Client/update",
        type:"PUT",
       datatype:"JSON",
        contentType: "application/json",
      data: JSON.stringify(cajas),
           success:function(respuesta){
          alert("se actualizo correctamente el Cliente");
           window.location.reload();
     }
   });
}

}
function deleteClientes(idBoton){   

    
          let myData={
            id:idBoton
        };
        $.ajax({
            url:"http://192.9.158.199:8080/api/Client/"+idBoton,
            type:"DELETE",
            datatype:"JSON",
            data:JSON.stringify(myData),
            contentType: "application/json",
            success:function(respuesta){
               //alert("se ha borrado correctamente el Cliente")
                window.location.reload();
            }
    
        });
        }
    
////////////////////////////////////////
function pintarRespuesta(items){
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
    for(i=0;i<items.length;i++){
        myTable+="<tr class='bg-gray-900'>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].email+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].password+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].name+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='putClientes("+items[i].idClient+")' class='flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'> Actualizar </button> " ;
        myTable+="<td> <button onclick='deleteClientes("+items[i].idClient+")' class='flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}