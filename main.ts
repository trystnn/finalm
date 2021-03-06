namespace SpriteKind {
    export const minib = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setImage(assets.image`Grunt`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (info.score() == 130) {
        tiles.setTilemap(tilemap`level4`)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........c.....................
        ..........ccccccccc.............
        ........cccddddddd..............
        ..........ccccccc...............
        ..........c.....................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, ninja, 100, 0)
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths8, function (sprite, location) {
    if (info.player1.score() == 30) {
        tiles.setWallAt(tiles.getTileLocation(64, 6), false)
    } else {
        game.splash("Clear the enemies first.")
        pause(700)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ninja.vy = -100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.minib, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.follow(ninja, 40)
    info.player2.changeLifeBy(-1)
    info.changeScoreBy(20)
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    miniboss.setVelocity(50, 50)
    miniboss.follow(ninja, 30)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(64, 6), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.minib, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
info.player2.onLifeZero(function () {
    miniboss.destroy(effects.disintegrate, 1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock2, function (sprite, location) {
    if (info.player1.score() == 10) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(ninja, tiles.getTileLocation(1, 6))
        grunt2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(grunt2, tiles.getTileLocation(12, 4))
        grunt2.vy = 50
        grunt2.setBounceOnWall(true)
        grunt3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        grunt3.setBounceOnWall(true)
        grunt3.vy = 50
        tiles.placeOnTile(grunt3, tiles.getTileLocation(27, 6))
        grunt3.setBounceOnWall(false)
    } else {
        game.splash("Clear the enemies first.")
        pause(700)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    miniboss = sprites.create(assets.image`Minib`, SpriteKind.minib)
    tiles.placeOnTile(miniboss, tiles.getTileLocation(77, 5))
    info.player2.setLife(5)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy(effects.spray, 500)
    pause(900)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.say("Ouch!", 500)
    info.changeLifeBy(-1)
    pause(1000)
})
let grunt3: Sprite = null
let grunt2: Sprite = null
let miniboss: Sprite = null
let projectile: Sprite = null
let ninja: Sprite = null
game.splash("Move with WASD.", "Fire with B and jump with A")
game.splash("Clear the enemies.")
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
ninja = sprites.create(assets.image`Ninja`, SpriteKind.Player)
controller.moveSprite(ninja, 100, 0)
ninja.ay = 250
tiles.placeOnTile(ninja, tiles.getTileLocation(1, 6))
scene.cameraFollowSprite(ninja)
let grunt = sprites.create(assets.image`Grunt`, SpriteKind.Enemy)
tiles.placeOnTile(grunt, tiles.getTileLocation(17, 6))
grunt.setBounceOnWall(true)
grunt.ay = 50
grunt.vx = -50
info.setLife(5)
