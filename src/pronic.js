function isHeteromecic(n) {
    //check if n is a number
    if(typeof n !== 'number') return false;
    //check if n is an integer
    if(n % 1 !== 0) return false;
    //check if n is positive
    if(n < 0) return false;
    // do while loop
    let i = 0;
    do{
        if(i * (i + 1) === n) return true;
        i++;
    }
    while(i <= n);
    // for(let i = 0;i < n; i++)
    // {
    //     if(i * (i + 1) === n) return true;
    // }
    return false;
}

export default isHeteromecic;