basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
    basic.showLeds(`
        . # . # .
        # # . . #
        . # # # #
        . # # # .
        . # . . #
        `)
    basic.showLeds(`
        . # . . #
        # # . . #
        . # # # #
        . # # # .
        # . . # .
        `)
    basic.showIcon(IconNames.Happy)
})
