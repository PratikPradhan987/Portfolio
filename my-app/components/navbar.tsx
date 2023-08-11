
const Navbar = () => {
  return (
    <div className="mt-2 flex justify-around">
        <span className="">Google</span>
        <div className="flex border rounded-3xl px-4 h-8">
            <input type="text" placeholder="OK Google" />
            <img src="/googleMic.png" alt="" />
            <img src="/googleLens.png" alt="" />
            <img src="/googleSearch.png" alt="" />
        </div>
        <div className="flex border rounded-3xl px-4 h-8">
            <img src="/setting.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar