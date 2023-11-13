
Vue.component('Greeting', {
    props: ['name'],
    template: '<p>Hello {{ name }}</p>'
});

new Vue({
    el: '#app'
})