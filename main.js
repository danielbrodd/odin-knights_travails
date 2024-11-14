import node from "./node.js";

function knightsTravails(startPos, endPos) {
    let queue = [[startPos, []]];
    let visited = new Set();
    visited.add(startPos.toString())

    while (queue.length > 0) {
        let [current, path] = queue.shift();
        if (current[0] === endPos[0] && current[1] === endPos[1]) {
            console.log(`You made it in ${path.length} move(s). Here's your path:`)
            for (let p of path) console.log(p)
            return path
        }
        const { availableMoves } = node(current);
        
        for (let move of availableMoves) {
            if (!visited.has(move.toString())) {
                visited.add(move.toString())
                queue.push([move, [...path, move]])
            }
        }
    }
}


knightsTravails([0,0], [7,7])