import style from 'styles/pages/[proyectos]/proyectos.module.css';
import Head from 'heads/proyectos.head';
import { Section, Body, Content } from 'components/timoideas/Timoideas.components';
export default function Page() {
	return (
		<>
			<Head />
			<Body>
				<Section>
					<Content center>
						<div className={style.Container}>Proyectos</div>
					</Content>
				</Section>
			</Body>
		</>
	);
}
