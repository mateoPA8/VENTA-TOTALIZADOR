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

function calcularPrecioTotal(estado,uno,precioItems)
 { 
    if(estado=="CA")
    {
        if(uno>1000 && uno<3000)
        {
            return uno*precioItems+(uno*precioItems*0.0825)-(uno*precioItems*0.03);
        }
        if(uno>3000 && uno<7000)
        {
            return uno*precioItems+(uno*precioItems*0.0825)-(uno*precioItems*0.05);
        }
        if(uno>7000 && uno<10000)
        {
            return uno*precioItems+(uno*precioItems*0.0825)-(uno*precioItems*0.07);
        }
        if(uno>10000 && uno<30000)
        {
            return uno*precioItems+(uno*precioItems*0.0825)-(uno*precioItems*0.10);
        }
        if(uno>30000)
        {
            return uno*precioItems+(uno*precioItems*0.0825)-(uno*precioItems*0.15);
        }
    }
    if(estado=="TX")
    {
        if(uno>1000 && uno<3000)
        {
            return uno*precioItems+(uno*precioItems*0.0625)-(uno*precioItems*0.03);
        }
        if(uno>3000 && uno<7000)
        {
            return uno*precioItems+(uno*precioItems*0.0625)-(uno*precioItems*0.05);
        }
        if(uno>7000 && uno<10000)
        {
            return uno*precioItems+(uno*precioItems*0.0625)-(uno*precioItems*0.07);
        }
        if(uno>10000 && uno<30000)
        {
            return uno*precioItems+(uno*precioItems*0.0625)-(uno*precioItems*0.10);
        }
        if(uno>30000)
        {
            return uno*precioItems+(uno*precioItems*0.0625)-(uno*precioItems*0.15);
        }
    }
    if(estado=="UT")
    {
        if(uno>1000 && uno<3000)
        {
            return uno*precioItems+(uno*precioItems*0.0665)-(uno*precioItems*0.03);
        }
        if(uno>3000 && uno<7000)
        {
            return uno*precioItems+(uno*precioItems*0.0665)-(uno*precioItems*0.05);
        }
        if(uno>7000 && uno<10000)
        {
            return uno*precioItems+(uno*precioItems*0.0665)-(uno*precioItems*0.07);
        }
        if(uno>10000 && uno<30000)
        {
            return uno*precioItems+(uno*precioItems*0.0665)-(uno*precioItems*0.10);
        }
        if(uno>30000)
        {
            return uno*precioItems+(uno*precioItems*0.0665)-(uno*precioItems*0.15);
        }
    }
    if(estado=="NV")
    {
        if(uno>1000 && uno<3000)
        {
            return uno*precioItems+(uno*precioItems*0.08)-(uno*precioItems*0.03);
        }
        if(uno>3000 && uno<7000)
        {
            return uno*precioItems+(uno*precioItems*0.08)-(uno*precioItems*0.05);
        }
        if(uno>7000 && uno<10000)
        {
            return uno*precioItems+(uno*precioItems*0.08)-(uno*precioItems*0.07);
        }
        if(uno>10000 && uno<30000)
        {
            return uno*precioItems+(uno*precioItems*0.08)-(uno*precioItems*0.10);
        }
        if(uno>30000)
        {
            return uno*precioItems+(uno*precioItems*0.08)-(uno*precioItems*0.15);
        }
    }
    if(estado=="AL")
    {
        if(uno>1000 && uno<3000)
        {
            return uno*precioItems+(uno*precioItems*0.04)-(uno*precioItems*0.03);
        }
        if(uno>3000 && uno<7000)
        {
            return uno*precioItems+(uno*precioItems*0.04)-(uno*precioItems*0.05);
        }
        if(uno>7000 && uno<10000)
        {
            return uno*precioItems+(uno*precioItems*0.04)-(uno*precioItems*0.07);
        }
        if(uno>10000 && uno<30000)
        {
            return uno*precioItems+(uno*precioItems*0.04)-(uno*precioItems*0.10);
        }
        if(uno>30000)
        {
            return uno*precioItems+(uno*precioItems*0.04)-(uno*precioItems*0.15);
        }
    }
}


export { ingresarItems,ingresarPrecioItems,seleccionarUnEstado,selecEstadoMostrarImpuesto,mostrarPrecioNeto,calcularPrecioTotal};