
  function sum(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var sum = Number(val1) + Number(val2);
    document.getElementById('total').value = sum;
  }
  function sub(){
    var val3 = document.getElementById('val3').value;
    var val4 = document.getElementById('val4').value;
    var sum = Number(val3) - Number(val4);
    document.getElementById('total2').value = sum;
  }
  function mul(){
    var val5 = document.getElementById('val5').value;
    var val6 = document.getElementById('val6').value;
    var sum = Number(val5) * Number(val6);
    document.getElementById('total3').value = sum;
  }