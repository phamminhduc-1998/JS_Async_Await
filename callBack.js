// callback function

// Vấn đề
/**
 * Khi xin số ĐT
 * Thì phải mất thời gian 1s để lấy
 * Nhưng trong lúc chờ thì ham xinSoDT đã return
 * Ket qua tra ve là undefined : Khong lay duoc SDT
 */
// const xinSoDT = () => {
//     let SDT;

//     console.log('xin so Nam');

//     console.log('Dang xin so thang Nam');

//     setTimeout(() => {
//         SDT = 123456;
//         console.log('Da tim thay so thang Nam');
//     }, 1000);

//     // return SDT;

//     // bad
//     // setTimeout(() => {
//     //     console.log(SDT);
//     // }, 1500)

//     //good
//     // callback function


// }


// const SDTDaXin = xinSoDT();
// console.log(SDTDaXin);

// xinSoDT();

/**
 * Đây là cách giải quyết bad
 * Cách giải quyết là trong lúc nó mất 1s thì mình chờ nó thêm 1.5s để lấy được SDT
 */


/**
 * Cách gải quyết good
 * 
 */


// good
// callback function

// const xinSoDT = (hamGoiLai) => {
//     let SDT;

//     console.log('xin so Nam');

//     console.log('Dang xin so thang Nam');

//     setTimeout(() => {
//         SDT = 123456;
//         console.log('Da tim thay so thang Nam');
//         hamGoiLai(SDT);
//     }, 1000);

// }

// const sauKhiNhanDuocSDT = soDTDaNhan => {
//     console.log(`day la so thang Nam ${soDTDaNhan}`)
// }

// xinSoDT(sauKhiNhanDuocSDT);



// 2: vấn đề có qua nhieu ham goi lai
const xinSoDT = (hamGoiLai) => {
    let SDT;

    console.log('xin so Nam');

    console.log('Dang xin so thang Nam');

    setTimeout(() => {
        SDT = 123456;
        console.log('Da tim thay so thang Nam');
        hamGoiLai(SDT, goiChoNam);
    }, 1000);

}

const sacPin = (SDT, hamGoiLaiKhiXacPin) => {
    console.log('Đợi tí đang xạc pin');
    setTimeout(() => {
        console.log('Đã xạc pin');
        hamGoiLaiKhiXacPin(SDT);
    }, 2000)
}

const goiChoNam = (SDT) => {
    console.log(`Đang gọi cho nam số : ${SDT}`)
}

xinSoDT(sacPin);