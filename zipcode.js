function isMinnesotaZip(code) {
    //All MN zip codes are between 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip('55403'))
