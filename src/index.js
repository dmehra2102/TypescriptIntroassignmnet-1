var fullname = "Deepanshu Mehra";
var age = 19;
var isFetching = false;
var number_array = [2, 1, 3, 4, 6];
var str_array = ["Deepanshu", "mehra", "delhi"];
var tuple;
tuple = ["deepanshu", true];
var Info;
(function (Info) {
    Info["User"] = "Deepanshu";
    Info["SuperUser"] = "Manish";
    Info["Admin"] = "Tanisha";
    Info["SuperAdmin"] = "Venu";
})(Info || (Info = {}));
function Product(a, b) {
    return a * b;
}
Product(3, 1);
function Division(a, b) {
    (a / b);
}
Division(9, 3);
function Name(a) {
    console.log(a);
}
Name("Deepanshu");
