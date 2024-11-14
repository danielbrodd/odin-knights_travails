function node ([x,y]) {
    const startPos = {
    startPos: [x,y]
    };
    const moveOffset = [
        [1,2],[1,-2],[-1,2],[-1,-2],
        [2,1],[2,-1],[-2,1],[-2,-1] 
    ];
    const availableMoves = moveOffset
        .map(([dx,dy]) => [ x + dx, y + dy ])
        .filter(([newx,newy]) => newx >= 0 && newx < 8 && newy >= 0 && newy < 8);
    return {
        startPos,
        availableMoves
    }
};

export default node;