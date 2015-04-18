//Contactos
var contactos = {
    crear: function() {
        var nombre = $('#ncNom').val();
        var tel = $('#ncTel').val();
        var mail = $('#ncMail').val();
        
        var name = new ContactName();
        name.givenName = nombre;
        name.familyName = 'Practica';
        
        //var phones = new array();
        var phones = [];
        phones[0] = new ContactField('home',tel,true);
        phones[1] = new ContactField('work','2221277410',false);
        
        var mails = [];
        mails[0] = new ContactField('personal',mail,false);
        mails[1] = new ContactField('work','prueba@pu.com',true);
        
        //alert(nombre + ' ' + tel + ' ' + mail);
        var contacto = {
            'displayName': nombre,
            'nickname': nombre,
            'name': name,
            'phoneNumbers': phones,
            'emails': mails
        }
        var miContacto = navigator.contacts.create(contacto);
        miContacto.save(contactos.guardado,contactos.error);//Este metodo puede o no llevar paremetros
    },
    guardado: function() {
        navigator.notification.alert('Contacto guardado satisfactoriamente', null,'Contactos','Gracias');
    },
    error: function(err) {
        navigator.notification.alert('Error: '+error.code,null,'Contactos','Aceptar');
    },
    listar: function() {
        var filtro = ['*'];
        var opc = new ContactFindOptions();
        opc.filter = '';
        navigator.contacts.find(filtro,contactos.lista,contactos.error,opc);
    },
    lista: function(c) {
        $('#cMostrar').html('');
        var cont = 0;
        for(i=0;i<c.length; i++){
            var nom = c[i].name.formatted;
            var tel = c[i].tel[0].value;
            cont++;
            $('#cMostrar').append('<li><a href="tel:'+tel+'">'+nom+'</a></li>');
        }
        if(cont==0)
            $('#cMostrar').html('<li>Sin leer contactos</li>');
    }
}