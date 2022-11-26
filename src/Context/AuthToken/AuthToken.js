export const setAuthToken = user =>{

    const currentUser ={
        email: user.email,
        name: user.name,
        role: user.role
    }

    // save user in db and get token

    fetch(`http://localhost:5000/users/${user.email}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    
    .then(data => data.json())
    .then(res => {
        console.log(res)
         localStorage.setItem('bikerToken', res.bikerToken)
    })
}