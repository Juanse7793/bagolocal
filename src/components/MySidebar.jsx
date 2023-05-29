import { Sidebar } from "primereact/sidebar";
import logo from "../assets/logo.png";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const MySidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar
        visible={true}
        modal={false}
        baseZIndex={1000000}
        showCloseIcon={false}
      >
        <img src={logo} alt="bago" width="100px" style={{ margin: "20px 0" }} />
        <br />
        <Button
          type="button"
          label="Home"
          icon="pi pi-home"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/")}
        />
        <br />
        <br />
        <Button
          type="button"
          label="Comercial"
          icon="pi pi-briefcase"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/table-data-one")}
        />
        <br />
        <br />
        <Button
          type="button"
          label="Compras"
          icon="pi pi-cart-plus"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/table-data-two")}
        />
        <br />
        <br />
        <Button
          type="button"
          label="Cuentas Clave"
          icon="pi pi-key"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/cuentas-clave")}
        />
        <br />
        <br />
        <Button
          type="button"
          label="Fichero"
          icon="pi pi-folder-open"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/cuentas-clave")}
        />{" "}
        <br />
        <br />
        <Button
          type="button"
          label="Formatos de Inversión"
          icon="pi pi-dollar"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/cuentas-clave")}
        />{" "}
        <br />
        <br />
        <Button
          type="button"
          label="Gerenciales KAM"
          icon="pi pi-key"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/cuentas-clave")}
        />{" "}
        <br />
        <br />
        <Button
          type="button"
          label="Gestión de Calidad"
          icon="pi pi-check-square"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/cuentas-clave")}
        />{" "}
        <br />
        <br />
        <Button
          type="button"
          label="Mantenimiento"
          icon="pi pi-truck"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/cuentas-clave")}
        />
        <br />
        <br />
        <Button
          type="button"
          label="Logout"
          icon="pi pi-sign-out"
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/")}
        />
      </Sidebar>
    </div>
  );
};
export default MySidebar;
