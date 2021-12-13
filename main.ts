input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 4; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(500)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    Color = randint(0, 360)
    strip.setPixelColor(0, neopixel.hsl(Color, 100, 30))
    strip.show()
    basic.showNumber(Color)
})
let Color = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
