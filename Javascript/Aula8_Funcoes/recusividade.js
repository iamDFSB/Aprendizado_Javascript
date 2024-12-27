function recursiva(num){
    if (num > 10) return;
    console.log(num);
    num++;
    recursiva(num);
}

recursiva(1);

