// import { getProviders, signIn } from "next-auth/react";

// export async function getServerSideProps() {
//     const providers = await getProviders();

//     return {
//         props: {
//             providers,
//         },
//     };
// }

// function Login( providers ) {
//     return (
//         <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
//             <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
                
//         {Object.values(providers).map((provider) => (
//             <button className="bg-[#18D860] text-black p-5 rounded-lg"
//                     onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
//               Login to Spotify
//             </button>
//         ))}

//         </div>
//     );
// }

// export default Login;

import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}