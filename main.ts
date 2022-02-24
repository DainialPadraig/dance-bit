input.onGesture(Gesture.SixG, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
for (let index = 0; index < 3; index++) {
    basic.showString("Dance!")
    basic.pause(500)
}
