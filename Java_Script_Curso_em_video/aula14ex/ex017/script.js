function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let d = n*c  // para caldular a divisão
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} ▮ ${n} + ${c} = ${n+c} ▮ ${n} - ${c} = ${n-c} ▮ ${n*c} ÷ ${n} = ${d/n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}