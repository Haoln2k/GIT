function bai9(){
    var x = (document.getElementById('numB9').value);
    var text1 = x.split("");
    var text2 = text1.reverse();
    var text3 = text2.join("");
    // document.getElementById('ketquaB9').value =text3;
    if(x == text3){
        document.getElementById('ketquaB9').value = "Doi xung";
    }
    else{
        document.getElementById('ketquaB9').value = "khong doi xung";
    }
   
}
function bai23_Cach1(){
    var a =(document.getElementById('numB23').value);
    a = a.split(",");
    var n = a.length;
    a.sort(function(a,b){
        return a - b;
    });  
    var max = 0;
    var dem = 0;
    var pt;
    for(var i =0; i<n; i++)
    {
        if(a[i] == a[i +1])
        {
           dem++;
           if(dem > max)
           {
               max = dem;
               pt = a[i];
           }
        }
        else{
            dem = 1;
        }
    }
    document.getElementById('ketquaB23').value = "Số :" + pt + " xuất hiện nhiều nhất:" + max;
}
function bai23_Cach2(){
    var a =(document.getElementById('numB23').value);
    a = a.split(",");
    var n = a.length;
    a.sort(function(a,b){
        return a - b;
    });  
    var m1 = [];
    var m2 = [];
    var tam;
    for(var i =0; i<n; i++)
    {
        const f = a[i];
        if(f !== tam)
        {
            m1.push(f);
            m2.push(1);
        }
        else{
            m2[m2.length - 1]++;
        }
        tam = f;
    }
    let maxB = Math.max(...m2);
    let indexMax = m2.indexOf(maxB);
    return m1[indexMax];
}
function bai22(){
    var a =(document.getElementById('numB22').value);
    a = a.split(",");
    var n = a.length;
    a.sort(function(a,b){
        return a - b;
    });  
    var maxB22 = a[n-1];
    var min = a[0];
    var tong = 0;
    for(var i =0; i<n; i++)
    {
        tong += parseInt(a[i]);
    }
    document.getElementById('ketquaB22').value = "Max: " + maxB22 + " Min:" + min + " AVG :" + (tong/(n)).toFixed(3);
    // document.getElementById('ketquaB22').value = a;
}
function bai24(){
    var a =(document.getElementById('numB24').value);
    a = a.split(",");
    var n = a.length;
    var b = [];
    for(var i =0; i<n; i++)
    {
        let dem = 0;
       for(var j = 1; j <= a[i]; j++)
       {
         if(a[i]%j == 0)
           {
              dem++;
           }
       }
       if(dem == 2)
           {
              b.push(a[i]);
           }
    }
    // console.log(b);
    document.getElementById('ketquaB24').value = b;
}
function bai25(){
    var a =(document.getElementById('numB25').value);
    a = a.split(",");
    var n = a.length;
    var b = [];
    for(let i =0; i<n; i++ )
    {
        b.push(Math.pow(a[i],2));
    }
    document.getElementById('ketquaB25').value = b;

}
function bai26(){
    var a =(document.getElementById('numB26').value);
    a = a.split(",");
    var n = a.length;
    var k = document.getElementById('numB26_2').value;
    var b = [];
    for(let i =0; i<n; i++ )
    {
        if(a[i] == a[i + 1])
        {
            document.getElementById('ketquaB26').value = "Khong dk nhap trung gia tri";
            return;
        }
        else{
            if((parseInt(a[i]) + 1 == k))
            {
                b.push(a[i]);
            }
            else{
                if(parseInt(a[i]) - 1 == k)
                {
                    b.push(a[i]);
                }
            }
        }
    }
    document.getElementById('ketquaB26').value = b;
}
function chuanHoa(chuoi){
   chuoi = chuoi.toLowerCase();
   chuoi = chuoi.split(" ");
   var n = chuoi.length;
   for(var i =0; i<n; i++)
   {
       let chuoiTam = chuoi[i].split("");
       let m = chuoiTam.length;
       chuoiTam[0] = chuoiTam[0].toUpperCase();
       chuoi[i] = chuoiTam.join("");
   }
   chuoi = chuoi.join(" ");
   return chuoi;
}
function bai27(){
    var students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "duong tHuy"
        },
        {
            id: "T3HXX2",
            firstName: "hA",
            lastName: "do tHi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "miNH",
            lastName: "Nguyen Nhat"
        }
    ];
    var n = students.length;
    var b = [];
    for(let i =0; i<n; i++)
    {            
        students[i].firstName = chuanHoa(students[i].firstName);
        students[i].lastName = chuanHoa(students[i].lastName);
        if((students[i].firstName).search("a") > 0 || (students[i].firstName).search("A") > 0)
        {
            if((students[i].firstName).length >= 3)
            {
                 b.push(students[i]);
            }
        }
    }
    console.log(b);     
}
// bai27()
function bai29(){
    var students = [
        {
            id: "T3HXX1",
            firstName: "Ngan",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ]
    console.log("Mang ban dau:");
    console.log(students);
    students = students.sort(function(a, b){
        let x = a.firstName.toLocaleLowerCase();
        let y = b.firstName.toLocaleLowerCase();
        if(x > y)
        { 
            return 1;
        }
        if(x<y)
        {
            return -1;
        }
    })
    console.log("Mang sau khi sap xep:");
    console.log(students);
    // for(var i =0; i<n; i++)
    // {

    // 
}
bai29()
