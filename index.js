function processData(myArray) {
  if (myArray.length < 10) {
    console.log('ko du 10')
  } else {
    var max1 = Math.max.apply(null, myArray);
    var max2 = Math.max.apply(null, myArray.filter((x) => x != max1));
    var tong = max1 + max2;
    var min1 = Math.min.apply(null, myArray);
    var min2 = Math.min.apply(null, myArray.filter((x) => x != min1));
    var hieu = min2 - min1;
    console.log(tong, hieu);
  }
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input.split(' ').map(Number));
});