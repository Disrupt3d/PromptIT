import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {


  
  return (
    
    <section className='w-full'>
      <h1 className=' text-4xl'>
      
        <span className='m-5 flex text-left  lg:text-6xl text-4xl font-black w-1/4 md:w-1/2  underline decoration-pink-500 decoration-8 underline-offset-4'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 flex flex-wrap w-3/4 mx-auto'>
        {data.map((post) => (
           <PromptCard
          
           post={post}
           handleEdit={() => handleEdit && handleEdit(post)}
           handleDelete={() => handleDelete && handleDelete(post)}
         />
         
        ))}
      </div>
    </section>
  );
};

export default Profile;