const ExplorerModel = require('./explorermodel')
const { v4: uuidv4 } = require('uuid');
const tree = require('../../structures/tree');

class Explorer {
    constructor() {}
    static async getAll() {
        const exp = await ExplorerModel.findAll({
            order: [['type', 'ASC']],
            raw:true
        });
        tree.constructTree(exp);
        return tree;
    }
    static async addItem(Tname,Ttype,Tcolor,TparentId) {
        const id = uuidv4();
        try {
            await ExplorerModel.create({
                id: id,
                name: Tname,
                type: Ttype,
                color: Tcolor,
                parentId: TparentId
            })
            return 'anything';
        } catch(err) {
            console.log(err)
            throw err;
        }
    }
    static async setItem(id, name) {
        try {
            await ExplorerModel.update({name: name}, {where: {id: id}});
            return 'anything';
        } catch(err) {
            throw err;
        }
    }
}

module.exports = Explorer;