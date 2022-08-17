import './BreadCrumb.scss';

export default function Breadcrumb(props: {
	categories: Array<string>;
	isComplete: boolean;
}) {
	const { categories, isComplete } = props;
	const categorySize = categories.length - 1;

	return (
		<div className='breadcrumb'>
			{isComplete ? (
				categories.map((category, index) => (
					<p className='breadcrumb__text' key={index}>
						{category}
						{categorySize !== index && <span>{'>'}</span>}
					</p>
				))
			) : (
				<p className='breadcrumb__text'>{categories[0]}</p>
			)}
		</div>
	);
}
