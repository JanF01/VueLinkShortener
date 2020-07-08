new Vue({
    el: '#app',
    data: {
        name: '',
        url: '',
        alerts: '',
        danger: false,
    },
    methods: {
        createCute() {
            const body = {
                url: this.url,
                name: this.name
            }

            fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                response.text().then((value) => {
                    this.alerts = value;
                    if (value == "Wrong data" || value == "Name already used") {
                        this.danger = true;
                    } else {
                        this.danger = false;
                    }
                });
            }).then(result => {

            })
        }
    }

})