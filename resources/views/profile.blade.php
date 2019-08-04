@extends('layouts.app')

@section('content')
<div class="container">

    <h2>Hi @php echo strtok(Auth::user()->name, " "); @endphp. Welcome to your profile...</h2>

    <div class="row">
        <div class="alert-info rounded-l-full rounded-r-full p-3 mt-3 mb-3 center announce">
            I probably won't get around to building this up as an actual profile page as I think it might get a bit domain-specific, and I don't want to be creating work in having to pull large chunks out again before getting down to work on a new project.
        </div>
    </div>
    
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card reactside">
                <div class="card-header"><h4>React Profile Components</h4></div>

                <div class="card-body">
                    {{-- React components --}}
                </div>
                
            </div>
        </div>

        <div class="col-md-6">
            <div class="card vueside">
                <div class="card-header"><h4>Vue Profile Components</h4></div>

                <div class="card-body" id="app">
                    {{-- Vue components --}}
                </div>

            </div>
        </div>
    </div>

</div>

@endsection
