import Feed from '@components/Feed'

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
     <h1 className=' lg:text-6xl text-4xl mt-20  text-center font-black  mx-3 mb-5'>Discover and share</h1>
     <span className=' lg:text-6xl text-4xl text-slate-100  text-center font-extrabold mt-1 rounded-full mx-3 py-3 px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> AI- Powered Prompts</span>
     <p className=' lg:text-2xl text-xl w-1/2 mt-5 text-center font-semibold'>PromptIt is an open-source AI prompting tool  helping you to discover, create and share creative prompts. </p>
    <Feed />
  
    </main>
  )
}
