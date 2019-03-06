import Grid from "./ui/grid";
import PopupNumbers from "./ui/popupNumbers";

const grid = new Grid($('#container'));
grid.build();
grid.layout();

const popupNumbers = new PopupNumbers($("#popupNumbers"));
grid.bindPup(popupNumbers);

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