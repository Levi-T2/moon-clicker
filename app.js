
let playerStats = [{
    clickPower: 1,
    autoClickPower: 0
}]

let clickUpgrade = {
    cost1: 10,
    cost2: 50,
    cost3: 500,
    cost4: 1200,
    cost5: 3700,

    autoCost1: 25,
    autoCost2: 250,
    autoCost3: 1000,
    autoCost4: 2000,
    autoCost5: 5000,
}

let clickStats = {
    stats1: 0,
    stats2: 0,
    stats3: 0,
    stats4: 0,
    stats5: 0,

    autoStats1: 0,
    autoStats2: 0,
    autoStats3: 0,
    autoStats4: 0,
    autoStats5: 0,
}

let totalCheese = 3400

function mineMoon() {

    playerStats.forEach(player => {
        totalCheese += (player.clickPower)
        // console.log(totalCheese)
    })
    drawCheese()
    drawPlayerClickValue()
}

function buyClickPowerUpgrade() {
    if (totalCheese >= clickUpgrade.cost1) {
        totalCheese -= clickUpgrade.cost1
        clickUpgrade.cost1 += 5
        playerStats[0].clickPower += 1
        clickStats.stats1 += 1
    }
    drawClickUpgradeCost()
    drawCheese()
    drawPlayerClickValue()
    drawClickStats()
}

function buyCheeseAxeUpgrade() {
    if (totalCheese >= clickUpgrade.cost2) {
        totalCheese -= clickUpgrade.cost2
        clickUpgrade.cost2 += 25
        playerStats[0].clickPower += 10
        clickStats.stats2 += 1
    }
    drawClickUpgradeCost()
    drawCheese()
    drawPlayerClickValue()
    drawClickStats()
}

function buyCheeseChainsawUpgrade() {
    if (totalCheese >= clickUpgrade.cost3) {
        totalCheese -= clickUpgrade.cost3
        clickUpgrade.cost3 += 100
        playerStats[0].clickPower += 50
        clickStats.stats3 += 1
    }
    drawClickUpgradeCost()
    drawCheese()
    drawPlayerClickValue()
    drawClickStats()
}

function buyLaserDrillUpgrade() {
    if (totalCheese >= clickUpgrade.cost4) {
        totalCheese -= clickUpgrade.cost4
        clickUpgrade.cost4 += 200
        playerStats[0].clickPower += 100
        clickStats.stats4 += 1
    }
    drawClickUpgradeCost()
    drawCheese()
    drawPlayerClickValue()
    drawClickStats()
}

function buySatelliteUpgrade() {
    if (totalCheese >= clickUpgrade.cost5) {
        totalCheese -= clickUpgrade.cost5
        clickUpgrade.cost5 += 1000
        playerStats[0].clickPower += 250
        clickStats.stats5 += 1
    }
    drawClickUpgradeCost()
    drawCheese()
    drawPlayerClickValue()
    drawClickStats()
}

function buyAutoUpgradeMiner() {
    if (totalCheese >= clickUpgrade.autoCost1) {
        totalCheese -= clickUpgrade.autoCost1
        clickUpgrade.autoCost1 += 20
        playerStats[0].autoClickPower += 1
        clickStats.autoStats1 += 1
    }
    // console.log(playerStats[0].autoClickPower)
    drawCheese()
    drawAutoClickValue()
    drawClickUpgradeCost()
    drawClickStats()
}

function buyAutoUpgradeDrill() {
    if (totalCheese >= clickUpgrade.autoCost2) {
        totalCheese -= clickUpgrade.autoCost2
        clickUpgrade.autoCost2 += 75
        playerStats[0].autoClickPower += 10
        clickStats.autoStats2 += 1
    }
    drawCheese()
    drawAutoClickValue()
    drawClickUpgradeCost()
    drawClickStats()
}

function buyAutoUpgradeSpiral() {
    if (totalCheese >= clickUpgrade.autoCost3) {
        totalCheese -= clickUpgrade.autoCost3
        clickUpgrade.autoCost3 += 500
        playerStats[0].autoClickPower += 100
        clickStats.autoStats3 += 1
    }
    drawCheese()
    drawAutoClickValue()
    drawClickUpgradeCost()
    drawClickStats()
}

function buyAutoUpgradeImpactor() {
    if (totalCheese >= clickUpgrade.autoCost4) {
        totalCheese -= clickUpgrade.autoCost4
        clickUpgrade.autoCost4 += 1250
        playerStats[0].autoClickPower += 300
        clickStats.autoStats4 += 1
    }
    drawCheese()
    drawAutoClickValue()
    drawClickUpgradeCost()
    drawClickStats()
}

function collectAutoUpgrades() {

    const autoUpgradeAmount = playerStats[0].autoClickPower
    totalCheese += autoUpgradeAmount
    // console.log(autoUpgradeAmount)
    drawCheese()

}

function drawCheese() {
    const provoloneElement = document.getElementById('total cheese')
    provoloneElement.innerText = totalCheese
}

function drawPlayerClickValue() {
    const clickValueElement = document.getElementById('click value')
    clickValueElement.innerText = playerStats[0].clickPower
}

function drawClickUpgradeCost() {
    const clickUpgradeElement = document.getElementById('click upgrade1')
    clickUpgradeElement.innerText = clickUpgrade.cost1

    const clickUpgradeElement2 = document.getElementById('click upgrade2')
    clickUpgradeElement2.innerText = clickUpgrade.cost2

    const clickUpgradeElement3 = document.getElementById('click upgrade3')
    clickUpgradeElement3.innerText = clickUpgrade.cost3

    const clickUpgradeElement4 = document.getElementById('click upgrade4')
    clickUpgradeElement4.innerText = clickUpgrade.cost4

    const clickUpgradeElement5 = document.getElementById('click upgrade5')
    clickUpgradeElement5.innerText = clickUpgrade.cost5

    const autoUpgradeElement1 = document.getElementById('auto upgrade1')
    autoUpgradeElement1.innerText = clickUpgrade.autoCost1

    const autoUpgradeElement2 = document.getElementById('auto upgrade2')
    autoUpgradeElement2.innerText = clickUpgrade.autoCost2

    const autoUpgradeElement3 = document.getElementById('auto upgrade3')
    autoUpgradeElement3.innerText = clickUpgrade.autoCost3

    const autoUpgradeElement4 = document.getElementById('auto upgrade4')
    autoUpgradeElement4.innerText = clickUpgrade.autoCost4
}

function drawClickStats() {
    const clickStatElement1 = document.getElementById('click stat1')
    clickStatElement1.innerText = clickStats.stats1

    const clickStatElement2 = document.getElementById('click stat2')
    clickStatElement2.innerText = clickStats.stats2

    const clickStatElement3 = document.getElementById('click stat3')
    clickStatElement3.innerText = clickStats.stats3

    const clickStatElement4 = document.getElementById('click stat4')
    clickStatElement4.innerText = clickStats.stats4

    const clickStatElement5 = document.getElementById('click stat5')
    clickStatElement5.innerText = clickStats.stats5

    const clickAutoStatElement1 = document.getElementById('auto stat1')
    clickAutoStatElement1.innerText = clickStats.autoStats1

    const clickAutoStatElement2 = document.getElementById('auto stat2')
    clickAutoStatElement2.innerText = clickStats.autoStats2

    const clickAutoStatElement3 = document.getElementById('auto stat3')
    clickAutoStatElement3.innerText = clickStats.autoStats3

    const clickAutoStatElement4 = document.getElementById('auto stat4')
    clickAutoStatElement4.innerText = clickStats.autoStats4
}

function drawAutoClickValue() {
    const autoClickElement = document.getElementById('auto value')
    autoClickElement.innerText = playerStats[0].autoClickPower
}

drawCheese()
drawPlayerClickValue()
drawClickUpgradeCost()
drawClickStats()
drawAutoClickValue()


setInterval(collectAutoUpgrades, 3000);