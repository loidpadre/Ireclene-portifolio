import { useState } from 'react'
import { serviceInfo } from '../Data/'
import ServiceComponent from './ServiceComponent'
export default function Service() {
	const [service, setService] = useState(serviceInfo)
	return (
		<div className="relative -top-10">
			<h1 className="text-2xl font-semibold text-orange-300 my-2 text-center  border-l-2 border-r-2 border-orange-300">
				Serviços
			</h1>
			<div className="md:grid grid-cols-2 gap-36 md:mt-20">
				{service.map((info) => (
					<ServiceComponent info={info} />
				))}
			</div>
		</div>
	)
}
