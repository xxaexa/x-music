const Form = () => {
  return (
    <div>
      <form action="mailto:andreekapradana@gmail.com" className="w-full  mx-auto ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="text-left block tracking-wide text-black text-xl font-bold mb-2">NAME</label>
            <input type="text" className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="text-left block tracking-wide text-black text-xl font-bold mb-2">E-MAIL</label>
            <input type="email" className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="text-left block tracking-wide text-black text-xl font-bold mb-2">MESSAGE</label>
            <textarea className=" no-resize appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none" name="Subject"></textarea>
          </div>
        </div>
        <button type="submit" className="bg-white p-1 rounded hover:bg-opacity-50 block mx-auto border border-gray-200">
          Send
        </button>
      </form>
    </div>
  )
}
export default Form
