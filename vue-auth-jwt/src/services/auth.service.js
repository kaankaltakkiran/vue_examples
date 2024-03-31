import axios from 'axios';

const API_URL = 'http://localhost:5173/auth/';

class AuthService {
  async login(user) {
    if (user.username === 'admin' && user.password === 'admin') {
      const response = { data: { accessToken: 'example_token' } }; // Gerçek JWT yerine basit bir örnek token döndürüyoruz.
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } else {
      throw new Error('Invalid username or password');
    }
  }
/*   çıkış yapınca tokeni siler */
  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
