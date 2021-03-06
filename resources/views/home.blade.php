@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">        
        <div class="col-md-6">
            <div class="card reactside">

                <div class="card-header">
                    <h4>React Components</h4>
                </div>

                <div class="card-body" id="root">
                    <div id="userform"></div>
                    <div id="userdiv"></div>
                </div>

            </div>
        </div>

        <div class="col-md-6">
            <div class="card vueside">

                <div class="card-header">
                    <h4>Vue Components</h4>
                </div>

                <div class="card-body" id="app">
                    <vue-add-user-form></vue-add-user-form>
                    <vue-list-users></vue-list-users>
                </div>

            </div>
        </div>
    </div>
</div>

@endsection
