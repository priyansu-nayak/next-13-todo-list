export default function Page() {
    return (<>
        <header className='flex justify-between mb-4 items-center' >
            <h1 className="text-2xl">New</h1>
        </header>
        <form action="">
            <input type="text" name="title" 
            className="border border-slate-300 bg-transparent 
            rounded px-2 py-1 outline-none focus-within:border-slate-100" />
        </form>
    </>)
}