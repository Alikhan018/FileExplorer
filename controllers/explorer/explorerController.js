const Explorer = require("../../model/explorer/explorermodelfunctions")

class ExplorerController{
    constructor() {}
    static async getAll(req, res) {
        const tree = await Explorer.getAll();
        res.render('index', {tree: tree});
    }
    static async addNode(req, res) {
        try {
            const {parentId, name, type, color} = req.body;
            await Explorer.addItem(name,type,color,parentId);
            res.redirect('/')
        }catch (err) {
            res.send(err);
        }
    }
    static async editNode(req, res) {
        try {
            const {id, name} = req.body;
            await Explorer.setItem(id, name);
            res.redirect('/')
        } catch(err) {
            res.send(err);
        }
    }
}

module.exports = ExplorerController;