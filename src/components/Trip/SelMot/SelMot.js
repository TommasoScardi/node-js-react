import React from "react";

const SelMot = ({ elNum, motList, setMotComp }) => {

    const handleDelete = () => {
        setMotComp((lstMotComp) => {
            lstMotComp.splice(lstMotComp.findIndex(val => val.key == elNum), 1);
            return [...lstMotComp];
        })
    }

    return (
        <div className="row row-cols-auto align-items-end">
            <div className="col-md-7 col-sm-12">
                <label className="form-label">Mezzo</label>
                <select className="form-select trip-mots" required>
                    <option value="" defaultChecked>Seleziona...</option>
                    {motList.map((mot) => (<option key={mot.id} value={mot.id}>{mot.name}</option>))}
                </select>
            </div>
            <div className="col-md-3 col-sm-6">
                <label className="form-label">KM</label>
                <input className="form-control trip-mots-km" type="number" min="1" required/>
            </div>
            <div className="col-md-2 col-sm-6 top-0">
                <button className="btn btn-danger" type="button" onClick={handleDelete}>X</button>
            </div>
        </div>
    );
}

export default SelMot;