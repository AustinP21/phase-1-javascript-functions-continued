function saturdayFun(thing1 = "roller-skate", thing2 = "bathe my dog") {
    return (`This Saturday, I want to ${thing1}!`)
}
function mondayWork(work1 = 'go to the office') {
    return (`This Monday, I will ${work1}.`)
}
function wrapAdjective(string = '*'){
    return function wrap1(adjective = 'special'){
        return (`You are ${string}${adjective}${string}!`)
    }
}