// bài 1
//a
function Bai1A(){
    for(var i=100;i>0;i--){
        console.log(i)
    }
}
//b
function Bai1B(n){
    let sum=0;
    if(n<=2) return 0;
    else{
        for(let i=1;i<=n;i++){
            sum+=n/(n*(n+1));
        }
    }
}

// bài 2
function Bai2(n){
    console.log("In bảng nhân")
    if(n<1||n>10){
        console.log("Giá trị không hợp lệ")
    }else{
        for(var i=1;i<=10;i++){
            console.log(n+" * "+i+" = "+n*i)
        }
    }
}

// bài 3
function Bai3(m,n){
    let Line="";
    for(let i=0;i<m;i++){
        Line+="*";
    }
    for(let i=0;i<n;i++){
        console.log(Line)
    }
}

// bài 4
function Bai4(m){
    let Line="";
    for(let i=0;i<m;i++){
        Line+="*"   
        console.log(Line)  
    }
}

// bài 5
function Bai5(){
    let m=82
    n=prompt("nhập số")
    if(n!=m) Bai5();
    else alert("Đoán mò giỏi đấy")
}
// Bai5();

