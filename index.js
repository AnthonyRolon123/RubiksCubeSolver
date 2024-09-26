/*
    A B 
    D C 
Q R E F I J M N
T S H G L K P O
    U V
    Z W

    [topleft, bottomleft, topright, bottomright]

    A B 
    S R 
Q U H E D J M N
T V G F C K P O
    L I
    Z W

F->E G->F H->G E->H
I->D L->C
V->I U->L
S->V R->U
D->S C->R
*/

let main = () => {
    
    let cube = [
        ['A','B','C','D'],//0
        ['E','F','G','H'],//1
        ['I','J','K','L'],//2
        ['M','N','O','P'],//3
        ['Q','R','S','T'],//4
        ['U','V','W','Z'] //5
//        0   1   2   3
    ]
    
    let algs = {
        B:  "R D' R U' R' U' R U R' F' R U R' U' R' F R D R'",
        C:  "F R U' R' U' R U R' F' R U R' U' R' F R F'",
        D:  "F R' R U' R' U' R U R' F' R U R' U' R' F R R F'",
        E:  "F' D R U' R' U' R U R' F' R U R' U' R' F R D' F",
        F:  "F2 D R U' R' U' R U R' F' R U R' U' R' F R D' F2",
        G:  "F D R U' R' U' R U R' F' R U R' U' R' F R D' F'",
        H:  "D R U' R' U' R U R' F' R U R' U' R' F R D'",
        I:  "R' R U' R' U' R U R' F' R U R' U' R' F R R",
        J:  "R2 R U' R' U' R U R' F' R U R' U' R' F R R2",
        K:  "R R U' R' U' R U R' F' R U R' U' R' F R R'",
        L:  "R U' R' U' R U R' F' R U R' U' R' F R",
        M:  "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
        O:  "D' R R U' R' U' R U R' F' R U R' U' R' F R R' D",
        P:  "D' R U' R' U' R U R' F' R U R' U' R' F R D",
        R:  "F2 R U' R' U' R U R' F' R U R' U' R' F R F2",
        S:  "F2 R' R U' R' U' R U R' F' R U R' U' R' F R R F2",
        T:  "D2 R U' R' U' R U R' F' R U R' U' R' F R D2",
        U:  "F' R U' R' U' R U R' F' R U R' U' R' F R F",
        V:  "F' R' R U' R' U' R U R' F' R U R' U' R' F R R F",
        W:  "R2 F R U' R' U' R U R' F' R U R' U' R' F R F' R2",
        Z:  "D F' R U' R' U' R U R' F' R U R' U' R' F R F D'",
    }

    printCube(cube);
    RPrimeTurn(cube);
    printCube(cube);
}

//WORKS
let FPrimeTurn = (cube) => {
    let temp = cube[1][0];
    for(let i = 0; i < cube[1].length-1; i++){
        cube[1][i] = cube[1][i+1];
    }
    cube[1][cube[1].length-1] = temp;

    let tempArr = [cube[0][3], cube[0][2]];

    cube[0][3] = cube[2][0]
    cube[2][0] = cube[5][1]
    cube[5][1] = cube[4][2]
    cube[4][2] = tempArr[0]

    cube[0][2] = cube[2][3]
    cube[2][3] = cube[5][0]
    cube[5][0] = cube[4][1]
    cube[4][1] = tempArr[1]
}

//WORKS
let FTurn = (cube) => {
    let temp = cube[1][cube[1].length-1];
    for(let i = cube[1].length-1; i > 0 ; i--){
        cube[1][i] = cube[1][i-1];
    }
    cube[1][0] = temp;

    let tempArr = [cube[4][2], cube[4][1]];

    cube[4][2] = cube[5][1]
    cube[5][1] = cube[2][0]
    cube[2][0] = cube[0][3]
    cube[0][3] = tempArr[0]
    
    cube[4][1] = cube[5][0]
    cube[5][0] = cube[2][3]
    cube[2][3] = cube[0][2]
    cube[0][2] = tempArr[1]
}

//WORKS
let RTurn = (cube) => {
    let temp = cube[2][cube[2].length-1];
    for(let i = cube[2].length-1; i > 0 ; i--){
        cube[2][i] = cube[2][i-1];
    }
    cube[2][0] = temp;

    let tempArr = [cube[0][2], cube[0][1]]

    cube[0][1] = cube[1][1];
    cube[1][1] = cube[5][1];
    cube[5][1] = cube[3][3];
    cube[3][3] = tempArr[1];

    cube[0][2] = cube[1][2];
    cube[1][2] = cube[5][2];
    cube[5][2] = cube[3][0];
    cube[3][0] = tempArr[0];
}

//WORKS
let RPrimeTurn = (cube) => {
    let temp = cube[2][0];
    for(let i = 0; i < cube[2].length-1; i++){
        cube[2][i] = cube[2][i+1];
    }
    cube[2][cube[2].length-1] = temp;

    let tempArr = [cube[3][0], cube[3][3]];

    cube[3][3] = cube[5][1]
    cube[5][1] = cube[1][1]
    cube[1][1] = cube[0][1]
    cube[0][1] = tempArr[1]

    cube[3][0] = cube[5][2]
    cube[5][2] = cube[1][2]
    cube[1][2] = cube[0][2]
    cube[0][2] = tempArr[0]
}

let UTurn = (cube) => {
    
}

let UPrimeTurn = (cube) => {
    
}

let DTurn = (cube) => {

}

let DPrimeTurn = (cube) => {

}

let printCube = (cube) => {
    console.log();
    console.log(`    ${cube[0][0]} ${cube[0][1]}         `);
    console.log(`    ${cube[0][3]} ${cube[0][2]}         `);
    console.log(`${cube[4][0]} ${cube[4][1]} ${cube[1][0]} ${cube[1][1]} ${cube[2][0]} ${cube[2][1]} ${cube[3][0]} ${cube[3][1]} `);
    console.log(`${cube[4][3]} ${cube[4][2]} ${cube[1][3]} ${cube[1][2]} ${cube[2][3]} ${cube[2][2]} ${cube[3][3]} ${cube[3][2]} `);
    console.log(`    ${cube[5][0]} ${cube[5][1]}         `);
    console.log(`    ${cube[5][3]} ${cube[5][2]}         `);
    console.log();
}

main();