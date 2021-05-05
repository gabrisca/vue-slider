const app = new Vue({
  el: "#app",
  data:{
    // timer con valore deafult null
    timer: false,
    // playing di default false (mi serve in html per mostrare e nascondere i pulsanti della consolle)
    playing: false,
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
      // imposto un ritardo di .8 secondi per far partire lo slide
      this.timer = setTimeout(this.goNext, 800);
      // scorro le immagini ogni 3 secondi
      this.timer = setInterval(this.goNext, 3000);
      this.playing = true
    },
    stop(){
      // con clearInterval interrompo lo slide 
      this.timer = clearInterval(this.timer)
      // riporto il contatore a 0
      this.counter = 0;
      // playng false mi serve per mostrare di nuovo il pulsante play in html
      this.playing = false;
    },
  },
})