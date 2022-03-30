var calculator= {
    name: 'fx570',
    price: 300000,
    brand: 'casio',
    date: new Date(2000,01,01),
    add: function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    },
    mul: function(a,b){
        return a*b
    },
    div: function(a,b){
        return a/b
    },
    SqrEquation: function(a,b,c){
        let res=[];
        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            res.push(root1);
            res.push(root2)
        }
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);
        }
        else {
            return res
        }
    },
    Perimeter: function(a){
        return a*2*Math.PI
    },
    MarriageCal: function(age1,age2){
        if(age==null) return null
    }
}