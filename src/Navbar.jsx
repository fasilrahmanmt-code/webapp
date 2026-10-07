function Navbar({search,setSearch,cartCount}){
    return(
        <nav className="bg-white shadow-md">

            <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-6 font-medium">
                     <button className="hover:text-blue-600">
                        Home
                     </button>
                      <button className="hover:text-blue-600">
                        Product
                      </button>
                      <button className="hover:text-blue-600">
                        About
                      </button>
                </div>
                <input type="text"
                 name=""
                  id="" 
                  placeholder="search Product"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                  className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
                  <div className="relative">
<button  className="bg-blue-600 text-white px-5 py-2 rounded-lg">Cart</button>

{cartCount >0 &&(
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
        {cartCount}
        </span>
)}
                  </div>
            </div>
        </nav>
    )
}
export default Navbar;