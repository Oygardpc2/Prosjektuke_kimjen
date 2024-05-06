namespace SpriteKind {
    export const wall = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundWest)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`trigger1`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    if (controller.left.isPressed()) {
        mySprite.x += 5
    }
    if (controller.right.isPressed()) {
        mySprite.x += -5
    }
    if (controller.up.isPressed()) {
        mySprite.y += 5
    }
    if (controller.down.isPressed()) {
        mySprite.y += -5
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.setImage(assets.image`up`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`right`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`down`)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`sit0`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.sayText(":)", 500, false)
