//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    ready: function() {
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        $('#aEscribir').tap(archivos.escribir);
        $('#aLeer').tap(archivos.leer);
        $('#ncSend').tap(contactos.crear);
        $('#cListar').tap(contactos.listar);
    }
};
//$(fn.init);
$(fn.ready);