import { useState } from 'react'
import {
	AiFillPhone,
	AiOutlineMail,
	AiOutlineMenu,
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin
} from 'react-icons/ai'
export default function NavBar() {
	const [openMenu, setOpenMenu] = useState(false)
	const open = () => {
		setOpenMenu(!openMenu)
	}
	return (
		<div
			id="topo"
			className="w-full flex -my-5 items-center  justify-between p-5 bg-zinc-900 text-white md:justify-between md:gap-20"
		>
			<div className="w-10">
				<h1 className="text-orange-300 uppercase font-semibold ">
					Ireclene
				</h1>
			</div>

			<div
				className={`${
					openMenu ? 'block' : 'hidden'
				} absolute md:static md:block md:mx-auto top-0 z-40 w-[55%]  left-5 top-5  md:bg-transparent bg-zinc-800  py-10  rounded `}
			>
				<div className="flex gap-5 flex-col md:flex-row md:bg-zinc-900 md:gap-2 md:items-center md:px-1  px-5">
					<div className="mt-2f flex gap-2 cursor-pointer hover:text-orange-400 duration-200 md:scale-75 ">
						<AiFillPhone size={20} color="orange" />
						<p>(+55)8577653432</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200 md:scale-75">
						<AiOutlineMail size={20} color="orange" />
						<p>ireclene@gmail.com</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200 md:scale-75">
						<AiFillFacebook size={20} color="orange" />
						<p>Facebook</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200 md:scale-75">
						<AiFillInstagram size={20} color="orange" />
						<p>instagram</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200 md:scale-75">
						<AiFillLinkedin size={20} color="orange" />
						<p>LinkedIn</p>
					</div>
				</div>
			</div>
			<div onClick={open} className="cursor-pointer md:hidden">
				<AiOutlineMenu size={20} />
			</div>
		</div>
	)
}
