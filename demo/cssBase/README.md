# css

## css 函数

### 1. 图片

- filter
    - blur()
    - brightness()
    - contrast()
    - drop-shadow()
    - grayscale()
    - hue_rotate()
    - invert()
    - opacity()
    - saturate()
    - sepia()
- cross-fade()
- element()
- image-set()
- imagefunction()

### 2. 图形绘制

- conic-gradient()
- linear-gradient()
- radial-gradient()
- repeating-linear-gradient()
- repeating-radial-gradient()
- shape()

### 3. 布局

- calc()
- clamp()
- fit-content()
- max()
- min()
- minmax()
- repeat()

### 4. 变形/动画

- transform
    - matrix()
    - matrix3d()
    - perspective()
    - rotate()
    - rotate3d()
    - rotateX()
    - rotateY()
    - rotateZ()
    - scale()
    - scale3d()
    - scaleX()
    - scaleY()
    - scaleZ()
    - skew()
    - skewX()
    - skewY()
    - translate()
    - translate3d()
    - translateX()
    - translateY()
    - translateZ()

### 5. 环境与元素

- var()
- env()
- attr()

## inline-blcok 间隙

空格符导致了inlink-block的间隙

- 控制字体大小：font-size:0;
- 控制文字水平间距：letter-spaceing: -4px;
- 根本方法：移除 HTML 中的空格
- 使用 margin 负值：margin负值的大小与上下文的字体和文字大小相关

| 字体大小/字体 | margin值 |
| ------ | ------ |
| 16px/Arial | -4px |
| 14px/Arial | -4px |
| 13px/Arial | -4px |