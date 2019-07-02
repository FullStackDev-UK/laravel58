@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">

        <div class="col-md-6">
            <div class="card reactside">
                <div class="card-header"><h4>React Profile Components</h4></div>

                <div class="card-body">
                    <div id="userform"></div>
                </div>
                
            </div>
        </div>

        <div class="col-md-6">
            <div class="card vueside">
                <div class="card-header"><h4>Vue Profile Components</h4></div>

                <div class="card-body" id="app">
                    <vue-add-user-form></vue-add-user-form>
                </div>

            </div>
        </div>

    </div>
</div>

@endsection
