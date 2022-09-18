# wawe
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <meta http-equiv="X-UA-Compatible" content="ie=edge" /> -->
    <title>JAVASCRIPT LESSON</title>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet"> -->
    <style>
        body {
            padding: 50px;
        }
    </style>
</head>

<body>
    <h1>Бургер меню</h1>
    <p><input class="menu" type="checkbox" checked disabled data-cost="10" data-kkal="75">Булочка</p>
    <hr>
    <h2>Наповнення</h2>
    <p><input class="menu" type="checkbox" checked data-cost="20" data-kkal="200">Котлета</p>
    <p><input class="menu" type="checkbox" data-cost="12" data-kkal="50">Сир</p>
    <p><input class="menu" type="checkbox" data-cost="8" data-kkal="20">Салат</p>
    <p><input class="menu" type="checkbox" data-cost="2" data-kkal="67">Огірок</p>
    <p><input class="menu" type="checkbox" data-cost="4" data-kkal="100">Помідори</p>
    <hr>
    <h2>Соуси</h2>
    <p><input class="menu" type="checkbox" checked data-cost="5" data-kkal="10">Томатний кетчуп</p>
    <p><input class="menu" type="checkbox" data-cost="5" data-kkal="5">Гірчиця</p>
    <p><input class="menu" type="checkbox" data-cost="5" data-kkal="12">Майонез</p>
    <p><input class="menu" type="checkbox" data-cost="10" data-kkal="36">Сичуанський соус</p>
    <hr>
    <h3>І того</h3>
    <p>Калорійність: <span id="kkal"></span> Цена: <span id="cost"></span></p>
    <button id="rezult">Счет</button>


    <script src="js/main.js"></script>

</body>

</html>
