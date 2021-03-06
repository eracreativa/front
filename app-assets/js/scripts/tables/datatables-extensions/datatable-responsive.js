/*=========================================================================================
    File Name: datatables-responsive.js
    Description: Responsive Datatable
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {

   reloadTables();
});

function reloadTables(){

    /***********************************
     *       Configuration option       *
     ***********************************/

    $('.dataex-res-configuration').DataTable({
        responsive: true
    });

    /********************************
     *       `new` constructor       *
     ********************************/

    var tableConstructor = $('.dataex-res-constructor').DataTable({

        "paging": false
    });

    new $.fn.dataTable.Responsive(tableConstructor);

}