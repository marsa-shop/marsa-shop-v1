@extends('dashboard.master')

@section('participants_index')
    current active
@endsection

@section('content')
    @role('SuperAdmin')
    @if($title_page == 'wallet_order_edit')
        <div class="col-xs-12">
            <div class="col-xs-12">
                <div class="box-content card white">
                    <div class="card-content">
                        <table class="table table-hover no-margin">
                            <tbody>
                            <tr>
                                <td>{{ __('master.by') }}</td>
                                <td>
                                    <span>{{ $wallet_store->merchant->name }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>{{ __('master.payment_method') }}</td>
                                <td>
                                    <span>{{ $wallet_store->type_operation == 0 ? __('master.charge_account') : __('master.withdraw_from_account') }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>{{ __('master.invoice_status') }}</td>
                                <td>
                                    @if($wallet_store->status == 1)
                                        <span class="notice notice-green">{{ __('master.Verified') }}</span>
                                    @elseif($wallet_store->status == 0)
                                        <span class="notice notice-danger">{{ __('master.AwaitingVerification') }}</span>
                                    @else
                                    <span class="badge badge-warning">
                                        @if(app()->getLocale() == 'ar')
                                            تم الرفض
                                        @else
                                            Verification Refused
                                        @endif
                                    </span>
                                    @endif
                                </td>
                            </tr>
                            <tr>
                                <td>{{ __('master.store_name') }}</td>
                                <td>
                                    <span>{{ $wallet_store->store->name ?? '' }}</span>
                                </td>
                            </tr>

                            <tr>
                                <td>{{ __('master.total_price') }}</td>
                                <td>
                                    {{ $wallet_store->amount . ' $' ?? '' }}
                                </td>
                            </tr>
                            @if($wallet_store->pay_id)
                                <tr>
                                    <td>Payment ID</td>
                                    <td>
                                        {{ $wallet_store->pay_id ?? '-' }}
                                    </td>
                                </tr>
                            @endif
                            @if($wallet_store->token)
                                <tr>
                                    <td>Token</td>
                                    <td>
                                        {{ $wallet_store->token ?? '-' }}
                                    </td>
                                </tr>
                            @endif
                            @if($wallet_store->payer_id)
                                <tr>
                                    <td>Payer ID</td>
                                    <td>
                                        {{ $wallet_store->payer_id ?? '-' }}
                                    </td>
                                </tr>
                            @endif
                            <tr>
                                <td>{{ __('master.date_created') }}</td>
                                <td>
                                    <span>{{ $wallet_store->created_at }}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            @if($wallet_store->bill)
                <div class="col-xs-12">
                    <div class="box-content card white">
                        <div class="card-content">
                            @if($wallet_store->status == 0)
                                <div class="col-md-3 col-xs-12">
                                    <form method="POST" action="{{ route('dashboard.admin.wallet-update') }}">
                                        @csrf
                                        <input type="hidden" value="{{ $wallet_store->id ?? ''}}" name="id">
                                        <div class="form-group  @error('status') has-error @enderror">

                                            <input type="radio" name="status" value="1" @if($wallet_store->status == 1) checked @endif>
                                            <label> @if(app()->getLocale() == 'ar' )
                                                <span class="text-success"> الموافقة </span>
                                            @else
                                                <span class="text-success"> Agree </span>
                                            @endif </label>



                                             <input style="margin-right:100px;" type="radio" name="status" value="2" @if($wallet_store->status == 2) checked @endif>
                                            <label> @if(app()->getLocale() == 'ar' )
                                                <span class="text-danger"> الرفض </span>
                                            @else
                                                <span class="text-danger"> Refuse </span>
                                            @endif </label>

                                            @error('status')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group row mb-0 margin-top-20">
                                            <div class="col-md-12">
                                                <button type="submit" class="btn btn-primary btn-block">
                                                    {{ __('master.invoice_edit') }}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            @endif
                            <div class="@if($wallet_store->status == 0) col-md-9 col-xs-12  @else col-xs-12 @endif margin-bottom-20">
                                <img src="{{ asset(''.$wallet_store->bill)  }}" width="100%" alt="{{ $wallet_store->id }}">
                            </div>

                        </div>
                    </div>
                </div>
            @endif
        </div>
    @endif
    @endrole

@endsection
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
{{--Developed Saed Z. Sinwar--}}
