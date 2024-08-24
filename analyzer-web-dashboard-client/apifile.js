async function fetchPlantData() {
    try {
        const response = await axios.get('http://localhost:3004/getPlantData');
        console.log('Plant data:', response.data);
        // Process the fetched data here
    } catch (error) {
        console.error('Error fetching plantn data:', error);
    }
}