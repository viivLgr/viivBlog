function compare(times) {
    let a = { key: {} };
    let temp = a;
    for(let i = 0; i < times; i++) {
        let tmp = temp['key'];
        tmp['key'] = {};
        temp = tmp;
    }
    temp['key']['key'] = 'surprise';
    console.log(temp);
}

compare(30);