function prime_sum(prime_list){
    let sum = 0
    for(let i = 0; i < prime_list.length; i++){
        sum += prime_list[i];
    }
    return sum
}
function prime_check(x, y){
    let prime_list = [];
    for (let i = x; i <= y; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            prime_list.push(i);
        }
    }
    return prime_sum(prime_list);
}
function prime_list(x, y){
    let prime_list = [];
    for (let i = x; i <= y; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            prime_list.push(i);
        }
    }
    return prime_list;
}
function submit(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    document.getElementById('demo').innerHTML = "Các số nguyên tố trong khoảng từ 20 - 50 là: " + prime_list(a, b);
    document.getElementById('demo2').innerHTML = "Tổng các số nguyên tố trong khoảng là: " + prime_check(a, b);
}
