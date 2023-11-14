@extends('dashboard.master')
@section('affiliatees_show')
    current active
@endsection


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
            <div class="col-xs-12">
                <div class="box-content bordered primary ">
                    <table class="table table-bordered" style="width:100%">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>{{ __('master.name') }}</th>
                            <th>رقم الواتس</th>
                            <th>كود الدعوة</th>
                            <th>{{ __('master.count_inviters') }}</th>
                            <th>{{ __('master.value_profits') }}</th>
                            <th>{{ __('master.date') }}</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            @if($affiliters)
                                @forelse($affiliters as $affiliter)
                                    <tr class="text-center">
                                        <td>{{ $affiliter->id }}</td>
                                        <td class="">
                                           {{ $affiliter->user->name ?? null }}
                                        </td>
                                        <td class="">
                                           {{ $affiliter->phone_whatsapp ?? ($affiliter->user->mobile ?? null)  }}
                                        </td>
                                        <td class="">
                                           {{ $affiliter->code_affiliate ?? 'لم يتوفر حتى الان'  }}
                                        </td>
                                        <td class="">
                                           {{ $affiliter->count ?? 0  }}
                                        </td>
                                        <td class="">
                                           {{ $affiliter->value_profits ?? 0  }}
                                        </td>
                                        <td class="">
                                           {{ $affiliter->created_at }}
                                        </td>
                                        <td class="">
                                            @if($affiliter->status == 0 )
                                               <a href="{{ url('dashboard/admin/marketplace/affiliates/order/status/'.($affiliter->id ?? null)).'/1' }}" class="btn btn-sm btn-success"> قبول</a>
                                               <a href="{{ url('dashboard/admin/marketplace/affiliates/order/status/'.($affiliter->id ?? null)).'/2' }}" class="btn btn-sm btn-danger"> رفض</a>
                                            @elseif($affiliter->status == 1)
                                               <a href="https://wa.me/{{ $affiliter->phone_whatsapp }}/?text={{ $affiliter->message_whatsapp }}" class="btn btn-sm btn-primary"> ارسال التفاصيل</a>
                                            @elseif($affiliter->status == 2)
                                                <label>مرفوض </label>
                                            @endif
                                           <a href="{{ url('dashboard/admin/affiliater/'.($affiliter->id ?? null)) }}" class="btn btn-sm btn-info"> {{ __('master.more_details') }}</a>
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
