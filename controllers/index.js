var arrNhanVien = [];
document.querySelector('#btnThemNhanVien').onclick = function (){
    var nhanVien = new NhanVien ();
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVien.soGioLamTrongThang = document.querySelector('#soGioLam').value;
    var s1ChucVu = document.querySelector('#chucVu');
    var option = s1ChucVu.selectedIndex;
    nhanVien.chucVu = s1ChucVu[option].innerHTML;

    var kiemTra = new Validation();

    // xét các trường hợp
    var valid = true ;
    //xét rổng
    valid &= kiemTra.kiemTraRong(nhanVien.maNhanVien,'#errorRongMaNhanVien','Mã nhân viên') & kiemTra.kiemTraRong(nhanVien.tenNhanVien,'#errorRongTenNhanVien','Tên nhân viên') & kiemTra.kiemTraRong(nhanVien.luongCoBan,'#errorRongLuongCoBan','Lương cơ Bản') & kiemTra.kiemTraRong(nhanVien.soGioLamTrongThang,'#errorRongSoGioLam','Số giờ làm')

    // xét ký tự
    valid &= kiemTra.kiemTraKyTu(nhanVien.tenNhanVien,'#errorKyTuTenNhanVien','Tên nhân viên')
    
    //kiểm tra số
    valid &= kiemTra.kiemTraSo(nhanVien.maNhanVien,'#errorSoMaNhanVien','Mã nhân viên') & kiemTra.kiemTraSo(nhanVien.luongCoBan,'#errorSoluongCoBan','Lương cơ bản') & kiemTra.kiemTraSo(nhanVien.soGioLamTrongThang,'#errorsoGioLam','Số giờ làm')

    //kiểm tra độ dài
    valid &= kiemTra.kiemTraDoDai(nhanVien.maNhanVien,'#errormaxlengthMinlenghtMaNhanVien',4,6,'Mã sinh viên');

    // kiểm tra giá trị
    valid &= kiemTra.kiemTraGiaTri(nhanVien.luongCoBan,'#errormaxlengthMinlenghtluongCoBan',1000000,20000000,'Lương cơ bản') & kiemTra.kiemTraGiaTri(nhanVien.soGioLamTrongThang,'#errormaxlengthMinlenghtsoGioLam',50,150,'Số giờ làm');
    if(!valid){
        return;
    }

    arrNhanVien.push(nhanVien);
    console.log('nhanVien: ', nhanVien);
    redarTableNhanVien(arrNhanVien);

}
function redarTableNhanVien(arrNV){
    var hienThi = '';
    for(var index = 0 ; index < arrNV.length ; index ++){
        var nv = arrNV[index];
        var nhanVien = new NhanVien();
        nhanVien.maNhanVien = nv.maNhanVien
        nhanVien.tenNhanVien = nv.tenNhanVien
        nhanVien.luongCoBan = nv.luongCoBan
        nhanVien.soGioLamTrongThang = nv.soGioLamTrongThang
        nhanVien.chucVu = nv.chucVu
        var trNhanVien = `
        <tr>
            <td>${nhanVien.maNhanVien}</td>
            <td>${nhanVien.tenNhanVien}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.luongCoBan}</td>
            <td>${nhanVien.tinhTongLuong()}</td>
            <td>${nhanVien.soGioLamTrongThang}</td>
            <td>${nhanVien.xetXepLoai()}</td>
            <td> <button class = "btn btn-danger" onclick = "xoaNhanVien('${nhanVien.maNhanVien}')">Xóa</button>
            <button class = "btn btn-primary" onclick = "chinhNhanVien('${nhanVien.maNhanVien}')">Chỉnh sửa</button> </td>        
        </tr>
        `;
        hienThi += trNhanVien;
    }
    document.querySelector('#tblNhanVien').innerHTML = hienThi;
}

// xóa
function xoaNhanVien(maNhanVien){
    for(var index = 0; index < arrNhanVien.length ; index ++){
        var nhanVien = arrNhanVien[index];
        if(nhanVien.maNhanVien === maNhanVien){
            arrNhanVien.splice(index, 1)
        }
    }
    redarTableNhanVien(arrNhanVien);
}
// chỉnh sửa
function chinhNhanVien(maNhanVienChinh){
    alert(maNhanVienChinh)
    for(var index = 0 ; index < arrNhanVien.length ; index++){
        var nhanVien = arrNhanVien[index];
        if(nhanVien.maNhanVien === maNhanVienChinh){
            document.querySelector('#maNhanVien').value = nhanVien.maNhanVien;
            document.querySelector('#tenNhanVien').value = nhanVien.tenNhanVien;
            document.querySelector('#chucVu').value = nhanVien.chucVu;
            document.querySelector('#luongCoBan').value = nhanVien.luongCoBan;
            document.querySelector('#soGioLam').value = nhanVien.soGioLamTrongThang;
        }
    }
    document.querySelector('#maNhanVien ').disabled = true;
    document.querySelector('#btnThemNhanVien').disabled = true;
    document.querySelector('#btnLuuNhanVien').disabled = false;

}

// lưu nhân viên
document.querySelector('#btnLuuNhanVien').onclick = function (){
    var nhanVienCapNhat = new NhanVien();
    nhanVienCapNhat.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVienCapNhat.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVienCapNhat.heSoChucVu = document.querySelector('#chucVu').value;
    nhanVienCapNhat.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVienCapNhat.soGioLamTrongThang = document.querySelector('#soGioLam').value;
    console.log('nhanVienCapNhat: ', nhanVienCapNhat);
    var s1ChucVu = document.querySelector('#chucVu');
    var option = s1ChucVu.selectedIndex;
    nhanVienCapNhat.chucVu = s1ChucVu[option].innerHTML;

    
    for(var index = 0 ; index < arrNhanVien.length ; index++){
        var nhanVienTrongMang = arrNhanVien[index];
        if(nhanVienTrongMang.maNhanVien === nhanVienCapNhat.maNhanVien){
            nhanVienTrongMang.maNhanVien = nhanVienCapNhat.maNhanVien;
            nhanVienTrongMang.tenNhanVien = nhanVienCapNhat.tenNhanVien;
            nhanVienTrongMang.chucVu = nhanVienCapNhat.chucVu;
            nhanVienTrongMang.luongCoBan = nhanVienCapNhat.luongCoBan;
            nhanVienTrongMang.soGioLamTrongThang = nhanVienCapNhat.soGioLam;
            console.log('nhanVienTrongMang: ', nhanVienTrongMang);
        }
    }
    redarTableNhanVien(arrNhanVien);
    document.querySelector('#maNhanVien').disabled = false;
    document.querySelector('#btnThemNhanVien').disabled = false;
    document.querySelector('#btnLuuNhanVien').disabled = true;
}