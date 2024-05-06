import { FaQuoteLeft } from 'react-icons/fa'
export default function Quote() {
	return (
		<div className="mt-10 relative -top-28 md:w-[50%] md:mx-auto">
			<div className="space-y-5">
				<FaQuoteLeft color="orange" size={30} />
				<h1 className="font-semibold">
					O que você planta você escolhe, mais o que colhes não, algo
					dica assim, para chamar atenção.
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
	)
}
