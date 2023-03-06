app.component("product-deails", {
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    data(){
    },
    methods: {},
    computed: {}
})