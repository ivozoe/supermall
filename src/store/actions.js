
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = null
            //要判断cartList里面之前有没有相同的商品
            for (let item of context.state.cartList) {
                if (item.iid === payload.iid) {
                    oldProduct = item;
                }
            }
            if (oldProduct) {
                //数量+1
                // oldProduct.count += 1;
                context.commit('addCounter', oldProduct)
                resolve("数量+1")
            } else {
                //添加新的商品
                payload.count = 1;
                // context.state.cartList.push(payload);
                context.commit("addToCart", payload)
                resolve("当前商品已添加")
            }
        })

    }
}