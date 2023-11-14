@extends('dashboard.master')
@section('affiliatees_withdraw')
    current active
@endsection

<style>
    
    .status-label{
        font-size: 12px;
        padding: 7px;
        color: white;
    }
    .status-0{
        background-color: #2196f3;
    }
    .status-1{
        background-color: #8bc34a;
    }
    .status-2{
        background-color: #e45353;
    }
</style>

@section('content')
    <div class="row">
        <div class="container mt-5">

            @if(!empty(session('message')))
                    <div class="alert alert-success">
                        <ul>
                            <li>{{  session('message') }}</li>
                        </ul>
                    </div>
            @endif

            <div class="container mt-5">

                @if(!empty(session('message')))
                        <div class="alert alert-success">
                            <ul>
                                <li>{{  session('message') }}</li>
                            </ul>
                        </div>
                @endif
                
                
                <div class="col-xs-12">
                    
                    <div class="box-content bordered primary ">
                        <table class="table table-bordered" style="width:100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>{{ __('master.name') }}</th>
                                <th>{{ __('master.withdraw_value') }}</th>
                                <th>{{ __('master.status') }}</th>
                                <th>{{ __('master.date') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if($withdraw_orders)
                                @forelse($withdraw_orders as $order)
                                    <tr class="text-center">
                                        <td class="">
                                           {{ $order->id }}
                                        </td>
                                        <td class="">
                                           {{ $order->Withdrawable->affiliaters->username }}
                                        </td>
                                        <td class="">
                                           {{ $order->withdraw_value }}
                                        </td>
                                        <td class="">
                                           {!! $order->status_order !!}
                                        </td>
                                        <td class="">
                                           {{ $order->created_at }}
                                        </td>
                                        
                                       
                                    </tr>
                                @empty
                                @endforelse
                            @endif
                            </tbody>
                        </table>
                    </div>
             
                </div>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.23/js/dataTables.bootstrap.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/autofill/2.3.5/js/dataTables.autoFill.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/autofill/2.3.5/js/autoFill.bootstrap.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.bootstrap.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.colVis.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.html5.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.print.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/fixedcolumns/3.3.2/js/dataTables.fixedColumns.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.7/js/dataTables.responsive.js"></script>
    <script>
        $(document).ready(function() {
            $('.table').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: 'تصدير الي أكسيل',
                        exportOptions: {
                            columns: [ 0,2,3,4,5 ]
                        }
                    },{
                        extend: 'colvis',
                        text: 'العواميد الظاهرة'
                    }
                ],
                
                responsive: {
                    details: {
                        display: $.fn.dataTable.Responsive.display.modal( {
                            header: function ( row ) {
                                var data = row.data();
                                return 'تفاصيل';
                            }
                        } ),
                        renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                            tableClass: 'table'
                        } )
                    }
                },
                "order": [[ 0, "desc" ]],
                "language": {
                    "url": "{{(app()->getLocale() == 'ar') ? '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json' : '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json'}}"
                }
            });
        } );
    </script>
@endsection


