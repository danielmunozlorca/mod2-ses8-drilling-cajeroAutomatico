const users = [
  { name:'Pedro Prado' ,username: 'user1', password: '12345', saldo: 1000 },
  { name:'Gabriela Mistral' ,username: 'user2', password: '67890', saldo: 2000},
  { name:'Enrique Lafourcade' ,username: 'user3', password: '11122', saldo: 800}
];

alert('Bienvenido a su Banca en Línea');

let usuarioValido = null;

while (!usuarioValido) {

const userId = prompt("Ingrese su Id de usuario: ");
const pass = prompt("Ingrese su clave: ");


  usuarioValido = users.find(u => u.username === userId && u.password === pass);
  
  if (!usuarioValido) {
    // Mostrar las opciones disponibles si el usuario es válido
    alert("El usuario y/o la contraseña son incorrectos, favor intente nuevamente");
  }
}  

alert(`Bienvenido, ${usuarioValido.name}`);

let opcionSeleccionada = null;

while (opcionSeleccionada !== "4") {

 opcionSeleccionada = prompt("Seleccione una opción:\n1. Ver Saldo\n2. Realizar giro\n3. Realizar deposito\n4. Salir");
  
    switch(opcionSeleccionada) {
      case "1":
        // Realizar la operación de ver saldo
        alert(`Su saldo actual es de: $ ${usuarioValido.saldo}`);
        break;
      case "2":
        // Realizar la operación de depositar
        const giro = parseInt(prompt(`Su saldo actual es $${usuarioValido.saldo} \n Ingrese el monto que desea girar: `));
        if (giro > usuarioValido.saldo) {          
          alert("El monto ingresado es mayor que el saldo actual. Por favor, ingrese un monto menor o igual.");
        } else {          
          usuarioValido.saldo -= giro;
          alert(`Giro realizado. Su nuevo saldo es de ${usuarioValido.saldo}.`);
        }
      break;
      case "3":
        // Realizar la operación de depósito
        const depo = parseInt(prompt(`Su saldo actual es $${usuarioValido.saldo} \n Ingrese el monto que desea depositar: `));
        usuarioValido.saldo += depo;
        alert(`Deposito realizado. Su nuevo saldo es ${usuarioValido.saldo}.`);
      break
      case "4":
        alert("Gracias por preferirnos, hasta pronto"); 
      break; 
      default:
        // Mostrar un mensaje de error si la opción seleccionada no es válida
        alert("La opción seleccionada no es válida.");
    }
   } 
  

