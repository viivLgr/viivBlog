// 生成数独游戏
const Generator = require("./generator");

/**
 * 1. 生成完成的解决方案：Generator
 * 2. 随机去除部分数据：按比例
 */
module.exports = class Sudoko{
    constructor() {
        const generator = new Generator();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }
    get result() {
        return this.solutionMatrix;
    }
    make(level = 5) {
        // 生成迷盘 随机去掉部分数据
        // const shouldRid = Math.random() * 9 < level;
        this.puzzleMatrix = this.solutionMatrix.map(row => {
            return row.map(cell => Math.random() * 9 < level ? 0 : cell)
        })
    }
}