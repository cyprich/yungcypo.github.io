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
```javascript
const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
}
```

