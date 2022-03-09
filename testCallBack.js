// học về call back
// tái tạo hàm trong prototype của Array
var test=['minh','dung','son']
// tái tạo forEach()
Array.prototype.NewForEach=function(callback){
    let arrLength=this.length
    for(let i=0;i<arrLength;i++){
        let res= callback(this[i])
    }
    return res
}
test.NewForEach(function(ten){
    console.log(ten)
})
// tái tạo find
// Array.prototype.NewFind=function(callback){
//     let arrLength=this.length
//     for(let i=0;i<arrLength;i++){
//         if(this[i]==)
//     }
// }


// khá khó tạm bỏ qua