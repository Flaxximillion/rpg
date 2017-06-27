$(document).ready(function () {
    let currEnemy;
    let gameText = $("#eventText");
    let player = {
        name: "You",
        ammo: 100,
        cats: 100,
    };

    function getRandomPosition(element) {
        let x = document.body.offsetHeight - element.clientHeight;
        let y = document.body.offsetWidth - element.clientWidth;
        let randomX = Math.floor(Math.random() * x);
        let randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    // window.onload = function() {
    //     var img = document.createElement('img');
    //     img.setAttribute("style", "position:absolute;");
    //     img.setAttribute("src", "some-image.jpg");
    //     document.body.appendChild(img);
    //     var xy = getRandomPosition(img);
    //     img.style.top = xy[0] + 'px';
    //     img.style.left = xy[1] + 'px';
    // }
    //
    function Cat(){
        let cat = this;
        this.catClass = animateRandom();
        this.catDiv = $("<div>").addClass(this.catClass).appendTo("#cats");
        this.animateCat = setInterval(function(){
            $(cat.catDiv).animateSprite({
                fps: 4,
                animations: {
                    walk: [0, 1, 2, 1]
                },
                loop: true
            })
        }, 3000)
    }



    let cat1 = new Cat;


    //
    // function generateCats(numberOfCats){
    //     for(let i = 0; i < numberOfCats; i++){
    //         let catDiv = $('<div>');
    //         catDiv.
    //     }
    // }


    $("#spriteUp").animateSprite({
        fps: 4,
        animations: {
            walk: [0, 1, 2, 1]
        },
        loop: true
    });

    $("#spriteRight").animateSprite({
        fps: 4,
        animations: {
            walk: [0, 1, 2, 1]
        },
        loop: true
    });
    $("#spriteDown").animateSprite({
        fps: 4,
        animations: {
            walk: [0, 1, 2, 1]
        },
        loop: true
    });
    $("#spriteLeft").animateSprite({
        fps: 4,
        animations: {
            walk: [0, 1, 2, 1]
        },
        loop: true
    });
    $("#spriteSleep").animateSprite({
        fps: 4,
        animations: {
            walk: [0, 1, 2, 3]
        },
        loop: true
    });

    function animateRandom() {
        let random = ['spriteUp', 'spriteDown', 'spriteRight', 'spriteLeft', 'spriteSleep'];
        return random[Math.floor(Math.random() * random.length)];
    }

    const Attacks = {
        fancyFeast: {
            ammo: 10,
            playerButtonText: "Open up some Fancy Feast",
            playerText: "viciously tear open a can of Fancy Feast!",
            enemyText: "cranks open a can of Fancy Feast, visibly trembling with the effort!",
            catText: "race over at the sound!"
        },
        laserPointer: {
            ammo: 6,
            playerButtonText: "Activate laser pointer",
            playerText: "flail around with a laser pointer!",
            enemyText: "wildly fires off her laser pointer!",
            catText: "chase after the laser!"
        },
        string: {
            ammo: 3,
            playerButtonText: "Wiggle some string",
            playerText: "do a fancy ribbon dance with a length of twine!",
            enemyText: "attempts to seduce your felines with some fancy ribbon play!",
            catText: "are vaguely tempted and meander over lazily."
        },
        catnip: {
            ammo: 15,
            playerButtonText: "Cover yourself in catnip",
            playerText: "smother your body in catnip!",
            enemyText: "throws a whole container of catnip over her head!",
            catText: "instantly race over and begin rolling around!"
        },
        robotMouse: {
            ammo: 12,
            playerButtonText: "Zip a robotic mouse over",
            playerText: "send a robotic mouse to bait some kitties!",
            enemyText: "glares at you angrily as her robotic mouse zooms around your cats!",
            catText: "chase after it excitedly!"
        },
        dryFood: {
            ammo: 1,
            playerButtonText: "Throw some dry cat food",
            playerText: "dump some dry food ceremoniously on the ground.",
            enemyText: "throws some dry food up in the air as an offering!",
            catText: "slowly walks over and begins munching."
        },
    };

    const attackArray = Object.keys(Attacks);

    function CrazyCatLady() {
    }

    function constructCatLady(catLadyName, catLadyAmmo, catLadyCats, index, attacks) {
        let crazyCatLady = new CrazyCatLady();
        let button = $("#crazyCatLady" + index);
        crazyCatLady.name = catLadyName;
        crazyCatLady.ammo = catLadyAmmo;
        crazyCatLady.cats = catLadyCats;
        crazyCatLady.availableAttacks = attacks;
        crazyCatLady.button = button;

        button.text(catLadyName);
        button.data("object", crazyCatLady);
        return crazyCatLady;
    }

    function enemyAttack(availableAttacks) {
        return Attacks[(attackArray[availableAttacks[Math.round(Math.random() * (availableAttacks.length - 1))]])];
    }

    $(".crazyCatLady").click(function () {
        currEnemy = $(this).data("object");
    });


    $(".attack").mouseenter(function (event) {
        event.preventDefault();
        let button = $(this);

        let properties = {
            width: button.width() * 1.05,
            height: button.height() * 1.05
        };

        button.pulse(properties, {duration: 350, pulses: -1})
        // interval = setInterval(function(){
        //     button.effect("scale", {percent: 102}, 300);
        //     button.effect("scale", {percent: 98}, 300);
        //     button.effect("scale", {percent: 100}, 300)
        // }, 300);
    }).mouseleave(function () {
        $(this).pulse("destroy");
    });


    // attackButton.click(function () {
    //     gameText.text("");
    //     let playerAttack = Attacks[$(this).val()];
    //     let attack = enemyAttack(currEnemy.availableAttacks);
    //
    //
    //     player.ammo -= playerAttack.ammo;
    //     currEnemy.cats -= playerAttack.ammo;
    //     player.cats += playerAttack.ammo;
    //
    //     currEnemy.ammo -= attack.ammo;
    //     player.cats -= attack.ammo;
    //     currEnemy.cats += attack.ammo;
    //
    //     if (player.cats <= 0) {
    //         player.cats = 0;
    //         playerLose();
    //     } else if (currEnemy.cats <= 0) {
    //         currEnemy.cats = 0;
    //         playerWin();
    //     }
    //
    //     let enemyCatText = $("<p>").text(attack.ammo + " cats " + attack.catText);
    //     let catText = $("<p>").text(playerAttack.ammo + " cats " + playerAttack.catText);
    //
    //     if (playerAttack.ammo === 1) {
    //         catText = $("<p>").text(playerAttack.ammo + " cat " + playerAttack.catText);
    //     } else if (attack.ammo === 1) {
    //         enemyCatText = $("<p>").text(attack.ammo + " cat " + attack.catText);
    //     }
    //
    //     let text = $("<p>").text("You " + playerAttack.playerText);
    //     let enemyText = $("<p>").text(currEnemy.name + " " + attack.enemyText);
    //
    //     gameText.append(text, catText, enemyText, enemyCatText);
    //
    //     console.log(playerAttack.ammo, "player cats: ", player.cats);
    //     console.log("player ammo: ", player.ammo);
    //     console.log(attack.ammo, "enemy cats: ", currEnemy.cats);
    //     console.log("enemy ammo: ", currEnemy.ammo);
    // });

    function playerWin() {
        console.log("You got all of " + currEnemy.name + "'s cats! Congratulations! Now take her energy and go get some more.");
        player.ammo += currEnemy.ammo;
    }

    function playerLose() {
        console.log("Oh no! All your cats are gone!");
    }

    let crazyCatLady1 = constructCatLady("Bertha", 100, 100, 1, [0, 2, 5]);
    let crazyCatLady2 = constructCatLady("Gretchen", 100, 100, 2, [2, 3, 4]);
    let crazyCatLady3 = constructCatLady("Dolores", 100, 100, 3, [1, 2, 3]);

    console.log(crazyCatLady1, crazyCatLady2, crazyCatLady3);
});