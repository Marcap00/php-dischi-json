const { createApp } = Vue

createApp({
    data() {
        return {
            recordsList: [],
        }
    },
    methods: {
        getRecords() {
            axios.get('http://localhost/php-dischi-json/api/')
                .then((response) => {
                    console.log('Chiamata iniziata');
                    // handle success
                    console.log(response.data);
                    this.recordsList = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    console.log('Chiamata completata');
                });
        }
    },
    created() {
        this.getRecords()
    }
}).mount('#app')