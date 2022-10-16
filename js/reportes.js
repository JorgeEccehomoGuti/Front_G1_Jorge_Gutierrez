function traerReporteStatus(){
    $.ajax({
        url:"http://192.9.158.199:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaStatus(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaStatus(items){
    console.log(items);
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
 
        myTable+="<tr class='bg-gray-900'>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.completed+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.cancelled+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}


function trearReporteFechas(){
    $.ajax({
        url:"http://192.9.158.199:8080/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaFechas(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaFechas(items){
    
    console.log(items);
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
 
        myTable+="<tr class='bg-gray-900'>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.startDate+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.devolutionDate+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);

}

function traerReporteClientes(){
    $.ajax({
        url:"http://192.9.158.199:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaClientes(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaClientes(items){
    console.log(items);
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
 
        myTable+="<tr class='bg-gray-900'>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.email+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.password+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.name+"</td>";
        myTable+="<td class='px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl rounded-bl'>"+items.age+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);

}