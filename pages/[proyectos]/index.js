import style from 'styles/pages/[proyectos]/proyectos.module.css';
import Head from 'heads/proyectos.head';
import { Section, Body, Content } from 'components/timoideas/Timoideas.components';
import { useRouter } from 'next/router';

export default function Page() {
	const router = useRouter();
	const { proyectos } = router.query;
	return (
		<>
			<Head />
			<Body>
				<Section>
					<Content center>
						<div className={style.Container}>
							<h1>Proyectos</h1>
							<h3>{proyectos}</h3>
						</div>
					</Content>
				</Section>
			</Body>
		</>
	);
}
