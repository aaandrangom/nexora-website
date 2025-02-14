import apiClient from './client.js';

export const UsersService = {
    async sendContactForm(name, email, subject, message) {
        try {
            const response = await apiClient.post('users/contact', {
                name,
                email,
                subject,
                message,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async sendConsultation(name, email) {
        try {
            const response = await apiClient.post('users/consultation', {
                name,
                email
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}