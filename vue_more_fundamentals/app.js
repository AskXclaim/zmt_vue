Vue.createApp({
    data() {
        return {
            isPurple: false,
            textColor: "white",
            circleSize: 200,
            persons:[
                ""
            ]
            // circleFontSize:30
        }
    },
    computed: {
        circleFontSize() {
            return (this.circleSize / 6.5);
        },
        circleRotationDeg() {
            return (this.circleSize - 200) * 3.6;
        }
    }
}).mount("#app");
