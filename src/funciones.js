function ingresarItems(uno)
{
    return uno;

}
function ingresarPrecioItems(uno,precioItems)
{
    return "cantidad de items: " + uno +"   precio por item: "+ precioItems;
    
}

function seleccionarUnEstado(estado)
{
    return estado;
    
}

function selecEstadoMostrarImpuesto(estado)
{
    if(estado=="CA")
    {
        return estado + " 8.25%";
    }
    if(estado=="TX")
    {
        return estado + " 6.25%";
    }
    if(estado=="UT")
    {
        return estado + " 6.65%";
    }
    if(estado=="NV")
    {
        return estado + " 8.00%";
    }
    if(estado=="AL")
    {
        return estado + " 4.00%";
    }
    
}

function mostrarPrecioNeto(uno,precioItems)
{
    return uno*precioItems + " es el precio neto";
}
export { ingresarItems,ingresarPrecioItems,seleccionarUnEstado,selecEstadoMostrarImpuesto,mostrarPrecioNeto};