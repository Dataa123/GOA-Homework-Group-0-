function sum(lst){
    let sum = 0;
    
    for (const i of lst){
        sum += i;
    };

    return sum;
};

export { sum };