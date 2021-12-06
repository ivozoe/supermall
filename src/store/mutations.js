export default {
    //mutations唯一的目的就是修改state中的状态，mutations中的每个方法尽量单一一点
    addCounter(state, payload) {
        payload.count++
    },
    addToCart(state, payload) {
        payload.check = false
        state.cartList.push(payload)
    }
}