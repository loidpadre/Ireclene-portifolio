export default function Contact() {
	return (
		<div className="full md:w-[50%] md:mx-auto">
			<h1 className="text-center text-orange-300 text-2xl my-10 font-semibold">
				Me contrate
			</h1>
			<form className="flex flex-col gap-5">
				<input
					className="p-2 rounded bg-zinc-800 focus:outline-none"
					type="text"
					placeholder="Digite o seu nome"
				/>
				<input
					className="p-2 rounded bg-zinc-800 focus:outline-none"
					type="email"
					placeholder="Digite o seu email"
				/>
				<textarea
					className="p-2 rounded resize-none bg-zinc-800 focus:outline-none"
					cols="30"
					rows="10"
				>
					Conteudo
				</textarea>
				<button className="bg-orange-400 hover:bg-orange-500 duration-200  py-1 rounded">
					Enviar
				</button>
			</form>
		</div>
	)
}
