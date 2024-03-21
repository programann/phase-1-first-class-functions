function receivesAFunction(funct) {
    return funct()
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}