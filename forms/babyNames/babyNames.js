let BabyNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Grace"]
let FavBabyNames = []
babyNames.onshow = function() {
    for (i = 0; i < BabyNames.length; i++)
        selBabyNames.addItem(BabyNames[i])
}
btnNext.onclick = function() {
    FavBabyNames.push(selBabyNames.text)
    ChangeForm(favBabyNames)
}
