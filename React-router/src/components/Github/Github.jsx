import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/NiteshGodara099')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })    
    // }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center gap-5'>
        <span>Github Followers: {data.followers}</span>
        <span><img src={data.avatar_url} alt="Git Picture" width={300}/></span>
    </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NiteshGodara099')
    return response.json()
}