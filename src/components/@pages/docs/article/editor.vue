<template>
    <article />
</template>

<script>

    // style="border: 2px dotted black; padding: 10px;"
    import marked from "marked"

    export default {
        props: {
            value: String,
        },
        created() {
            if(typeof(window) === 'undefined')
                return

            const turndown = require('turndown').default
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
            }).addRule('pre', {
                filter: ['pre'],
                replacement: function (content) {
                    if(content.indexOf('\n') == -1)
                        return '`' + content + '`\n'
                    // ToDo auto get lang from tag
                    return '```\n' + content + '```\n'
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
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
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
                        // href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
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

<style lang="scss">

    .docs-editor {
        position: relative;

        .toolbar {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            height: 60px;
            z-index: 99;
            background: #fff;
        }
    }

</style>