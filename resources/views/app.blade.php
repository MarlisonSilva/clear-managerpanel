<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Clear - manager</title>    
    
    @vite('resources/sass/app.scss')

    @viteReactRefresh
    @vite('resources/js/app.jsx')

    @inertiaHead    
</head>
<body class="bg-theme bg-theme1">
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

    <script>
        $(function() {
            console.log(document.getElementById('wrapper')) // não pega o wrapper

        });
    </script>
</body>
</html>