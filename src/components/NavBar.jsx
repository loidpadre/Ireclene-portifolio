import { useState } from 'react'
import { AiFillPhone, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
export default function NavBar() {
	const [openMenu, setOpenMenu] = useState(false)
	const open = () => {
		setOpenMenu(!openMenu)
	}
	return (
		<div className="w-full flex items-center justify-between p-5 bg-zinc-900 text-white">
			<div>
				<h1 className="text-orange-300 uppercase font-semibold ">
					Ireclene
				</h1>
			</div>

			<div
				className={`${
					openMenu ? 'block' : 'hidden'
				} absolute top-0 z-40 w-[50%] left-5 top-5  bg-zinc-800  py-10 px-5 rounded space-y-5`}
			>
				<div className="flex gap-2 items-center">
					<AiFillPhone size={20} color="orange" />
					<p>(+55) 8577653432</p>
				</div>
				<div className="flex gap-2 items-center">
					<AiOutlineMail size={20} color="orange" />
					<p>ireclene@gmail.com</p>
				</div>
			</div>
			<div onClick={open} className="cursor-pointer">
				<AiOutlineMenu size={20} />
			</div>
		</div>
	)
}
