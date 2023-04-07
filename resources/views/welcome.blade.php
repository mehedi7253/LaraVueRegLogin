<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}">
        @vite(['resources/js/app.js', 'resources/css/app.css'])
    </head>
    <body class="antialiased">
        <div id="app">
            <app-component></app-component>
        </div>

         @vite('resources/js/app.js')
    </body>
</html>