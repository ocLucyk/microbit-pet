input.onButtonPressed(Button.AB, function () {
    if (health < 3) {
        led.stopAnimation()
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 880, 620, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            feeding_1.showImage(0)
            feeding_2.showImage(0)
            Happy.showImage(0)
        }
        health += 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B A G C5 B A B ", 220), music.PlaybackMode.UntilDone)
    }
    if (health < 3) {
        led.stopAnimation()
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 880, 620, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            feeding_1.showImage(0)
            feeding_2.showImage(0)
            Happy.showImage(0)
        }
        health += 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B A G C5 B A B ", 220), music.PlaybackMode.UntilDone)
    }
    if (health > 3) {
        led.stopAnimation()
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 880, 620, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            tfeed1.showImage(0)
            tfeed2.showImage(0)
            teen_happy.showImage(0)
        }
        health += 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B A G C5 B A B ", 220), music.PlaybackMode.UntilDone)
    }
    if (health > 3) {
        led.stopAnimation()
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 880, 620, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            tfeed1.showImage(0)
            tfeed2.showImage(0)
            teen_happy.showImage(0)
        }
        health += 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B A G C5 B A B ", 220), music.PlaybackMode.UntilDone)
    }
    if (health > 6) {
        led.stopAnimation()
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 880, 620, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            af1.showImage(0)
            af2.showImage(0)
            adulthappy.showImage(0)
        }
        health += 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B A G C5 B A B ", 220), music.PlaybackMode.UntilDone)
    }
    if (health > 6) {
        led.stopAnimation()
        for (let index = 0; index < 3; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 880, 620, 255, 255, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            af1.showImage(0)
            af2.showImage(0)
            adulthappy.showImage(0)
        }
        health += 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B A G C5 B A B ", 220), music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("A E D F E G B C5 ", 151), music.PlaybackMode.InBackground)
    basic.showString("HEALTH IS" + health)
})
let af2: Image = null
let af1: Image = null
let adulthappy: Image = null
let tfeed2: Image = null
let tfeed1: Image = null
let teen_happy: Image = null
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
teen_happy = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . # . #
    . # # # .
    `)
tfeed1 = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . # # # .
    `)
tfeed2 = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . . # . .
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
    # # # # #
    . . # . .
    . # # # .
    `)
adulthappy = images.createImage(`
    # # . # #
    # # . # #
    . . # . .
    # . # . #
    . # # # .
    `)
af1 = images.createImage(`
    # # . # #
    # # . # #
    . . # . .
    . # . # .
    . # # # .
    `)
af2 = images.createImage(`
    . . . . .
    # # . # #
    . . # . .
    . . # . .
    . # # # .
    `)
if (health > 3) {
    normal_1 = Teen
    normal_2 = teen2
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
}
if (health > 6) {
    Teen = adult
    teen2 = adult2
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
}
loops.everyInterval(1000, function () {
    if (input.buttonIsPressed(Button.AB)) {
        led.stopAnimation()
    }
    if (health < 3) {
        if (Math.randomBoolean()) {
            normal_1.showImage(0)
        } else {
            normal_2.showImage(0)
        }
    }
    if (health < 3) {
        if (Math.randomBoolean()) {
            normal_1.showImage(0)
        } else {
            normal_2.showImage(0)
        }
    }
    if (health > 3) {
        if (Math.randomBoolean()) {
            Teen.showImage(0)
        } else {
            teen2.showImage(0)
        }
    }
    if (health > 3) {
        if (Math.randomBoolean()) {
            Teen.showImage(0)
        } else {
            teen2.showImage(0)
        }
    }
    if (health > 6) {
        if (Math.randomBoolean()) {
            adult.showImage(0)
        } else {
            adult2.showImage(0)
        }
    }
    if (health > 6) {
        if (Math.randomBoolean()) {
            adult.showImage(0)
        } else {
            adult2.showImage(0)
        }
    }
})
loops.everyInterval(3600000, function () {
    health += -1
})
