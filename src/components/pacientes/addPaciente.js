import React, { Fragment, useState } from 'react';
import Breadcrumb from "../common/breadcrumb";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AdicionarPaciente = () => {

  const [nascimento, setNascimento] = useState('');

  // const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  // const handleChangeStatus = ({ meta, file }, status) => { }

  const handleNascimento = (date) => {
    setNascimento(date);
  }

  return (
    <Fragment>
      <Breadcrumb title="Pacientes" parent="" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Novo Paciente</h5>
              </div>
              <div className="card-body add-post">
                <form className="row needs-validation" noValidate="">
                  <div className="col-sm-12 col-md-8 col-lg-8 col-lg-8">
                    <div className="form-group">
                      <label htmlFor="nome">Nome</label>
                      <input className="form-control" id="nome" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="data_nascimento">Nascimento</label>
                      <ReactDatePicker className="form-control digits"
                        dateFormat="dd/MM/yyyy" selected={nascimento} todayButton="Hoje" onChange={handleNascimento}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3 col-lg-3 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="sexo">Sexo</label>
                      <input className="form-control" id="sexo" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-5 col-lg-5">
                    <div className="form-group">
                      <label htmlFor="telefone1">Celular</label>
                      <input className="form-control" id="telefone1" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="telefone2">Telefone Fixo</label>
                      <input className="form-control" id="telefone2" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-lg-12">
                    <div className="form-group">
                      <label>Diagnóstico</label>
                      <textarea className="form-control" id="diagnostico" rows="8" />
                    </div>
                  </div>

                  <div className="col-sm-12 align-middle">
                    <h5>Endereço</h5> <br />
                  </div>

                  <div className="col-sm-12 col-md-3 col-lg-3 col-lg-3">
                    <div className="form-group">
                      <label htmlFor="cep">CEP</label>
                      <input className="form-control" id="cep" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-5 col-lg-5">
                    <div className="form-group">
                      <label htmlFor="cidade">Cidade</label>
                      <input className="form-control" id="cidade" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="estado">Estado</label>
                      <input className="form-control" id="estado" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-8 col-lg-8">
                    <div className="form-group">
                      <label htmlFor="rua">Rua</label>
                      <input className="form-control" id="rua" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="numero">Número</label>
                      <input className="form-control" id="numero" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="bairro">Bairro</label>
                      <input className="form-control" id="bairro" type="text" required="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="complemento">Complemento</label>
                      <input className="form-control" id="complemento" type="text" required="" />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="needs-validation txt-danger">Looks good!</div>
                    <br/>
                  </div>

                </form>
                <div className="btn-showcase">
                  <button className="btn btn-primary" type="reset">Salvar</button>
                  <input className="btn btn-light" type="reset" value="Cancelar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default AdicionarPaciente;