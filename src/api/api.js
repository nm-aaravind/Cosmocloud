import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const PID = import.meta.env.VITE_PROJECT_ID
const ENV_ID = import.meta.env.VITE_ENV_ID
export const getEmployees = async (limit, offset=0) => {
    try {
        const params = new URLSearchParams({
            'limit': `${limit}`,
            'offset': `${offset}`
        })
        const response = await axios.get(`${API_BASE_URL}`, {
            params: params,
            headers: {
                'projectId': PID,
                'environmentId': ENV_ID,
            }
        })
        if (response.status != 200) throw new Error("Something went wrong")
        return response
    } catch (error) {
        throw error
    }
}

export const createEmployee = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}`, data ,{
            headers: {
                'projectId': PID,
                'environmentId': ENV_ID,
            }
        })
        return response
    } catch (error) {
        throw error
    }
}

export const getEmployeeById = async (empId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${empId}`, {
            headers: {
                'projectId': PID,
                'environmentId': ENV_ID,
            }
        })
        return response
    } catch (error) {
        throw error
    }
}

export const removeEmployee = async (empId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${empId}`,{
            data: {
            },
            headers: {
                'projectId': PID,
                'environmentId': ENV_ID,
            }
        })
        return response
    } catch (error) {
        throw error
    }
}