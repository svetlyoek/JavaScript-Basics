function gcd(num1, num2) {
    while ((num1 % num2) > 0) {
        var r = num1 % num2;
        num1 = num2;
        num2 = r;

    }
    console.log(num2);
}
gcd(15, 5);
gcd(2154, 458);