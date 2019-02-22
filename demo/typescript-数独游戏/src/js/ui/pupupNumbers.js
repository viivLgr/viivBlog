// 处理弹出的操作面板
const BLOCK_WIDTH = 40;
const OFFSET = BLOCK_WIDTH + 2;
const POPUP_WIDTH = BLOCK_WIDTH * 3 + 10;

module.exports = class PupupNumbers {
    constructor($panel) {
        // this._$panel = $panel.hide().removeClass("hidden");
        this._$panel = $panel;

        this._$panel.on('click', 'span', e => {
            const $target = this._$target;
            const $cell = $(e.target);
            if($cell.hasClass("empty")) {
                this.emptyTarget();
            } else if($cell.hasClass("mark")) {
                this.markTarget($cell.data("mark"));
            } else {
                this.setTargetValue($cell.text());
            }
            this._$panel.hide();
            this._$target = null;
        })
        .hide()
        .removeClass('hidden');
    }
    emptyTarget() {
        this._$target
            .text("0")
            .removeClass("mark1 mark2 error")
            .addClass("empty");
    }
    markTarget(marker) {
        const $target = this._$target;
        $target.removeClass("mark1 mark2 error");
        if(!$target.hasClass(marker)) {
            $target.addClass(marker);
        }
    }
    setTargetValue(value) {
        this._$target.text(value).removeClass("empty error");
    }
    pupup($cell) {
        this._$target = $cell;
        const cellPosition = $cell.position();
        const left = Math.min(
            Math.max(cellPosition.left - OFFSET, 0),
            $(window).width() - POPUP_WIDTH);
        const top = Math.max(cellPosition.top - OFFSET, 0);
        // const { left, top } = $cell.position();
        // if(document.body.offsetWidth < (left + 40 * 3) ) {
        //     this._$panel.css({left: `${left - 40 * 2}px`});
        // }else{
        //     this._$panel.css({left: `${left}px`});
        // }
        // this._$panel.css({top: `${top}px`}).show();
        this._$panel.css({
            top: `${top}px`,
            left: `${left}px`
        }).show();
    }
    hide() {
        this._$panel.hide();
    }
}