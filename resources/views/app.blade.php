<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Clear - manager</title>    
    @viteReactRefresh
    @vite('resources/css/animate.css')
    @vite('resources/css/app-style.css')
    @vite('resources/css/icons.css')
    @vite('resources/css/pace.min.css')
    @vite('resources/css/sidebar-menu.css')

    @vite('resources/js/app.jsx')
    @inertiaHead    
</head>
<body class="bg-theme bg-theme1">
    @inertia

    <!-- JQuery js-->
    @vite('/public/assets/js/jquery.min.js')
    
    <!-- Bootstrap js-->    
    {{-- @vite('resources/js/bootstrap.js') --}}

    <!-- sidebar-menu js -->
    @vite('/public/assets/js/sidebar-menu.js')

    <!-- Custom scripts -->
    @vite('/public/assets/js/app-script.js')

</body>
</html>