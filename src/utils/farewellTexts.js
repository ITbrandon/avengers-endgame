export function generateFarewellText(avenger) {
    const options = [
        `Farewell, ${avenger}`,
        `Adios, ${avenger}`,
        `R.I.P., ${avenger}`,
        `We'll miss you, ${avenger}`,
        `Oh no, not ${avenger}!`,
        `${avenger} bites the dust`,
        `Gone but not forgotten, ${avenger}`,
        `The end of ${avenger} as we know it`,
        `Off into the sunset, ${avenger}`,
        `${avenger}, it's been real`,
        `${avenger}, your watch has ended`,
        `${avenger} has left the building`
]

const randomIndex = Math.floor(Math.random() * options.length)
return options[randomIndex]
}