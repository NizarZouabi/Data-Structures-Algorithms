const reverse = (str) => {
    if(str === "") return ""

    return str.slice(-1) + reverse(str.slice(0,-1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
