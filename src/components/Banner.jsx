import IMG from '../assets/banner.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function Banner() {
	return (
		<div>
			<div className="w-80 mx-auto">
				<img src={IMG} className="relative -top-40" alt="" srcset="" />
			</div>
			<div className="relative -top-48  bg-zinc-800 p-5 rounded text-center">
				<h1 className="text-2xl font-semibold">
					OLA, EU SOU{' '}
					<span className="text-orange-300">IRECLENE DOMINGOS</span>
				</h1>
				<p className="text-ml text-zinc-300">
					Pan - African University
				</p>
				<button className="bg-orange-400 py-2 px-5 duration-200 rounded-2xl mt-5 hover:bg-orange-500 font-semibold flex items-center mx-auto">
					<AiOutlineArrowRight className="text-zinc-700 mr-2 " /> Ver
					Resumo
				</button>
			</div>
		</div>
	)
}
