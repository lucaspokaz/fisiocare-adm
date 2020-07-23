import React, { Fragment, useEffect, useState } from 'react';
import api from '../../services/api';
import ReactTable from 'react-table';
import Breadcrumb from '../common/breadcrumb';
import '../../assets/customs/tables/table.css';

const ListaColaboradores = () => {

	const [loading, setLoading] = useState(true);
	const [lista, setLista] = useState([]);

	// escutando o loading
	useEffect(() => { }, [loading]);

	// execução no carregamento da página
	useEffect(() => { load() }, []);

	async function load() {
		setLoading(true);
		await api.get('/colaborador').then(response => {
			let body = response.data;
			setLista(body.retorno);
		});
		setLoading(false);
	}

	const columns = [
		{
			Header: 'Código', accessor: 'id_colaborador',
			width: 100,
			Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
		},
		{
			Header: 'Nome', accessor: 'nome',
			minWidth: 300,
			Cell: row => row.value,
			className: 'text-left'
		},
		{
			Header: '',
			sortable: false,
			width: 160,

			Cell: row =>
				<div style={{ textAlign: "center", paddingRight: "10px" }}>
					<button className="btn btn-outline-primary btn-xs" href="javascript">
						<i className="fa fa-pencil"></i> Editar
					</button>
					<button className="btn btn-outline-danger btn-xs" href="javascript">
						<i className="fa fa-trash"></i> Excluir
					</button>
				</div>
		}
	];

	return (
		<Fragment>
			<Breadcrumb title="Colaboradores" />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<div className="card">
							<div className="card-header">
								<h5>Lista de Colaboradores</h5>
							</div>
							<div className="card-body">
								<div className="tableWrap">
									<ReactTable
										data={lista}
										columns={columns}
										className="-highlight"
										showPagination={false}
										noDataText=""
										loading={loading}
										loadingText="Carregando lista..."
										defaultSorted={[{ id: 'nome', desc: false }]}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment >
	);

}

export default ListaColaboradores;