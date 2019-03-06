import Generator from "./generator";
// 生成数独游戏
/**
 * 1. 生成完成的解决方案：Generator
 * 2. 随机去除部分数据：按比例
 */
export default class Sudoko{
    solutionMatrix: number[][];
    puzzleMatrix: number[][];

    constructor() {
        const generator = new Generator();
        generator.generate();
        this.solutionMatrix = generator.matrix;
        this.puzzleMatrix = [];
    }
    get result() {
        return this.solutionMatrix;
    }

    make(level: number = 5) {
        // 生成迷盘 随机去掉部分数据
        // const shouldRid = Math.random() * 9 < level;
        this.puzzleMatrix = this.solutionMatrix.map(row => {
            return row.map(cell => Math.random() * 9 < level ? 0 : cell)
        })
    }
}