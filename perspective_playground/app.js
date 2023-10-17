const vue = Vue.createApp({
    data() {
        return {
            perspective: 171,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            isCopied: false
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
            `
            }
        },
        rotateBox() {
            return {
                transform: `perspective(${this.perspective}px)
                rotateX(${(this.rotateX * -1)}deg)
                rotateY(${(this.rotateY * -1)}deg)
                rotateZ(${(this.rotateZ * -1)}deg)`
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 171;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        async copy() {
            let text = `
                transform:${this.box.transform}`;
            await navigator.clipboard.writeText(text);
            this.isCopied = true;
            alert("Transform details copied!");
        }
    },
    watch: {
        isCopied(newValue, oldValue) {
            console.log("I am in isCopied");
            if (newValue === true) {
                console.log("I am in new value isCopied");
                setTimeout(() => {
                    this.isCopied = false;
                }, 3000)
            }
        }
    }
});

vue.mount("#app");