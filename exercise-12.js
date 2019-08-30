// Logic Challenge - Konversi Menit
function konversiMenit(menit) {
    // you can only write your code here!
    var jam = Math.floor(menit / 60); 
    if (String(jam).length < 2){
        jam = '0' + jam
    }
    var mnt = menit % 60;
    if (String(mnt).length < 2){
        mnt = '0' + mnt
    }
    return jam + ':' + mnt
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00