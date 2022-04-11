class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
  
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  
    deal(){
     this.deck.pop(1);
     this.deck.pop(2);
     this.deck.pop(3);
     this.deck.pop(4);
     this.deck.pop(5);
     return this.deck.pop(6);
    }
  }

// for i, i<1000 , i++   deck1.reset(); deck1.shuffle() deck1.deal();
  
  const deck1 = new Deck();
  console.log(deck1.deck);
  deck1.reset();
  deck1.shuffle()
  deck1.deal();
  console.log(deck1.deck);