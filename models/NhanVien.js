function NhanVien(){
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.chucVu = '';
    this.heSoChucVu = '';
    this.luongCoBan = '';
    this.soGioLamTrongThang = '';
    this.tinhTongLuong = function (){
        return this.luongCoBan * this.soGioLamTrongThang ;
    };
    this.xetXepLoai = function(){
        if(this.soGioLamTrongThang < 50){
            return 'Làm biếng';
        }else{
            if(this.soGioLamTrongThang >=50 && this.soGioLamTrongThang < 100){
                return 'Được đó';
            }else if(this.soGioLamTrongThang >= 100 && this.soGioLamTrongThang <=150){
                return 'Tốt';
            }else{
                return 'Siêu tốt';
            }
        }
    };
}