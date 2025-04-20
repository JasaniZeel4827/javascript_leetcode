/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null){
         return obj
    }

    if (typeof obj !== "object"){
         return obj
    }

    if (Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted = {}
    for (const key in obj) {
        let value = compactObject(obj[key])
         if (value) {
            compacted[key] = value
        }
    }
    return compacted
    




