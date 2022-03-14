//      học về biến
// tên biên chỉ cần ko phạm 3 luật: 
// 1.ko bắt dầu bằng số: vd 9minh - sai
// 2.ko trùng tên riêng của hàm: vd alert - sai
// 3.ko có -: vd minh-vu - sai
// khai báo biến: var + [tên biến]
var minh2000
// có 3 cách khai báo biến:
// var: khai báo thông thường - biến kiểu giá trị gì dữ liệu kiểu đấy
// let: chỉ dùng trong 1 khối
// const: biến cố định sau khai báo, không thể chỉnh sửa


//      học về các hàm build-in hay dùng
// alert(): hiển thị thông báo lên màn
// console.[chức năng](). hiển thị ra consolelog trong console của inspect web
// confirm(): hiển thị thông báo thêm nút ok và cancel
// prompt(): thông báo có nhập tham số
// setTimeout(function(){ [1 hàm gì đáy]},[khoảng thời gian]): thực hiện hàm sau 1 khoảng thời gian
// setInterval(function(){[1 hàm gì đấy]} [khoẳng thời gian]): thực hiện lặp hàm sau độ trễ khoảng thời gian
// vd
// confirm('minh cùi bắp')
// var a='3'+20;
// alert(a)
// alert(a,a++);


//      các toán tử: như bình thường, chủ yếu đê ý pre và post fix
// pre: ++a: cộng trước rồi lưu
// post: lưu trước rồi đem tính
// toán tử nối chuỗi xảy ra khi mà 1 hạng tử là string


//      thao tác với string:
// các hàm cơ bản:
// .length : độ dài
// .indexOf([xâu con], vị trí bắt đầu tìm) : vị trí của xâu con
// .search([xâu con]) : số lượng xâu con theo biểu thức chính quy
// .slice([vị trí bắt đầu],[vị trí kết thúc]) : cắt xâu con
// .replace([xâu con cần thay],[xâu mới thay]) : thay thế xâu
// .toLowerCase() : viết thường xâu 
// .toUpperCase() : viết hoa xâu
// .trim(): loại bỏ khoảng trắng thừa
// .split('[điêm chung]') : tách xâu thành array dựa trên điểm chung của chuỗi
//vd
var tên='minh, nguyễn, vũ'
// console.log(tên.split(', '))
// .charAt([vị trí]) : lấy ra kí tự tại vị trí
// var test='Học Javascript tại F8 JS JS'
// alert(test.replaceAll('JS','minh'))


//      thao tác với số:
// toString() : đưa về dạng xâu
// toFixed([số phần thập phân]) : làm tròn theo số phần thập phân
// typeof([tham số]) : kiểm tra kiểu của tham số


//      thao tác với hàm (function)
// đây là về hàm tự định nghĩa, hàm có thể có tham số đầu vào và trả ra kết quả
// khai báo hàm như sau
function myfuck(){
    // code ở đây
    alert()
}
// gọi hàm thì đơn giản
//myfuck()
// khi khai báo hàm mà không có tham số truyền vào, khi gọi hàm lại thêm tham só thì các tham số ấy nó chính là arguments
// có 3 loại function chinh:
// declaration function: như bên trên, ko có tên nghỉ chạy
// expression function: gán function cho 1 biến
var newfunction = function(){
}


//      thao tác với object
// obj có thuộc tính(keys) và giá trị(value) ,khai báo như sau
// var ObjMinh = {
//     tên: 'Minh',
//     tuổi: 22,
//     học: 'IT',
//     muốn: 'có việc'
// }
// thêm 1 key và giá trị của nó vào obj khá dễ
// ObjMinh.email= "minhmocprovdqq@gmail.com"
// xóa 1 key cũng khá dễ
// delete ObjMinh.muốn
// object constructor: tạo bằng function
function taoMinh(ten, tuoi, nghenghiep){
    this.ten=ten;
    this.tuoi=tuoi;
    this.nghenghiep=nghenghiep;
}
var newMinh= new taoMinh('minh vu',22,'IT')
var newMinh2= new taoMinh('minh moc',23,'DEV quèn')
//thêm thuộc tính vào 1 obj đã tạo từ constuctor y hệt như trên
// object prototype: sử dụng khi định nghĩa 1 thuộc tính sử dụng chung sau khi đã tạo constructor
taoMinh.prototype.ho = 'Nguyen vu'
// console.log(newMinh)
// console.log(newMinh2)
// với object date
var date=Date() //Date() này sẽ trả lại 1 kiểu dữ liệu string
var date2=new Date() //new Date() này sẽ trả lại kiểu date, nên nó cho phép các phương thức trỏ vào các giá trị riêng như
var year=date2.getFullYear() // trả lại năm
var month=date2.getMonth()+1 // trả lại tháng
var day=date2.getDate() // trả lại ngày
// console.log(day)
// khi khai báo constructor new Date(), có thể thêm vào các tham số cần hiển thị trong () luôn
// với đối tượng Math: là 1 build in FC, dưới dây là 1 vài thuộc tính
// Math.PI : trả lại 3.14
// Math.round([số]) : làm tròn số
// Math.abs([số]) : trả về trị tuyệt đối
// Math.ceil([số]) : làm tròn trên
// Math.floor([số]) : làm tròn dưới
// Math.random() : trả về 1 số rnd <1
// .min() hoặc .max() : trả min hoặc max của 1 loạt kí tự


// vòng lặp mới: vòng for in: nhằm lấy ra các key trong 1 object,vị trí trong 1 array hay vị trí 1 kí tự của string
var ObjMinh = {
    tên: 'Minh',
    tuổi: 22,
    học: 'IT',
    muốn: 'có việc'
}
// for(var key in ObjMinh){
//     console.log(key)
// }
// với vòng for of thì nó lấy ra value
// lệnh continue sẽ làm vòng lặp chạy tiếp mà bỏ qua đoạn lệnh dưới nó
// break sẽ thoát vòng lặp khi dc thực thi


//      thao tác với mảng
var mang=['minh','dung','bach']
var output=[]
var test=['an']
// console.log(mang[1])
// .toString() : chuyển kiểu dữ liệu về chuỗi //
// .join('[khoảng cách khi nối]') : chuyển về chuỗi nhưng giữa các phần tử có khoảng cách đã nhập
// .pop() : như queue, bỏ phần tử cuỗi cùng và show ra phần tử đã bỏ
// .push('Phần tử mới') : thêm phần tử mới vào, trả lại độ dài mới
// .shift() : như pop, nhưng mà làm với phần tử đầu mảng
// .unshift() : như push, nhưng mà đưa vào đầu mảng
// .splice([điểm bắt đầu],[số lượng],'phần tử chèn') : xóa mảng theo số lượng từ phần tử bắt đầu và chèn vào phần tử chèn nếu có
// .concat([mảng phụ]) : gộp thêm 1 mảng phụ vào sau mảng chính
// output.concat(mang,test);
// console.log(mang)

//      thao tác với mảng sử dụng callback: phương thức gọi tới 1 hàm dc khai báo
// cấu trúc như sau:
/*mảng.[phương thức](function([phần tử con]){
    code ở trong này
})*/
// các phương thức bao gồm
// .foreach() => Duyệt qua từng phần tử trong mảng, không trả về gì cả
// .every() => Kiểm tra tất cả phần tử có thoả mãn điều kiện nào đó và trả về kq dạng bool. Dừng lại khi đến phần tử không thoả mãn điều kiện.
// .some() => giống every nhưng dừng khi có phần tử thỏa mãn
// .find() => tìm và trả về phần tử đầu tiên thỏa mãn điều kiện
// .filter() => tìm và trả về tất cả phần tử thỏa mãn điều kiện
// đặc biệt hơn với .map() => tạo 1 mảng mới có độ dài tương tự, chạy hàm và trả về với mỗi element trong mảng (khác forEach ở mỗi phần tạo mảng)
var arrayOfObj=[
    {
        index:1,
        name:'minh',
        age:22
    },
    {
        index:2,
        name:'Dung',
        age:22
    },
    {
        index:3,
        name:'chó dũng',
        age:'tuổi loz'
    }
]
// var res=arrayOfObj.forEach(function(nguoi){
//     console.log(nguoi)
// })
var res=arrayOfObj.map(function(nguoi){
    return nguoi
})
console.log(typeof(tên))
/* đặc biệt hơn với .reduce(function([giá trị gốc],[giá trị hiện tại]){
    code ở đây
    return [giá trị gì đấy] giá trị này sẽ được gán cho giá trị gốc ở lần tiếp theo
},[giá trị khởi tạo])*/
// reduce thực hiện mỗi khi duyệt tới 1 phần tử trong mảng, sẽ gán giá trị khởi tạo cho giá trị gốc trong lần gọi đầu tiên, sẽ trả lại giá trị của lần return cuối cùng
//  nên để giá trị khởi tạo cùng kiểu với giá trị mình muốn nhận, tránh bỏ giá trị khởi tạo


//      Phương thức .includes([giá trị tìm kiếm])
// : kiểm tra xem phần tử có trong mảng ko hoặc kí tự có trong chuỗi ko


//      Callback:
// là gọi 1 hàm bằng việc truyền nó vào 1 đối số

var age=prompt("nhập tuổi");
if(age<=14){
    console.log('Tuổi gì đòi ăn mì')
}else if(age<=21){
    console.log('Vẫn còn non')
}else{22
    console.log("già vl")
}