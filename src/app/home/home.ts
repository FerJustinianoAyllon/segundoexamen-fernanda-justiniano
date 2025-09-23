import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

 // Pedir permiso para notificaciones
  requestPermission() {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones.');
      return;
    }

    Notification.requestPermission().then(permission => {
      console.log('Permiso:', permission); // 👈 revisa en la consola
      if (permission === 'granted') {
        alert('✅ Permiso concedido para notificaciones.');
      } else {
        alert('❌ Permiso denegado para notificaciones.');
      }
    });
  }

  // Probar notificación
  showNotification() {
    console.log('Estado actual:', Notification.permission); // 👈 revisa en consola

    if (Notification.permission === 'granted') {
      new Notification('¡Hola!', {
        body: 'Esta es una notificación de prueba desde Angular 🚀',
        icon: 'assets/icon.png' // opcional
      });
    } else {
      alert('Primero debes permitir las notificaciones.');
    }
  }
}
