            /* Erick Vazquez
            Ejercicio final del Capitulo 1 del libro, You dont know JavaScript edición 2015 (Pag 26)
            Calculadora para la compra de telefonos por un usuario y su calculo de Impuestos */
            
            const PrecioTelefono = 99.99;
            const IVA = 0.16;
            const Presupuesto = 200;
            const Accesorios = 9.99;

            var nomina = 303.91
            var cantidad = 0;

            function calcImpuestos(cantidad) {
                return cantidad * IVA;
            }

            //Cantidad TOTAL  a imprimir en el ticket
            function PrecioFinal(cantidad) {
                return "$" + cantidad.toFixed( 2 ) + "pesos";
            }

            //Seguir comprando telefonos mientras tengas dinero 
            while (cantidad < nomina){

                cantidad = cantidad + PrecioTelefono;

                if (cantidad <= Presupuesto) {
                    cantidad = cantidad + Accesorios;        
                }
            }

            // Para el pago de impuestos 
            cantidad = cantidad + calcImpuestos(cantidad);

            console.log("El Total a pagar es: " +   (cantidad) );

            if (cantidad > nomina) {
                console.log("No te alcanza este telefono");
            }
