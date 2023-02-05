var ffi = require("ffi-napi")

var platform = process.platform
var mathlibLoc = null

if (platform === "win32") {
  mathlibLoc = "./math.dll"
} else if (platform === "linux") {
  mathlibLoc = "./math.so"
} else if (platform === "darwin") {
  mathlibLoc = "./build/Release/math.dylib"
} else {
  throw new Error("unsupported plateform for mathlibLoc")
}

var math = ffi.Library(mathlibLoc, {
  add: ['int', ['int', 'int']],
  minus: ['int', ['int', 'int']],
  multiply: ['int', ['int', 'int']],
})

module.exports = math