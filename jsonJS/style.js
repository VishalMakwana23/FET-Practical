var mydata = [

    {
        'id':'1',
        'name':'vishal',
        'age':'23',
        'birthdate':'10/5/1221'
    },
    {
        'id':'2',
        'name':'jay',
        'age':'23',
        'birthdate':'10/5/1221'
    },
    {
        'id':'3',
        'name':'raj',
        'age':'23',
        'birthdate':'10/5/1221'
    }

 ]

 createtable(mydata)

 function createtable(data){

     var table = document.getElementById('dataTable')

     for( var i = 0; i < data.length; i++) {

         var row = `<tr>
                         <td>${data[i].id}</td>
                         <td>${data[i].name}</td>
                         <td>${data[i].age}</td>
                         <td>${data[i].birthdate}</td>
             
                    </td>`

         table.innerHTML += row
     }

 }
