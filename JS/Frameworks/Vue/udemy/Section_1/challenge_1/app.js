new Vue({
    el: '#app',
    data: {
        //Make Start New Game reveal controls
        show: true,
        health: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        //Attack takes of random points(1-10) from monster(1-20) & player
        resetGame: function(){
            this.show = false;
            this.health = 100,
            this.monsterHealth = 100;
        },
        //Make Controls Function
        startAttack: function() {
            var damage = this.calculateDamage(1,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
            this.checkWin();
            //console.log(attackNumber);
            //console.log(monsterAttackNumber);
        },
        //Special attack takes off random points from monster(11-20), from player(1-20)
        specialAttack: function() {
            var damage = this.calculateDamage(11,20);
            this.monsterHealth -= damage;
            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player special hits monster for ' + damage
            });

            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        //Heal will heal player random number (1-10), monster attacks(1-20)
        heal: function() {

            if(this.health <= 90){
                this.health += 10;
            } else{
                this.health = 100;
            }
            this.monsterAttacks();
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            //console.log(healNumber);
            //console.log(monsterAttackNumber);
        },
        //Give Up ends the game, resets counter, hide controls, and show start game
        giveUp: function() {
            this.show = !this.show;
            this.health = 100;
            this.monsterHealth = 100;
            this.turns.length = 0;
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(1,20);
            this.health -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage,
            });
        },
        calculateDamage: function(min, max){
            return Math.floor(Math.random()*(max-min+1)+min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You Won! New Game?')){
                    this.resetGame();
                } else {
                    this.show = false;
                }
                return true;
            } else if(this.health <= 0) {
                if(confirm('You Lost! New Game?')){
                    this.resetGame();
                } else {
                    this.show = false;
                }
                return true;
            }
        }
    }
});