export const myMixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('mixin mounted')
    }
}