<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ mix('assets/css/app.css') }}" rel="stylesheet" />	

    <title>Clear - manager</title>
    @inertiaHead
</head>
<body class="bg-theme bg-theme1">
    @inertia

    <!-- JQuery js-->
    <script src="{{ asset('assets/js/jquery.min.js')}}"></script>

    <!-- Bootstrap js-->
    <script src="{{ asset('assets/js/bootstrap.js')}}"></script>

    <!-- app js -->
    <script src="{{ mix('assets/js/app.js') }}" defer></script>

    <!-- simplebar js -->
    {{-- <script src="{{ asset('assets/plugins/simplebar/js/simplebar.js') }}"></script> --}}

    <!-- sidebar-menu js -->
    <script src="{{ asset('assets/js/sidebar-menu.js') }}"></script>

    <!-- Custom scripts -->
    <script src="{{ asset('assets/js/app-script.js') }}" defer></script> 
</body>
</html>