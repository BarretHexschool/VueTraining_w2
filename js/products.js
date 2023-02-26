const { createApp } = Vue;
const app = {
    data() {
        return {
            products: [],
            tempProduct: {},
        }
    },
    methods: {
        getProducts() {
            axios.get(`${url}/v2/api/${path}/admin/products/all`)
                .then(res => {
                    this.products = res.data.products;
                    console.log(this.products);
                })
                .catch(err => {
                    this.alert(err.response.data.message);
                })
        },
        productDetail(product){
            console.log(product)
            this.tempProduct = product;
        },
        alert(message) {
            window.alert(`${message}`);
        }

    },
    mounted() {
        axios.post(`${url}/v2/api/user/check`)
            .then(res => {
                this.getProducts();
            })
            .catch(err => {
                window.location = 'index.html';
            })

    },
}

createApp(app).mount('#app');
