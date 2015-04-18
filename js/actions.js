var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    init: function() {
        $('#aEscribir').tap(archivos.escribir);
        $('#aLeer').tap(archivos.leer);
    }
}
$(fn.init);