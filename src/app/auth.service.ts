import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    // Aquí verifica si el usuario está autenticado. Puedes usar un token almacenado en localStorage o cualquier otra lógica.
    return !!localStorage.getItem('authToken');
  }

  login(token: string) {
    localStorage.setItem('authToken', token);
  }

  logout() {
    localStorage.removeItem('authToken');
    
  }
}
