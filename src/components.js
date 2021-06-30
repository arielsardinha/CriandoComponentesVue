import Vue from "vue";
//todos os componentes que sao criados aqui
//sao cadastrados no escopo global
//porem precisa ser importado no main.js

Vue.component("ButtonString", {
  template: '<button @click="contador">ButtonString{{ count }}</button>',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    contador() {
      this.count++;
    },
  },
});

Vue.component("ButtonTemplateString", {
  template: `<button @click="contador">ButtonString{{ count }}</button>`,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    contador() {
      this.count++;
    },
  },
});

Vue.component("ButtonXTemplate", {
  template: "#button-x-template",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    contador() {
      this.count++;
    },
  },
}); //codigo criado direto no html

Vue.component("ButtonInline", {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    contador() {
      this.count++;
    },
  },
}); // botao criado direto no app.vue

Vue.component("ButtonRender", {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
  render(createElement) {
    return createElement(
      "button",
      {
        on: {
          click: () => this.count++, //this.click
        },
      },
      [`Click ButtonRender ${this.count} times`]
    );
  },
}); //

Vue.component("ButtonJSX", {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    contador() {
      this.count++;
    },
  },
  render() {
    return (
      <button onClick={this.contador}>Click ButtonJSX {this.count}</button>
    );
  },
});
