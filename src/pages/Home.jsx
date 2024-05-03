import IMG from '../assets/banner.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaQuoteLeft } from 'react-icons/fa'
export default function Home() {
	return (
		<div className="text-white w-full p-10  ">
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
				<button className="bg-orange-400 py-2 px-5 rounded-2xl mt-5 hover:bg-orange-500 font-semibold flex items-center mx-auto">
					<AiOutlineArrowRight className="text-zinc-700 mr-2 " /> Ver
					Resumo
				</button>
			</div>

			<div className="relative -top-32">
				<h1 className="text-2xl font-semibold text-orange-300 my-2 text-center  border-l-2 border-r-2 border-orange-300 ">
					Sobre mim
				</h1>
				<h1 className="text-zinc-400 my-5">
					Mestre em governança e humanidades, apaixonado por explorar
					os complexos desafios sociais e políticos que moldam nosso
					mundo. Com uma sólida formação acadêmica e experiência
					prática, estou comprometido em promover mudanças
					significativas por meio da aplicação de princípios de
					governança, direitos humanos e sustentabilidade.
				</h1>
				<div className=" bg-zinc-800 rounded flex gap-3 items-center p-5 mt-5">
					<h1 className="text-orange-300 text-5xl  ">+7</h1>
					<span className="text-2xl">anos de experiencia</span>
				</div>
			</div>
			<div className="mt-10 relative -top-28">
				<div className="space-y-5">
					<FaQuoteLeft color="orange" size={30} />
					<h1 className="font-semibold">
						O que você planta você escolhe, mais o que colhes não,
						algo dica assim, para chamar atenção.
					</h1>
				</div>
				<div className="my-5 flex gap-2">
					<div className="w-20 h-20 rounded-[50%]">
						<img
							className="w-10 h-10 rounded-[50%] object-cover"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
					</div>
					<h1 className="text-zinc-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi, omnis.
					</h1>
				</div>
			</div>
			<div className="relative -top-10">
				<h1 className="text-2xl font-semibold text-orange-300 my-2 text-center  border-l-2 border-r-2 border-orange-300">
					Serviços
				</h1>
				<div className="my-5 border-b-2 pb-5 border-gray-500">
					<h1>Consultoria</h1>
					<p className="text-zinc-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Blanditiis quos quibusdam quas commodi aliquam nesciunt!
						recusandae. Ab sint aliquam excepturi atque officiis, ad
						nisi sed?
					</p>
				</div>
				<div className="my-5 border-b-2 pb-5 border-gray-500">
					<h1>Pesquisas e Dissertações</h1>
					<p className="text-zinc-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Blanditiis quos quibusdam quas commodi aliquam nesciunt!
						nisi sed?
					</p>
				</div>
				<div className="my-5 border-b-2 pb-5 border-gray-500">
					<h1>Estudos de Caso e Análises</h1>
					<p className="text-zinc-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Blanditiis quos quibusdam quas commodi aliquam nesciunt!
						Totam quo animi odio dolorum in distinctio dolore
						recusandae. Ab sint aliquam excepturi atque officiis, ad
						nisi sed?
					</p>
				</div>
				<div className="my-5 border-b-2 pb-5 border-gray-500">
					<h1>Orientação para bolsa de estudo</h1>
					<p className="text-zinc-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Blanditiis quos quibusdam quas commodi aliquam nesciunt!
						nisi sed?
					</p>
				</div>
			</div>
			<div
				className="bg-cover bg-center rounded-xl "
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
				}}
			>
				<div className="bg-black/50 p-10  text-center font-semibold ">
					<h1 className="text-2xl">
						Escreve o seu trabalho academico comigo
					</h1>
					<button className="bg-orange-400 py-1 px-5 mt-2 rounded">
						Fale comigo
					</button>
				</div>
			</div>
			<div className="mt-20">
				<h1 className="text-2xl ">Artigos recentes</h1>
				<div className="my-5">
					<div className="rounded bg-zinc-800 w">
						<img
							className="rounded"
							src="https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
						<div className="p-10">
							<h1>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quo, quaerat.
							</h1>
							<div className="border-b pb-2 border-zinc-500">
								<button className="bg-orange-400 py-1 mt-5 px-5 rounded hover:bg-orange-500 font-semibold">
									Ler mais
								</button>
							</div>
							<p className="text-zinc-500 my-2 text-sm hover:text-zinc-400 cursor-pointer">
								Ver artigos nas minhas mideas
							</p>
						</div>
					</div>
				</div>
				<div className="my-5">
					<div className="rounded bg-zinc-800 w">
						<img
							className="rounded"
							src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
						<div className="p-10">
							<h1>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quo, quaerat.
							</h1>
							<div className="border-b pb-2 border-zinc-500">
								<button className="bg-orange-400 py-1 mt-5 px-5 rounded hover:bg-orange-500 font-semibold">
									Ler mais
								</button>
							</div>
							<p className="text-zinc-500 my-2 text-sm hover:text-zinc-400 cursor-pointer">
								Ver artigos nas minhas mideas
							</p>
						</div>
					</div>
				</div>
				<div className="my-5">
					<div className="rounded bg-zinc-800 w">
						<img
							className="rounded"
							src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
						<div className="p-10">
							<h1>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quo, quaerat.
							</h1>
							<div className="border-b pb-2 border-zinc-500">
								<button className="bg-orange-400 py-1 mt-5 px-5 rounded hover:bg-orange-500 font-semibold">
									Ler mais
								</button>
							</div>
							<p className="text-zinc-500 my-2 text-sm hover:text-zinc-400 cursor-pointer">
								Ver artigos nas minhas mideas
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
