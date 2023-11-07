
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4  w-3/4 mx-auto"
      >
        <label className="flex flex-col">
          <span className="text-xl font-regular my-2">
            Your AI Prompt
          </span>

          <Textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="flex w-[300px] md:w-[500px] lg:w-[800px] mx-auto min-h-[200px]  " 
            placeholder="unleash your imagination"
            required
            
          />
        </label>

        <label
        className=" flex flex-col text-2xl">
          <span className=' font-regular text-xl my-2'>
            Add a Tag{" "}
            <span className=' font-light flex'>
              (#product, #webdevelopment, etc.)
            </span>
          </span>
          <Input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className=" flex w-[300px] md:w-[500px] lg:w-[800px] mx-auto  " 
          />
        </label>

        
      

          <Button type="submit" className="mt-4" disabled={submitting}>{submitting? "posting ..." : "submit"}</Button>
        
      </form>
    
  );
};

export default Form;















