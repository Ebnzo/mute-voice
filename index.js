module.exports = function mutevoice(mod) {
	mod.hook('S_LOGIN', 14, e => {e.appearance.voice = 69; return true})
	mod.hook('S_SPAWN_USER',16, e => {e.appearance.voice = 69; return true})
	mod.hook('S_UNICAST_TRANSFORM_DATA', 6, e => {e.appearance.voice = 69; return true})
	mod.hook('S_USER_CHANGE_FACE_CUSTOM', 2, e => {e.appearance.voice = 69; return true})
}
