scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        Die()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    Die()
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (part == "cube") {
        if (mySprite.vy == 0 || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`))) {
            mySprite.vy = v
        }
        mySprite.image.flipY()
    }
    if (part == "robot") {
        mySprite.vy = rv
    }
    if (part == "rocket") {
        mySprite.vy = rv
    }
    if (part == "ufo") {
        mySprite.vy = v
    }
    if (part == "ball") {
        if (mySprite.ay == 550) {
            if (mySprite.vy == 0) {
                mySprite.ay = -550
            }
        } else if (mySprite.ay == -550) {
            if (mySprite.vy == 0) {
                mySprite.ay = 550
            }
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
            mySprite.vy = v
        }
    }
    if (part == "spider") {
        mySprite.image.flipX()
        mySprite.image.flipY()
        if (mySprite.ay == 20000) {
            if (mySprite.vy == 0) {
                mySprite.ay = -20000
            }
        } else if (mySprite.ay == -20000) {
            if (mySprite.vy == 0) {
                mySprite.ay = 20000
            }
        } else if (mySprite.ay == 550) {
            mySprite.ay = -20000
        }
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
            mySprite.ay = 550
            mySprite.vy = v
        }
    }
})
function Die () {
    sprites.destroy(mySprite, effects.warmRadial, 500)
    game.reset()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    part = "wave"
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f 7 f 2 f f . . 
        . . . . . . . f 7 7 f 2 f f f . 
        . . . . . f f 7 7 f f f 8 8 f . 
        . . . . f 7 7 7 7 f f 8 8 f . . 
        . . . f 7 7 7 7 f f 8 8 f . . . 
        . . f 7 7 7 7 f 8 8 8 8 f . . . 
        . f f f f f f f 8 8 8 f . . . . 
        . . . . . . f 8 8 8 f . . . . . 
        . . . . . . . f 8 8 f . . . . . 
        . . . . . . . f 8 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.startEffect(effects.trail)
    mySprite.ay = 550
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    part = "ufo"
    mySprite.setImage(img`
        . . . . f f f f f f f . . . . . 
        . . . f . . . . . . . f . . . . 
        . . f . . . . 1 1 1 . . f . . . 
        . f . . . . . . . . 1 . . f . . 
        . f . . . . . . . . . 1 . f . . 
        . f . . . . . . . . . 1 . f . . 
        . f . . . . . . . . . . . f . . 
        . f . . . . . . . . . . . f . . 
        8 f . . . . . . . . . . . f 8 . 
        8 8 . . . . . . . . . . . 8 8 . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        7 7 7 8 8 8 8 8 8 8 8 8 7 7 7 . 
        . 7 7 7 7 8 8 8 8 8 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    Die()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    Die()
})
controller.anyButton.onEvent(ControllerButtonEvent.Repeated, function () {
    if (part == "cube") {
        if (mySprite.vy == 0) {
            mySprite.vy = v
        }
        mySprite.image.flipY()
    }
    if (part == "rocket") {
        mySprite.vy = rv
    }
    if (part == "robot") {
        if (mySprite.vy == 0 || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`))) {
            mySprite.vy = v
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    rov += 250
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    part = "ball"
    mySprite.setImage(img`
        . . . . f f f f f f f . . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f 5 5 7 7 7 7 7 7 7 5 5 f . . 
        . f 5 7 8 8 8 8 8 8 8 7 5 f . . 
        f 5 7 8 5 6 6 6 6 6 5 8 7 5 f . 
        f 5 7 8 6 5 5 5 5 5 6 8 7 5 f . 
        f 5 7 8 6 5 2 2 2 5 6 8 7 5 f . 
        f 5 7 8 6 5 2 2 2 5 6 8 7 5 f . 
        f 5 7 8 6 5 2 2 2 5 6 8 7 5 f . 
        f 5 7 8 6 5 5 5 5 5 6 8 7 5 f . 
        f 5 7 8 5 6 6 6 6 6 5 8 7 5 f . 
        . f 5 7 8 8 8 8 8 8 8 7 5 f . . 
        . f 5 5 7 7 7 7 7 7 7 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.ay = 550
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Die()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    part = "rocket"
    mySprite.setImage(img`
        . . f f f f f f f f f f . . . . 
        . . f 8 8 f f 7 7 7 7 7 . . . . 
        . . f 8 8 f f f f 7 7 7 . . . . 
        . . f 8 8 f f . f 7 7 7 . . . . 
        . . f 8 8 8 8 . f 7 7 7 . . . . 
        3 . f 8 8 8 8 . f 7 7 7 . . . . 
        3 3 f 8 8 f f . f 7 7 7 . . . . 
        3 5 f 8 8 f f f f 7 7 7 . . . . 
        3 5 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 3 . 
        3 5 5 3 3 3 3 3 3 5 5 5 5 5 5 3 
        3 5 5 3 3 3 3 3 5 5 5 5 5 5 5 3 
        3 3 5 3 3 3 3 5 5 5 5 5 5 5 3 3 
        3 . 3 5 5 5 5 5 5 3 3 3 3 3 3 . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    part = "spider"
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f . . . . 
        . f 8 8 8 8 8 8 8 8 8 8 f . . . 
        . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 5 8 8 f . . 
        . . f f 8 8 8 8 8 8 8 8 8 8 f . 
        . . f f 8 8 8 8 8 8 8 8 8 8 8 f 
        . . f 7 f 8 8 8 8 8 8 8 8 8 8 f 
        . . f 7 7 f f f f f f f f f f f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f f 
        . . f f f f f f f f f f f f . . 
        . f b . . f b . f b . f b . . . 
        . f b . . f b . f b . f b . . . 
        f b . . f b . . f b . . f b . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    part = "robot"
    mySprite.setImage(img`
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . f f f f f f f f f f f f . . . 
        . f 2 b b b b b b b b b f . . . 
        . f 2 b b b b b b 5 b b f . . . 
        . f 2 2 2 2 b b b 5 b b f . . . 
        . f f f f 2 2 b b b b b f . . . 
        . . f 7 7 f 2 b b b b b f . . . 
        . f 7 7 f 2 2 2 2 2 b f f . . . 
        . . f 7 f f f f f f f f f . . . 
        . . . f 7 f . . . . f f . . . . 
        . . . f f f f f f f 8 8 f . . . 
        . . f 8 8 8 8 8 8 8 f 8 8 f . . 
        . f 8 8 8 8 8 8 8 8 8 f 8 f . . 
        . . f f f f f f f f f . f . . . 
        `)
    effects.clearParticles(mySprite)
    mySprite.ay = 700
})
let rv = 0
let v = 0
let part = ""
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    f f f f f . f f f f f f f f f f 
    f 8 8 8 f . f 7 7 7 7 7 7 7 7 f 
    f 8 8 8 f . f 7 7 7 7 7 7 7 7 f 
    f 8 8 8 f . f f f f 7 7 7 7 7 f 
    f 8 8 8 f . . . . f 7 7 7 7 7 f 
    f 8 8 8 f f f f . f 7 7 7 7 7 f 
    f 8 8 8 8 8 8 f . f 7 7 7 7 7 f 
    f 8 8 8 8 8 8 f . f 7 7 7 7 7 f 
    f 8 8 8 8 8 8 f . f 7 7 7 7 7 f 
    f 8 8 8 8 8 8 f . f 7 7 7 7 7 f 
    f 8 8 8 f f f f . f 7 7 7 7 7 f 
    f 8 8 8 f . . . . f 7 7 7 7 7 f 
    f 8 8 8 f . f f f f 7 7 7 7 7 f 
    f 8 8 8 f . f 7 7 7 7 7 7 7 7 f 
    f 8 8 8 f . f 7 7 7 7 7 7 7 7 f 
    f f f f f . f f f f f f f f f f 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
let g = 150
let rov = 0
mySprite.vx = g
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
part = "cube"
v = -200
rv = 0 - 75
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        rov = 0
    }
    if (part == "wave") {
        if (controller.anyButton.isPressed()) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . f . . . . . 
                . . . . . . . . . f f f . . . . 
                . . . . . . . . f 7 f 2 f f . . 
                . . . . . . . f 7 7 f 2 f f f . 
                . . . . . f f 7 7 f f f 8 8 f . 
                . . . . f 7 7 7 7 f f 8 8 f . . 
                . . . f 7 7 7 7 f f 8 8 f . . . 
                . . f 7 7 7 7 f 8 8 8 8 f . . . 
                . f f f f f f f 8 8 8 f . . . . 
                . . . . . . f 8 8 8 f . . . . . 
                . . . . . . . f 8 8 f . . . . . 
                . . . . . . . f 8 f . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.setVelocity(125, -125)
        } else {
            mySprite.setVelocity(125, 125)
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . . . . . . f 8 f . . . . . . 
                . . . . . . . f 8 8 f . . . . . 
                . . . . . . f 8 8 8 f . . . . . 
                . f f f f f f f 8 8 8 f . . . . 
                . . f 7 7 7 7 f 8 8 8 8 f . . . 
                . . . f 7 7 7 7 f f 8 8 f . . . 
                . . . . f 7 7 7 7 f f 8 8 f . . 
                . . . . . f f 7 7 f f f 8 8 f . 
                . . . . . . . f 7 7 f 2 f f f . 
                . . . . . . . . f 7 f 2 f f . . 
                . . . . . . . . . f f f . . . . 
                . . . . . . . . . . f . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
})
game.onUpdateInterval(50, function () {
    if (part == "rocket" && controller.anyButton.isPressed()) {
        mySprite.vy = rv
    }
})
game.onUpdateInterval(100, function () {
    if (part == "robot" && controller.anyButton.isPressed() && rov < 250) {
        mySprite.vy = rv
        rov += 1
    }
})
