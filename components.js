Vue.component('todo-item', {
  template: `
  	<div>
      <ol>
        <li>{{todo}}</li>
      </ol>
    </div>
  `
  ,
  props: ['todo']
});

Vue.component('todo-comment', {
  template: `
  	<p>
    Testing
    </p>
  `
  ,
  props: ['todo']
});

var app = new Vue({
  el: '#app'
});
