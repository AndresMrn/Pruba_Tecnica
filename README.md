# Pruba_Tecnica

*Puertos*

El puerto del backend siempre estará corriendo en el enlace "http://localhost:3000"
El puerto del frontend siempre estará corriendo en el enlace "http://localhost:5173"

*Librerias* 

Se hace uso de las librerias como JWT que garantiza una buena autenticacion de usuarios.
Se hace uso de la libreria como mongoose el cual permite crear una instancia de la base de datos
Se hace uso de la libreria zod para garantizar una validacion de formularios.
Se hace uso de la libreria Bcrypt para encriptar la contraseña 

En esta prueba tecnica hay ciertos puntos a mencionar y se dividiran en dos tanto en backend como en frontend 


Backend : 
Se logra hacer una autenticación mediante JWT con rutas protegidas y guardando el token en las cookies lo cual con una vez que el usuario se registre o se loguee no habra necesidad de volver a loguearse.

Se logra hacer un chat si bien faltan mejoras como por ejemplo que se renderize la persistencia de los mensajes ya que en la base de datos si los guarda. 

Se hace una encriptación de las contraseñas

Los usuarios pueden ser creados y estan a libertad de crearlos

Frontend : 

Se logra hacer una interfaz tanto de login como de registro de usuarios.

Se logra crear una interfaz que simula el streaming y que se pueda visualizar el chat 

*Consejo* 

Se recomienda crear los dos usuarios en navegadores distintos, ya que los tomará como usuarios totalmente distintos.

Si se desea chatear los dos usuarios deben dar click donde dice "Chat with group".

Muchas gracias