import { api } from './api.js';

export async function registerUser(data) {
    const response = await api.post('/auth/register', data);
    return response.data;
}

export async function loginUser(data) {
    const response = await api.post('/auth/login', data);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userName", response.data.name);
    localStorage.setItem("email", response.data.email);

    return response.data;
}

export async function editProfile(data) {
    const response = await api.put('/auth/profile', data);

    localStorage.setItem("userName", response.data.name);
    localStorage.setItem("email", response.data.email);

    return response.data;
}
