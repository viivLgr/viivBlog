const Grid = require("./ui/grid")
const PupupNumbers = require("./ui/pupupNumbers");

const grid = new Grid($('#container'));
const pupupNumbers = new PupupNumbers($("#popupNumbers"));
grid.build();
grid.layout();
grid.bindPup(pupupNumbers);

$("#check").on('click', e => {
    if(grid.check()){
        alert("恭喜成功啦~");
    };
})
$("#reset").on('click', e => {
    grid.reset();
})
$("#clear").on('click', e => {
    grid.clear();
})
$("#result").on('click', e => {
    grid.getResult();
})
$("#rebuild").on('click', e => {
    grid.rebuild();
})