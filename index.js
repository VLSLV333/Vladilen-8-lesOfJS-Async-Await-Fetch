const delay = ms =>{
    return new Promise (resolve => setTimeout( () => resolve(), ms))
}

const url = "https://jsonplaceholder.typicode.com/todos"

// function fetchTodos(){
//     console.log("Fetch todo started...")
//    return delay(2000)
//     .then( () => fetch(url))
//     .then(responce => responce.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log("Data: ", data)
//     })
//     .catch(e => console.error(e))

// async function fetchAsyncTodos(){
//     console.log("Fetch todo started...")
//     try{
//         await delay(2000)
//         const responce = await fetch(url)
//         const data = await responce.json()
//         console.log("Data:", data)
//     } catch (e) {
//         console.error(e)
//     } finally {

//     }
// }

// fetchAsyncTodos()


async function fetchAsyncTodos (){
    try{
        console.log("Fetch todo started...")
        await delay(2000)
        const responce = await fetch(url)
        const data = await responce.json()
        console.log("Data: ",data)
    } catch (e) {
        console.error(e)
    } finally{

    }
}

fetchAsyncTodos()