//archivos
var archivos = {
    escribir: function() {
        //var cont = $('#aSend').val();
        //alert(cont);
        //Pedimos permiso al acceso de archivos
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, archivos.accesoAlSistema, archivos.error);
    },
    accesoAlSistema: function(sa) {//Resive el sistema de archivos
        sa.root.getFile('practica.txt',{create: true, exclusive: false},archivos.accesoArchivo,archivos.error);
    },
    accesoArchivo: function(ea) { //Recibe la entrada del archivo
        ea.createWriter(archivos.escritor,archivos.error);
    },
    escritor: function(e) {//Obtenemos el escritor como objeto
        var cont = $('#aSend').val();
        e.write(cont);
        e.onwriteend = function(evt) {
            navigator.notification.alert('El archivo fre creado satisfactoriamente', null,'Archivos','Aceptar');
        }
    },
    error: function(err) {
        navigator.notification.alert('Error: ' + err.code, null, 'Archivos'. '¿Ya qué?');
    },
    leer: function() {
        //Permiso al acceso de archivos
        window.requestFileSystem(LocalFileSystem.PERSISTENT,0,archivos.accesoSistema,archivos.error);
    },
    accesoSistema: function(sa) {
        sa.root.getFile('practica.txt',null,archivos.accesoFile,archivos.error);
    },
    accesoFile: function(ea) {
        ea.file(archivos.lector,archivos.error);
    },
    lector: function(a) {
        //Creamos la instancia del lector
        var lector = new FileReader();
        lector.readAsText(a);
        lector.onloadend = function(evt) {
            $('#aGet').text(evt.target.result);
        }
    }
}