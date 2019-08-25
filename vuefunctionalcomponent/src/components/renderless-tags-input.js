export default {
    render() {
        return this.$scopedSlots.default({
            tags: this.value,
            addTag: this.addTag,
            removeTag: this.removeTag,
            inputAttrs: {
                value: this.newTag
            },
            inputEvents: {
                input: e => {
                    this.newTag = e.target.value;
                },
                keydown: e => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        this.addTag();
                    }
                }
            }
        });
    },
    data() {
        return {
            newTag: ''
        };
    },
    props: ['value'],
    methods: {
        addTag() {
            if (this.newTag.trim().length === 0 || this.value.includes(this.newTag))
                return;

            this.$emit('input', [...this.value, this.newTag]);
            this.newTag = '';
        },
        removeTag(tag) {
            this.$emit('input', this.value.filter(t => t !== tag));
        }
    }
};