const vm = Vue.createApp({
    data() {
        return {
            mathSign: "+",
            numOne: 0,
            numTwo: 0

        }
    },

    computed: {
        answer() {
            if (this.mathSign === "+")
                return this.numOne + this.numTwo;
            if (this.mathSign === "-")
                return this.numOne - this.numTwo;
            if (this.mathSign === "/")
                return this.numOne / this.numTwo;
            if (this.mathSign === "*")
                return this.numOne * this.numTwo;
        },
        evenOrOdd() {
            if (this.answer % 2 === 0)
                return 1;
            else if (isNaN(this.answer % 2))
                return 2
            else
                return 0;
        }
    }
}).mount("#app");