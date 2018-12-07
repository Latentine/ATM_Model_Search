$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#example thead th.search').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );



    // DataTable
     $('#example').DataTable( {
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value="euqal">&equals;</option><option value="greater-than">&gt;</option><option value="less-than">&lt;</option><option value="equal-or-greater-than">&#8925;</option><option value="equal-or-less-than">&#8924;</option></select>')
                    .appendTo( $(column.header()) )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

//                column.data().unique().sort().each( function ( d, j ) {
//                    select.append( '<option value="'+d+'">'+d+'</option>' )
//                } );
            } );
        }
    } );


    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.header() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );