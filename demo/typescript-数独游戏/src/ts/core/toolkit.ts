export interface IBoxCoord {
    boxIndex: number;
    cellIndex: number;
}

export interface IRowColCoord {
    rowIndex: number;
    colIndex: number;
}
/**
 * 宫 坐标系工具
 */
const boxToolKit = {
    getBoxCells(matrix: number[][], boxIndex: number): number[] {
        const startRowIndex = Math.floor(boxIndex / 3) * 3;
        const startColIndex = boxIndex % 3 * 3;
        const result = [];
        for(let cellIndex = 0; cellIndex < 9; cellIndex++) {
            const rowIndex = startRowIndex + Math.floor(cellIndex / 3);
            const colIndex = startColIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },
    convertToBoxIndex(rowIndex: number, colIndex: number): IBoxCoord {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        }
    },
    convertFromBoxIndex(boxIndex: number, cellIndex: number): IRowColCoord {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        }
    }
}

class MatrixToolkit {
    static makeRow(): number[];
    static makeRow<T>(v: T): T[];
    static makeRow(v:any = 0):any[] {
        const array = new Array(9);
        array.fill(v);
        return array;
    }

    static makeMatrix(): number[][];
    static makeMatrix<T>(v: T): T[][];
    static makeMatrix(v: any = 0): any[][] {
        return Array.from({length: 9}, () => this.makeRow(v))
    }
    /**
     * Fisher-Yates 洗牌算法
     * @param array 
     */
    static shuffer<T>(array: T[]): T[] {
        const endIndex = array.length - 2;
        for(let i = 0; i < endIndex; i++) {
           const j = i + Math.floor(Math.random() * (array.length - i));
           [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    /**
     * 检查指定位置是否可以填 n
     */
    static checkFillable(matrix: number[][], n: number, rowIndex: number, colIndex: number): boolean {
        const row = matrix[rowIndex];
        const col = this.makeRow().map((v, i) => matrix[i][colIndex]);
        const { boxIndex } = boxToolKit.convertToBoxIndex(rowIndex, colIndex);
        const box = boxToolKit.getBoxCells(matrix, boxIndex);
        for(let i = 0; i < 9; i++) {
            if(row[i] === n || col[i] === n || box[i] === n) {
                return false;
            }
        }
        return true;
    }
}

// 工具集 

export default class ToolKit {
    /**
     * 矩阵和数据相关的工具
     */
    static get matrix(): typeof MatrixToolkit{
        return MatrixToolkit;
    }
    /**
     * 宫坐标系相关工具
     */
    static get box() {
        return boxToolKit;
    }
}