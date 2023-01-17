import React, {useState} from "react";
import SelMot from "./SelMot/SelMot";
import MotData from "../../data/MotData"

const TripTab = () => {
    const [motComponents, setMotComponents] = useState([]);

    const handleAddComp = () => {
        setMotComponents((oldComp) => {
            return [...oldComp, <SelMot key={oldComp.length + 1} elNum={oldComp.length + 1} motList={MotData} setMotComp={setMotComponents}/>]
        })
    }

    return (
        <div>
            <form action="" method="" className="bg-success rounded-1 p-3">
                <h3 className="text-center">Crea Viaggio</h3>
                <div className="mb-3">
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input className="form-control" type="text" placeholder="Casa - Lavoro - Casa" required />
                    </div>
                    <div className="mb-3 border border-1 border-white rounded-2 p-2">
                        <div className="mb-3">
                            {motComponents}
                        </div>
                        <div className="text-center m-auto">
                            <button className="btn btn-warning" type="button" onClick={handleAddComp}>+</button>
                        </div>
                    </div>
                </div>
                <div className="text-center m-auto"><button className="btn btn-primary" type="submit">Aggiungi
                    Viaggio</button></div>
            </form>
        </div>
    );
}

export default TripTab;