const vm = Vue.createApp({
    data() {
        return {
            firstName: "Tam",
            middleName: "",
            lastName: "Greg",
            age: 28,
            url: "https://google.com",
            url_raw: "<a href='https://bing.com' target='_blank'>Bing</a>"
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        updateMiddleName() {
            this.middleName = event.target.value;
        },
        increase() {
            this.age++;
        },
        decrease() {
            this.age--;
        },
        updateLastName(event) {
            this.lastName = event.target.value;
        },
        updateLastNameWithExtra(msg, event) {
            event.preventDefault();

            console.log(msg);

            this.lastName = event.target.value;
        },
        updateLastNameWithExtraAndEventModifier(msg, event) {
            console.log(msg);

            this.lastName = event.target.value;
        }
    },
    computed: {
        fullNameCompute() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        }
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            }, 3000);
        }
    }

}).mount("#app")

setTimeout(() => {
    vm.firstName = "Tim";
}, 2000);

// Vue.createApp({
//     data() {
//         return {
//             title: "Himalayan",
//             author: "John Chris Doe"
//         }
//     }
// }).mount("#duplicateApp");