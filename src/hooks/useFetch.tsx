export function useFetch (baseUrl:string):any {
    
 

    function get(url:string){
        return new Promise((resolve, reject) =>{
            fetch(baseUrl + url)
            .then(response => response.json())
            .then(data => {
                if(!data){
                    console.log("Error fetching Data")
                    reject(data)
                }
                resolve(data);
            })
            .catch(Error => {
                console.log(Error);
                reject(Error)
            })
        })
    }

    function post(url:string, body:{}){
        return new Promise((resolve, reject) => {
            fetch(baseUrl + url, {
                method: "post",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(body)
            })
       
        .then(response => response.json())
        .then(data => {
            if(!data){
                console.log("erorr posting data")
                return reject(data)
            }
            resolve(data);
        })
        .catch(error =>{
            reject(error)
        })
    })
    }

    return {get, post}
}