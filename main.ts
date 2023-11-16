input.onButtonPressed(Button.A, function () {
    if (health < 3) {
        health += 1
        bark.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    }
    if (health > 3) {
        health += 1
        teenbark.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    }
    if (health > 6) {
        health += 1
        adultbark.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    }
})
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
input.onButtonPressed(Button.B, function () {
    basic.showString("Rock, Paper, Scisssors, ")
    hand = randint(1, 3)
    if (health < 3) {
        if (hand == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            Happy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        } else if (hand == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(200)
            Happy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        } else if (hand == 2) {
            basic.showIcon(IconNames.Scissors)
            basic.pause(200)
            Happy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        }
    }
    if (health > 3) {
        if (hand == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            teen_happy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        } else if (hand == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(200)
            teen_happy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        } else if (hand == 2) {
            basic.showIcon(IconNames.Scissors)
            basic.pause(200)
            teen_happy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        }
    }
    if (health > 6) {
        if (hand == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            adulthappy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        } else if (hand == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(200)
            adulthappy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        } else if (hand == 2) {
            basic.showIcon(IconNames.Scissors)
            basic.pause(200)
            adulthappy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    // When shaked, the Microbit takes a bath. The changes in image indicate bubbles building up around the pet, & the giggle sound represents bubbles.
    if (health < 3) {
        health += 1
        Bathe.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        bathe1.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        bathe2.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        Happy.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    if (health > 3) {
        health += 1
        teenbathe.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        tb2.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        tb3.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        teen_happy.showImage(0)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        if (health > 6) {
            health += 1
            ab.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
            ab2.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
            ab3.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
            adulthappy.showImage(0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.stopAnimation()
    music.play(music.stringPlayable("A E D F E G B C5 ", 151), music.PlaybackMode.InBackground)
    basic.showString("HEALTH IS" + health)
})
let hand = 0
let ab3: Image = null
let ab2: Image = null
let ab: Image = null
let tb3: Image = null
let tb2: Image = null
let teenbathe: Image = null
let bathe2: Image = null
let bathe1: Image = null
let Bathe: Image = null
let af2: Image = null
let af1: Image = null
let adulthappy: Image = null
let tfeed2: Image = null
let tfeed1: Image = null
let teen_happy: Image = null
let feeding_2: Image = null
let feeding_1: Image = null
let Happy: Image = null
let adultbark: Image = null
let teenbark: Image = null
let bark: Image = null
let health = 0
health = 2
let Dead = images.createImage(`
    . . . . .
    # # . # #
    . . # . .
    . # # # .
    . . . # .
    `)
let grave = images.createBigImage(`
    . . # # # . . . . .
    . # # # # # . # . #
    . # # # # # . . . .
    . # # # # # . # # #
    . # # # # # . # . #
    `)
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
bark = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . # . .
    `)
teenbark = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    . # . # .
    . . # . .
    `)
adultbark = images.createImage(`
    # # . # #
    . . # . .
    . # # # .
    . # . # .
    . . # . .
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
Bathe = images.createImage(`
    . . . . #
    . # . # .
    . . # . .
    . # # # .
    # . . . .
    `)
bathe1 = images.createImage(`
    # . . # #
    . # . # #
    . . # . .
    # # # # .
    # # . . #
    `)
bathe2 = images.createImage(`
    # # . . #
    . # # # #
    . # # # .
    # # # # #
    # . . . #
    `)
teenbathe = images.createImage(`
    # . . . .
    . # . # .
    . . . . .
    . . # . .
    . # # # #
    `)
tb2 = images.createImage(`
    # # . # #
    . # . # .
    . . # . .
    . # # . #
    # # # # #
    `)
tb3 = images.createImage(`
    # # . # #
    # # # # .
    . # # # #
    # # # # #
    . # # # .
    `)
ab = images.createImage(`
    # # . # #
    # # . # #
    . . # . .
    . . # . .
    . # # # .
    `)
ab2 = images.createImage(`
    # # # # #
    # # . # #
    # . # . #
    . . # . .
    # # # # #
    `)
ab3 = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    # # # # #
    `)
let baby_expression = images.createImage(`
    # . . . #
    # # . # #
    . . # . .
    . # # # .
    . . . . .
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
    if (health == 0) {
        Dead.showImage(0)
        basic.showString("I DIED")
        grave.showImage(0)
        music.play(music.createSoundExpression(WaveShape.Noise, 3297, 0, 185, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
}
loops.everyInterval(1000, function () {
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
loops.everyInterval(60000, function () {
    health += -1
})
