
Vue.component('Greeting', {
    data: function() {
        return {
            name: 'ilya'
        }
    },
    template: '<p>Hello {{ name }}</p>'
});

new Vue({
    el: '#app'
})