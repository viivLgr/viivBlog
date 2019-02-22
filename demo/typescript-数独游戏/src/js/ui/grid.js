// 生成九宫格

const ToolKit = require("../core/toolkit");
const Generator = require("../core/generator");
const Sudoku = require("../core/sudoku");
const Checker = require("../core/checker");

const rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
const colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];

class Grid {
    constructor(container) {
        this._$container = container;
    }
    build() {
        // const generator = new Generator();
        // generator.generate();
        // // const matrix = ToolKit.matrix.makeMatrix();
        // const matrix = generator.matrix;
        const sudoku = new Sudoku();
        sudoku.make();
        this.result = sudoku.result;
        const matrix = sudoku.puzzleMatrix;

        const $cells = matrix.map(rowValues => rowValues.map((cellValue, colIndex) => {
            return $("<span>")
                        .addClass(colGroupClasses[colIndex % 3])
                        .addClass(cellValue ? "fixed" : "empty")
                        .text(cellValue)
        }));

        const $divArray = $cells.map(($spanArray, rowIndex) => {
            return $("<div>")
                        .addClass('row')
                        .addClass(rowGroupClasses[rowIndex % 3])
                        .append($spanArray)
        });
        this._$container.append($divArray);
    }
    layout() {
        const width = $("span:first", this._$container).width()
        $("span", this._$container)
            .height(width)
            .css({
                "line-height": `${width}px`,
                "font-size": width < 32 ? `${width / 2}px` : ""
            })
    }
    bindPup(pupupNumbers) {
        this._$container.on('click', 'span', e => {
            const $cell = $(e.target);
            if(!$cell.is(".fixed")){
                pupupNumbers.pupup($cell);
            }
        })
    }
    /**
     * 检查用户解谜的结果，成功则进行提示，失败显示错误位置的标记
     */
    check() {
        const data = this._$container.children()
            .map((rowIndex, div) => (
                $(div).children().map((colIndex, span) => parseInt($(span).text()) || 0)
            ))
            .toArray()
            .map($data => $data.toArray());
        const checker = new Checker(data);
        if(checker.check()) {
            return true;
        }
        // 检查不成功，进行标记
        const marks = checker.matrixMarks;
        this._$container.children()
                .each((rowIndex, div) => {
                    $(div).children().each((colIndex, span) => {
                        const $span = $(span);
                        if($span.is(".fixed") || marks[rowIndex][colIndex]) {
                            $span.removeClass('error');
                        } else {
                            $span.addClass('error');
                        }
                    })
                })
        
    }
    /**
     * 充值当前迷盘到初始状态
     */
    reset() {
        this._$container.find("span:not(.fixed)")
            .removeClass("error mark1 mark2")
            .text(0)
            .addClass("empty");
    }
    /**
     * 清除错误标记
     */
    clear() {
        this._$container.find("span.error").removeClass('error');

    }
    /**
     * 重建迷盘
     */
    rebuild() {
        this._$container.empty();
        this.build();
        this.layout();
    }
    /**
     * 查看答案
     */
    getResult() {
        const resultMatrix = this.result;
        const resCell = resultMatrix.map(rowValues => rowValues.map((cellValue, colIndex) => {
            return $('<span>')
                    .addClass(colGroupClasses[colIndex % 3])
                    .addClass('fixed')
                    .text(cellValue);
        }))
        const resDiv = resCell.map(($spanArray, rowIndex) => {
            return $('<div>')
                    .addClass('row')
                    .addClass(rowGroupClasses[rowIndex % 3])
                    .append($spanArray);
        })
        $('#container2').empty().append(resDiv);
    }
}

module.exports = Grid