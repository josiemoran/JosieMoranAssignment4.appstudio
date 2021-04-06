favBabyNames.onshow = function() {
    drpNames.clear()
    console.log(FavBabyNames)
    for (i = 0; i < 5; i++)
        drpNames.addItem(FavBabyNames[0][i])
    imgPic.hidden = true
}
drpNames.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        lblOutput.value = `Your favorite baby name was ${s}.`
        imgPic.hidden = false
    }
}