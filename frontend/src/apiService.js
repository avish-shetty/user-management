// frontend/src/apiService.js
export const registerUser = async (formData) => {
    const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    if (!response.ok) {
        throw new Error('Failed to register');
    }

    return response.json();
};