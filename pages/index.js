import { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "../components/BasicTable";
import styles from "../styles/Home.module.css";
import { FormDialog } from "../components/Dialog";
import { Button } from "@mui/material";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [products, setProducts] = useState([]);
  const handleClose = () => {
    setOpen(false);
    getProducts();
  };
  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button
          variant="contained"
          color="success"
          onClick={handleOpen}
          sx={{ justifyContent: "flex-end", marginLeft: "auto" }}
        >
          Create Product
        </Button>

        <BasicTable products={products} />
        <FormDialog
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      </main>
    </div>
  );
}
