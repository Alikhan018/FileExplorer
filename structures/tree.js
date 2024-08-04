class Node {
    constructor(id, name, type, color) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.color = color;
        this.children = [];
    }
};
class Tree {
    constructor() {
        this.root = null;
    }
    constructTree(responseObj) {
        const treeMap = new Map();

        responseObj.forEach((item) => {
            const node = new Node(item.id, item.name, item.type, item.color);
            treeMap.set(item.id, node);
        })

        responseObj.forEach((item) => {
            if(item.parentId === null){
                this.root = treeMap.get(item.id);
                return;
            }
            else {
                const parent = treeMap.get(item.parentId);
                parent.children.push(treeMap.get(item.id));
            }
        })
    }
}

module.exports = new Tree;