try {
    let response = await axios.get('http://localhost:5000/campaigns/available')
    response.forEach(campaign => {
        console.log(campaign)
    })
}
catch (error) {
    console.log(error)
}
// document.getElementById('campaigns')
