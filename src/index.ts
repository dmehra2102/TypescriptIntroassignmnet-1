let fullname: string = "Deepanshu Mehra";
let age: number = 19;
let isFetching: boolean = false;
let number_array : number[] = [2,1,3,4,6];
let str_array: string[] = ["Deepanshu","mehra","delhi"];
let tuple : [string,boolean];
tuple = ["deepanshu",true];

enum Info {
    User = "Deepanshu",
    SuperUser = "Manish",
    Admin = "Tanisha",
    SuperAdmin= "Venu"
}

function Product(a:number , b:number):number {
    return a*b;
}

Product(3,1);

function Division(a:number , b:number) {
     (a/b);
}
Division(9,3);

function Name(a:string):void {
    console.log(a);
}

Name("Deepanshu");