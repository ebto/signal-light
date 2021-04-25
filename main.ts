input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    comment.kesu(comment.init(DigitalPin.P0, DigitalPin.P14))
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    comment.kesu(comment.init(DigitalPin.P0, DigitalPin.P14))
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    comment.kesu(comment.init(DigitalPin.P0, DigitalPin.P14))
})
basic.showString("Signal")
basic.clearScreen()
basic.forever(function () {
	
})
