<template>
    <article style="border: 2px dotted black; padding: 10px;" />
</template>

<script>

    import marked from "marked"
    import turndown from 'turndown'

    export default {
        props: {
            value: String,
        },
        created() {
            const turnservice = new turndown()
            turnservice.addRule('h1', {
                filter: ['h1'],
                replacement: function (content) {
                    return '# ' + content + '\n'
                }
            }).addRule('h2', {
                filter: ['h2'],
                replacement: function (content) {
                    return '## ' + content + '\n'
                }
            }).addRule('h3', {
                filter: ['h3'],
                replacement: function (content) {
                    return '### ' + content + '\n'
                }
            }).addRule('h4', {
                filter: ['h4'],
                replacement: function (content) {
                    return '#### ' + content + '\n'
                }
            }).addRule('h5', {
                filter: ['h5'],
                replacement: function (content) {
                    return '#### ' + content + '\n'
                }
            })

            this.turndown = turnservice.turndown.bind(turnservice)
        },
        mounted() {
            if(typeof(Quill) !== 'undefined')
                this.setup()
        },
        methods: {
            setup() {
                var quill = new window.Quill(this.$el, {
                    theme: 'bubble',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            ['link', { 'header': '1' }, { 'header': '2' }], //image
                            ['blockquote', 'code-block'],
                        ]
                    }
                });

                quill.clipboard.dangerouslyPasteHTML(marked(this.value || '') + "\n");
                quill.on("text-change", () => {
                    var html = quill.container.firstChild.innerHTML;
                    const md = this.turndown(html)
                    console.log(md)
                    this.$emit('input', md)
                })
            }
        },
        metaInfo() {
            return {
                link: [
                    {
                        rel: 'stylesheet',
                        href: '/css/quill.bubble.css'
                    }
                ],
                script: [
                    {
                        src: 'https://cdn.quilljs.com/1.3.6/quill.js',
                        callback: () => {
                            this.setup()
                        }
                    }
                ]
            }
        }
    }

</script>