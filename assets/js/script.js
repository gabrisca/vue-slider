const app = new Vue({
  el: "#app",
  data:{
    // timer con valore deafult null
    timer: null,
    // counter con valore default 0
    counter: 0,
    // array di immagini
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
      // aumento il contatore di 1 ogni volta che la funzione viene richiamata
      this.counter++;
      console.log(this.counter);
      // quando il contatore ha come valore la lunghezza dell'array lo riporto a 0
      if(this.counter === this.img.length){
        this.counter = 0
      }
    },
    goBack(){
      // diminuisco il contatore di 1 ogni volta che la funzione viene richiamata
      this.counter--;
      console.log(this.counter);
      // quando il contatore ha valore negativo lo riporto alla lunghezza dell'array -1
      if(this.counter < 0){
        this.counter = this.img.length -1
      }
    },
    // play setta l'inytervallo del timer e richiama funzione goNext
    play(){
      this.timer = setInterval(this.goNext, 3000);
    },
  },
})