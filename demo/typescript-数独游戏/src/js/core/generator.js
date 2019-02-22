// 生成数独解决方案
const ToolKit = require("./toolkit")

class Genetator {
    generate() {
        while(!this.internalGenerate()) {
            console.log('try again')
        }
    }
    internalGenerate() {
        this.matrix = ToolKit.matrix.makeMatrix();
        this.orders = ToolKit.matrix.makeMatrix()
            .map(row => row.map((v, i) => i))
            .map(row => ToolKit.matrix.shuffer(row));

        return ToolKit.matrix.makeRow()
            .every((v, n) => this.fillNumber(n + 1));
    }

    fillNumber(n) {
        return this.fillRow(n, 0);
    }

    fillRow(n, rowIndex) {
        if(rowIndex > 8) {
            return true;
        }

        const row = this.matrix[rowIndex];
        const orders = this.orders[rowIndex];
        // TODO 随机选择列
        for(let i = 0; i < 9; i++) {
            const colIndex = orders[i];
            // 如果这个位置已经有值，跳过
            if(row[colIndex]){
                continue;
            }

            // 检查这个位置是否可以填 n
            if(!ToolKit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)){
                continue;
            }

            row[colIndex] = n;

            // 当前行填写 n 成功，递归调用 fillRow() 来在下一行中填写 n
            // 如果下一行填写失败，就继续寻找当前行的下一个位置
            if(!this.fillRow(n, rowIndex + 1)){
                row[colIndex] = 0;
                continue;
            };

            return true;
        }
        // 填写失败
        return false;
    }
}

module.exports = Genetator;
