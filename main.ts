/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Oct 2025
 * This program shows LEDs artound the perimeter while loops in action
*/
// variales
let sprite: game.LedSprite = null
let loopCounter: number = 0
// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)



input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    
    
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1 
    }
    sprite.delete()

    loopCounter = 0
    sprite = game.createSprite(5, 0)
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
    }
    sprite.delete()
    
    loopCounter = 5
    sprite = game.createSprite(5, 5)
    while (loopCounter >= 0) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(0, 5)
    while (loopCounter >= 0) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
    }
    sprite.delete()

})


// when "B" is pressed, the pixels move around the outside edge of the LED matrix
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()


    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
    }
    sprite.delete()

    loopCounter = 0
    sprite = game.createSprite(0, 5)
    while (loopCounter <= 5) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(5, 5)
    while (loopCounter >= 0) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(5, 0)
    while (loopCounter >= 0) {
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
    }
    sprite.delete()
})