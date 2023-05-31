scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.reset()
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`))) {
        mySprite.vy = -200
        if (Math.percentChance(50)) {
            mySprite.image.flipY()
        } else {
            mySprite.image.flipX()
        }
    }
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 9 9 4 4 4 4 
    4 4 9 9 9 9 4 4 4 4 9 9 4 4 4 4 
    4 4 9 9 9 9 4 4 4 4 9 9 4 4 4 4 
    4 4 9 9 9 9 4 4 4 4 9 9 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 9 9 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 9 4 4 4 4 4 4 4 4 4 4 9 4 4 
    4 4 9 4 4 4 4 4 4 4 4 4 4 9 4 4 
    4 4 9 4 4 4 4 4 4 4 4 4 4 9 4 4 
    4 4 9 9 9 9 9 9 9 9 9 9 9 9 4 4 
    4 4 4 4 4 9 9 9 9 9 9 9 9 9 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite.vx = 100
mySprite.ay = 450
scene.cameraFollowSprite(mySprite)
