$(document).ready(function(){
     jQuery.ajax({
        type: 'GET',
        url: 'http://tp-lens.popschool.fr/api/users/',
        crossDomain: true,
        complete: function(rawResponse) {
            users = rawResponse.responseJSON;
            users.forEach(function(user) {
                var myTr = document.createElement('tr');
                myTr.id = 'tr' + user.id;
                $('tbody').append(myTr);
                var addCell = function(data, id, myClass){
                    var myTd = document.createElement('td');
                    myTd.innerHTML = data   ;
                    myTd.id = id;
                    myTd.className = myClass;
                    $('#tr' + user.id).append(myTd);
                };


                addCell(user.id, 'id' + user.id, '');
                addCell(user.firstname, 'firstname' + user.id, '');
                addCell(user.lastname, 'lastname' + user.id, '');
                addCell('<a href="mailto:' + user.email + '">' + user.email + '</a>', 'email' + user.id, 'td-link');
                addCell(user.birthday, 'birthday' + user.id, '');
                if (user.sex == 'M') {
                    addCell('<img src="male.png" width="24px" />', 'sex' + user.id, '');
                }else {
                    addCell('<img src="female.png" width="24px" />', 'sex' + user.id, '');
                }
                addCell('<a href="' + user.github +  '">Lien</a>', 'github' + user.id, 'td-link');
                if (user.pet == 0) {
                    addCell('<img src="cross.png" />', 'pet' + user.id);
                } else{
                    addCell('<img src="pet.png" />', 'pet' + user.id);
                }
            })
        },
    });

    $('#listButton').click(function(){
        $('table').toggleClass('table-hidden');
    })

    $('#formButton').click(function(){
        $('form').toggleClass('table-hidden');
    })


});
