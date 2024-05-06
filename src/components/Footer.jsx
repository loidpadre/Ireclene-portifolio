import { FaArrowAltCircleUp } from 'react-icons/fa'
export default function () {
	return (
		<div className="w-full text-zinc-500 mt-10">
			<div className="flex justify-between items-center gap-5">
				<a href="#topo">
					<FaArrowAltCircleUp size={25} color="orange" />
				</a>
				<p className="text-sm">
					Todos os direitos reservados &copy; 2024 Scorpion Code.
				</p>
				<p className="text-sm">Create by Loid Padre/Scorpion</p>
			</div>
		</div>
	)
}
