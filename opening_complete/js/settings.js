const resetGamesScore = () =>{
    console.log("resetGamesScore")

    const mgSettings = getById("mgSettings");
    const tttSettings = getById("tttSettings");
    const wamSettings = getById("wamSettings");

    if(mgSettings.checked){
        localStorage.removeItem("mgHighScore");
        console.log("localStorage.removeItem('mgHighScore')");
    };
    if(tttSettings.checked){
        localStorage.removeItem("");
        console.log("localStorage.removeItem('')");
    };
    if(wamSettings.checked){
        localStorage.removeItem("whakamoleHighScore");
        console.log("localStorage.removeItem('whakamoleHighScore')");
    };

    window.location.reload();

}

