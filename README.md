# AngularChangeDetection

# CHANGE DETECTION

ChangeDetectionStrategy.OnPush
Default y onPush, el cual default vamos a tener cambios tanto en el controlador como en la vista que podria mostrarse con un setInterval por consola, en cambio el onPush solo va a reflejar la activacion una vez iniciada solo se va a mostrar por la consola los cambios.
[me resulto identico al ondestroy de cierta forma
pensar en ChangeDetectionStrategy.OnPush como una forma de limitar la actualización y renderización de un componente, mientras que ngOnDestroy() es un método del ciclo de vida de Angular que se utiliza para realizar tareas de limpieza antes de que un componente sea destruido]

para controlar valores constantes. //
detach con detectChanges metiende el uso de una lista que tira constante resultado con ChangeDetectorRef, eso es lo que nos permite mandan diferentes tipos de resultados en este caso son datos de una api que tira nombres randoms desacoplamos el component para luego mostrar los cambios mediante un interval con el detectChanges cada 3 segundos se van a estar actualizando los clientes...
Pusimos dataList publica para traer los datos del get Data el cual los trae para empezar y estan fijos, hasta hacer uso de detach() no cambia de nombre pero si lo mantiene fijo pero si va a haber cambios porque luego hacemos uso del intervalo que eso si va a hacer que los nombres cambien mostrandose en pantalla. si cambio de detach a reattach sacando el interval van a aparecer valores nuevos cada vez que recargo la pagina.

uso de DETACH y REATTACH. //
detach sigue generando valores mientras que reattach deja de mandar los valores aunque por consola se sigue generando.
generamos un provider el cual va a tener una funcion la cual nos va a devolver con datos random el valor del bitcoin, se podria decir que esos datos random seria el precio que va cambiando del bitcoin. declaramos el provider en el constructor de forma public para reflejar el precio random en el template, como controlar el flujo de datos que se muestran de forma continua? con detach y reattach, el cual vamos a hacer uso de los mismos declarando en el constructor private \_ref: ChangeDetectorRef para que reattach() mantiene trayendo los datos random pero detach() lo detiene pero se sigue generando por consola.
Primera vez haciendo uso de inputs: ['enVivo'] que declare con el set para vincularlo con el componente principal mediante un input de tipo checkbox dentro del mismo un ngmodel de tipo boolean para detener el flujo de datos a mostrar el valor random.

NgZone
Proceso que se puede ver reflejado tanto en la vista como no. Para este caso hicimos un contador en porcentaje de 0 a 100% dentro del NgZone es parecido al ejemplo anterior el cual se van a ver reflejado los cambios en el template como en consola y tambien para activarlo pero que se vea solo en consola utilizamos el this.\_ngZone.runOutsideAngular con la funcion de incremento que se ejecuta, ejecuta osea que si se hace en el ngZone el cambio es rapido pero por consola se ve reflejado todo el progreso y para cuando termine ejecute this.\_ngZone.run esto mismo que digo se va a mostrar en consola. Lo ultimo de lo que hable por ejemplo pasa de 0 por 100% no se muestra el proceso pero cambia, en la consola si se va a ver reflejado y se va a mostrar como sube de 0 a 100.

ASYNC PIPE
Me sirvio para poder iterar un observable sin la necesidad de tener que estar declarando una variable la cual despues iba a tener que iterar por los numeros, con el items$ | async me resulto hacerlo de una forma mas sencilla.Recibo mediante un input los datos del behaviorSubject y con el next lo paso para que se pueda mostrar con el pipe async.

# DIRECTIVAS ng g d

de Atributo ATTR, nos permitio cambiar los colores mediante el uso de HostListener y para que los cambios se vean reflejados creamos la funcion la cual va a estar conectada con la funcion cambiarColor la cual contiene el elementRef que nos va a dar la opcion para manipular los colores en el html. asociamos el input appHighLight para asociar los colores y que se muestre reflejado el color seleccionado cuando pasamos el mouse.
