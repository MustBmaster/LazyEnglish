// bài 1
function oneInNoOut(a){
    console.log(a)
}
function noInOneOut(){
    return null
}
function oneInOneOut(a){
    return a
}

// bài 2
// a
function UCLN(a,b){
    if(b==0) return a;
    else return UCLN(b,a%b)
}
// b
function inputValidation(a){
    if(typeof(a)=='number'&&a>0) return true
    return false
}

function DienTichTamGiac(a,b,c){
    var p=(a+b+c)/2,res;
    if(inputValidation(a)||inputValidation(b)||inputValidation(c)){
        res=Math.sqrt(p*(p-a)*(p-b)*(p-c))
        return res
    }
    return null;
}
// c
function Max(){
    var a=[]
    var n=prompt("nhập vào số lượng phần tử")
    for(var i=0;i<n;i++){
        a[i]=Number(prompt("nhâp vào số"))
    }
    var max=a[0]
    for(var i=1;i<n;i++){
        if(a[i]>=max) max=a[i]
    }
    return max
}
var c=DienTichTamGiac(6,5,6)
console.log(c)
