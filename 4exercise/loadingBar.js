function loadingBar(progress) {

    let progressBarArr = [];

    for (let i = 1; i <= 10; i++) {
        if (i <= progress / 10) {
            progressBarArr.push("%");
        } else {
            progressBarArr.push(".");
        }
    }

    if (progress < 100) {
        console.log(`${progress}% [${progressBarArr.join("")}]`);
        console.log("Still loading...");
    } else {
        console.log(`${progress}% Complete!`);
        console.log(`[${progressBarArr.join("")}]`);
    }

}
loadingBar(30);
loadingBar(50);
loadingBar(100);
