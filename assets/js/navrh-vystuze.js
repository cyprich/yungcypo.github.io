var ld;
var hd;
var md;
var msd;
var beton;
var ocel1; /* nosná oceľ */
var ocel2; /* rozdeľovacia oceľ */ 
var fck;
var fcd;
var gammac = 1.5 /* γc, parciálny súčiniteľ spoľahlivosti betónu */
var fyk;
var fyd;
var gammas = 1.15 /* γs, súčiniteľ spoľahlivosti ocele */
var c;
var cmin = 15/1000;
var deltah = 5/1000;
var d;
var priemer = 8/1000;
var as_;  /* needed to change from 'as', because it was changing my colors and it vas very annoying xd */ 
var b = 1;
var alfa = 1;
var asmin;
var asmax;
var x;
var ksi;
var ksimax;
var mrd;
var z;
var pocetVystuzi;
const betony = [
    "C 12/15",
    "C 16/20",
    "C 20/25",
    "C 25/30",
    "C 30/37",
    "C 35/45",
    "C 40/50",
    "C 45/55",
    "C 50/60"
]
const ocele = [
    "10 216 (E)",
    "10 245 (K)",
    "11 373 (EZ)",
    "10 335 (J)",
    "10 338 (T)",
    "10 425 (V)",
    "10 505 (R)",
]

function ID(element){return document.getElementById(element)}
function show(element){element.style.display = "inline"}
function hide(element){element.style.display = "none"}
function enable(element){element.disabled = false}
function disable(element){element.disabled = true}
function unfocus(){
    let temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.focus();
    document.body.removeChild(temp);
}

/* Get name of variable */
// const varName = varObj => Object.keys(varObj)[0]
function fillClasses(val = NaN, icl = NaN){
    let cl = document.querySelectorAll(icl);
    cl.forEach(element=>{
        element.innerHTML = val;
    });
}


const plochaVystuze = [
    [0.000028, 0.000057, 0.000085, 0.000113, 0.000141, 0.000170, 0.000198, 0.000226, 0.000254],
    [0.000050, 0.000101, 0.000151, 0.000201, 0.000251, 0.000302, 0.000352, 0.000402, 0.000452],
    [0.000079, 0.000157, 0.000236, 0.000314, 0.000393, 0.000471, 0.000550, 0.000628, 0.000707],
    [0.000113, 0.000226, 0.000339, 0.000452, 0.000565, 0.000679, 0.000792, 0.000905, 0.001018],
    [0.000154, 0.000308, 0.000462, 0.000616, 0.000770, 0.000924, 0.001078, 0.001231, 0.001385],
    [0.000201, 0.000402, 0.000653, 0.000804, 0.001005, 0.001206, 0.001407, 0.001608, 0.001810],
    [0.000255, 0.000509, 0.000763, 0.001018, 0.001272, 0.001527, 0.001781, 0.002036, 0.002290],
    [0.000314, 0.000628, 0.000942, 0.001257, 0.001571, 0.001885, 0.002199, 0.002513, 0.002827],
    [0.000380, 0.000760, 0.001140, 0.001521, 0.001901, 0.002281, 0.002661, 0.003041, 0.003421],
    [0.000491, 0.000982, 0.001473, 0.001963, 0.002454, 0.002945, 0.003436, 0.003927, 0.004418],
    [0.000616, 0.001231, 0.001847, 0.002463, 0.003079, 0.003694, 0.004310, 0.004925, 0.005543],
]
plochaVystuzePriemer = [6, 8, 10, 12, 14, 15, 18, 20, 22, 25, 28]


function getAs(){
    return Math.round((b * d * ((alfa * fcd)/fyd) * (1 - Math.sqrt((1/1) - ((2 * msd)/(b * Math.pow(d, 2) * alfa * fcd))))) * 1e6) / 1e6
}
function stage1(){
    let run = false;
    let toCheck = [
        ID("ld"),
        ID("hd"),
        ID("md"),
        ID("beton"),
        ID("ocel1"),
        ID("ocel2")
    ]
    for(i = 0; i < toCheck.length; i++){
        if(toCheck[i].value != 0){
            run = true;  
        } else {
            run = false;
            break;
        }
    }

    if(run){
        ld = ID("ld").value;
        hd = ID("hd").value;
        md = msd = ID("md").value / 1000;
        beton = ID("beton").value;
        ocel1 = ID("ocel1").value;
        ocel2 = ID("ocel2").value;
        
        switch(beton){
            case "1":
                fck = 12;
                break;
            case "2":
                fck = 16;
                break;
            case "3":
                fck = 20;
                break;
            case "4":
                fck = 25;
                break;
            case "5":
                fck = 30;
                break;
            case "6":
                fck = 35;
                break;
            case "7":
                fck = 40;
                break;
            case "8":
                fck = 45;
                break;
            case "9":
                fck = 50;
        }
        fcd = Math.round((fck/gammac) * 100) / 100;

        switch(ocel1){
            case "1":
                fyk = 206;
                break;
            case "2":
                fyk = 245;
                break;
            case "3":
                fyk = 225;
                break;
            case "4":
                fyk = 325;
                break;
            case "5":
                fyk = 325;
                break;
            case "6":
                fyk = 410;
                break;
            case "7":
                fyk = 490;
        }
        fyd = Math.round((fyk/gammas) * 100) / 100;
        
        c = cmin + deltah;
        
        d = hd - c - priemer/2;
        
        as0 = Math.round(getAs() * 1000000) / 1000000
        as_ = getAs()
        
       
        t = ID("plocha-vystuze")
        for(i = 0; i < plochaVystuze.length; i++){
            let row = t.insertRow()
            row.insertCell().innerHTML = plochaVystuzePriemer[i]
            for(j = 0; j < plochaVystuze[0].length; j++){
                let cell = row.insertCell()
                let x = document.createElement("input")
                x.setAttribute("type", "radio")
                x.setAttribute("name", "plocha-vystuze")
                x.setAttribute("id", ("plochavystuze" + String(i) + String(j)))
                x.setAttribute("onclick", "stage2(" + String(i) + ", " + String(j) + ")")

                let y = document.createElement("p")
                y.innerHTML = plochaVystuze[i][j]

                if(i < 1 || j < 4 || plochaVystuze[i][j] < as_){
                    x.setAttribute("disabled", "true")
                    y.style.color = "rgba(0,0,0, 0.5)"
                }

                cell.appendChild(y)
                cell.appendChild(x)
            }
        }

        hide(ID("submitbutton"))
        disable(ID("ld"))
        disable(ID("hd"))
        disable(ID("md"))
        disable(ID("beton"))
        disable(ID("ocel1"))
        disable(ID("ocel2"))
        show(ID("plocha-vystuze-popis"))
        show(ID("plocha-vystuze"))
    }
}
function stage2(inputx, inputy){
    pocetVystuzi = inputy

    as_ = plochaVystuze[inputx][inputy]

    priemer = plochaVystuzePriemer[inputx] / 1000;

    d = Math.round((hd - c - priemer/2) * 1000) / 1000;

    if(fyk > 400){
        asmin = 0.0015 * b * d;
    } else if(fyk <= 400){
        asmin = 0.6 * b * (d/fyk)
    }
    asmin = Math.round(asmin * 100000) / 100000
    asmax = Math.round((0.04 * b * hd) * 100000) / 100000;
    
    x = 1.25 * (as_ * fyd)/(b * alfa * fcd)
    x = Math.round(x * 1e4) / 1e4
    
    ksi = Math.round((x/d) * 10000) / 10000
    if(beton <= 6){ksimax = 0.45}
    else if (beton > 6){ksimax = 0.35}

    z = Math.round((d - 0.4 * x) * 1000000) / 1000000
    mrd = as_ * fyd * z
    mrd = Math.round(mrd * 1e4) / 1e4

    poVypocte()
}


function newP(id, text){
    p = document.createElement("p")
    p.innerHTML = text;
    vysledky.children[id].appendChild(p)
}
function newH3(text){
    h3 = document.createElement("h3")
    h3.innerHTML = text;
    vysledky.children[11].appendChild(h3)
}
function poVypocte(){
    let vysledky = ID("vysledky")
    vysledky.innerHTML = "";
    const h2s = [
        "1. Vstupné údaje",
        "2. Návrhové pevnosti betónu a ocele",
        "3. Krytie výstuže c",
        "4. Účinná váška prierezu d",
        "5. Plocha výstuže",
        "6. Posúdenie"
    ]
    for(i = 0; i < 6; i++){
        let h2 = document.createElement("h2")
        h2.innerHTML = h2s[i]
        vysledky.appendChild(h2)

        let div = document.createElement("div")
        vysledky.appendChild(div)
    }

    
    newP(1, "Betón " + betony[beton - 1])          
    newP(1, "Oceľ " + ocele[Number(ocel1) - 1] + " nosná")          
    newP(1, "Oceľ " + ocele[Number(ocel2) - 1] + " rozdeľovacia")       
    newP(1, String("$ l_D = " + ld + "\\;m $"))
    newP(1, "$ h_D = " + hd + "\\;m $")
    newP(1, "$ M_D = " + Number(md)*1000 + "\\;kNm = " + md + "\\;MNm $")
    newP(1, "Volím $ \\phi\\;8\\;mm = 0,008\\;m $")

    newP(3, "Betón " + betony[beton - 1])
    newP(3, "$ f_{cd} = \\frac{f_{ck}}{\\gamma_c} $")
    newP(3, "$ f_{cd} = \\frac{" + fck + "}{" + gammac + "} $")
    newP(3, "$ f_{cd} = " + fcd + "\\;MPa$")
    newP(3, "$ f_{yd} = \\frac{f_{yk}}{\\gamma_s} $")
    newP(3, "$ f_{yd} = \\frac{" + fyk +"}{" + gammas + "} $")
    newP(3, "$ f_{yd} = " + fyd + "\\;MPa$")
    
    newP(5, "$ c = c_{min} + \\delta_h $")
    newP(5, "$ c = " + Number(cmin)*1000 + " + " + Number(deltah)*1000 + " $")
    newP(5, "$ c = " + Number(c)*1000 + "\\;mm = " + c + "\\;m $")

    newP(7, "$ d = h - c - \\frac{\\phi}{2} $")
    newP(7, "$ d = " + hd + " - " + c + " - \\frac{" + priemer + "}{2} $")
    newP(7, "$ d = " + d + "\\;m $")

    newP(9, "$ A_s = b ⋅ d ⋅ \\frac{\\alpha\\;⋅\\;f_{cd}}{f_{yd}} ⋅ \\left(1 - \\sqrt{\\frac{1}{1} - \\frac{2\\;⋅\\;M_{sd}}{b\\;⋅\\;d^2\\;⋅\\;\\alpha\\;⋅\\;f_{cd}}}\\right) $")
    newP(9, "$ A_s = " + b + " ⋅ " + d + " ⋅ \\frac{" + alfa + "\\;⋅\\;" + fcd + "}{" + fyd + "} ⋅ \\left(1 - \\sqrt{\\frac{1}{1} - \\frac{2\\;⋅\\;" + msd + "}{" + b + "\\;⋅\\;" + d + "^2\\;⋅\\;" + alfa + " ⋅ " + fcd + "}}\\right) $")
    newP(9, "$ A_s = " + as0 + "\\;mm^2 = " + Number(as0)*10000 + "\\;cm^2 $")
    newP(9, "Pre $ \\phi\\;" + priemer + "\\ \\rightarrow " + (Number(pocetVystuzi) + 1) + " \\phi V " + priemer + "/ m' \\Rightarrow A_s = " + as_ + " $")

    if(priemer != 8/1000){
        newH3("Oprava účinnej výšky")
        newP(11, "$ d = h - c - \\frac{\\phi}{2} $")
        newP(11, "$ d = " + hd + " - " + c + " - \\frac{" + priemer + "}{2} $")
        newP(11, "$ d = " + d + "\\;m $")
    }

    newH3("Kontrola stupňa vystuženia")
    newP(11, "$ A_{s,min} \\le A_s \\le A_{s,max} $")
    newP(11, "Oceľ " + ocele[Number(ocel1) - 1] + " $ \\Rightarrow f_{yk} = " + fyk + " MPa $")    
    if(fyk > 400){
        newP(11, "$ A_{s,min} = 0.0015 ⋅ b ⋅ d\\qquad$ ak $ fyk \\gt 400MPa $")
        newP(11, "$ A_{s,min} = 0.0015 ⋅ " + b + " ⋅ " + d + " $")
        newP(11, "$ A_{s,min} = " + asmin + "\\;m^2 $")
    } else if (fyk <= 400){
        newP(11, "$ A_{s,min} = 0.6 ⋅ b ⋅ \\frac{d}{f_{yk}}\\qquad$ ak $ fyk \\le 400MPa $")
        newP(11, "$ A_{s,min} = 0.6 ⋅ " + b + " ⋅ \\frac{" + d + "}{" + fyk + "} $")
        newP(11, "$ A_{s,min} = " + asmin + "\\;m^2 $")
    }
    newP(11, "$ A_{s,max} = 0.04 ⋅ b ⋅ h $")
    newP(11, "$ A_{s,max} = 0.04 ⋅ " + b + " ⋅ " + hd + " $")
    newP(11, "$ A_{s,max} = " + asmax + "\\;m^2 $")
    newP(11, "$ " + asmin + " \\le " + as_ + " \\le " + asmax + " $")

    newH3("Poloha neutrálnej osi")
    newP(11, "$ x = 1.25 ⋅ \\frac{A_s ⋅ f_{yd}}{b ⋅ \\alpha ⋅ f_{cd}} $")
    newP(11, "$ x = 1.25 ⋅ \\frac{" + as_ + " ⋅ " + fyd + "}{" + b + " ⋅ " + alfa + " ⋅ " + fcd + "} $")
    newP(11, "$ x = " + x + "\\;m $")

    newH3("Kontrola napätia v oceli")
    newP(11, "$ \\xi = \\frac{x}{d} = 1.25 ⋅ \\frac{A_s}{b ⋅ d} ⋅ \\frac{f_{yd}}{\\alpha ⋅ f_{ck}} \\le \\xi_{max} $")
    newP(11, "$ \\xi = \\frac{" + x + "}{" + d + "} = 1.25 ⋅ \\frac{" + as_ + "}{" + b + " ⋅ " + d + "} ⋅ \\frac{" + fyd + "}{" + alfa + " ⋅ " + fck + "} \\le " + ksimax + " $")
    newP(11, "$ \\xi = " + ksi + " \\le " + ksimax + "\\qquad $ Platí")

    newH3("Moment únosnosti")
    newP(11, "$ z = d - 0.4 ⋅ x $")
    newP(11, "$ z = " + d + " - 0.4 ⋅ " + x + " $")
    newP(11, "$ z = " + z + "\\;m $")
    newP(11, "$ M_{rd} = A_s ⋅ f_{yd} ⋅ z $")
    newP(11, "$ M_{rd} = " + as_ + " ⋅ "+  fyd + " ⋅ " + z + " $")
    newP(11, "$ M_{rd} = " + mrd + "\\;MNm $")
    newP(11, "$ M_{rd} \\ge M_{sd} $")
    newP(11, "$ " + mrd + " \\ge " + msd + " $")
    newP(11, "Návrh $ " + (Number(pocetVystuzi) + 1) + " \\phi V " + Number(priemer)*1000 + "/ m' $ VYHOVUJE")

    /* Re-run MathJax !! */
    let add = document.createElement("script")
    add.appendChild(document.createTextNode(
        `
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            },
            svg: {
                fontCache: 'global',
            }, 
        };
        `
    ))
    document.getElementsByTagName("head")[0].appendChild(add)
    
    add = document.createElement("script")
    add.setAttribute("type", "text/javascript")
    add.setAttribute("id", "MathJax-script")
    add.setAttribute("defer", true)
    add.setAttribute("src", "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js")
    document.getElementsByTagName("head")[0].appendChild(add)
    
    add = document.createElement("script")
    add.setAttribute("type", "text/javascript")
    add.setAttribute("src", "https://code.jquery.com/jquery-1.7.1.min.js")
    document.getElementsByTagName("head")[0].appendChild(add)

    hide(ID("main-input-div"))
    hide(ID("beton"))
    hide(ID("ocel1"))
    hide(ID("ocel2"))
    hide(ID("submitbutton"))
    hide(ID("plocha-vystuze-popis"))
    hide(ID("plocha-vystuze"))    
    
    /* scroll to top */
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}





/* Event listeners */
ID("ld").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("ld").value != 0){
        event.preventDefault();
        ID("hd").focus()
        }
    }
);
ID("hd").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("hd").value != 0){
        event.preventDefault();
        ID("md").focus()
        }
    }
);
ID("md").addEventListener("keypress", function(event){
    if (event.key === "Enter" && ID("md").value != 0){
        event.preventDefault();
        unfocus()
        }
    }
);


function reset(){
    enable(ID("ld"))
    enable(ID("hd"))
    enable(ID("md"))
    enable(ID("beton"))
    enable(ID("ocel1"))
    enable(ID("ocel2"))

    hide(ID("plocha-vystuze-popis"))
    hide(ID("plocha-vystuze"))    
}

reset()
