input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        if (Math.randomBoolean()) {
            feeding_1.showImage(0)
        } else {
            feeding_2.showImage(0)
        }
    }
    Happy.showImage(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("HEALTH IS" + health)
})
let feeding_2: Image = null
let feeding_1: Image = null
let Happy: Image = null
let health = 0
health = 1
let normal_1 = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # # # .
    . . . . .
    `)
let normal_2 = images.createImage(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . # # # .
    `)
Happy = images.createImage(`
    . . . . .
    . # . # .
    # . # . #
    . # # # .
    . . . . .
    `)
feeding_1 = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . # . .
    `)
feeding_2 = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # # # .
    . . . . .
    `)
let Teen = images.createImage(`
    . # . # .
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    `)
let teen2 = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . . # . .
    . # # # .
    `)
let teen_happy = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . # . #
    . # # # .
    `)
let adult = images.createImage(`
    # # . # #
    # # . # #
    . . # . .
    . . # . .
    . # # # .
    `)
let adult2 = images.createImage(`
    . . . . .
    # # . # #
    . . # . .
    . . # . .
    . # # # .
    `)
let adulthappy = images.createImage(`
    # # . # #
    # # . # #
    . . # . .
    # . # . #
    . # # # .
    `)
if (health > 3) {
    normal_1 = Teen
}
loops.everyInterval(1000, function () {
    if (input.buttonIsPressed(Button.AB)) {
        led.stopAnimation()
    }
    if (Math.randomBoolean()) {
        normal_1.showImage(randint(-1, 1))
    } else {
        normal_2.showImage(randint(-1, 1))
    }
})
loops.everyInterval(60000, function () {
    health += -1
})
