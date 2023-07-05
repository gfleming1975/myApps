import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private afAuth: AngularFireAuth) {}
  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully logged in
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  }
  //async register({ email, password }) {
  //  try {
  //    const user = await createUserWithEmailAndPassword(
  //      this.auth,
  //      email,
  //      password
  //    );
  //    return user;
  //  } catch (e) {
  //    return null;
  //  }
  //}

//  async login({ email, password }) {
//    try {
//      const user = await signInWithEmailAndPassword(this.auth, email, password);
//      return user;
//    } catch (e) {
//      return null;
//    }
//  }

//  logout() {
//    return signOut(this.auth);
//  }
}
