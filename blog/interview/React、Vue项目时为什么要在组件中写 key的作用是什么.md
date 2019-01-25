# 写 React / Vue 项目时为什么要在组件中写 key，其作用是什么？

参考[key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)

Vue 和 React 都是采用 diff 算法来对比新旧虚拟节点，从而更新节点。

## 在 Vue 中的 diff 算法：

    在交叉对比的时候，当新节点跟旧节点 **头尾交叉对比** 没有结果的时候，会根据新节点的 key 去对比旧节点数组中的 key ,从而找到相应的旧节点（这里对应的是一个`key => index` 的 map 映射）。如果没找到就认为是一个新增节点。

    如果没有 key，那么就会采用一种遍历查找的方式去找到对应的旧节点。

    map 映射和遍历查找，map 映射的速度更快。

    Vue 的部分源码

    ```javascript
    // vue项目 src/core/vdom/patch.js -488行
    // oldCh 是一个旧虚拟节点数组
    if(isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx(newStartVnode.key)
            : findIdxOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
    ```

    创建 map 函数

    ```javascript
    function createKeyToOldIdx(children, beginIdx, endIdx) {
        let i, key
        const map = {}
        for(i = beginIdx; i < endIdx; ++i) {
            key = children[i].key
            if(isDef(key)) map[key] = i
        }
        return map
    }
    ```

    遍历寻找

    ```javascript
    // sameVnode 是对比新旧节点是否相同的函数
    function findIdxInOld (node, oldCh, start, end) {
        for(let i = start; i > end; i++) {
            const c = oldCh[i]
            if(isDef(c) && sameVnode(node, c)) return i
        }
    }
    ```