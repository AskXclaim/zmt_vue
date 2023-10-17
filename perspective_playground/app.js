const localStorageName = "vue_perspective";
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
        getTransformAsObject() {
            return {
                perspective: this.perspective,
                rotateX: this.rotateX,
                rotateY: this.rotateY,
                rotateZ: this.rotateZ,
            }
        },
        reset() {
            this.perspective = 171;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        async copy() {
            let text = `transform:${this.box.transform}`;
            await navigator.clipboard.writeText(text);
            this.isCopsied = true;
            alert("Transform details copied!");
        },
        save() {
            localStorage.setItem(localStorageName, JSON.stringify(this.getTransformAsObject()));
            alert("Transform saved to local storage");
        },
        retrieve() {
            const savedTransform = localStorage.getItem(localStorageName);
            if (savedTransform) {
                const retrievedTransform = JSON.parse(savedTransform);
                this.perspective = retrievedTransform.perspective,
                    this.rotateX = retrievedTransform.rotateX,
                    this.rotateY = retrievedTransform.rotateY,
                    this.rotateZ = retrievedTransform.rotateZ,
                    alert("Transform retrieved")
            } else {
                alert("No saved Transform found");
            }
        },
        clear() {
            localStorage.removeItem(localStorageName);
            alert(`${localStorageName} removed`)
        }
    },
    watch: {
        isCopied(newValue, oldValue) {
            if (newValue === true) {
                setTimeout(() => {
                    this.isCopied = false;
                }, 3000)
            }
        }
    }
});

vue.mount("#app");