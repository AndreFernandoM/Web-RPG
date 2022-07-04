const rpgZone = document.querySelector(".rpg-zone");
let player;

class Player{
    constructor(name) {
        this.playerName = name;
        this.playerLife = 100;
        this.playerDamage = 10;
        this.playerLevel = 1;
        this.playerCritChance = 0.1;
    } addRole(role) {
        switch (role) {
            case "warrior":
                this.playerDamage = 20;
                break;
            case "tank":
                this.playerLife = 120;
                break;
            case "rogue":
                this.playerCritChance = 1.5;
                break;

        }
    }

}

function rollDice() {
    let dice = Math.floor(Math.random()*20) + 1;    
    dice = dice + (player.playerCritChance *2) 
    console.log(dice)
    if (dice <= 1.2){
        player.playerLife = player.playerLife - 10;
    }
    if (dice>12) {
        return true;
    } else {
        return false;
    }
    

}

function handleOption(id, optionId){
    const result = rollDice();
    const situationDiv = document.querySelector(".situation");
    situationDiv.remove();
    const resultDiv = document.createElement("div");
    resultDiv.className = "result" 
    const option = data.situations[id].options[optionId];

    if(result) { 
        player.playerLife += option.sucess.bonus;
        player.playerLevel ++;
        resultDiv.innerHTML = `
        <div class="results">
            <p>${option.sucess.description}</p>
            <button onclick="generateSituation()">Continuar</button>
        </div>
       `
    } else {
        player.playerLife -= option.fail.damage;
        player.playerLevel ++;
        resultDiv.innerHTML = `
        <div class="results">
            <p>${option.fail.description}</p>
            <button onclick="generateSituation()">Continuar</button>
        </div>
       `
    }

    rpgZone.appendChild(resultDiv);
}



function resetHUD() {
    if(document.querySelector('.hud')) 
    {
        document.querySelector('.hud').remove();
    }
    const hud = document.createElement("div");
    hud.className = "hud";
    hud.innerHTML= `
    <div class="hud-inner">
        <p class="hud-inner-left">
            HP: ${player.playerLife}
        </p>
        <p class="hud-inner-center">
            Name: ${player.playerName}
        </p>
        <p class="hud-inner-right">
            Level: ${player.playerLevel}
        </p>
    </div>
    `
    rpgZone.appendChild(hud);
}

function generateSituation(){
    resetHUD();
    if (player.playerLife <= 0) {
        alert('Você Morreu! :(');
        return window.location.href = './index.html';
    }
    document.querySelector('.result')?.remove();
    const situation = data.situations[Math.floor(Math.random()*data.situations.length)];
    const situationDiv = document.createElement("div");
    situationDiv.className = "situation";
    situationDiv.innerHTML = `
        <div class="situation-inner">
            <p>
                ${situation.description}
            </p>
        </div>

        <div class="situation-inner-options">
            <button onclick="handleOption(${situation.id}, 0)"> ${situation.options[0].description}</button>
            <button onclick="handleOption(${situation.id}, 1)"> ${situation.options[1].description}</button>
        </div>
    `
    rpgZone.appendChild(situationDiv);
}



function chooseRole(role) {
    document.querySelector('.class-choice').remove();
    player.addRole(role);
    resetHUD();
    generateSituation();

}

function showClassChoice(nome) {
    player = new Player(nome);
    document.querySelector(".title-area").remove();
    document.querySelector(".input-area").remove();
    const classChoice = document.createElement("div") 
    classChoice.className = "class-choice";
    classChoice.innerHTML = `
    <div class="playerOptions"> 
         <p>OK ${nome}! escolha sua Classe</p>
        <buttom onclick="chooseRole('warrior')">Warrior</buttom>
        <buttom onclick="chooseRole('tank')">Tank</buttom>
        <buttom onclick="chooseRole('rogue')">Rogue</buttom>
    </div>    
    ` 
    rpgZone.appendChild(classChoice)
}

function handleNameSubmit () {
    const nameOfPlayer = document.getElementById("input-0").value;
    if(nameOfPlayer.length > 0) {
        showClassChoice(nameOfPlayer);
        
    } else {
        alert("Por favor digite seu nome")
    }
}
