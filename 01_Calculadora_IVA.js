    /* Erick Vazquez
    Ejercicio de Capitulo 1 del libro, You dont know JavaScript edición 2015 (Pag 26)
    Calculadora para la compra de teleofonos por un usuario
    Calculo de Impuestos y total a Pagar por el cliente */
    const PrecioTelefono = 500;
    const IVA = 0.16;
    const Presupuesto = 250;
    const Accesorios = 50;

    var nomina = 1000;
    var cantidad= 0;

    function calcImpuestos(cantidad) {
        return PrecioTelefono * IVA;
    }

    //Cantidad TOTAL  a imprimir en el ticket
    function PrecioFinal(cantidad) {
        return "$" + amount.toFixed( 2 );
    }

    //Seguir comprando telefonos mientras tengas dinero 
    while (nomina < PrecioTelefono){

        cantidad = cantidad + PrecioTelefono;

        if (cantidad <= Presupuesto) {
            cantidad = cantidad + Accesorios;        
        }
    }

    // Para el pago de impuestos 
    //cantidad = cantidad + calcImpuestos(cantidad);
    console.log("El Total a pagar es: " + PrecioFinal(cantidad));
    if (amount > nomina) {
        console.log("No te alcanza el saldo");
    }
