import { Splide, SplideSlide } from '@splidejs/react-splide'
export default function Slide() {
	return (
		<Splide
			aria-labelledby="Minhas imagens favoritas"
			className="bg-cover bg-center rounded-xl flex md:h-[400px] "
		>
			<SplideSlide
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=640&h=360&q=80')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: '10px'
				}}
			>
				<div className="bg-black/50 p-10 md:h-full  text-center  font-semibold ">
					<h1 className="text-2xl md:mt-14">
						Escreve o seu trabalho academico comigo
					</h1>
					<button className="bg-orange-400 py-1 px-5 mt-2 rounded">
						Fale comigo
					</button>
				</div>
			</SplideSlide>
			<SplideSlide
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: '10px'
				}}
			>
				<div className="bg-black/50 p-10 md:h-full  text-center font-semibold ">
					<h1 className="text-2xl md:mt-14">
						Venha saber como Conseguir uma bolsa de estudo.
					</h1>
					<button className="bg-orange-400 py-1 px-5 mt-2 rounded">
						Fale comigo
					</button>
				</div>
			</SplideSlide>
			<SplideSlide
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: '10px'
				}}
			>
				<div className="bg-black/50 p-10 h-full text-center font-semibold ">
					<h1 className="text-2xl md:mt-14">
						Marque uma consultoria comigo.
					</h1>
					<button className="bg-orange-400 py-1 px-5 mt-2 rounded">
						Fale comigo
					</button>
				</div>
			</SplideSlide>
		</Splide>
	)
}
