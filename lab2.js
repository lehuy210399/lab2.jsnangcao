<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li></li>
    </ul>
    <script>
        var user = [{
            id: 1,
            name: "Le Van A",
            gendar: 1
        }, {
            id: 2,
            name: "Le Thi B",
            gendar: 2
        }, {
            id: 3,
            name: "Le Van C",
            gendar: 1
        }, {
            id: 4,
            name: "Le Thi D",
            gendar: 2,
        }];

        // const a = user.find();
        // const b = user.filter(el => el.id = 2);
        // // const c = user.map()
        // console.log(a);
        var a = [];
        var b = a.filter(k => k.gendar = "1");
        console.log(b);
    </script>

</body>

</html>
