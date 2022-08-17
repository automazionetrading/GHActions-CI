const attack = (creatureName, damage, isCritical) => `${creatureName} dealt a wopping ${isCritical ? damage * 2 : damage} damage!`;

module.exports = attack;
