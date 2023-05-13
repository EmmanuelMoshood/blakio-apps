const restrictValue = (id) => {
    const fields = ["fOneAtk", "fOneDef", "fOneSpd"].includes(id) ? [
        "fOneAtk", "fOneDef", "fOneSpd"
    ] : ["fTwoAtk", "fTwoDef", "fTwoSpd"];
    const max = 100;
    const a = parseFloat(getById(fields[0]).value) || 0;
    const b = parseFloat(getById(fields[1]).value) || 0;
    const c = parseFloat(getById(fields[2]).value) || 0;
    if((a + b + c > max) || (a < 0)){
        getById(id).value = 0;
    }
}
