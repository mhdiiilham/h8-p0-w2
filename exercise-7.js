// 1. Menyusun Barisan Bintang
var rows1 = 5
for(var i = 0; i < 5; i++){
    console.log('*')
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
for(var i = 0; i < rows2; i++){
    var str = ''
    for(var j = 0; j < rows2; j++){
        str = str + '*'
    }
    console.log(str)
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var str = ''
for(var i = 0; i < 5; i++){
    str = str + '*'
    console.log(str)
}
