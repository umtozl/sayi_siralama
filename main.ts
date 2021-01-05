input.onButtonPressed(Button.A, function () {
    for (let value of sayilar) {
        basic.showNumber(value)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let value of sayilar) {
        siralanmis_sayilar[value] = value
    }
    cop = siralanmis_sayilar.removeAt(0)
    resim.scrollImage(1, 200)
    basic.clearScreen()
    for (let value of siralanmis_sayilar) {
        basic.showNumber(value)
        basic.clearScreen()
        basic.pause(200)
    }
})
let resim: Image = null
let cop = 0
let siralanmis_sayilar: number[] = []
let sayilar: number[] = []
sayilar = [3, 5, 2, 4, 1]
siralanmis_sayilar = [0]
cop = 0
resim = images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    # . # . # . # . # .
    . . . . . . . . . .
    . . . . . . . . . .
    `)
