import React, { Fragment, useEffect, useState } from 'react';

import ReactTable from 'react-table';
import Breadcrumb from '../../components/common/breadcrumb';
import '../../assets/customs/tables/table.css';

import api from '../../services/api';
import { Link } from 'react-router-dom';

const ListaPacientes = () => {

	const [loading, setLoading] = useState(true);
	const [lista, setLista] = useState([]);

	// escutando o loading
	useEffect(() => { }, [loading]);

	// execução no carregamento da página
	useEffect(() => { load() }, []);

	async function load() {
		setLoading(true);
		await api.get('/paciente').then(response => {
			let body = response.data;
			console.log(body.retorno);
			setLista(body.retorno);
		});
		setLoading(false);
	}

	const columns = [
		{ Header: 'Código', accessor: 'id_paciente', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
		{ Header: 'Nome', accessor: 'nome', Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> },
		{ Header: 'Idade', accessor: 'idade' }
	];

	return (
		<Fragment>
			<Breadcrumb title="Pacientes" />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<div className="card">
							<div className="card-header">
								<div className="row">
									<div className="col-sm-6">
										<h5>Lista de Pacientes</h5>
									</div>
									<div className="col-sm-6">
										<div className="pull-right right-header">
											<span>
												<Link className="btn btn-outline-primary" to="/pacientes/adicionar"> Novo Paciente </Link>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<ReactTable
										data={lista}
										columns={columns}
										className="-highlight"
										showPagination={false}
										noDataText=""
										loading={loading}
										loadingText="Carregando lista..."
										defaultSorted={[
											{
												id: 'nome',
												desc: false
											}
										]}
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

export default ListaPacientes;