const xinSoDT = () => {
    let SDT;

    console.log('xin so Nam');

    console.log('Dang xin so thang Nam');

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay;

        setTimeout(() => {
            daTimThay = true;

            if (daTimThay) {
                SDT = 123456789;
                console.log(`Day roi da tim thay ${SDT}`);
                resolve(SDT);
            }
            else {
                reject("khong tim thay so nam");
            }
        }, 1000)
    })

    return thaoTacTimKiem;

}


// xac pin
const xacPin = () => {
    console.log("Đợi tí đang xạc");
    const thaoTacXacPin = new Promise((resolve, reject) => {
        let pinHong;
        setTimeout(() => {
            pinHong = false;

            if (!pinHong) {
                console.log(`Xac pin đầy`);
                resolve(console.log("Pin ok"));
            }
            else {
                reject("Pin hỏng");
            }
        }, 1500)
    })

    return thaoTacXacPin;
}

// gọi cho nam 
const goiChoNam = (SDT) => {
    console.log(`Dang nói chuyện với nam tại số ${SDT}`);
}




xinSoDT()
    .then(SDT => {
        xacPin()
            .then(() => { goiChoNam(SDT) })
            .catch((e) => { console.log(e) })
    })
    .catch(err => { console.log(err) });


