const token = localStorage.getItem('token');

module.exports = {

    headers: {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}