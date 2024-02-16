# Firebase tutorial
## Initialization
1. Create project on [Firebase](https://console.firebase.google.com/)
2. `npm install firebase`
3. Create file `src/config/firebase.js` and copy there provided code

## Authentication
### Google Authentication
1. In [Firebase console](https://console.firebase.google.com/) go to Build -> Authentication -> Get started
2. Select and Enable Google

firebase.js
```javascript
import {getAuth, GoogleAuthProvider} from "firebase/auth"
export const provider = new GoogleAuthProvider()
```

Login.jsx
```javascript
import {auth, provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
```

To get user data
`npm install react-firebase-hooks`
```javascript
import {useAuthState} from "react-firebase-hooks/auth"

const [user] = useAuthState(auth)
    
console.log(user.displayName)
```

Logout 
```javascript
import {signOut} from "firebase/auth"

const logout = async () => {
    await signOut(auth)
}
```

## Firestore Database
### Initialization
1. In [Firebase console](https://console.firebase.google.com/) go to Build -> Firestore Database -> Create Database
2. Choose the closest location and hit Next
3. Start in production mode
4. Create new collection
   - Every collection is like a new table
   - Collection consists of documents
   - Documents consists of
      - Field - like a variable name
      - Type - like a variable type
      - Value - like a variable value

### Pridaj nový filament
1. Spraviť si collection vo Firestore a dať tam všetky potrebné documents
2. `src/components/NovyFilamentForm.jsx` a `src/ThreedFilamentyNovy.jsx`


NovyFilamentForm.jsx
`npm install react-hook-form`
`npm install yup`
`npm install @hookform/resolvers`
```javascript
import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";


const NovyFilamentForm = () => {
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

    const onCreateFilament = (data) => {
        console.log(data)
    }

    return (
        <>
            <form className={"novyfilamentform"} onSubmit={handleSubmit(onCreateFilament)}>
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
                    <p></p>
                </div>
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
                <p className="nevyrazne" style={{margin: "0.5em 0"}}>* Nepovinné</p>
                <input type={"submit"} value={"Potvrdiť"}/>
            </form>
        </>
    );
};

export default NovyFilamentForm;

```

#### Odoslať údaje do databázy
Treba permission na dávanie údajov do databázy:
1. [Firebase console](https://console.firebase.google.com/) -> Firestore Database -> Rules
2. `allow write, delete, update: if request.auth.uid == `*admin user id*`;`
3. `allow read: if true;`
   


firebase.js
```javascript
import {getFirestore} from "firebase/firestore"

export const db = getFirestore(app)
```

NovyFilamentForm.jsx
```javascript
import {addDoc, collection} from "firebase/firestore"
import {db} from "../config/firebase"

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
            invert: data.invert
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
}
```

### Je používateľ admin? 
```javascript
import {getDocs, collection} from "firebase/firestore"
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"


const [user] = useAuthState(auth)
const [adminUid, setAdminUid] = useState(null);
const adminRef = collection(db, "admin")

const getAdmin = async () => {
    const data = await getDocs(adminRef)
    setAdminUid(data.docs[0].data().uid)
}
```




























