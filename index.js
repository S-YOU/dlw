module.exports = function (obj, key, val) {
  key = key.split ? key.split('.') : key
  for (i = 0; i < key.length-1; i++) {
    if (!obj[key[i]]) obj[key[i]] = {}
    obj = obj[key[i]]
  }
  obj[key[key.length-1]] = val
}
