export function capSID(){
    // tao 4 số đuôi nhay từ 1000 đến 9999 và lặp lại
    const SoHienTai = JSON.parse(localStorage.getItem('number'))
    if (SoHienTai === null || SoHienTai === undefined ) {
       var SoMoi = 1000
       localStorage.setItem('number','1000')
    }else if(SoHienTai === 9999){
        var SoMoi = 1000
    }else { 
        var SoMoi = SoHienTai + 1
    }
    localStorage.setItem('number',JSON.stringify(SoMoi))
    
    var ngayHomNay = new Date();
    // Lấy ngày, tháng và năm từ đối tượng Date
    var ngay = ngayHomNay.getDate();
    var thang = ngayHomNay.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    var nam = ngayHomNay.getFullYear() % 100; // Lấy 2 chữ số cuối cùng của năm
    // Đảm bảo ngày và tháng có hai chữ số
    ngay = ngay < 10 ? '0' + ngay : ngay;
    thang = thang < 10 ? '0' + thang : thang;
    
    // Tạo chuỗi ddmmyy
    const SID = `${ngay}${thang}${nam}${SoMoi}`;
    return SID
    }