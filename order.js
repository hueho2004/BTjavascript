var arr = [];

function save() {
  var a = {
    cus_name: document.getElementById('name').value,
    id: document.getElementById('id').value,
    prdname: document.getElementById('prdname').value,
    qty: document.getElementById('qty').value,
    price: document.getElementById('price').value,
  };
  
  arr.push(a);
  localStorage.setItem('listArr', JSON.stringify(arr));
  show(); // Gọi hàm show() sau khi lưu dữ liệu vào Local Storage
}

function show() {
  var storedArr = JSON.parse(localStorage.getItem('listArr'));
  var html = '';
  
  if (storedArr) {
    for (var i = 0; i < storedArr.length; i++) {
      var n = i + 1;
      html += "<tr>";
      html += "<td>" + n + "</td>";
      html += "<td>" + storedArr[i].cus_name + "</td>";
      html += "<td>" + storedArr[i].id + "</td>";
      html += "<td>" + storedArr[i].prdname + "</td>";
      html += "<td>" + storedArr[i].qty + "</td>";
      html += "<td>" + storedArr[i].price + "</td>";
      html += "<td>" + (parseFloat(storedArr[i].qty) * parseFloat(storedArr[i].price)) + "</td>";
      html += "</tr>";
    }
  }
  
  document.getElementById('tbl').innerHTML = html;
}

function reset(){
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('prdname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}