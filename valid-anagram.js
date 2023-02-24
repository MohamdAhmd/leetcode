/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const msg1 = s.split('').sort()
    const msg2 = t.split('').sort()
    if(msg1.length !== msg2.length){
        return false
    }else if(JSON.stringify( msg1 ) === JSON.stringify( msg2 )){
        return true
    }else{
        return false
    }
};

isAnagram('hello','olleh')