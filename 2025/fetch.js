const fetchData = async () => {
    try {
        const res = await fetch("https://randomuser.me/api")
        console.log(res)
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
};

fetchData()