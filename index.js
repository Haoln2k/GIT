// FUNCTION-----

function show() {
    // mã thực thi
}
show(); //gọi hàm

/*
1. đối tượng argument
- xuất hiện trong function
*/
function writeLog(thamSo) {
    console.log('function chứa ',thamSo);
}
// writeLog('đối số');

/*
    for in sẽ lặp lại các thuộc tính của một đối tượng( truy cập đến giá trị index trong array,)
     hàm for of -lặp lại các giá trị của đối tượng đó.
    -arguments la array
*/

function Loop() {
    var str = '';
    for(var param of arguments) {
        str += `${param} - `;
    }
    console.log((str));
}
// Loop(1,2,3);

// return trong ham
// var isConfirm = confirm('message ?');

function Sum(a,b){ 
    return a.toString() +b.toString();
}
let result = Sum(2, ' xin chao');
// console.log(result);

function func() {
    function func1() {
        console.log('xin chao');
    }
    func1();
}
// func();

var showFun = function() {
    // expression fuction

}
setTimeout(function() {
    // expression fuction
});

var myObject = {
    myFunction : function() {
        // expression fuction
    }
}


