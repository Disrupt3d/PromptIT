import Feed from '@components/Feed'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
     <h1 className=' text-6xl mt-20 text-center font-black mx-3'>Discover & share</h1>
     <span className=' text-6xl text-slate-100  text-center font-extrabold mt-1 rounded-full mx-3 py-3 px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> AI- Powered Prompts</span>
     <p className=' text-lg mt-5 text-center font-medium'>PromptIt is an open-source AI prompting tool  helping you to discover, create and share creative prompts. </p>
    <Feed />
  
    </main>
  )
}
