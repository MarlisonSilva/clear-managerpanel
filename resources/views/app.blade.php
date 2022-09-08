<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'CLEAR') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        @vite('resources/sass/app.scss')

        <style>
            .dropdown-toggle-nocaret::before {
                display: none !important;
            }
        </style>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="bg-theme bg-theme1 font-sans antialiased">
        @inertia
        
        <!-- JQuery js-->
        {{-- @vite('/public/assets/js/jquery.min.js') --}}
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
        
        <!-- Bootstrap js-->    
        {{-- @vite('resources/js/bootstrap.js') --}}
        @vite('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
        
        <!-- sidebar-menu js -->
        @vite('resources/assets/js/sidebar-menu.js')

        <!-- Custom scripts -->
        @vite('resources/assets/js/app-script.js')
        {{-- @vite('public/assets/js/app-teste.js') --}}

        {{-- @vite('public/assets/js/app-teste.js') --}}
        {{-- <script src="/public/assets/js/app-teste.js"></script> --}}
        {{-- <script src="{{ asset('assets/js/app-teste.js') }}" defer></script>  --}}

    </body>
</html>
