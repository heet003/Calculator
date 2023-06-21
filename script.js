let array = [];
let result = 0;
let operations;
$("p#operations").hide();

$("button#operators").click(function () {
    array.push(this.innerHTML);
    operations = operations.concat(this.innerHTML);
    console.log(operations);
    console.log(array);
    array.pop();
});

$("button#numbers ").click(function () {
    $("p#screen").text(this.innerHTML);
    array.push(this.innerHTML);
    let len = (array.length);
    if (array.length === 1) {
        operations = array[0];
        $("p#screen").text(operations);
        console.log(operations);
        console.log(array);
    }
    else {
        operations = operations.concat(this.innerHTML);
        $("p#screen").text(operations);
        console.log(operations);
        console.log(array);
        array.pop();
    }
});
$("button#equal-to").click(function () {
    console.log(operations);
    console.log(typeof (operations));
    result = eval(operations);
    console.log(result);
    $("p#operations").show();
    $("p#operations").text(operations);
    $("p#screen").text(result);
    array = [];
});

$("button#clear").click(function () {
    array = [];
    result = 0;
    $("p#screen").text(0);
    $("p#operations").hide();
});


