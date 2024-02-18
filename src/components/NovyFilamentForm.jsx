import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";

import {db, auth} from "../config/firebase"
import {addDoc, getDocs, collection} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"


const NovyFilamentForm = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        id: yup.number().typeError("Chýba ID").required("Chýba ID"),
        vyrobca: yup.string().required("Chýba Výrobca"),
        material: yup.string().required("Chýba Materiál"),
        cena: yup.number().typeError("Cena musí byť číslo").required("Chýba Cena"),
        realnacena: yup.number().typeError("Reálna cena musí byť číslo").required("Chýba Reálna cena"),
        farbanazov: yup.string().required("Chýba názov farby"),
        farbakod: yup.string().required("Chýba kód farby"),
        farbainvert: yup.bool().required(""),
        hmotnostsospoolom: yup.number().typeError("Hmotnosť so spoolom musí byť číslo").required("Chýba hmotnosť so spoolom"),
        hmotnostspool: yup.number().typeError("Hmotnosť spool-u musí byť číslo").required("Chýba hmotnosť spool-u"),
        hmotnostpovodna: yup.number().typeError("Pôvodná hmotnosť musí byť číslo").required("Chýba pôvodná hmotnosť"),
        teplotamin: yup.number().typeError("Minimálna teplota musí byť číslo").required("Chýba minimálna teplota"),
        teplotamax: yup.number().typeError("Maximálna teplota musí byť číslo").required("Chýba maximálna teplota"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    // check if user is admin
    const [user] = useAuthState(auth)
    const [adminUid, setAdminUid] = useState(null);
    const adminRef = collection(db, "admin")

    const getAdmin = async () => {
        const data = await getDocs(adminRef)
        setAdminUid(data.docs[0].data().uid)
    }


    // add new filament to database
    const filamentyRef = collection(db, "filamenty")
    const onCreateFilament = async (data) => {
        await addDoc(filamentyRef, {
            id: data.id,
            vyrobca: data.vyrobca,
            material: data.material,
            cena: data.cena,
            realnacena: data.realnacena,

            farba: {
                nazov: data.farbanazov,
                kod: data.farbakod,
                invert: data.farbainvert
            },
            hmotnost: {
                soSpoolom: data.hmotnostsospoolom,
                spool: data.hmotnostspool,
                povodna: data.hmotnostpovodna,
            },
            teplota: {
                min: data.teplotamin,
                max: data.teplotamax
            },
            obrazky: {
                preview: "",
                benchy: ""
            }
        })
        navigate("/3D/filamenty")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | 3D | Nový filament"
        getAdmin()
    }, []);

    return (
        <>
            {
                adminUid === user?.uid
                    ? <form className={"novyfilamentform"} onSubmit={handleSubmit(onCreateFilament)}>
                        <input type="text" placeholder={"ID"} {...register("id")}/>
                        <p className={"warning"}>{errors?.id?.message}</p>
                        <input type="text" placeholder={"Výrobca"} {...register("vyrobca")}/>
                        <p className={"warning"}>{errors?.vyrobca?.message}</p>
                        <input type="text" placeholder={"Materiál"} {...register("material")}/>
                        <p className={"warning"}>{errors?.material?.message}</p>
                        <input type="text" placeholder={"Cena"} {...register("cena")}/>
                        <p className={"warning"}>{errors?.cena?.message}</p>
                        <input type="text" placeholder={"Reálna Cena"} {...register("realnacena")}/>
                        <p></p>
                        <input type="text" placeholder={"Farba - názov"} {...register("farbanazov")}/>
                        <p className={"warning"}>{errors?.farbanazov?.message}</p>
                        <input type="text" placeholder={"Farba - kód"} {...register("farbakod")}/>
                        <p className={"warning"}>{errors?.farbakod?.message}</p>
                        <div>
                            <p>Farba - invert</p>
                            <input type="checkbox" {...register("farbainvert")}/>
                        </div>
                        <p></p>
                        <input type="text" placeholder={"Hmotnosť - so spoolom"} {...register("hmotnostsospoolom")}/>
                        <p className={"warning"}>{errors?.hmotnostsospoolom?.message}</p>
                        <input type="text" placeholder={"Hmotnosť - spool"} {...register("hmotnostspool")}/>
                        <p className={"warning"}>{errors?.hmotnostspool?.message}</p>
                        <input type="text" placeholder={"Hmotnosť - pôvodná"} {...register("hmotnostpovodna")}/>
                        <p className={"warning"}>{errors?.hmotnostpovodna?.message}</p>
                        <input type="text" placeholder={"Teplota - min"} {...register("teplotamin")}/>
                        <p className={"warning"}>{errors?.teplotamin?.message}</p>
                        <input type="text" placeholder={"Teplota - max"} {...register("teplotamax")}/>
                        <p className={"warning"}>{errors?.teplotamax?.message}</p>
                        <input type={"submit"} value={"Potvrdiť"}/>
                    </form>
                    : <form className={"novyfilamentform"}>
                        <h3>Nemáš práva na pridávanie filamentov</h3>
                        <p>Môžeš sa skúsiť <span className={"underline"} onClick={() => {
                            navigate("/login")
                        }}>prihlásiť</span></p>
                        <p>Ak problém pretrváva aj po prihlásení, a myslíš že by si mal mať možnosť pridávať
                            filamenty, <span className={"underline"} onClick={() => {
                                navigate("/kontakt")
                            }}>kontaktuj ma</span></p>
                    </form>
            }

        </>
    );
};

export default NovyFilamentForm;
