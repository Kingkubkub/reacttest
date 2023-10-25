import logoVmusic from '../../assets/image/V.png'

function Navbar(): JSX.Element {
    return (
        <div className='bg-zinc-900  w-full'>
            <div className="flex justify-between py-3">
                <img src={logoVmusic} className='w-36' />
                <ul className="flex gap-x-2">
                    <li className='button'>Log in</li>
                    <li className='button bg-[#0070C0]'>Sign up</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar