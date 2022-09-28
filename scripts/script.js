let savedPassword = '0123';

function login() {
    let ingresar = false;

    for (let i = 2; i > 0; i--) {
        let userName = prompt('Bienvenido a MercadoPago. Ingrese su nombre')
        let userPassword = prompt('Bienvenido/a ' + userName + ', ingrese su contraseña');
        if(userPassword === savedPassword){
            alert('Bienvenido a su cuenta')
            ingresar = true;
            break;
        } else{
            alert('Nombre o contraseña erroneos. Vuelva a intentar o se le enviara un correo de recuperación ')
        }
    }




    return ingresar;
}

if (login()) {
    let saldo = 2000;

    let opcion = prompt('Elija una opción: \n1- Saldo. \n2 - Enviar dinero a un amigo. \n3 - Ingresar dinero. \nPresione X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {

            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;

            case '2':
                let retiro = parseInt(prompt('Ingrese cantidad a enviar'));
                let amigo = prompt('Ingrese nombre y apellido de su amigo')
                if (retiro <= saldo) {
                    saldo -= retiro;
                    alert('Envío exitoso a '+amigo+'. Tu nuevo saldo es $ ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;

            case '3':
                let deposito = parseInt(prompt('Ingrese monto a depositar'));
                let tarjeta = prompt('Ingrese número de tarjeta')
                saldo += deposito;
                alert('Ingreso exitoso desde su tarjeta '+ tarjeta +'. Su nuevo saldo es $ ' + saldo);
                break;

            default:
                alert('Elegió una opción inválida');
                break;

        }

        opcion = prompt('Elija una opción: \n1- Saldo. \n2 - Enviar dinero a un amigo. \n3 - Ingresar dinero. \nPresione X para finalizar.');

    }

}

alert('Gracias por usar Mercado Pago');