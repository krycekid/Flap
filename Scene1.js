class Scene1 extends Phaser.Scene{
    constructor(){
        super({key:"Scene1"});
    }
    preload(){
        this.load.image('image1','Assets/yellowbird-upflap.png');
        this.load.image('image2','Assets/background-day.png');
        this.load.image('image3','Assets/pipe-green.png');
        this.load.image('image4','Assets/pipe-green2.png');

    }
    create(){
        this.image2 = this.add.image(100,250,'image2');
        this.image2 = this.add.image(350,250,'image2');
        this.image2 = this.add.image(500,250,'image2');
        this.image2 = this.add.image(650,250,'image2');
        this.image1 = this.physics.add.image(100,100,'image1');

        this.image3 = this.physics.add.image(300,440,'image3');
        this.image4 = this.physics.add.image(300,20,'image4');
        this.image5 = this.physics.add.image(450,480,'image3');
        this.image6 = this.physics.add.image(450,60,'image4');
        this.image7 = this.physics.add.image(600,520,'image3');
        this.image8 = this.physics.add.image(600,100,'image4');
        this.image9 = this.physics.add.image(750,560,'image3');
        this.image10 = this.physics.add.image(750,140,'image4');
        this.image11 = this.physics.add.image(900,400,'image3');
        this.image12 = this.physics.add.image(900,-20,'image4');

        //this.timer = game.time.events.loop(1500, this.addOnePipe, this);

        this.text1 = this.add.text(0,0,"Score: ", {font:"40px Impact"});

        this.score = 0;
        this.text2 = this.add.text(110,0,0, {font:"40px Impact"});

        this.text3 = this.add.text(600,450,"Kevin V", {font:"20px Impact"});

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }

    update(delta){

        this.image3.setVelocity(-100,0);
        this.image4.setVelocity(-100,0);
        this.image5.setVelocity(-100,0);
        this.image6.setVelocity(-100,0);
        this.image7.setVelocity(-100,0);
        this.image8.setVelocity(-100,0);
        this.image9.setVelocity(-100,0);
        this.image10.setVelocity(-100,0);
        this.image11.setVelocity(-100,0);
        this.image12.setVelocity(-100,0);
        this.input.keyboard.on('keyup_A',function(){
            this.image1.setVelocity(0,-150)

        },this);
        this.input.keyboard.on('keyup_S',function(){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});

        },this);
        if(this.image3.x<0){
                this.image3 = this.physics.add.image(750,440,'image3');
                this.image4 = this.physics.add.image(750,20,'image4');
                this.score +=1;
                this.text2.setText(this.score.toString());
                //this.text2 = this.add.text(110,0,'score', {font:"40px Impact"});
        }
        if(this.image5.x<0){
                this.image5 = this.physics.add.image(750,480,'image3');
                this.image6 = this.physics.add.image(750,60,'image4');
                this.score +=1;
                this.text2.setText(this.score.toString());
        }
        if(this.image7.x<0){
                this.image7 = this.physics.add.image(750,520,'image3');
                this.image8 = this.physics.add.image(750,100,'image4');
                this.score +=1;
                this.text2.setText(this.score.toString());
        }
        if(this.image9.x<0){
                this.image9 = this.physics.add.image(750,560,'image3');
                this.image10 = this.physics.add.image(750,140,'image4');
                this.score +=1;
                this.text2.setText(this.score.toString());
        }
        if(this.image11.x<0){
                this.image11 = this.physics.add.image(750,400,'image3');
                this.image12 = this.physics.add.image(750,-20,'image4');
                this.score +=1;
                this.text2.setText(this.score.toString());
        }
        if(Math.abs(this.image1.y-this.image3.y) <160 && Math.abs(this.image1.x-this.image3.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image4.y) <160 && Math.abs(this.image1.x-this.image4.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image5.y) <160 && Math.abs(this.image1.x-this.image5.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image6.y) <160 && Math.abs(this.image1.x-this.image6.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image7.y) <160 && Math.abs(this.image1.x-this.image7.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image8.y) <160 && Math.abs(this.image1.x-this.image8.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image9.y) <160 && Math.abs(this.image1.x-this.image9.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image10.y) <160 && Math.abs(this.image1.x-this.image10.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image11.y) <160 && Math.abs(this.image1.x-this.image11.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
        if(Math.abs(this.image1.y-this.image12.y) <160 && Math.abs(this.image1.x-this.image12.x) <40 ){
            this.scene.pause();
            this.textend = this.add.text(215,235,"You Are Dead", {font:"60px Impact"});
       }
    }
}