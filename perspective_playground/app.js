const vue = Vue.createApp({
    data() {
        return {
            perspective: 171,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
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
    },
    methods:{
        reset(){
            this.perspective=171;
            this.rotateX=0;
            this.rotateY=0;
            this.rotateZ=0;
        }
    }
});

vue.mount("#app");