function isHeteromecic(n) {
    //check if n is a number
    if(typeof n !== 'number') return false;
    //check if n is an integer
    if(n % 1 !== 0) return false;
    //check if n is positive
    if(n < 0) return false;
    // use do while loop run at least once for n = 0 to be true
    let i = 0;
    do{
        if(i * (i + 1) === n) return true;
        i++;
    }
    while(i <= n);
    return false;
}

export default isHeteromecic;