const filamenty = [
    {
        id: 0,
        vyrobca: "Bambu Lab",
        material: "PLA",
        cena: 18.99,
        farba: {
            nazov: "Čierna",
            code: "#000000"
        },
        hmotnost: {
            soSpoolom: 675,
            spool: 250,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 1,
        vyrobca: "Bambu Lab",
        material: "PLA",
        cena: 18.99,
        farba: {
            nazov: "Červená",
            code: "#C12E1F"
        },
        hmotnost: {
            soSpoolom: 826,
            spool: 250,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 2,
        vyrobca: "Filament PM",
        material: "PLA+",
        cena: 23.90,
        farba: {
            nazov: "Biela",
            code: "#ecece7"
        },
        hmotnost: {
            soSpoolom: 560,
            spool: 216,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 3,
        vyrobca: "Filament PM",
        material: "PLA+",
        cena: 23.90,
        farba: {
            nazov: "Sweet Mint",
            code: "#7ebab5"
        },
        hmotnost: {
            soSpoolom: 942,
            spool: 216,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 4,
        vyrobca: "eSun",
        material: "PLA+",
        cena: 17.10,
        farba: {
            nazov: "Žltá",
            code: "#fbe625"
        },
        hmotnost: {
            soSpoolom: 1053,
            spool: 224,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 5,
        vyrobca: "eSun",
        material: "eSilk-PLA",
        cena: 17.29,
        farba: {
            nazov: "Modrá",
            code: "linear-gradient(#61ccee, #123cea)"
        },
        hmotnost: {
            soSpoolom: 830,
            spool: 224,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 6,
        vyrobca: "eSun",
        material: "ePLA-Silk Magic",
        cena: 25.58,
        farba: {
            nazov: "Ružovo-Modrá",
            code: "linear-gradient(#e41e95, #123cea)"
        },
        hmotnost: {
            soSpoolom: 1060,
            spool: 220,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 7,
        vyrobca: "PolyMaker",
        material: "PolyTerra PLA",
        cena: 19.99,
        farba: {
            nazov: "Ružová",
            code: "#E4BDD0"
        },
        hmotnost: {
            soSpoolom: 783,
            spool: 140,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
    {
        id: 8,
        vyrobca: "Filament PM",
        material: "PLA",
        cena: 26.17,
        farba: {
            nazov: "Zelená",
            code: "#80bf1a"
        },
        hmotnost: {
            soSpoolom: 952,
            spool: 216,
            celkovo: (this.soSpoolom - this.spool),
            povodna: 1000,
        }
    },
]

export default filamenty