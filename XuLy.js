function kiemTra(){
    let canNang_raw = document.getElementById("canNang").value;
    let chieuCao_raw = document.getElementById("chieuCao").value;
    let canNang = parseInt(canNang_raw);
    let chieuCao = parseInt(chieuCao_raw);
    let ketQua;
    let bmi = canNang / ( Math.pow(chieuCao, 2) )
    if (bmi < 18) {
        ketQua = "Thiếu cân";
    } else if (bmi < 25.0) {
        ketQua = "Bình thường";
    } else if (bmi < 30.0) {
        ketQua= "Béo";
    } else {
        ketQua = "Béo phì";
    }
    document.getElementById("ketQua").innerHTML = ketQua;
}
