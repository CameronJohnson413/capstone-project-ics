enum ActionKind {
    Walking,
    Idle,
    Jumping,
    mainspritewalkingleft,
    mainspritewalkingright
}
namespace SpriteKind {
    export const item = SpriteKind.create()
    export const item2 = SpriteKind.create()
    export const item3 = SpriteKind.create()
}
function itemchecktwo () {
    if (randomvalue2 == 0) {
        game.splash("A Nice Hardy Apple (Can take one more hit before barrier break)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                barrieramount += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 1) {
        game.splash("A Quite Sour Looking Lemon", "(Increase of Damage)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spritedamage += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 2) {
        game.splash("Two Very Ripe Cherries", "(Gain Bomb Ability) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                bomb += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 3) {
        game.splash("A Juicy Looking Strawberry", "(Increase of Attack Speed) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spriteattackspeed += -25
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 4) {
        game.splash("A Massive Hamburger", "(Increase of Health) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spritehp += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 5) {
        game.splash("A Nice and Spicy Taco", "(Gain Fire Attacks) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                fireattack += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 6) {
        game.splash("Cold Ice Cream, You Could jump for joy", "(Increase Up and Down Movement Speed)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                pizzaattackvely += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 7) {
        game.splash("An Donut Iced with Pink Frosting", "(Increase Left and Right Movement Speed)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                pizzaattackvelx += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue2 == 8) {
        game.splash("A piece of Pizza", "" + amountpizza + "/8")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite3, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                amountpizza += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.item3, function (sprite, otherSprite) {
    itemcheckthree()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.mainspritewalkingleft)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    itemcheckone()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    sprites.destroyAllSpritesOfKind(SpriteKind.item)
    sprites.destroyAllSpritesOfKind(SpriteKind.item2)
    sprites.destroyAllSpritesOfKind(SpriteKind.item3)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `)
})
function itemspawing () {
    randomvalue = randint(0, 8)
    randomvalue2 = randint(0, 8)
    randomvalue3 = randint(0, 8)
    mySprite2 = sprites.create(itemlist[randomvalue], SpriteKind.item)
    mySprite3 = sprites.create(itemlist[randomvalue2], SpriteKind.item2)
    mySprite4 = sprites.create(itemlist[randomvalue3], SpriteKind.item3)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 2))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 2))
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(6, 2))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.mainspritewalkingright)
})
function mainspritewalkingani2 () {
    mainspritewalkingright = animation.createAnimation(ActionKind.mainspritewalkingright, 100)
    mainspritewalkingright.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `)
    mainspritewalkingright.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `)
    mainspritewalkingright.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `)
    mainspritewalkingright.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `)
    animation.attachAnimation(mySprite, mainspritewalkingright)
    mainspritewalkingleft = animation.createAnimation(ActionKind.mainspritewalkingleft, 100)
    mainspritewalkingleft.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `)
    mainspritewalkingleft.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `)
    mainspritewalkingleft.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `)
    mainspritewalkingleft.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `)
    animation.attachAnimation(mySprite, mainspritewalkingleft)
}
function itemcheckthree () {
    if (randomvalue3 == 0) {
        game.splash("A Nice Hardy Apple (Can take one more hit before barrier break)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                barrieramount += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 1) {
        game.splash("A Quite Sour Looking Lemon", "(Increase of Damage)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spritedamage += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 2) {
        game.splash("Two Very Ripe Cherries", "(Gain Bomb Ability) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                bomb += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 3) {
        game.splash("A Juicy Looking Strawberry", "(Increase of Attack Speed) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spriteattackspeed += -25
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 4) {
        game.splash("A Massive Hamburger", "(Increase of Health) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spritehp += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 5) {
        game.splash("A Nice and Spicy Taco", "(Gain Fire Attacks) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                fireattack += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 6) {
        game.splash("Cold Ice Cream, You Could jump for joy", "(Increase Up and Down Movement Speed)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                pizzaattackvely += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 7) {
        game.splash("An Donut Iced with Pink Frosting", "(Increase Left and Right Movement Speed)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                pizzaattackvelx += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue3 == 8) {
        game.splash("A piece of Pizza", "" + amountpizza + "/8")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite4, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                amountpizza += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
}
function player2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        mySprite = sprites.create(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite, spritespeedx, spritespeedy)
        scene.cameraFollowSprite(mySprite)
        tiles.setTileAt(value, sprites.dungeon.floorLight0)
        tiles.placeOnTile(mySprite, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.item2, function (sprite, otherSprite) {
    itemchecktwo()
})
function itemcheckone () {
    if (randomvalue == 0) {
        game.splash("A Nice Hardy Apple (Can take one more hit before barrier break)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                barrieramount += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 1) {
        game.splash("A Quite Sour Looking Lemon", "(Increase of Damage)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spritedamage += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 2) {
        game.splash("Two Very Ripe Cherries", "(Gain Bomb Ability) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                bomb += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 3) {
        game.splash("A Juicy Looking Strawberry", "(Increase of Attack Speed) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spriteattackspeed += -25
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 4) {
        game.splash("A Massive Hamburger", "(Increase of Health) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                spritehp += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 5) {
        game.splash("A Nice and Spicy Taco", "(Gain Fire Attacks) ")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                fireattack += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 6) {
        game.splash("Cold Ice Cream, You Could jump for joy", "(Increase Up and Down Movement Speed)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                pizzaattackvely += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 7) {
        game.splash("An Donut Iced with Pink Frosting", "(Increase Left and Right Movement Speed)")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                pizzaattackvelx += 10
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
    if (randomvalue == 8) {
        game.splash("A piece of Pizza", "" + amountpizza + "/8")
        buy = game.askForNumber("", 1)
        if (buy == 0) {
            mySprite.setPosition(mySprite2.x, 62)
        }
        if (buy == 1) {
            if (money >= 3) {
                mySprite.setPosition(mySprite2.x, 62)
                sprites.destroy(mySprite2, effects.confetti, 1000)
                mySprite.startEffect(effects.halo)
                amountpizza += 1
                money += -3
                buy = 0
            } else {
                game.splash("Not Enough Money Available")
                mySprite.setPosition(mySprite2.x, 62)
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.changeScoreBy(1)
    game.splash("Progress Saved", "(Not Really ;)")
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
})
let mainspritewalkingleft: animation.Animation = null
let mainspritewalkingright: animation.Animation = null
let randomvalue3 = 0
let randomvalue = 0
let pizzaattackvelx = 0
let pizzaattackvely = 0
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let buy = 0
let randomvalue2 = 0
let itemlist: Image[] = []
let money = 0
let amountpizza = 0
let spritespeedy = 0
let spritespeedx = 0
game.splash("1 to buy", "0 to go back")
let spritedamage = 1
spritespeedx = 100
spritespeedy = 100
let barrieramount = 1
let spritehp = 100
let bomb = 0
let fireattack = 0
let spriteattackspeed = 500
amountpizza = 0
money = 10000
tiles.setCurrentTilemap(tilemap`waitingroom`)
itemlist = [
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `,
img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `,
img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `,
img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `,
img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `,
img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `,
img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `,
img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `
]
player2()
itemspawing()
mainspritewalkingani2()
