enum ActionKind {
    Walking,
    Idle,
    Jumping,
    runaway
}
namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const cut = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`up`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundWest)
    tiles.placeOnRandomTile(fish, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`trigger1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass3)
    tiles.placeOnRandomTile(fish, sprites.castle.tileDarkGrass2)
    value = 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`left`)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.sayText("*Yum :3*", 1000, true)
    fish.setPosition(1000, 1000)
    mySprite2 += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`right`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`down`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    if (value == 1) {
        mySprite.sayText("On the other paw... Maybe you should stay here for a while...")
        animation.runImageAnimation(
        picture,
        assets.animation`myAnim`,
        4000,
        false
        )
    }
})
let mySprite2 = 0
let value = 0
let fish: Sprite = null
let picture: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(assets.song`basic`), music.PlaybackMode.LoopingInBackground)
mySprite = sprites.create(assets.image`sit0`, SpriteKind.Player)
picture = sprites.create(assets.image`humanhunger ending`, SpriteKind.cut)
mySprite.setPosition(0, 0)
picture.follow(mySprite, 1000)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
fish = sprites.create(assets.image`fish`, SpriteKind.Food)
tiles.placeOnRandomTile(fish, sprites.castle.tileGrass1)
scene.cameraFollowSprite(mySprite)
pause(1000)
mySprite.sayText("You seem to have been playing for too long.", 5000, true)
pause(6000)
mySprite.sayText("You should get back to your human before it gets worried.", 7000, true)
timer.after(180000, function () {
    mySprite.sayText("You need to get back soon...", 7000, true)
})
timer.after(240000, function () {
    mySprite.sayText("You seem to be dying of starvation... Get back to your human.", 7000, true)
})
