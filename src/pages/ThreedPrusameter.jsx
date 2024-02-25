import React from 'react';

import SpatNa from "../components/SpatNa";
import {Link} from "react-router-dom";

const ThreedPrusameter = () => {
    return (
        <>
            <div className={"threedprusameter projekt"}>
                <div className="prusameternadpisy">
                    <h2>Prusameter</h2>
                    <h4>Ako mi pomáha like a stiahnutie <a href="/3D/modely">môjho modelu</a></h4>
                </div>
                <div className="prusameterobsah">
                    <section>
                        <h3>Čo je to Prusameter?</h3>
                        <p>Prusameter je jedinečný systém odmeňovania spoločnosti <a href="https://www.prusa3d.com/cs/"
                                                                                     target={"_blank"}>Prusa
                            Research</a> v "databáze 3D modelov <a
                            href="https://www.printables.com/" target={"_blank"}>Printables</a>"</p>
                        <p>Za istý počet like-ov a stiahnutí dostanem body, tzv. "Prusameters", ktoré môžem vymeniť za
                            rolku
                            filamentu alebo iné fyzické odmeny</p>
                    </section>
                    <section>
                        <h3>Koľko Prusameters dostávam?</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>Počet like-ov</td>
                                <td>Počet stiahnutí</td>
                                <td>Prusameters, ktoré dostanem</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>3</td>
                                <td>30</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>100</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>200</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>400</td>
                                <td>200</td>
                            </tr>
                            </tbody>
                        </table>
                        <p></p>
                        <p>Vždy, keď nahrám nový model, začne sa obdobie 30-tich dní, kedy sa počíta množstvo like-ov a
                            stiahnutí tohto modelu</p>
                        <p>Zakaždým, keď dosiahnem potrebný počet like-ov a stiahnutí
                            <span className={"nevyrazne"}> (treba obidve)</span>,
                            pripíše sa mi príslušné množstvo Prusameters
                        </p>
                        <p>Keď prejde obdobie 30 dní, štatistiky sa vynulujú
                            <span className={"nevyrazne"}> (Prusameters ostávajú)</span>
                        </p>
                        <p>Po dosiahnutí určitého množstva Prusameters si môžem uplatniť kupón na jednu z odmien</p>
                    </section>
                    <section>
                        <h3>Aké sú odmeny a koľko Prusameters potrebujem?</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>Prusameters</td>
                                <td>Odmena</td>
                                <td>Skutočná hodnota</td>
                                <td>Popis</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>350</td>
                                <td><a href="https://www.prusa3d.com/en/product/prusament-pla-jet-black-1kg/"
                                       target={"_blank"}>Prusament PLA
                                    1kg</a></td>
                                <td>29.99 €</td>
                                <td rowSpan={2}>Filament značky Prusa</td>
                            </tr>
                            <tr>
                                <td>350</td>
                                <td><a href="https://www.prusa3d.com/en/product/prusament-petg-jet-black-1kg/"
                                       target={"_blank"}>Prusament
                                    PETG 1kg</a></td>
                                <td>29.99 €</td>
                            </tr>
                            <tr>
                                <td>340</td>
                                <td><a
                                    href="https://www.prusa3d.com/product/prusament-pla-prusa-galaxy-black-1kg-refill/"
                                    target={"_blank"}>Prusament Refill 1kg</a></td>
                                <td>27.99 €</td>
                                <td>Filament značky Prusa (bez spool-u)</td>
                            </tr>
                            <tr>
                                <td>10 000</td>
                                <td><a
                                    href="https://www.prusa3d.com/cs/produkt/stavebnice-3d-tiskarny-original-prusa-mini-2/"
                                    target={"_blank"}>Original Prusa MINI+</a></td>
                                <td>459.00 €</td>
                                <td rowSpan={2}>3D Tlačiareň</td>
                            </tr>
                            <tr>
                                <td>25 000</td>
                                <td><a href="https://www.prusa3d.com/cs/produkt/original-prusa-mk4-kit-2/"
                                       target={"_blank"}>Original Prusa MK4</a></td>
                                <td>889.00 €</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td
                                    colSpan={4}
                                    style={{textAlign: "left"}}>
                                    <a href="https://www.printables.com/prusameter/rewards"
                                       target={"_blank"}>
                                        Ostatné odmeny
                                    </a>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </section>
                </div>
                <div className="threedmodelyafterbutton" style={{marginTop: 0}}>
                    <Link to={"https://www.printables.com/@cypo/models"} target={"_blank"}>
                        <button>
                            <h5>Moje modely na Printables</h5>
                            <img src={require("../images/icons/socials/printables_color.png")} alt=""/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="prusametermobil">
                <h2>Prusameter</h2>
                <h4>Tento projekt nie je určený pre toto zariadenie</h4>
                <p>Rozlíšenie displeja je moc nízke a došlo by k chybám pri zobrazovaní obsahu</p>
                <p className={"nevyrazne"}>Odporúča sa displej so šírkou min. 500 px</p>
            </div>
            <SpatNa text={"Moje modely"} link={"/3D/modely"}/>
        </>
    );
};

export default ThreedPrusameter;
