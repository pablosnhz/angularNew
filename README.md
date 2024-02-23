# AngularChangeDetection

ChangeDetectionStrategy.OnPush
Default y onPush, el cual default vamos a tener cambios tanto en el controlador como en la vista que podria mostrarse con un setInterval por consola, en cambio el onPush solo va a reflejar la activacion una vez iniciada solo se va a mostrar por la consola los cambios.
[me resulto identico al ondestroy de cierta forma
pensar en ChangeDetectionStrategy.OnPush como una forma de limitar la actualización y renderización de un componente, mientras que ngOnDestroy() es un método del ciclo de vida de Angular que se utiliza para realizar tareas de limpieza antes de que un componente sea destruido]

para controlar valores constantes. //
detach con detectChanges metiende el uso de una lista que tira constante resultado con ChangeDetectorRef, eso es lo que nos permite mandan diferentes tipos de resultados en este caso son datos de una api que tira nombres randoms desacoplamos el component para luego mostrar los cambios mediante un interval con el detectChanges cada 3 segundos se van a estar actualizando los clientes...

uso de DETACH y REATTACH. //
detach sigue generando valores mientras que reattach deja de mandar los valores aunque por consola se sigue generando.
generamos un provider el cual va a tener una funcion la cual nos va a devolver con datos random el valor del bitcoin, se podria decir que esos datos random seria el precio que va cambiando del bitcoin. declaramos el provider en el constructor de forma public para reflejar el precio random en el template, como controlar el flujo de datos que se muestran de forma continua? con detach y reattach, el cual vamos a hacer uso de los mismos declarando en el constructor private \_ref: ChangeDetectorRef para que reattach() mantiene trayendo los datos random pero detach() lo detiene pero se sigue generando por consola.
Primera vez haciendo uso de inputs: ['enVivo'] que declare con el set para vincularlo con el componente principal mediante un input de tipo checkbox dentro del mismo un ngmodel de tipo boolean para detener el flujo de datos a mostrar el valor random.

NgZone
Proceso que se puede ver reflejado tanto en la vista como no. Para este caso hicimos un contador en porcentaje de 0 a 100% dentro del NgZone es parecido al ejemplo anterior el cual se van a ver reflejado los cambios en el template como en consola y tambien para activarlo pero que se vea solo en consola utilizamos el this.\_ngZone.runOutsideAngular con la funcion de incremento que se ejecuta, ejecuta osea que si se hace en el ngZone el cambio es rapido pero por consola se ve reflejado todo el progreso y para cuando termine ejecute this.\_ngZone.run esto mismo que digo se va a mostrar en consola. Lo ultimo de lo que hable por ejemplo pasa de 0 por 100% no se muestra el proceso pero cambia, en la consola si se va a ver reflejado y se va a mostrar como sube de 0 a 100.

ASYNC PIPE
