const app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    img: [
      "assets/img/episodio I.png",
      "assets/img/episodio II.jpg",
      "assets/img/episodio III.jpg",
      "assets/img/episodio IV.jpg",
      "assets/img/episodio V.jpg",
      "assets/img/episodio VI.jpg",
      "assets/img/episodio VII.jpg",
      "assets/img/episodio VIII.jpeg",
      "assets/img/episodio IX.jpg",
    ],
  },
  methods: {
    goNext(){
      this.counter++
    },
    goBack(){
      this.counter--
    },
  },
})