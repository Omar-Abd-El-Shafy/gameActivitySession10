function intializeGame(){
    return new Promise((resolve)=>{
        setTimeOut(()=> {
            console.log('game intialized')
            resolve('game setup complete')
    }, 1000)
})
}