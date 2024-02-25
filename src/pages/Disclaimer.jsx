import React, {useEffect, useState} from 'react';

import {ReactComponent as Check} from "../images/icons/check.svg";

const Disclaimer = () => {
    const [pouzivatelSuhlasi, setPouzivatelSuhlasi] = useState(null);

    useEffect(() => {
        if (pouzivatelSuhlasi) {
            localStorage.setItem("suhlas", "true")
        }
    }, [pouzivatelSuhlasi]);


    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | Disclaimer"
        if (localStorage.getItem("suhlas") === "true") {
            setPouzivatelSuhlasi(true)
        }
    }, []);


    return (
        <div className={"projekt disclaimer"}>
            <div className="disclaimernadpisy">
                <h2>Vyhlásenie o vylúčení zodpovednosti</h2>
                <h4 className={"nevyrazne"}>Tiež známe ako Disclaimer</h4>
            </div>
            <div className="disclaimercontent">
                <div>
                    <h3>1. Vymedzenie zodpovednosti</h3>
                    <p>Obsah zverejnený na tejto stránke slúži iba na informačné účely a nemal by sa považovať za
                        profesionálnu náhradu</p>
                    <p>Prevádzkovateľ stránky nezodpovedá za akékoľvek škody alebo straty, ktoré by mohli vyplynúť z
                        používania obsahu zverejneného na tejto stránke</p>
                </div>
                <div>
                    <h3>2. Obmedzenie zodpovednosti</h3>
                    <p>Používatelia používajú obsah tejto stránky na vlastné riziko</p>
                    <p>Prevádzkovateľ stránky nezaručuje presnosť, úplnosť alebo aktuálnosť poskytovaných informácií a
                        nezodpovedá za akékoľvek nepresnosti alebo chyby spôsobené v obsahu</p>
                </div>
                <div>
                    <h3>3. Odkazy na tretie strany</h3>
                    <p>Stránka môže obsahovať odkazy na tretie strany</p>
                    <p>Tieto odkazy sú poskytované iba pre vaše pohodlie a prevádzkovateľ stránky nezodpovedá za obsah
                        týchto odkazovaných stránok ani za akékoľvek škody alebo straty vzniknuté používaním týchto
                        odkazov</p>
                </div>
                {
                    /*
                    Ochrana osobných údajov


                    Zber Osobných Údajov: Pri používaní tejto stránky môžeme zhromažďovať osobné údaje od používateľov, ak sú dobrovoľne poskytnuté. Tieto údaje môžu zahŕňať, ale nie sú obmedzené na, mená, e-mailové adresy, adresy, telefónne čísla a ďalšie údaje, ktoré nám pomáhajú s komunikáciou s používateľmi alebo poskytovaním určitých služieb.

                    Použitie Osobných Údajov: Osobné údaje, ktoré zhromažďujeme, môžeme použiť na zlepšenie našej služby, správu konta používateľa, zasielanie informácií o novinkách, ponukách alebo iných informáciách, ktoré by mohli byť pre používateľa zaujímavé.

                    Ochrana Osobných Údajov: Zaväzujeme sa chrániť osobné údaje používateľov a prijímame primerané opatrenia na ochranu týchto údajov pred neoprávneným prístupom, zmenou, zneužitím alebo zničením. Naša prevádzka je v súlade so všetkými platnými zákonnými požiadavkami na ochranu osobných údajov.

                    Zdieľanie Osobných Údajov: Osobné údaje používateľov nezdieľame, neprenášame ani nepredávame tretím stranám s výnimkou situácií, keď je to nevyhnutné na splnenie právnych požiadaviek alebo na ochranu našich práv a majetku.

                    Práva Používateľov: Používatelia majú právo žiadať prístup k svojim osobným údajom, ich opravu, obmedzenie spracovania alebo ich vymazanie v prípade, že údaje už nie sú potrebné na účely, na ktoré boli zhromažďované.

                    Aktualizácie Zásad: Tieto Zásady Ochrany Osobných Údajov môžeme pravidelne aktualizovať alebo meniť. Ak k takýmto zmenám dôjde, budeme informovať používateľov prostredníctvom e-mailu alebo iných prostriedkov komunikácie.

                    Súhlas s Podmienkami: Používaním tejto stránky vyjadrujete svoj súhlas s týmito Zásadami Ochrany Osobných Údajov. Ak nesúhlasíte s týmito zásadami, prosím, nepokračujte v používaní tejto stránky.

                    Kontakt na Správcu Údajov: Ak máte akékoľvek otázky alebo obavy týkajúce sa spracovania vašich osobných údajov alebo týchto Zásad Ochrany Osobných Údajov, kontaktujte nás na [kontaktná adresa] alebo na [e-mailová adresa].
                    */
                }
                <div>
                    <h3>4. Zmeny vo vyhlásení</h3>
                    <p>Tento dokument o vyhlásení o vylúčení zodpovednosti môže byť kedykoľvek aktualizovaný alebo
                        menený bez predchádzajúceho upozornenia</p>
                    <p>Aktuálna verzia tohto vyhlásenia bude vždy zverejnená na tejto stránke</p>
                </div>
                <div>
                    <h3>5. Kontakt na prevádzkovateľa</h3>
                    <p>Ak máte akékoľvek otázky alebo obavy týkajúce sa tohto vyhlásenia alebo obsahu tejto stránky,
                        kontaktujte ma na <a
                            href="mailto:cypooriginal@gmail.com" target={"_blank"}>cypooriginal@gmail.com</a> alebo
                        jedným z <a
                            href="/kontakt">kontaktov</a>
                    </p>
                </div>
            </div>
            <div className="disclaimerciara"></div>
            <div>
                {
                    pouzivatelSuhlasi
                        ? <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1em",
                                }}
                        >
                            Súhlasím
                            <Check style={{width: "2em", height: "2em", fill: "var(--colorGood)"}}/>
                        </button>
                        : <button onClick={() => {setPouzivatelSuhlasi(true)}}>Súhlasím</button>
                }
            </div>
        </div>
    );
};

export default Disclaimer;
