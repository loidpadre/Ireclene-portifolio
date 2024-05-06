export default function ServiceComponent({ info }) {
	const { title, content } = info
	return (
		<div className="my-5 border-b-2 pb-5 border-gray-500 scale-90 hover:scale-100 cursor-pointer duration-200">
			<h1>{title}</h1>
			<p className="text-zinc-400">{content}</p>
            <button className="bg-orange-400 py-1 w-full mt-3 rounded hover:bg-orange-500 duration-200">Pedir serviço</button>
		</div>
	)
}
