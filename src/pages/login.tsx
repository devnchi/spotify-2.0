import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'

function Login(provider: ClientSafeProvider) {    
  return (
    <div>
        <img className='w-52 mb-5' src="https://links.papareact.com/9xl" alt="Spotify logo at sign-in" />

        
        {/* {Object.values({first_name: 'John', last_name: 'Doe'}).forEach((text) => {
            <h1 className='text-white'>{text}</h1>
            console.log(text)
        })} */} 
          
        {/* {Object.values(providers).map((provider: ClientSafeProvider) => (
            <div key={provider.name}>
                <button className='bg-[#18D860] text-white p-5 rounded-full'
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                    Login with {provider.name}</button>
                    
            </div> 
        ))}  */}

        <div className='text-white text-3xl' key={provider.name}>
            <button 
            className='bg-[#18D860] text-white p-5 rounded-full'    
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
                Login with {provider.name}</button>           
        </div> 
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders(); 

    console.log(providers);
    
    return {
        props: {
            providers,
        },
    };
}