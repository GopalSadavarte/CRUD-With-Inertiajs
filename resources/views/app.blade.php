<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx',`resources/js/Pages/{$page['component']}.jsx`])
</head>
<body class="select-none">
    @inertia
</body>
</html>
