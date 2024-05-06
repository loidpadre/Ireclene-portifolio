import { useState } from 'react'
import { article } from '../Data'
import ArticleComponent from '../components/ArticleComponent'
export default function Article() {
	const [articleInfo, setArticleInfo] = useState(article)
	return (
		<div className="mt-20  mx-auto">
			<h1 className="text-2xl text-orange-300 font-semibold text-center ">
				Artigos recentes
			</h1>
			{articleInfo.map((info) => (
				<ArticleComponent info={info} />
			))}
		</div>
	)
}
