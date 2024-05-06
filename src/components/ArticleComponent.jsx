export default function ArticleComponent({ info }) {
	const { title, img } = info
	return (
		<div className="my-5 ">
			<div className="rounded bg-zinc-800 w-[300px] mx-auto">
				<img className="rounded" src={img} />
				<div className="p-10">
					<h1>{title}</h1>
					<div className="border-b pb-2 border-zinc-500">
						<button className="bg-orange-400 py-1 mt-5 px-5 rounded hover:bg-orange-500 font-semibold">
							Ler mais
						</button>
					</div>
					<p className="text-zinc-500 my-2 text-sm hover:text-zinc-400 cursor-pointer">
						Ver artigos nas minhas midias
					</p>
				</div>
			</div>
		</div>
	)
}
