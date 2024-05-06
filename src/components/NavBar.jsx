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
			className="w-full flex items-center justify-between p-5 bg-zinc-900 text-white"
		>
			<div>
				<h1 className="text-orange-300 uppercase font-semibold ">
					Ireclene
				</h1>
			</div>

			<div
				className={`${
					openMenu ? 'block' : 'hidden'
				} absolute top-0 z-40 w-[55%]  left-5 top-5  bg-zinc-800  py-10  rounded `}
			>
				<div className="flex gap-2 flex-col px-5">
					<div className="mt-2 flex gap-2 cursor-pointer hover:text-orange-400">
						<AiFillPhone size={20} color="orange" />
						<p>(+55) 8577653432</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200">
						<AiOutlineMail size={20} color="orange" />
						<p>ireclene@gmail.com</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200">
						<AiFillFacebook size={20} color="orange" />
						<p>Facebook</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200">
						<AiFillInstagram size={20} color="orange" />
						<p>instagram</p>
					</div>
					<div className="flex gap-2 cursor-pointer hover:text-orange-400 duration-200">
						<AiFillLinkedin size={20} color="orange" />
						<p>LinkedIn</p>
					</div>
				</div>
			</div>
			<div onClick={open} className="cursor-pointer">
				<AiOutlineMenu size={20} />
			</div>
		</div>
	)
}
