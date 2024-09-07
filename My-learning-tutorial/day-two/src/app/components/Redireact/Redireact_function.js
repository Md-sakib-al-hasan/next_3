import { redirect } from "next/navigation";


async function post () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
}

export default async function Redireacdt () {
    const data = await post()
    if(true){
        redirect('/')
    }
    return <div>
          <ul>
          {
            data.map(user =><li key={user.id}>{user.name}</li> )
        }
          </ul>
    </div>
}