export const lengthAwareMixin = {
    computed: {
        LengthAware() {
            return this.secondText + ' (' +this.secondText.length + ')';
        }
    }
}